import user from "./user.json";
import style from "./SocialProfile.module.css";

export const Profile = () => {
  return (
    <>
      <div className={style.profile__box}>
        <div className={style["profile-box__info"]}>
          <img className={style.profile__img} src={user.avatar} alt="User avatar" title={user.username} />
          <p className={style.profile__name}>{user.username}</p>
          <p className={style.profile__tag}>@{user.tag}</p>
          <p className={style.profile__location}>{user.location}</p>
        </div>
        <ul className={style["profile-stats__list"]}>
          <li className={style.profile__item}>
            <span className={style["profile-item__span"]}>Followers</span>
            <span className={style["profile-item__quantity"]}>{user.stats.followers}</span>
          </li>
          <li className={style.profile__item}>
            <span className={style["profile-item__span"]}>Views</span>
            <span className={style["profile-item__quantity"]}>{user.stats.views}</span>
          </li>
          <li className={style.profile__item}>
            <span className={style["profile-item__span"]}>Likes</span>
            <span className={style["profile-item__quantity"]}>{user.stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
