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

    if (!destination) {
      return;
    }

    if (source.index === destination.index &&
      source.droppableId === destination.droppableId) {
      return;
    }

    dispatch({types: types.REORDER, payload:
      {sourceIndex: source.index, destinationIndex: destination.index},
    });
  };

  return <StyledTodoList>
    <DragDropContext onDragEnd={(result) => handleDragAndDrop(result)}>
      <Droppable droppableId='tasks'>
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}>
            {
              filteredTodos.map((todo, index) =>
                (<Draggable
                  key={todo.id}
                  draggableId={todo.content}
                  index={todo.id}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}>
                      <Todo todo={todo}
                      />
                    </li>
                  )}
                </Draggable>))
            }
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>;
  </StyledTodoList>;
}

export default TodoList;
