import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import Todo from '../Todo/Todo';

/**
 * Make de todos list draggable
 * @param {array} todos
 * @param {Function} dispatch
 * @param {object} types
 * @return {JSX.Element} <DragAndDrop />
 */
function DragAndDrop({todos}) {
  return <DragAndDrop onDragEnd={(result) => console.log(result)}>
    <Droppable droppableId='tasks'>
      {(dropableProvided) =>
        todos.map((todo)=> <Todo todo={todo} key={todo.id}/>)}
    </Droppable>
  </DragAndDrop>;
}

export default DragAndDrop;
