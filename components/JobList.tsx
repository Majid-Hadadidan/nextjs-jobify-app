"use client";

import { getAllJobAction } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import JobCard from "./JobCard";

function JobList() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("jobStatus") || "all";
  const pageNumber = Number(searchParams.get("page")) || 1;

  const { data, isPending } = useQuery({
    queryKey: ["jobs", search ?? "",jobStatus, pageNumber],
    queryFn: () => getAllJobAction({ search, jobStatus, page: pageNumber }),
  });

  const jobs = data?.jobs || [];

  if (isPending) return <h2 className="text-xl">Please Wait...</h2>;

  if (jobs.length < 1) return <h2 className="text-xl">No Jobs Found</h2>;

  return (
    <>
      {/*button container  */}
      <div className="grid md:grid-cols-2  gap-8">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}
export default JobList;
