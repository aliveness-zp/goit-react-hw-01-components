import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList, FriendListItem } from './FriendList/FriendList';
import {
  TransactionHistory,
  TrnsactionItem,
} from './TransactionHistory/TransactionHistory';

import data from './Statistics/data';
import user from './Profile/user';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
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
        backgroundColor: '#E9EBF3',
        padding: '50px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'Upload stats'} data={data} />

      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>

      <TransactionHistory>
        <TrnsactionItem transactions={transactions} />
      </TransactionHistory>
    </div>
  );
};
