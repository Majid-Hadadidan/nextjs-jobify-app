import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type StatsCardProps = {
  title: string;
  value: number;
};
function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription className="font-extrabold text-4xl text-primary">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
export default StatsCard;

export function StatsLoadingCard() {
  return (
    <Card className="w-[330px] h-[88px]">
      <CardHeader className="flex flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
