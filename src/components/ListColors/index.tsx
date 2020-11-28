import React from 'react';

import { PaletteColors } from 'react-palette';

import { Container, ViewColor, Title, ColorPreview } from './styles';

interface IProps {
  colors: PaletteColors;
}

const ListColors: React.FC<IProps> = ({ colors }) => {
  console.log('\nColors -> ', colors);

  return (
    <Container>
      {colors &&
        Object.entries(colors).map(color => {
          const [title, colorHEX] = color;

          return (
            <ViewColor key={title}>
              <Title>{title}</Title>
              <Title>{colorHEX}</Title>
              <ColorPreview color={colorHEX} />
            </ViewColor>
          );
        })}
    </Container>
  );
};

export default ListColors;
