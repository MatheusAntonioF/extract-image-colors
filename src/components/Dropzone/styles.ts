import styled from 'styled-components';

export const Container = styled.div`
  height: 250px;
  width: 400px;
  background: #e6ccff;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  outline: 0;

  margin-bottom: 50px;

  cursor: pointer;
`;

export const InputFile = styled.input``;

export const ImgPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  width: calc(100% - 60px);
  height: calc(100% - 60px);

  border-radius: 10px;
  border: 1px dashed #8c1aff;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333;

  transition: 200ms ease-out;

  svg {
    color: #8c1aff;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
