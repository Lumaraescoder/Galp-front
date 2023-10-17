import styled, { keyframes } from 'styled-components';

interface IconButtonProps {
  onClick: () => void;
  selected: boolean;
}

interface IconTextProps {
  selected: boolean;
}
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Card = styled.div`
  margin: 0 auto;
  max-width: 500px;
  width: 90%;
  animation: ${fadeIn} 2s ease-in-out;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-top: 130px;

  @media (min-width: 768px) {
    max-width: 900px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #777;
  font-size: 16px;
  line-height: 1.5;
`;

export const Container = styled.div`
  height: 720px;
  /* background-color: #f5f5f5; */
`;

export const IconButton = styled.button<IconButtonProps>`
  border-radius: 20px;
  padding: 10px 15px;
  margin-right: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => (props.selected ? '#ea5b0b' : '#000000')};
`;
export const IconText = styled.span<IconTextProps>`
  margin-top: 5px;
  font-size: 14px;
  color: ${(props) => (props.selected ? '#ea5b0b' : '#000000')};
`;
export const ButtonGroupContainer = styled.div`
  padding: 20px;
  border-top: 2px solid #e1e1e1;
  border-bottom: 2px solid #e1e1e1;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;
