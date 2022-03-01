import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';;


class BusinessList extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <h2 className="popular">POPULAR IN YOUR AREA</h2>
                <div className="BusinessList">
                    
                    { 
                        this.props.businesses.map((business) => {
                            return <Business business={business} key={business.id}/>;
                        })
                    }

                    
                </div>
            </div>
        )
    }
}

export default BusinessList;