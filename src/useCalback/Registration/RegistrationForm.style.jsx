import styled from 'styled-components';

export const StyledRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  border-left: 0px;
  border-top: 0px;
  border-right: 0px;
  border-bottom: 1px solid #aaa;
`;

export const Submit = styled.button`
  border: 1px solid black;
  padding: 10px 15px;
  background-color: #fff;

  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
