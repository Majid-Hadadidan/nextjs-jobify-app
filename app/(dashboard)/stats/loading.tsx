import { StatsLoadingCard } from "@/components/StatsCard";

function loading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatsLoadingCard />;
      <StatsLoadingCard />;
      <StatsLoadingCard />;
    </div>
  );
}
export default loading;
