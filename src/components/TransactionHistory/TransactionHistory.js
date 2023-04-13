import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ children }) => {
  return (
    <div className={css.container}>
      <table className={css['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};

export const TrnsactionItem = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionHistory.propTypes = {
  children: PropTypes.object,
};

TrnsactionItem.propTypes = {
  transactions: PropTypes.array,
};
