import "./App.css";
import Users from "./Users.json";
import { useState } from "react";
import { Table } from "./Table";
import abc from "../src/Users.json";
import { Filter } from "./Filter";

function App() {
  const [query, setQuery] = useState("");
  const data = abc.Users;
  
  //  console.log(data);
   
const search = (data) => {
  return(  data.filter((item) => item.first_name.toLowerCase().includes(query))
  )};
    
  const tum=search(data);
  // console.log("Search",tum)

  const [gender, setGender]=useState("");
  const [gen, setGen]=useState([]);
  // console.log("gender",gender)
  const fit = (tum)=> {
    tum.map((item)=> {
      if(item.gender==gender){
      setGen(item)
      }
    })
  }
  fit(tum);
  console.log(gen)
  return (
    <div className="App">
      <div>
        <input
          placeholder="search"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
          </div>
          <div>
            <select onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
      <Table data={tum} />
    {/* <Filter/> */}
   </div>
  );
}

export default App;
