declare module '@paystack/inline-js' {
    export default class PaystackPop {
        newTransaction(options: {
            key: string | undefined;
            email: string;
            amount: number;
            currency?: string;
            onSuccess: (transaction: any) => void;
            onCancel: () => void;
            [key: string]: any;
        }): void;
    }
}
