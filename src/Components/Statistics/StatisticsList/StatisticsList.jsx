import { StatisticsItem } from "../StatisticsItem/StatisticsItem.jsx";
import statistic from "../data.json";
import style from "../Statistics.module.css";

export const StatisticList = () => {
  return (
    <>
      <div className={style.stat__box}>
        <h2 className={style["stat-box__title"]}>Upload stats</h2>
        <ul className={style["stat-box__list"]}>
        {statistic.map((stat) => {
          return <StatisticsItem key={stat.id} stat={stat}/>;
        })}
        </ul>
      </div>
    </>
  );
};
