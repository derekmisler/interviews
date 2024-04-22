import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";

export interface ListProps {
  items: string[];
}

export function List({ items }: ListProps) {
  return (
    <div className="list-wrapper">
      <ul>
        {/**
         * Note: `SafelyRenderChildren` should NOT be removed while solving
         * this interview. This prevents rendering too many list items and
         * potentially crashing the web page. This also enforces an artificial
         * limit to the amount of children that can be rendered at one
         * time during virtualization.
         */}
        <SafelyRenderChildren>
          {items.slice(0, 500).map((word) => (
            <Item key={word}>{word}</Item>
          ))}
        </SafelyRenderChildren>
      </ul>
    </div>
  );
}
