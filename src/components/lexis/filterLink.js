import React from 'react';


// Component for filter buttons
class FilterLink extends React.Component { 

    handleOnClick = () => {
        this.props.onClick(this.props.filter, this.props.title)
    }
    
    render() {
        return (
        <button onClick={ this.handleOnClick }>{this.props.title}</button> 
        )
    }
};


export default FilterLink; 