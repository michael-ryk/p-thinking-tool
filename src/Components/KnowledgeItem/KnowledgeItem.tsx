import styled from 'styled-components';

import KnowledgeItemModel from '../../models/KnowledgeItemModel';

const KnowledgeItem: React.FC<KnowledgeItemModel> = ({subject, answer, tags, connections, date}) => {
  return (
      <Wrapper>
        <div className="item-container subject">{subject}</div>
        <div className="item-container answer">{answer}</div>
        <div className="item-container">{tags}</div>
        <div className="item-container">{connections}</div>
        <div className="item-container date">{date}</div>
      </Wrapper>
    );
}

export default KnowledgeItem;

const Wrapper = styled.section`
  border: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: var(--border-radius);
  margin: 0.25rem;
  padding: 0.1rem;
  justify: center;
  height: 3rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .item-container {
    border: 1px solid grey;
    border-radius: var(--border-radius);
    padding: 0.2rem
  }

  .subject {
    width: 600px;
  }

  .answer {
    width: 100px;
  }

  .date {
    
  }
`