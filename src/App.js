import { useEffect, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import PollCard from "./components/PollCard";
import { getPolls } from "./server/PollsManager";

function App() {

  const [ pollsData, setPollsData ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1)

  useEffect(() => {
    getPolls(currentPage)
      .then(data => {
        setPollsData(data);
      });
  }, [currentPage]);


  let pollsContent = <div></div>
  if(pollsData.data?.length > 0){
    pollsContent = 
    pollsData.data.map((poll, i)=>{
      return <PollCard key={i} poll={poll}/>
  })}
  
  return (
    <div id="app-container">
      <Header/>

      <div id='polls-container'>
        {pollsContent}
      </div>

      <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} pollsData={pollsData}/>

    </div>
  );
}

export default App;
