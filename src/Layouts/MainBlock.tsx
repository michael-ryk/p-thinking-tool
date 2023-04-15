import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import KnowledgeItem from '../Components/KnowledgeItem/KnowledgeItem';
import Headings from '../Components/Headings';
import Controls from '../Components/Controls';
import GroupTagsArea from '../Components/KnowledgeItem/GroupTagsArea';

const MainBlock = () => {
  const demoKnowledgeItemsArray = useSelector((state: RootState) => state.knowledgeItem.knowledgeItems);
  const selectedItemId = useSelector((state: RootState) => state.knowledgeItem.selectedItemId);

  const dummyArray = ["some stuff", "another stuff"];

  return (
      <Wrapper>
        <Controls />
        <Headings />
        {selectedItemId > 0 && dummyArray.map((item, index) => <GroupTagsArea key={index} tag={item} />)}
        {selectedItemId === 0 && demoKnowledgeItemsArray.map(item => <KnowledgeItem key={item.id} {...item}/>)}
      </Wrapper>
    );
}

export default MainBlock;

const Wrapper = styled.section`
  margin: 2% 10% ;
  border: 1px solid grey;
`