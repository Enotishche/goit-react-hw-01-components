import propTypes from 'prop-types';
import TransactionList from './TransactionList';
import styles from './Transactions.module.css'

const TransactionHistory = ({ items }) => {
    return (
    <>
        <table className={styles.transactionHistory}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
    
    <TransactionList items={items} />
    </table>
    </>
    )
}
TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, amount: propTypes.string.isRequired, currency: propTypes.string.isRequired})
    ) 
}
export default TransactionHistory;