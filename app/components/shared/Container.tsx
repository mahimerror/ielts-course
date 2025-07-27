import React from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
  center?: boolean;
} & React.ComponentPropsWithoutRef<T>;

const Container = <T extends React.ElementType = "div">({
  as,
  children,
  className,
  fluid = false,
  center = false,
  ...rest
}: ContainerProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        fluid
          ? "w-full px-4"
          : "max-w-[1200px] mx-auto px-4 w-full",
        center && "flex justify-center",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Container;