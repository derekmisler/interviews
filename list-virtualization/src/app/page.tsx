"use client";

import { List } from "../components/List";
import { useDictionary } from "../hooks/useDictionary";
import { GlobalStyles } from "../components/GlobalStyles";
import styled from "styled-components";

const Main = styled.main`
  background: var(--less-dark);
  min-height: 100vh;
`;
const Header = styled.header`
  background: var(--dark);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  font-size: 10vw;
  margin: 0;
  color: var(--accent);
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
  flex-grow: 1;
  padding: 2rem;
`;

export default function Home() {
  const dictionary = useDictionary();
  return (
    <>
      <GlobalStyles />
      <Main>
        <Header>
          <H1>So many words!</H1>
        </Header>
        <Section>
          <List items={dictionary} />
        </Section>
      </Main>
    </>
  );
}
