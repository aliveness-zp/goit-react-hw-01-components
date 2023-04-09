import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import data from './Statistics/data';
import user from './Profile/user';
console.log(user);

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={data.title} stats={data.stts} />
    </div>
  );
};
