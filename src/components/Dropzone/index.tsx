import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Container, InputFile, ImgPreview, Title } from './styles';

import { FiUpload } from 'react-icons/fi';

interface Props {
  onFileUploaded: (fileUrl: string) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);
      onFileUploaded(fileUrl);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <InputFile {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <ImgPreview src={selectedFileUrl} alt="Thumbnail" />
      ) : (
        <Title>
          <FiUpload />
          Selecione uma imagem
        </Title>
      )}
    </Container>
  );
};

export default Dropzone;
