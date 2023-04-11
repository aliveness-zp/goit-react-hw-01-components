export const FriendList = ({ children }) => {
  return <ul class="friend-list">{children}</ul>;
};

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span
            className={friend.isOnline ? 'status online' : 'status offline'}
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};
