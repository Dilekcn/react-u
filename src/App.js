import "./App.css";
import SingelComment from "./SingelComment";
import UserCart from "./UserCart";

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );

  return (
    <div className="ui cards">
      <UserCart>
        <SingelComment />
      </UserCart>
    </div>
  );
}

export default App;
