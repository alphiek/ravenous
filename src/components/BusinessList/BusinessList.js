import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
    <div className="BusinessList">
    {this.props.businesses.map((business) => {
      return (
        <Business business={business}/>
      )
    })};
    </div>
    )
  }
}

export default BusinessList;


{/*
{this.props.businesses.map((business) => {   // this components information(props)named businesses(received from the information passed in app.js map/for each business item)
return
// return the component Business and pass the attribute 'business' which is equal to corresponding business object information passed from app.js businesses attribute.
*/}
