import styled from 'styled-components';

const Headings = () => {
  return (
      <Wrapper>
        <h1 className='subject'>Subject</h1>
        <h1 className='answer'>Answer</h1>
        <h1 className='tags'>Tags</h1>
        <h1>Connections</h1>
        <h1 className='date'>Date</h1>
      </Wrapper>
    );
}

export default Headings;

const Wrapper = styled.section`
  border: 1px solid grey;
  margin: 0.25rem;
  display: flex;
  justify-content: space-between;
  
  .subject {
    width: var(--subject-width);
  }

  .answer {
    margin-right: auto;
  }

  .tags {
    margin-right: auto;
  }
  
  .date {
    width: 90px;
    margin-left: 0.5rem;
  }
`