import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  logTodo(todo);
});

function logTodo(todo: Todo) {
  const { id, title, completed } = todo;
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    is it finished? ${completed}
  `);
}
