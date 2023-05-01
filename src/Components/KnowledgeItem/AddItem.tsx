import { useAppDispatch } from '../../hooks';
import { closeModal } from '../../store/modalSlice';
import Modal from '../UI/Modal';

const AddItem = () => {

  const dispatch = useAppDispatch()

  return (
    <Modal>
      <h1>Add Item form</h1>
      <form>
        <label>Question: </label>
        <input type="text" id="question" name="question" />
        <label>Answer: </label>
        <input type="text" id="answer" name="answer" />
        <label>Tags:</label>
        <textarea id="msg" name="user_message"></textarea>
        <button>Submit</button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </form>
    </Modal>
  );
}

export default AddItem;
