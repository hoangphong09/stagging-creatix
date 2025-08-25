"use client";

import { JOBS } from "@/constants/job";
import { useParams, useRouter } from "next/navigation";

export default function JobDescriptionPage() {
  const { jobSlug } = useParams();
  const router = useRouter();
  const job = JOBS.find((j) => j.slug === jobSlug);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-xl">No job found.</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="max-w-[82rem] w-full mx-auto">
          <button
            className="flex items-center gap-2 text-[#6366F1] font-bold mb-8"
            onClick={() => router.push("/careers")}
          >
            <span className="text-xl">&#8592;</span>
            <p className="hover:underline">Back to Recruitment</p>
          </button>
          <h1 className="text-[42px] sm:text-[48px] font-bold text-creatix-gray-900 mb-6 leading-tight">
            {job.title}
          </h1>
          <div className="mb-8 space-y-1 text-lg">
            <div>Location: {job.location}</div>
            <div>Work type: {job.type}</div>
            <div>Working hours: {job.time}</div>
            <div>Benefits: {job.benefit}</div>
          </div>
          <SectionBlock title="Job Description" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title="Request" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul> 
          </SectionBlock>
          <SectionBlock title="Benefits" color="#8B5CF6">
            <ul className="list-disc pl-8 space-y-2 text-base">
              {job.benefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </SectionBlock>
          <SectionBlock title="How to apply" color="#8B5CF6">
            <div className="text-base space-y-2">
              <div>
                {job.apply[0]}
                <a
                  href={`mailto:${job.applyEmail}`}
                  className="text-[#6366F1] underline break-all"
                >
                  {job.applyEmail}
                </a>
              </div>
              <div>{job.apply[1]}</div>
            </div>
          </SectionBlock>
        </div>
      </main>
    </div>
  );
}

function SectionBlock({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <div
        className="text-xl font-bold mb-2 border-l-4 pl-3"
        style={{ borderColor: color }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
