import styled from 'styled-components';

const SingleTag: React.FC<{tag: string}> = ({tag}) => {
  return (
      <Wrapper>{tag}
      </Wrapper>
    );
}

export default SingleTag;

const Wrapper = styled.section`
  border: 1px solid grey;
  border-radius: var(--border-radius);
  padding: 0.2rem;
  margin: 0 0.1rem;
`