import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import KnowledgeItem from './KnowledgeItem';
import styled from 'styled-components';

type Props = {
  key: number;
  tag: string;
}

const GroupTagsArea: React.FC<Props> = ({ tag }) => {
  const demoKnowledgeItemsArray = useSelector((state: RootState) => state.knowledgeItem.knowledgeItems);

  return (
    <Wrapper>
      <h1>{tag}</h1>
      {demoKnowledgeItemsArray.filter(item => item.tags.find(tagToFind => tagToFind === tag)).map(item => <KnowledgeItem key={item.id} {...item}/>)}
    </Wrapper>
  );
}

export default GroupTagsArea;

const Wrapper = styled.section`
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: var(--border-radius);
  margin: 0.5rem 0.25rem;
  padding: 0.1rem;

  h1 {
    font-size: 1.5rem;
  }
`