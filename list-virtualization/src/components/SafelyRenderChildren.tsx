import { Children, PropsWithChildren } from "react";

export function SafelyRenderChildren({ children }: PropsWithChildren) {
  const count = Children.count(children);
  if (count > 500) {
    return <span>You're attempting to render too many children</span>;
  }

  return <>{children}</>;
}
