import { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data"
import HogList from './HogList'

function App() {
  const [pigs, setPigs] = useState(hogs)
  // console.log('App Component', hogs)

  return (
    <div className='App'>
      <Nav />
      <HogList pigs={pigs} />
    </div>
  );
}

export default App;
