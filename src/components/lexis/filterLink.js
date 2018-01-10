import React from 'react';
import {Button} from 'semantic-ui-react';
import { connect } from 'react-redux';


// Component for filter buttons
class FilterLink extends React.Component { 

    state = {}
    

    // state = {
    //     all: true, 
    //     person: false, 
    //     common: false, 
    //     device: false, 
    //     essential: false, 
    //     concept: false, 
    //     event: false
    // }

    // changeState = (children) => {

    //     console.log(this.state);
    //     console.log(children);

    //     if(children === 'person'){
    //         return this.setState((state) => ({ person: !state.person }));
    //     console.log(this.state);
        
    //     }


    // }

    handleOnClick = (e, data) => {
        this.props.onClick(this.props.filter, this.props.title)
        // console.log(data.children);
        // this.changeState(data.children);

        console.log(this.props.lexisSelectedReducer)

        

        this.setState( () => {
            return { 
                active: !this.state.active 
            }
        })

        // console.log(this.state)

  
    }
    
    render() {
    const { active } = this.state

    
        return (
        <Button  toggle active={active} onClick={ this.handleOnClick }>{this.props.title}</Button> 
        )
    }
};

const mapStateToProps = (state, props) => {
    return {
        lexisSelectedReducer: state.lexisSelectedReducer
        
    }

}

// const mapStateToProps = state => {
//     return ({
//     //   lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
//     //   lexisSelect: state.lexisSelect,
//     //   lexisFilter: state.lexisFilterReducer,
  
//     })
//   }


export default connect(mapStateToProps)(FilterLink); 



// import React, { Component } from 'react'
// import { Button } from 'semantic-ui-react'

// class ButtonExampleToggle extends Component {
//   state = {}

//   handleClick = () => this.setState({ active: !this.state.active })

//   render() {
//     const { active } = this.state

//     return (
//       <Button toggle active={active} onClick={this.handleClick}>
//         Toggle
//       </Button>
//     )
//   }
// }

// export default ButtonExampleToggle
