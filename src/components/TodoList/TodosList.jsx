import {useContext} from 'react';
import {TodoContext} from '../../services/TodoProvider';
import Todo from '../Todo/Todo';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

import StyledTodoList from './TodoList.styled';


/**
 * Cointais all todos
 * @return {JSX.Element} <TodoList todos={todos}>
 */
function TodoList() {
  const {filteredTodos, dispatch, types} = useContext(TodoContext);

  /**
   * handle the drop and drap event
   * @param {object} result
   * @return {void}
   */
  const handleDragAndDrop = (result) => {
    const {source, destination} = result;
    console.log(result);
    if (!destination) {
      console.log(result);
      dispatch({types: types.DELETE, payload: {id: source.index}});
    } else if (source.index === destination.index &&
      source.droppableId === destination.droppableId) {
    } else {
      dispatch({types: types.REORDER, payload:
        {sourceIndex: source.index, destinationIndex: destination.index},
      });
    }
  };

  return <StyledTodoList>
    <DragDropContext onDragEnd={(result) => handleDragAndDrop(result)}>
      <Droppable droppableId='todo-list'>
        {(provided) => (
          <ul className='todo-list'
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {
              filteredTodos.map((todo, index) =>
                (<Draggable
                  key={todo.id}
                  draggableId={todo.id.toString()}
                  index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}>
                      <Todo todo={todo}
                      />
                    </li>
                  )}
                </Draggable>))
            }
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  </StyledTodoList>;
}

export default TodoList;
