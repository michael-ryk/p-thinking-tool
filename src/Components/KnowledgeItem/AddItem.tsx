import { useAppDispatch } from '../../hooks';
import { closeModal } from '../../store/modalSlice';
import Modal from '../UI/Modal';

const AddItem = () => {

  const dispatch = useAppDispatch()

  return (
    <Modal>
      <h1>Add Item form</h1>
      <button>Submit</button>
      <button onClick={() => dispatch(closeModal())}>Cancel</button>
    </Modal>
  );
}

export default AddItem;
