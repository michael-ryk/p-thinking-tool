import { useAppDispatch } from '../hooks';
import { clearSelectedItem } from '../store/knowledgeItemSlice';
import { openModal } from '../store/modalSlice';
import styled from 'styled-components';

const Controls = () => {
  const dispatch = useAppDispatch();

  return (
      <Wrapper>
        <h1>Controls - Search - Filter</h1>
        <button onClick={() => dispatch(clearSelectedItem())}>Clear Selected</button>
        <button onClick={() => dispatch(openModal())}>Add Note</button>
      </Wrapper>
    );
}

export default Controls;

const Wrapper = styled.section`
  border: 1px solid grey;
  margin: 0.25rem;
  height: 5rem;
`