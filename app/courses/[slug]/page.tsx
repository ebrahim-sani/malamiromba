import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug } from "@/lib/courses-data";
import CourseRegistrationPage from "@/components/course-reg-page";

interface PageProps {
   params: Promise<{ slug: string }>;
   searchParams: Promise<Record<string, string | string[]>>;
}

export async function generateMetadata({
   params,
}: PageProps): Promise<Metadata> {
   const { slug: rawSlug } = await params;
   const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;
   const course = getCourseBySlug(slug);

   if (!course) {
      return { title: "Course Not Found" };
   }

   return {
      title: `${course.title} – Course Registration`,
      description: course.description,
      openGraph: {
         title: `${course.title} – Course Registration`,
         description: course.description,
         images: [course.image],
      },
   };
}

export default async function CoursePage({ params }: PageProps) {
   const { slug: rawSlug } = await params;
   const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug;

   const course = getCourseBySlug(slug);
   if (!course) {
      notFound();
   }

   return <CourseRegistrationPage course={course} />;
}
