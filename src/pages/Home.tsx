import React, { FunctionComponent } from 'react';
import Container from '../components/atoms/Container';
import NoteForm from '../components/organisms/NoteForm';

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return <Container>
      <NoteForm/>
  </Container>;
};

export default Home;
