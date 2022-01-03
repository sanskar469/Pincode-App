import './App.css';
import { useState, useEffect } from 'react';
import Cards from './component/Cards';

function App() {
  const [state, setstate] = useState(null)
  const [pincode, setPincode] = useState({inputText:"461331"})
  
  const handleOnChange=(e)=>{
    setPincode({...pincode,[e.target.name]: e.target.value})
    // setPincode(e.target.value)
    const length =pincode.inputText.length
    if(length===7){
      // window.removeEventListener(handleOnChange)
      
    }

  }
  const handleOnClick=()=>{
    fetchData()
    
  }
  const fetchData=()=>{
    fetch(`http://api.zippopotam.us/in/${pincode.inputText}`,)
      .then(response => response.json())
      .then(response => {
        setstate(response)
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
    
  }, [])
  return (
    <div className="App container mt-3">
      <label htmlFor="inputText" className="form-label">Enter Pincode</label>
      <input type="number" id="inputText" name='inputText' className="form-control" aria-describedby="passwordHelpBlock" value={pincode.inputText} maxLength="6" onChange={handleOnChange} />
      <button className="btn btn-primary my-3" onClick={handleOnClick} >Search</button>
      <div id="passwordHelpBlock" className="form-text">
          
        </div>
      {state === null
       ? "" : state.places.map((data,ind) => (
          <Cards
          state={data.state} 
          latitude={data.latitude}
          longitude={data.longitude}
          placename={data["place name"]}
          />
        ))}

    </div>


  );
}

export default App;
