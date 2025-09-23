import './App.css';
import { FriendsList } from './Components/Friends/FriendsList/FriendsList';
import { Profile } from './Components/SocialProfile/SocialProfile';
import { StatisticList } from './Components/Statistics/StatisticsList/StatisticsList';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistoryTable/TransactionHistoryTable';
function App() {
  return (
    <div className="app">
      <FriendsList/>
      <Profile/>
      <StatisticList/>
      <TransactionHistory/>
    </div>
  );
}

export default App;
