import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

// import Footer from '../src/components/Footer';
import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>JavaScript Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>JavaScript Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                placeholder="Diz ai seu nome"
                name="NomeDoUsuario"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
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
