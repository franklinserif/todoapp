/* eslint-disable operator-linebreak */
import {useState, useEffect} from 'react';
import {options} from '../Helpers/Constants';

/**
 * filter an array of todos depending of a option params
 * @param {array} todosList
 * @param {string} option
 * @return {array} [filteredTodos, setAction]
 */
function useFilter(todosList, option) {
  const [filteredTodos, setFilteredTodos] = useState(todosList);
  const [action, setAction] = useState(option);

  /**
   * it would filter the todoList depening fo the action
   */
  useEffect(() => {
    const newFilteredTodos =
      action === options.ALL
        ? todosList
        : action === options.COMPLETED
        ? todosList.filter((todo) => todo.completed === true)
        : todosList.filter((todo) => todo.completed === false);
    setFilteredTodos(newFilteredTodos);
  }, [todosList, action]);

  return [filteredTodos, setAction];
}

export default useFilter;
