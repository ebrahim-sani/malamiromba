import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API = "https://api.paypal.com";
const CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET!;

async function getAccessToken() {
   const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
   const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: "POST",
      headers: {
         Authorization: `Basic ${auth}`,
         "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
   });

   if (!response.ok) {
      throw new Error(`Failed to get PayPal access token: ${response.statusText}`);
   }

   const data = await response.json();
   return data.access_token;
}

// Create PayPal order
export async function POST(request: NextRequest) {
   try {
      const { amount, description } = await request.json();

      if (!amount || amount <= 0) {
         return NextResponse.json(
            { error: "Invalid amount" },
            { status: 400 }
         );
      }

      const accessToken = await getAccessToken();

      const orderData = {
         intent: "CAPTURE",
         purchase_units: [
            {
               amount: {
                  currency_code: "USD",
                  value: amount.toFixed(2),
               },
               description: description || "Donation to Malamiromba",
            },
         ],
         application_context: {
            brand_name: "Malamiromba",
            locale: "en-US",
            user_action: "PAY_NOW",
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/donate?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/donate?cancelled=true`,
         },
      };

      const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
         },
         body: JSON.stringify(orderData),
      });

      if (!response.ok) {
         const errorData = await response.json();
         return NextResponse.json(
            { error: errorData.message || "Failed to create PayPal order" },
            { status: response.status }
         );
      }

      const order = await response.json();
      return NextResponse.json({ orderId: order.id });
   } catch (error: any) {
      console.error("PayPal order creation error:", error);
      return NextResponse.json(
         { error: error.message || "Internal server error" },
         { status: 500 }
      );
   }
}

// Capture PayPal order (called after approval)
export async function PUT(request: NextRequest) {
   try {
      const { orderId } = await request.json();

      if (!orderId) {
         return NextResponse.json(
            { error: "Order ID is required" },
            { status: 400 }
         );
      }

      const accessToken = await getAccessToken();

      const response = await fetch(
         `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${accessToken}`,
            },
         }
      );

      if (!response.ok) {
         const errorData = await response.json();
         return NextResponse.json(
            { error: errorData.message || "Failed to capture order" },
            { status: response.status }
         );
      }

      const result = await response.json();
      return NextResponse.json(result);
   } catch (error: any) {
      console.error("PayPal capture error:", error);
      return NextResponse.json(
         { error: error.message || "Internal server error" },
         { status: 500 }
      );
   }
}
