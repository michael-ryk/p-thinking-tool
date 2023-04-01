import styled from 'styled-components';

import KnowledgeItem from '../Components/KnowledgeItem/KnowledgeItem';
import Headings from '../Components/Headings';
import Controls from '../Components/Controls';

import demoKnowledgeItems from '../Assets/DemoItemsList';

const MainBlock = () => {
  return (
      <Wrapper>
        <Controls />
        <Headings />
        {demoKnowledgeItems.map(item => <KnowledgeItem key={item.id} {...item}/>)}
      </Wrapper>
    );
}

export default MainBlock;

const Wrapper = styled.section`
  margin: 2% 10% ;
  border: 1px solid grey;
`