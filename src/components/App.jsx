import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList, FriendListItem } from './FriendList/FriendList';

import data from './Statistics/data';
import user from './Profile/user';
import friends from './FriendList/friends';
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

      <Statistics title={data.title} stats={data.stats} />

      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
    </div>
  );
};

// const friends = [
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/1998/1998592.png',
//     name: 'Mango',
//     isOnline: true,
//     id: 1812,
//   },
//   {
//     avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
//     name: 'Kiwi',
//     isOnline: false,
//     id: 1137,
//   },
// ];

// const App = () => {
//   return (
//       <FriendList friends={friends}>
//         <FriendListItem friends={friends} />
//       </FriendList>
//   );
// };

// const FriendList = (friends, children) => {
//   return <ul class="friend-list">{children}</ul>;
// };

// const FriendListItem = friends => {
//   return
//   {
//     friends.map(friend => (
//       <li class="item">
//         (<span class="status"></span>
//         <img class="avatar" src="" alt="User avatar" width="48" />
//         <p class="name">friend.name</p>)
//       </li>
//     ));
//   }
// };
