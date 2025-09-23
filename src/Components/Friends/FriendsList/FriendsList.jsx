import { FriendsItem } from "../FriendsItem/FriendsItem";
import friends from "../friends.json";
import style from "../Friends.module.css";

export const FriendsList = () => {
  return (
    <>
      <ul className={style.friends__list}>
        {friends.map((friend) => {
          return <FriendsItem key={friend.name} friend={friend} />;
        })}
      </ul>
    </>
  );
};
