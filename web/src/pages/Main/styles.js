import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #28a745;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      flex: 1;
    }

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      display: flex;
      align-items: center;
      height: 38px;
      color: #fff;
      background-color: #3b9eff;
      padding: 0 16px;
      margin-right: 10px;
      border-radius: 4px;
    }
  }
`;

export const ViewButton = styled.button`
  margin-right: 9px;
  background: #2196f3;
  height: 38px;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  justify-content: flex-end;
  align-items: center;
`;

export const DelButton = styled.button`
  background: #f44336;
  height: 38px;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
`;
