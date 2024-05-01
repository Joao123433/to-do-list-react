import styled from "styled-components";

export const SectionStyle = styled.section`
  width: 100%;
  height: 42%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 12px;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-y: scroll;
  }

  li {
    background-color: var(--background-list);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 8px;
    color: var(--text-list);
  }

  .done {
    color: var(--text-list-done);
    text-decoration: line-through;
  }
`