import styled from "styled-components";
import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";

const ListWrapper = styled.div``;

const Ul = styled.ul`
  border: 1px solid var(--accent);
  width: 100%;
  padding: 0;
  margin: 0;
  height: calc(var(--list-item-height) * 25);
  overflow: auto;
`;

export function List({ items }: { items: string[] }) {
  return (
    <ListWrapper>
      <Ul>
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
      </Ul>
    </ListWrapper>
  );
}
