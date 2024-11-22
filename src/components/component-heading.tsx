import { cn } from "@/lib/utils";

export default function ComponentHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-lg sm:text-xl md:text-2xl font-bold italic text-center text-[#7F43DF] mb-4", className)}>
      {children}
    </h2>
  );
}
