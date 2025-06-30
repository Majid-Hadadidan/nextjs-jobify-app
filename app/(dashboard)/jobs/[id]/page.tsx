import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  const queryClient = new QueryClient();

  const jobId = params?.id;

  if (!jobId) {
    throw new Error("Job ID not found in params");
  }

  await queryClient.prefetchQuery({
    queryKey: ["job", jobId],
    queryFn: () => getSingleJobAction(jobId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={jobId} />
    </HydrationBoundary>
  );
}