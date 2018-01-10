import React from 'react'
import { Grid, Popup, Checkbox } from 'semantic-ui-react'

import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { bindActionCreators } from 'redux'

import { style, popSize } from '../../utils/utils';
import FilterLink from './filterLink';

import { getVisibility } from '../selectors/filter';
// import Checker from './checker';

class CourseLexis extends React.Component {

  // state = {
  // }


  

  handleGetVisibility = (addFilter, addTitle) => {

    const list = this.props.lexis;
    const filter = this.props.lexisFilter;
    const title = this.props.lexisSelectedReducer
    getVisibility(list, filter, title); //updates the list based on filters
    this.props.setFilter(addFilter, addTitle); //sets store reducer for filter

  }


  handleOnClick = (e, data) => {

    // const activeTarget = e.target.parentNode;
    // console.log(activeTarget)
    this.props.saveSelection(data); // saves selection to redux store
  
  //   this.setState( () => {
  //     return { 
  //         active: !this.state.active 
  //     }
  // })

  // console.log()
  

    // console.log(this.state.active)
    // console.log(e.target)

    

    // if (data.checked) {
    //   return activeTarget.className += " active";
    // } else {
    //   return activeTarget.classList.remove("active");
    // }

  }


  applicationList = (app) => {

    return app.map((item, key) => {

      const list = (
        <li key={key}>{item}</li>
      )

      return list;
    })
  }


  renderList = (lexis) => {

    console.log('renderListFiring')

    if (lexis.length === 0) {
      return <p>Please make different selections</p>
      // console.log(lexis.length);
    } else {
      return lexis.map((item, key) => {

        // console.log('item: ', item)

        // this.setState((prevState, props) => ({
        //   count: prevState.count + props.increment
        // }));
        
        // console.log(this.props.lexisSelect.includes(item));

        const title = (
          <Grid.Column >
            <div className="lexis-guide" >
              <Checkbox className='list-item' checked={this.props.lexisSelect.includes(item)} label={item.word} idx={item.id} onClick={this.handleOnClick} />
            </div>
          </Grid.Column>
        )

        const pos = (
          `( ${item.pos} )`
        )

        const popup = (
          <div className="pop-up">
            <h4>{item.word} {item.pos ? pos : ''} </h4>
            <p>{item.etymology}</p>
            {item.application ? <div><h5>Application</h5><ul>{this.applicationList(item.application)}</ul></div> : ''}
          </div>
        )

        const template = (
          <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted />
        )

        // console.log(template);
        return template

      });  // close your map
    } //else close
  };  // close renderList


  render() {

    
    return (
      <Grid id="words" className="lexis">
        <Grid.Row>
          <Grid.Column>
            <div><h4 className="caps">Lexis</h4></div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} className="lexis-cols list">

          <div>
            Filters:
            <FilterLink filter='SHOW_ALL' title='all' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_PERSON' title='person' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_COMMON' title='common' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_DEVICE' title='device' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_ESSENTIAL' title='essential' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_CONCEPT' title='concept' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_EVENT' title='event' onClick={this.handleGetVisibility} />

          </div>

          {this.renderList(this.props.lexis)}

        </Grid.Row>
      </Grid>
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
  saveSelection: bindActionCreators(actions.saveSelection, dispatch),
  setFilter: bindActionCreators(actions.setFilter, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseLexis)


