import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
// import Footer from '../src/components/Footer';

import db from '../db.json';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  outline: 0;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: none;
  margin-top: 20px;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;

  transition-duration: background-color 0.5ms;

  &:hover{
    opacity: 0.9;
  }
  &:disabled{
    opacity: 0.5;
  }


`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>JavaScript Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log(name);
            }}
            >
              <Input placeholder="Diz ai seu nome" value={name} onChange={(event) => { setName(event.target.value); }} />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Jogue os quizes mais populares do dia!</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedromiiguel" />
    </QuizBackground>
  );
}
