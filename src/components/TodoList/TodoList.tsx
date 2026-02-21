import { Todos } from '../../types/Todos';
import { Users } from '../../types/Users';
import { TodoInfo } from '../TodoInfo';

type TodoWithUser = Todos & {
  user: Users;
};

type TodoListProps = {
  todos: TodoWithUser[] | Todos[];
  users?: Users[];
};

export const TodoList = ({ todos, users }: TodoListProps) => {
  const normalizedTodos = todos.map(todo => {
    if ('user' in todo && todo.user) {
      return todo as TodoWithUser;
    }

    const user = (users || []).find(item => item.id === (todo as Todos).userId);

    if (!user) {
      return null;
    }

    return {
      ...(todo as Todos),
      user,
    } as TodoWithUser;
  });

  const renderTodoInfo = (todo: TodoWithUser | null) => {
    if (!todo) {
      return null;
    }

    return <TodoInfo key={todo.id} todo={todo} />;
  };

  return (
    <section className="TodoList">
      {normalizedTodos.map(renderTodoInfo)}
    </section>
  );
};
