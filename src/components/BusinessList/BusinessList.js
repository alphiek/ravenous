import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
    <div className="BusinessList">
    {
      this.props.businesses.map(business => {
        let value = business + Math.floor(Math.random()*100).toString();
        return <Business business={business}
        key={value} />
      })
    }
    </div>
  );
}
}

export default BusinessList;
