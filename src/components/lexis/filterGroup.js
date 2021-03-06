import React, { Component } from 'react';
import { getVisibility } from '../selectors/filter';
import FilterLink from './filterLink';

import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { bindActionCreators } from 'redux'

import _ from 'lodash';



class FilterGroup extends Component {




    state = {
        all: true, 
        person: false, 
        common: false, 
        device: false, 
        essential: false, 
        concept: false, 
        event: false,
        reset: false
    }


    
    componentDidUpdate(prevProps, prevState) {

        // if all states are false default to 'all'
        if(_.every(_.values(this.state), function(v) {return !v;})){
            this.checkAll();
        }
        
    }


    checkAll = () => {
        return this.setState( () => {
            return { 
                all: true, 
                person: false, 
                common: false, 
                device: false, 
                essential: false, 
                concept: false, 
                event: false,
                reset: false
            }
        })
    }

    

    // update function for state used in getVisibility below
    updateState = (title) => {

        if(title === 'all' || title === 'reset' ){
            return this.setState( () => {
                return { 
                    all: true, 
                    person: false, 
                    common: false, 
                    device: false, 
                    essential: false, 
                    concept: false, 
                    event: false,
                    reset: false
                }
            })
        }


        this.setState( () => {
    
            return { 
                all: false,
                [title]: !this.state[title]
            }
        })


    }


    // function to handle reset of all selected items and filters
    handleReset = (addFilter, addTitle) => {

        this.props.clearSelectedLexis(); // clears selected store        
        this.props.setFilter(addFilter, addTitle); //clears filter store
        this.updateState(addTitle); // clears button toggle state
    }


    handleSetFilter = (addFilter, addTitle) => {

        // const list = this.props.lexis;
        // const filter = this.props.lexisFilter;
        // const title = this.props.lexisSelectedReducer
        // getVisibility(list, filter, title); //updates the list based on filters
        this.props.setFilter(addFilter, addTitle); //sets store reducer for filter
        this.updateState(addTitle);

    }



// <Icon size='large' name="list ul"/> 
// <Icon size='large' name="user outline circle"/> 
// <Icon size='large' name="copyright"/> 
// <Icon size='large' name="low vision"/> 
// <Icon size='large' rotated="clockwise" name="key"/>
// <Icon size='large' name="lightbulb"/>
// <Icon size='large' name="calendar outline"/>
// <Icon size='large' name="remove"/> 


    render() {
        return (

            <div className="ed">
                <span>Filters:</span>
                <FilterLink on={this.state.all} icon='list ul' filter='SHOW_ALL' title='all' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.person} icon='user outline circle' filter='SHOW_PERSON' title='person' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.common} icon='copyright' filter='SHOW_COMMON' title='common' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.device} icon='low vision' filter='SHOW_DEVICE' title='device' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.essential} icon='key' filter='SHOW_ESSENTIAL' title='essential' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.concept} icon='lightbulb' filter='SHOW_CONCEPT' title='concept' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.event} icon='calendar outline' filter='SHOW_EVENT' title='event' onClick={this.handleSetFilter} />
                <FilterLink on={this.state.reset} icon='remove' filter='SHOW_RESET' title='reset' onClick={this.handleReset} />
    
            </div>

        );
    }
}

const mapStateToProps = state => {
    return ({
        lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
        lexisSelect: state.lexisSelect,
        lexisFilter: state.lexisFilterReducer,
        lexisSelectedReducer: state.lexisSelectedReducer

    })
}

const mapDispatchToProps = (dispatch) => ({
    setFilter: bindActionCreators(actions.setFilter, dispatch),
    clearSelectedLexis: bindActionCreators(actions.clearSelectedLexis, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup)