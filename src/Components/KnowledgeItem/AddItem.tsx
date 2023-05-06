import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { closeModal } from '../../store/modalSlice';
import Modal from '../UI/Modal';
import styled from 'styled-components';

const AddItem = () => {

  const dispatch = useAppDispatch()

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  return (
    <Modal>
      <WrapperForm>
        <h1>Add new item</h1>
        <div className="single-element">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="single-element">
          <label>Answer</label>
          <input type="text" id="answer" name="answer" />
        </div>
        <div className="single-element">
          <label>Tags</label>
          <input type="text" id="tags" name="answer" placeholder="...separate by comma"/>
        </div>
        <div className="single-element">
        </div>
        <div className="buttons-container">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => dispatch(closeModal())}>Cancel</button>
        </div>
      </WrapperForm>
    </Modal>
  );
}

export default AddItem;

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  width: 400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h1 {
    text-align: center;
    margin: 1.5rem 0;
    color: #555;
  }

  .single-element {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input {
    font-size: inherit;
    :hover {
      background-color: #eee;
    }
  }

  .buttons-container {
    padding: 0.5rem;
    margin: 1rem 0;
  }

  button {
    border: 1px solid #555;
    font-size: 1.6rem;
    color: #555;
    padding: .9rem;
    border-radius: 0.25rem;
    margin: 0 0.5rem;
    transition-duration: 0.2s;
    :hover {
      background-color: #ccc;
    }
    :active {
      background-color: #999;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
  }

  
`