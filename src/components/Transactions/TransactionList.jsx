import propTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
const TransactionList = ({ items }) => {
    const elements = items.map(({ id, type, amount, currency }) =>
        <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />)
    return (
        <tbody>{ elements}</tbody>
    )
}
TransactionList.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({id: propTypes.string.isRequired, amount: propTypes.string.isRequired, currency: propTypes.string.isRequired})
    )
}
export default TransactionList;