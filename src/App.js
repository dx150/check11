import ProfilePicture from "./component/Profile/ProfilePicture";
import Address from "./component/Profile/Address";
import FullName from "./component/Profile/FullName";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="img-Container">
        <ProfilePicture/>
      </div> 
      <div className="name-Container">
        <FullName/>
      </div>
      <div className="add-Container">
        <Address/>
      </div>
    </div>
  );
} 

export default App;
