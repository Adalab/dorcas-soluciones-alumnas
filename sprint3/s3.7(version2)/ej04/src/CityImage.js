import React from 'react';

class CityImage extends React.Component {
    render(){
        return <img src={this.props.city} alt=""/>;
    }
}

export default CityImage;