import { Skeleton } from "./ui/skeleton";

export default function SkeletonPersonality() {
  
    return Array.from({ length: 13 }).map((_,index) => (
        <div key={index} className="flex flex-col">
          <Skeleton className="h-[35px] w-full rounded-full border-b-2 mb-2" />
          <div className="border-b-2 mb-2"/>
        </div>
      ));
  };
