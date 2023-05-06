import styled from 'styled-components';

interface PropsModel {
  onClick: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<PropsModel> = ({onClick, children}) => {
  return (
    <Wrapper>
      <button onClick={onClick}>{children}</button>
    </Wrapper>
  );
}

export default Button;

const Wrapper = styled.div`
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