import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  var [ar,setAr]= React.useState([
    {
      fullname:'gauri shinde',
      gender:'female'
    },
    {
      fullname:'himaja',
      gender:'female'
    },
    {
      fullname:'prayag',
      gender:'male'
    },
    {
      fullname:'sruthi',
      gender:'female'
    },
    {
      fullname:'kiran',
      gender:'male'
    },
    {
      fullname:'balu',
      gender:'male'
    },
  ]);
  var [g,setG] = React.useState('male');
  function males(){
    setG("male")
  }
  function females(){
    setG("female")
  }
  return (
    <div>
      <button onClick={males} disabled={g==='male'?true:false}>Male</button>
      <button onClick={females} disabled={g==='female'?true:false}>Female</button>
      <table border="2">
        {
          ar.map((a)=>{
            if(a.gender===g){
              return (

                <tr style={a.gender==='female'?{backgroundColor:'pink'}:{backgroundColor:"blue"}}>
                  <td>{a.fullname}</td>
                  <td>{a.gender}</td>
                </tr>
  
              )
            }
           
            
          })
        }
      </table>
    </div>
  );
}

export default App;
