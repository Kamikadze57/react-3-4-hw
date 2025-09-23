import style from "../Friends.module.css"

export const FriendsItem = ({friend: {avatar, name, isOnline}}) => {
  return (
    <>
      <li className={style["friend__item"]}>
        <div className={style['friend-status']} style={{backgroundColor: isOnline ? "green" : "red"}}></div>
        <img className={style.friend__img} src={avatar} alt={name}/>
        <h6 className={style.friend__name}>{name}</h6>
      </li>
    </>
  );
};
