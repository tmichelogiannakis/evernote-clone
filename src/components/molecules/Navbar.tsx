import React, { FunctionComponent } from 'react';
import { Box, Flex } from 'rebass';
import Link from '../atoms/Link';

type NavBarProps = {};

const NavBar: FunctionComponent<NavBarProps> = () => {
  return (
    <Flex px={2} color="white" bg="blue.600" alignItems="center">
      <Link
        to="/"
        p={2}
        color="white"
        sx={{
          textDecoration: 'none'
        }}
      >
        Notebook
      </Link>
      <Box mx="auto" />
      <Link to="favorites" variant="nav">
        Favorites
      </Link>
    </Flex>
  );
};

export default NavBar;
