import style from "../Statistics.module.css";

export const StatisticsItem = ({ stat: {label, percentage}}) => {
  return (
    <>
      <li className={style["stat__item"]}>
        <p className={style["stat-item__text"]}>{label}</p>
        <span className={style["stat-item__percent"]}>{percentage}%</span>
      </li>
    </>
  );
};
