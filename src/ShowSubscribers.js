import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';


class ShowSubscribers extends Component {

  render() {

    return (

      <div>
        <Header heading="Phone Directory" />
        <button className='add-btn'>Add</button>
        <div className='container'>
          <span className='nameText'>Name</span><br />
          <span className='phoneText'>Phone</span>
        </div>
        {
          this.props.subscribersList.map(sub => {
            return <div key={sub.id} className='container'>
              <span >{sub.name}</span><br />
              <span >{sub.phone}</span>
              <button className='deleteBtn' >Delete</button>
            </div>
          })
        }
      </div>
    )
  }
}


export default ShowSubscribers;
