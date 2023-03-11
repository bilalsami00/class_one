import logo from './logo.svg';
import './App.css';

function App() {
  // here js is written

  var name = "bilal"
  let num = 42
  let arr = [1,2,3,4,5,6,7,8,9,0]
  let obj = {
    name : "bilal",
    age : 22,
    gender : "male"

}

  return (
    // here HTML is written
    <div className="App">
      <header className="App-header">
        {/* to use js here '{}' is required */}
        
        {name},
        {num},
        {arr},
        {obj.gender},
        {arr.map((value, index) => {
          return value+1
        })
      } 

      </header>
    </div>
  );
    }
export default App;
