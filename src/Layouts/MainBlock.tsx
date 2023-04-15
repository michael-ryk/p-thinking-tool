import { useAppSelector } from '../hooks';
import styled from 'styled-components';
import KnowledgeItem from '../Components/KnowledgeItem/KnowledgeItem';
import Headings from '../Components/Headings';
import Controls from '../Components/Controls';
import GroupTagsArea from '../Components/KnowledgeItem/GroupTagsArea';

const MainBlock = () => {
  const demoKnowledgeItemsArray = useAppSelector((state) => state.knowledgeItem.knowledgeItems);
  const selectedItemId = useAppSelector((state) => state.knowledgeItem.selectedItemId);
  const selectedItemTagsArray = useAppSelector((state) => state.knowledgeItem.selectedItemTagArray);

  return (
      <Wrapper>
        <Controls />
        <Headings />
        {selectedItemId > 0 && selectedItemTagsArray.map((item, index) => <GroupTagsArea key={index} tag={item} />)}
        {selectedItemId === 0 && demoKnowledgeItemsArray.map(item => <KnowledgeItem key={item.id} {...item}/>)}
      </Wrapper>
    );
}

export default MainBlock;

const Wrapper = styled.section`
  margin: 2% 10% ;
  border: 1px solid grey;
`