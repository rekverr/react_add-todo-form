import { Todos } from '../../types/Todos';
import { Users } from '../../types/Users';

type TodoWithUser = Todos & {
  user: Users;
};

export const TodoInfo = ({ todo }: { todo: TodoWithUser }) => (
  <article
    data-id={todo.id}
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <a className="UserInfo" href={`mailto:${todo.user.email}`}>
      {todo.user.name}
    </a>
  </article>
);
