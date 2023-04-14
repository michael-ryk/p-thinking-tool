import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import KnowledgeItem from '../Components/KnowledgeItem/KnowledgeItem';
import Headings from '../Components/Headings';
import Controls from '../Components/Controls';

const MainBlock = () => {
  const demoKnowledgeItemsArray = useSelector((state: RootState) => state.knowledgeItem.knowledgeItems);

  return (
      <Wrapper>
        <Controls />
        <Headings />
        {demoKnowledgeItemsArray.map(item => <KnowledgeItem key={item.id} {...item}/>)}
      </Wrapper>
    );
}

export default MainBlock;

const Wrapper = styled.section`
  margin: 2% 10% ;
  border: 1px solid grey;
`