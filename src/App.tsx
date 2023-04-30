import { useAppSelector } from './hooks';
import MainBlock from './Layouts/MainBlock';
import AddItem from './Components/KnowledgeItem/AddItem';

const App = () => {

  const isModalShown = useAppSelector((state) => state.modal.isModalOpen)

  return (
    <>
      {isModalShown && <AddItem />}
      <MainBlock />
    </>
  );
}

export default App;
