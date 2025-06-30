import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCourseBySlug } from "@/lib/courses-data";
import CourseRegistrationPage from "@/components/course-reg-page";

interface CoursePageProps {
   params: {
      slug: string;
   };
}

export async function generateMetadata({
   params,
}: CoursePageProps): Promise<Metadata> {
   const course = getCourseBySlug(params.slug);

   if (!course) {
      return {
         title: "Course Not Found",
      };
   }

   return {
      title: `${course.title} - Course Registration`,
      description: course.description,
      openGraph: {
         title: `${course.title} - Course Registration`,
         description: course.description,
         images: [course.image],
      },
   };
}

export default function CoursePage({ params }: CoursePageProps) {
   const course = getCourseBySlug(params?.slug);

   if (!course) {
      notFound();
   }

   return <CourseRegistrationPage course={course} />;
}
