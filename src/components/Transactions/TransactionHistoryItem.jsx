import propTypes from 'prop-types';
const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
    <tr>
        <td>{ type}</td>
        <td>{ amount}</td>
        <td>{ currency}</td>
    </tr>
    
    )
}
TransactionHistoryItem.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
}
export default TransactionHistoryItem;