import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: blue;
`;

/**
 * React Component
 * @return {JSX.Element} <App><App/>
 */
function App() {
  return (
    <Wrapper className="App">
      <p>hello</p>
    </Wrapper>
  );
}

export default App;
