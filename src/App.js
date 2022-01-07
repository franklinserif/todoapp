import {StrictMode} from 'react/cjs/react.production.min';
import TodoProvider from './services/TodoProvider';
import TodoList from './components/TodoList/TodosList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import styled from 'styled-components';

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
`;

/**
 * Main component container
 * @return {JSX.Element} <App/>
 */
function App() {
  return (
    <StyledApp>
      <StrictMode>
        <TodoProvider>
          <Header />
          <TodoList />
          <Footer />
        </TodoProvider>
      </StrictMode>
    </StyledApp>
  );
}

export default App;
