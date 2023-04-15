import { useDispatch } from 'react-redux';
import { clearSelectedItem } from '../store/knowledgeItemSlice';
import styled from 'styled-components';

const Controls = () => {
  const dispatch = useDispatch();

  return (
      <Wrapper>
        <h1>Controls - Search - Filter</h1>
        <button onClick={() => dispatch(clearSelectedItem())}>Clear Selected</button>
      </Wrapper>
    );
}

export default Controls;

const Wrapper = styled.section`
  border: 1px solid grey;
  margin: 0.25rem;
  height: 5rem;
`