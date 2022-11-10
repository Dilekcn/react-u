import "./App.css";
import SingelComment from "./SingelComment";
import UserCart from "./UserCart";

function App() {
  return (
    <div className="ui cards">
      <UserCart>
        <SingelComment />
      </UserCart>
    </div>
  );
}

export default App;
