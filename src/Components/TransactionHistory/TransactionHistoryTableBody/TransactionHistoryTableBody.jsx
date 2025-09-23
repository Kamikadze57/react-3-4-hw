import style from "../TransactionHistory.module.css";

export const TransactionHistoryTableBody = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <tr className={style['table-body__tr']}>
        <td className={style['table-body__td']}>{type}</td>
        <td className={style['table-body__td']}>{amount}</td>
        <td className={style['table-body__td']}>{currency}</td>
      </tr>
    </>
  );
};
