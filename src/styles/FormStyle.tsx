import styled from "styled-components";

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    border: 2px solid var(--text-list);
    border-radius: 8px;
  }

  div input {
    background-color: transparent;
    padding: .5rem 1.5rem;
    width: 100%;
  }

  div select {
    background-color: transparent;
    border-left: 2px solid var(--text-list);
    padding: 0 .5rem;
  }
`