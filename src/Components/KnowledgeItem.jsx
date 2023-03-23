import styled from 'styled-components';

function KnowledgeItem() {
  return (
      <Wrapper>
        <h1>Knowledge Item - Data</h1>
      </Wrapper>
    );
}

export default KnowledgeItem;

const Wrapper = styled.section`
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: var(--border-radius);
  margin: 0.25rem;
  padding: 0.1rem;
  justify: center;
  height: 3rem;
`