import { TransactionHistoryTableBody } from "../TransactionHistoryTableBody/TransactionHistoryTableBody";
import transactions from "../transactions.json";
import style from "../TransactionHistory.module.css";

export const TransactionHistory = () => {
  return (
    <>
      <table className={style.transaction__table}>
        <thead className={style["transaction-table__head"]}>
          <tr className={style['table-head__tr']}>
            <th className={style['table-head__th']}>Type</th>
            <th className={style['table-head__th']}>Amount</th>
            <th className={style['table-head__th']}>Currency</th>
          </tr>
        </thead>
        <tbody className={style["transaction-table__body"]}>
          {transactions.map((transaction) => {
            return <TransactionHistoryTableBody key={transaction.id} transaction={transaction} />;
          })}
        </tbody>
      </table>
    </>
  );
};
