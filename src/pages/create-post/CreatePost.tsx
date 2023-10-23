import { Box, Flex, Input, InputGroup, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomModal } from '../../components';
import { Editor } from '../../components/editor';

export const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const [cancelButtonModalIsOpen, setCancelButtonModalIsOpen] = useState<boolean>(false);
  const [confirmPublishModalIsOpen, setConfirmPublishModalIsOpen] = useState<boolean>(false);

  const redirectUserToHome: any = () => {
    return navigate('/');
  };

  const publishPost: any = () => {
    console.log('Published');
  };

  return (
    <>
      <Box>
        <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
          Create a new post
        </Text>
        <InputGroup mb={4}>
          <Input placeholder="Title" />
        </InputGroup>
        <Box data-color-mode="light" mb={4}>
          <Editor />
        </Box>
        <Flex justifyContent="flex-end" alignItems="center">
          <button
            className="text-gray-600 px-4 py-1 mr-2 hover:bg-gray-200 rounded"
            onClick={() => setCancelButtonModalIsOpen(true)}
          >
            Cancel
          </button>
          <button
            className="bg-charcoal text-white px-4 py-1 rounded font-bold"
            onClick={() => setConfirmPublishModalIsOpen(true)}
          >
            Publish
          </button>
        </Flex>
      </Box>
      {/* Confirm cancel modal */}
      <CustomModal
        isOpen={cancelButtonModalIsOpen}
        onClose={() => setCancelButtonModalIsOpen(false)}
        onConfirm={() => redirectUserToHome()}
        title="Confirm close"
        description="Are you sure you want to close the editor? All changes will be lost."
      />

      {/* Publish confirm modal */}
      <CustomModal
        isOpen={confirmPublishModalIsOpen}
        onClose={() => setConfirmPublishModalIsOpen(false)}
        onConfirm={() => publishPost()}
        title="Confirm Publish"
        description="Are you sure you want to publish your changes? Once published, the changes will be visible to others."
      />
    </>
  );
};
