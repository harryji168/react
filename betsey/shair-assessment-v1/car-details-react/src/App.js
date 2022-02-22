import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"
import {useState, useEffect} from "react"
import SearchBar from './components/SearchBar';
import { Details } from './requests';
import CreditCardForm from './components/CreditCardForm';
import Menu from "./components/Menu"


function App() {
  const final=[]
  const[manuArr, setManuArr] = useState([])
  const getManufacturer=()=>{
    const params={
      vin:"",
      manufacturer:"0"
    }
    Details.index(params)
    .then((res)=>{
      final[0]={
        "key":"0",
        "text":"All",
        "value":"all",
        "id":"0"
      }
      res.Results.forEach((item,i)=>{
        
        let manuObj={
          "key":i+1,
          "text":item.Mfr_Name,
          "value":item.Mfr_Name,
          "id":item.Mfr_ID
        }
        if(!final.includes(manuObj)){
          final.push(manuObj)
        }
        
      }
      )
      setManuArr(final)
    })
    
  }

  useEffect(() => {
    getManufacturer()
    
  }, [])

  return (
  
    <div className="App">    
        <BrowserRouter>
        <Menu/>
        <Switch>
          <Route path='/' exact render={(routeProps)=><SearchBar manuArr={manuArr} {...routeProps}/>} />
          <Route path='/payment' render={(routeProps)=><CreditCardForm manuArr={manuArr} {...routeProps}/>} />
        </Switch>
        </BrowserRouter>

       
    </div>
  );
}

export default App;
