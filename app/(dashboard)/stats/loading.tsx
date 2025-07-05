import { StatsLoadingCard } from "@/components/StatsCard";

function loading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsLoadingCard />;
      <StatsLoadingCard />;
      <StatsLoadingCard />;
    </div>
  );
}
export default loading;
