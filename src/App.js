import {StrictMode} from 'react/cjs/react.production.min';
import TodoProvider from './services/TodoProvider';
import TodoList from './components/TodoList/TodosList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/**
 * Main component container
 * @return {JSX.Element} <App/>
 */
function App() {
  return (
    <main className="App">
      <StrictMode>
        <TodoProvider>
          <Header />
          <TodoList />
          <Footer />
        </TodoProvider>
      </StrictMode>
    </main>
  );
}

export default App;
