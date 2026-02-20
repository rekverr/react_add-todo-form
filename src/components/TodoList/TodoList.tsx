import { Todos } from '../../types/Todos';
import { Users } from '../../types/Users';
import { TodoInfo } from '../TodoInfo';

export const TodoList = ({
  todos,
  users,
}: {
  todos: Todos[];
  users: Users[];
}) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = users.find(item => item.id === todo.userId);

        if (!user) {
          return null;
        }

        return <TodoInfo key={todo.id} todo={{ ...todo, user }} />;
      })}
    </section>
  );
};
