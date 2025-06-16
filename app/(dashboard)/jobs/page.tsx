import JobList from "@/components/JobList";
import SearchForm from "@/components/SearchForm";
import { getAllJobAction } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function JobPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["jobs", "", "all", 1],
    queryFn: () => getAllJobAction({}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchForm />
      <JobList />
    </HydrationBoundary>
  );
}
export default JobPage;
