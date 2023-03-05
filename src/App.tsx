import kendoka from "./kendoka.svg";
import "./App.scss";
import BtnsComp from "./components/btn/Index";
import GridComp from "./components/grid/Index";
import CalenderComp from "./components/calender/Index";
import DropDownListComp from "./components/dropDownList/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kendoka} className="App-logo" alt="kendoka" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BtnsComp />
      </header>
      <GridComp />
      <hr />
      <CalenderComp />
      <hr />
      <DropDownListComp />
    </div>
  );
}

export default App;
