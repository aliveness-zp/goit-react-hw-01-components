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

TransactionHistory.propTypes = {
  children: PropTypes.object.isRequired,
};
