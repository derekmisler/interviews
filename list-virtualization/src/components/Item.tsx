import styled from "styled-components";

import { PropsWithChildren } from "react";

const Li = styled.li`
  height: var(--list-item-height);
  border-bottom: 1px solid var(--accent);
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export function Item({ children }: PropsWithChildren) {
  return (
    <Li>
      <code>{children}</code>
    </Li>
  );
}
