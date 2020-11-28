import React, { useState } from 'react';

import { usePalette } from 'react-palette';

import { Container, Wrapper } from './styles';

import Dropzone from '../../components/Dropzone';
import ListColors from '../../components/ListColors';

const Dashboard: React.FC = () => {
  const [fileUrl, setFileUrl] = useState('');

  const { data } = usePalette(fileUrl);

  const handle = (url: string) => setFileUrl(url);

  return (
    <Container>
      <Wrapper>
        <h1>Extrair cores da imagem</h1>
        <Dropzone onFileUploaded={handle} />
        {!!fileUrl && <ListColors colors={data} />}
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
