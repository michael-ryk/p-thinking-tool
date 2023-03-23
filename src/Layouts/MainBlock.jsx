import styled from 'styled-components';

import KnowledgeItem from '../Components/KnowledgeItem';
import Headings from '../Components/Headings';
import Controls from '../Components/Controls';

function MainBlock() {
  return (
      <Wrapper>
        <Controls />
        <Headings />
        <KnowledgeItem />
        <KnowledgeItem />
        <KnowledgeItem />
      </Wrapper>
    );
}

export default MainBlock;

const Wrapper = styled.section`
  margin: 2% 10% ;
  border: 1px solid grey;
`