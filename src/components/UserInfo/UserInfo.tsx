import { Users } from '../../types/Users';

export const UserInfo = ({ user }: { user: Users }) => (
  <option key={user.id} value={user.id}>
    {user.name}
  </option>
);
