import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <Card className="max-w-sm">
                <CardHeader className="flex items-center">
            <Skeleton className="h-[30px] w-[200px] rounded-xl" />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
            <Skeleton className="h-[30px] w-[80px] rounded-xl" />
            <div className="flex gap-6">
            <Skeleton className="h-[40px] w-[110px] rounded-xl" />
            <Skeleton className="h-[40px] w-[110px] rounded-xl" />
            </div>
            <Skeleton className="h-[30px] w-[100px] rounded-xl" />
            <Skeleton className="h-[40px] w-full rounded-xl" />
            <Skeleton className="h-[30px] w-[120px] rounded-xl" />
            <Skeleton className="h-[40px] w-full rounded-xl" />
            <Skeleton className="h-[40px] w-full rounded-full mt-3" />
            </CardContent>
            </Card>
        </div>
    );
}