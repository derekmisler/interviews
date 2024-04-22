import { Children, ReactNode } from "react";

interface SafelyRenderChildrenProps {
  children: ReactNode;
}

export function SafelyRenderChildren({ children }: SafelyRenderChildrenProps) {
  const count = Children.count(children);
  if (count > 500) {
    return <span>You're attempting to render too many children</span>;
  }

  return <>{children}</>;
}
