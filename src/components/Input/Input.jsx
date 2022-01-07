import {useState, useRef, useEffect} from 'react';

import StyledInput from './Input.styled';


/**
 * Input component
 * @return {JSX.Element}
 */
function Input({inputValue, hanldeInputChange}) {
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);

  /**
   * active focus on input
  * @return {void}
  */
  const inputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputFocus();
  }, [inputRef]);

  return <StyledInput>
    <span className='input-circle'></span>
    <label htmlFor="todo-text"
      className={typing? 'typing-label typing-color' : 'typing-label'}
      onClick={() => inputFocus()}
    >
      {typing? 'Currently Typing' : 'Create a new Todo'}
    </label>
    <input
      className='input'
      type="text"
      ref={inputRef}
      onChange={(e) => hanldeInputChange(e)}
      onFocus={() => setTyping(true)}
      onBlur={()=> setTyping(false)}
      value={inputValue}
      name='todo-text'
    />
  </StyledInput>;
}

export default Input;
