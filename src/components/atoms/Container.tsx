import React, { FunctionComponent } from 'react';
import { Box, BoxProps } from 'rebass';

type ContainerProps = BoxProps & {};

const Container: FunctionComponent<ContainerProps> = (props) => (
  <Box
    {...props}
    sx={{
      maxWidth: '1280px',
      mx: 'auto',
      px: 4
    }}
  />
);

export default Container;
