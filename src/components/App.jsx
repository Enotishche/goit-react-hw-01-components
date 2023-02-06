import Profile from "./Profile/Profile";
import TransactionHistory from "./Transactions/TransactionHistory";
import StatisticsSection from "./Statistics/StatisticsSection";
import FriendsList from "./FriendList/FriendsList";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 
      <StatisticsSection title="Upload stats" data={data}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
