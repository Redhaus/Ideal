import React from 'react';
import {Button} from 'semantic-ui-react';
import { connect } from 'react-redux';


// Component for filter buttons
class FilterLink extends React.Component { 

    state = {}
    
    handleOnClick = (e, data) => {
        this.props.onClick(this.props.filter, this.props.title)
   
        this.setState( () => {
            return { 
                active: !this.state.active 
            }
        })

    }
    
    render() {
  
        return (
        <Button title={this.props.title} icon={this.props.icon}  toggle active={this.props.on} onClick={ this.handleOnClick }/>
        )
    }
};


const mapStateToProps = (state, props) => {
    return {
        lexisSelectedReducer: state.lexisSelectedReducer
        
    }

}


export default connect(mapStateToProps)(FilterLink); 
