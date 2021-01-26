import styled from 'styled-components';
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import GitHubCorner from '../src/components/GitHubCorner'
import Footer from '../src/components/Footer'
import Image from 'next/image'
import Head from 'next/head'





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



export default function Home() {
  return (
    
    <QuizBackground backgroundImage={db.bg} >
      <Head>
        <title>Quiz React</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"/>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>JavaScript Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Desafie seus amigos e descubra quem domina a linguagem Javascript.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>Jogue os quizes mais populares do dia!</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/pedromiiguel"/>
    </QuizBackground>
  );
}
