import React, { FunctionComponent } from 'react';
import { Box, Flex } from 'rebass';
import Container from '../components/atoms/Container';
import NoteForm from '../components/organisms/NoteForm';

type HomeProps = {};

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <Container>
      <Flex>
        <Box p={3} width={1 / 2}>
          <NoteForm />
        </Box>
        <Box p={3} width={1 / 2}></Box>
      </Flex>
    </Container>
  );
};

export default Home;
