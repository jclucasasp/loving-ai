import { Skeleton } from "./ui/skeleton";

export default function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[100px] w-full rounded-xl" />
        </div>
    );
}