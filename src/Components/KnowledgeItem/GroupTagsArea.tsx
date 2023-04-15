import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

type Props = {
  key: number;
  tag: string;
}

const GroupTagsArea: React.FC<Props> = ({ tag }) => {
  return (
    <Wrapper>
      <h1>{tag}</h1>
    </Wrapper>
  );
}

export default GroupTagsArea;

const Wrapper = styled.section`
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: var(--border-radius);
  margin: 0.25rem;
  padding: 0.1rem;
`