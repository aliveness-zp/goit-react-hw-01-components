import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export const FriendList = ({ children }) => {
  return <ul className={css['friend-list']}>{children}</ul>;
};

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span className={friend.isOnline ? css.online : css.ofline}></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendList.propTypes = {
  children: PropTypes.object,
};

FriendListItem.propTypes = {
  friends: PropTypes.array,
};
