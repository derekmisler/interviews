import { ReactNode } from "react";

export interface ItemProps {
  children: ReactNode;
}

export function Item({ children }: ItemProps) {
  return <li>{children}</li>;
}
