import TodoProvider from './services/TodoProvider';
import Todo from './components/Todo/Todo';
import Header from './components/Header/Header';

/**
 * Main component container
 * @return {JSX.Element} <App><App/>
 */
function App() {
  return (
    <main className="App">
      <TodoProvider>
        <Todo />
        <Header />
      </TodoProvider>
    </main>
  );
}

export default App;
