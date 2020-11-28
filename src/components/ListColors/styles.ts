import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 320px;

  background: #2c313a;

  padding: 20px;

  border-radius: 20px;

  & > div + div {
    margin-top: 20px;
  }
`;

export const ViewColor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Title = styled.span`
  font-size: 24px;

  width: 140px;
`;

export const ColorPreview = styled.div<{ color: string | undefined }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;

  background: ${({ color }) => color};
`;
