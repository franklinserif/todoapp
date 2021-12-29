export const KEY_ENTER = 'Enter';

export const types = {
  DELETE: 'TODO - DELETE',
  COMPLETE: 'TODO - COMPLETE',
  CREATE: 'TODO - CREATE',
};

export const options = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  ACTIVE: 'ACTIVE',
};

// Inital State for todo useReducer
export const initalTodoState = [
  {id: 1, content: 'make the lunch', completed: false},
  {id: 2, content: 'Practice Math', completed: false},
  {id: 3, content: 'Go to the gym', completed: false},
  {id: 4, content: 'Visit a friend', completed: false},
];
