export const TransactionHistory = ({ children }) => {
  return (
    <>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {children}
      </table>
    </>
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
