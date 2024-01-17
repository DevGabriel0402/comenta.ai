import styled, {
  keyframes,
} from "styled-components";

const toBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Container = styled.div`
  background-color: #3936c0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  gap: 24px;
  padding-top: 75px;
  img {
    width: 328.92px;
    height: 176.26px;
  }

  @media (max-width: 375px) {
    img {
      width: 300px;
    }
  }
`;

export const TextArea = styled.textarea`
  width: 342px;
  height: 138px;
  border-radius: 10px;
  background: #fff;
  padding: 16px;
  &:focus {
    outline: none;
    border: 2px double #f5802f;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

export const Button = styled.button`
  background: ${(props) =>
    props.isOn ? "#f5802f" : "gray"};
  color: #ffffff;
  border-radius: 10px;
  border: none;
  cursor: ${(props) =>
    props.isOn ? "pointer" : "not-allowed"};
  width: 342px;
  height: 64px;
  padding: 22px 113px;
  font-size: 17px;

  @media (max-width: 375px) {
    width: 300px;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: top;
  width: 342px;
  margin-bottom: 9px;
  min-height: 68px;
  padding: 8px 12px 9px 10px;
  border-radius: 5px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 17px;

  animation: ${toBottom} 0.3s linear;

  @media (max-width: 375px) {
    width: 300px;
  }
`;
