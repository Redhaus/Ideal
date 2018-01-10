import React, { Component } from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/action';



class Checker extends Component {

    state = {
        checked: false
    }



  handleOnClick = (e, data) => {
    
        const activeTarget = e.target.parentNode.parentNode;
        this.props.saveSelection(data); // saves selection to redux store
        console.log('clicked')
        
        if (data.checked) {
          return activeTarget.className += " active";
        } else {
          return activeTarget.classList.remove("active");
        }
    
      }

      

    checkSelected = (lexis) => {

        this.props.onClick();
        console.log('checker: ', lexis)
        this.setState( (state) => {
            checked: !(this.state.checked)
        })

        console.log(this.state.checked)
        console.log(this.props.onClick)

    }

    // checkSelected();


  render() {
    {console.log(this.props)}
    // {console.log(this.state)}
    
    return (


        <Grid.Column >
            <div className="lexis-guide" >
            <Checkbox checked={this.state.checked} label={this.props.word} idx={this.props.id} onClick={this.checkSelected} />
            </div>
        </Grid.Column>


    //   <div>
        
    //   </div>
    );
  }
}

const mapStateToProps = (state) => ({
      lexis: state.lexis
    })

const mapDispatchToProps = (dispatch) => ({
    saveSelection: bindActionCreators(actions.saveSelection, dispatch),
    setFilter: bindActionCreators(actions.setFilter, dispatch)
    })


  

export default connect(mapStateToProps, mapDispatchToProps)(Checker);
