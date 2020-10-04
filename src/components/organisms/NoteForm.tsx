import React, { FunctionComponent } from 'react';
import { Box, Text, Button } from 'rebass';
import { Label, Input, Textarea } from '@rebass/forms';
import useInput from '../../hooks/useInput';

type NoteFormProps = {};

const NoteForm: FunctionComponent<NoteFormProps> = (props) => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ event });
    console.log({ title, content });
  };
  return (
    <Box backgroundColor="white" p={2}>
      <form onSubmit={handleSubmit}>
        <Text as="h5" color="gray.500">
          New Note
        </Text>
        <Box mb={2}>
          <Label mb={1} htmlFor="title">
            Title
          </Label>
          <Input id="title" name="title" type="title" {...bindTitle} />
        </Box>
        <Box mb={2}>
          <Label mb={1} htmlFor="content">
            Content
          </Label>
          <Textarea id="content" name="content" {...bindContent} />
        </Box>
        <Box pt={2}>
          <Button variant="primary">Add</Button>
        </Box>
      </form>
    </Box>
  );
};

export default NoteForm;
