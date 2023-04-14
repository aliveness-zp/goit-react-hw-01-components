import PropTypes from 'prop-types';

// import css from './TransactionHistory.module.css';

export const TransactionItem = ({ transactions }) => {
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

TransactionItem.propTypes = {
  transactions: PropTypes.array.isRequired,
};
