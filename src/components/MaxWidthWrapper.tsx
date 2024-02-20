import { cn } from "@/lib/utils";
type MaxWithWrapperPropsType = {
  className?: string;
  children: React.ReactNode;
};

export const MaxWidthWrapper: React.FC<MaxWithWrapperPropsType> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};
