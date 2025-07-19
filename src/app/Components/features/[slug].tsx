"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

const features = [
  {
    title: "Admission Procedure",
    slug: "admission-procedure",
    shortDesc: "Learn about our simple and transparent admission process.",
    fullDesc: "Our admission procedure is designed to be straightforward and student-friendly. Parents can visit the school office, fill out the admission form, and submit the required documents. After a brief interview and assessment, successful candidates are notified for enrollment.",
  },
  {
    title: "Fees Schedule",
    slug: "fees-schedule",
    shortDesc: "View our affordable and flexible fee structure.",
    fullDesc: "Our fee schedule is structured to be affordable for all families. Fees can be paid monthly, quarterly, or annually. Special discounts are available for siblings and outstanding students. For the latest fee details, please contact the school office.",
  },
  {
    title: "Examination Details",
    slug: "examination-details",
    shortDesc: "Understand our examination and assessment system.",
    fullDesc: "We conduct regular assessments and examinations to monitor student progress. The academic year includes two main exams and periodic class tests. Results are shared with parents, and feedback is provided to help students improve.",
  },
  {
    title: "Faculty",
    slug: "faculty",
    shortDesc: "Meet our experienced and dedicated teaching staff.",
    fullDesc: "Our faculty consists of highly qualified and passionate educators who are committed to nurturing every child's potential. Regular training and workshops ensure our teachers stay updated with the latest teaching methodologies.",
  },
  {
    title: "Facilities",
    slug: "facilities",
    shortDesc: "Explore our modern and student-friendly facilities.",
    fullDesc: "Our school offers well-equipped classrooms, science and computer labs, a library, sports grounds, and a safe, clean environment. We believe in providing the best infrastructure for holistic development.",
  },
];

const FeatureDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Feature Not Found</h2>
        <button onClick={() => router.back()} className="px-4 py-2 bg-green-900 text-white rounded-full">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6 text-center">{feature.title}</h2>
        <div className="text-lg text-green-900 mb-8 text-left w-full" dangerouslySetInnerHTML={{ __html: feature.fullDesc }} />
        <button onClick={() => router.back()} className="px-6 py-2 bg-green-900 text-white rounded-full hover:bg-green-800 transition">Back</button>
      </div>
    </div>
  );
};

export default FeatureDetail; 