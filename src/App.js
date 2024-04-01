import React, { Component } from 'react';
import Header from './Header';
import './App.css';


class App extends Component{
  deleteHandler(msg){
    alert(msg);
  }
  
  render(){
    let subscribers = [
      {
        id : 1,
        name : "vishnu",
        phone : '84567898765'
      },
      {
        id : 2,
        name : "hari",
        phone : '84567898765' 
      },
      {
        id : 3,
        name : "shiva",
        phone : '84567898765' 
      }
    ] 
    return(
      
      <div>
      <Header heading="Phone Directory" />
      <button>Add</button>
      <div className='container'>
        <span className='nameText'>Name</span><br/>
        <span className='phoneText'>Phone</span>
      </div>

      {
        subscribers.map(sub =>{
          return <div key={sub.id} className='container'>
          <span >{sub.name}</span><br/>
          <span >{sub.phone}</span>
          <button className='deleteBtn' onClick={this.deleteHandler.bind(this,"Delete clicked!")}>Delete</button>
        </div>
        })
      }
    </div>
    )
  }
}



export default App;
