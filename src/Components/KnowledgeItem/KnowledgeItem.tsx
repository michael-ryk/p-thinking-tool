import { useAppDispatch } from '../../hooks';
import { selectItem } from '../../store/knowledgeItemSlice';
import styled from 'styled-components';
import SingleTag from './SingleTag';
import KnowledgeItemModel from '../../models/KnowledgeItemModel';

const KnowledgeItem: React.FC<KnowledgeItemModel> = ({id, subject, answer, tags, connections, date}) => {
  const dispatch = useAppDispatch();

  return (
      <Wrapper>
        <button className="btn" onClick={() => dispatch(selectItem({id, subject, answer, tags, connections, date}))}>o</button>
        <div className="item-container subject">{subject}</div>
        <div className="item-container answer">{answer}</div>
        <div className="tags">
          {tags.map(singleTag => <SingleTag key={singleTag} tag={singleTag}/>)}
        </div>
        <div className="connection">{connections}</div>
        <div className="item-container date">{date}</div>
        <div>Delete</div>
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
  height: 3rem;

  display: flex;
  justify-content: space-between;             /*to ensure aligment of some children left and some right*/
  align-items: center;

  .item-container {
    border: 1px solid grey;
    border-radius: var(--border-radius);
    padding: 0.2rem;
    margin: 0 0.1rem;
  }

  .btn {
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    margin: 0 0.5rem;
  }

  .subject {
    width: var(--subject-width);
  }

  .answer {
    width: var(--answer-width);
  }

  .tags {
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin-right: auto;
    margin-left: 1rem;
  }

  .connection {
    width: 30px;
    border: 2px solid grey;
    border-radius: 50%;
    text-align: center;
    margin: 0 0.5rem;
  }

  .date {
    
  }
`