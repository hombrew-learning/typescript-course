import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from 'src/store/todos';
import { StoreState } from 'src/store/reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    if (!this.props.todos.length) {
      this.setState(() => ({ fetching: true }));
    }
    this.props.fetchTodos();
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState(() => ({ fetching: false }));
    }
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {this.state.fetching && 'Loading...'}
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
