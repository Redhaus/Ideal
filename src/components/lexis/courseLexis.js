import React from 'react'
import { Grid, Popup, Checkbox } from 'semantic-ui-react'

import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { bindActionCreators } from 'redux'

import { style, popSize } from '../../utils/utils';
import FilterLink from './filterLink';

import { getVisibility } from '../selectors/filter';

class CourseLexis extends React.Component {

  handleGetVisibility = (filter, title) => {

    const list = this.props.lexis;
    getVisibility(list, filter, title); //updates the list based on filters
    this.props.setFilter(filter, title); //sets store reducer for filter

  }


  handleOnClick = (e, data) => {

    const activeTarget = e.target.parentNode.parentNode;
    this.props.saveSelection(data); // saves selection to redux store
    
    if (data.checked) {
      return activeTarget.className += " active";
    } else {
      return activeTarget.classList.remove("active");
    }

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

    return lexis.map((item, key) => {
    
      const title = (
        <Grid.Column >
          <div className="lexis-guide" >
            <Checkbox label={item.word} idx={item.id} onClick={this.handleOnClick} />
          </div>
        </Grid.Column>
      )

      const pos = (
        `( ${item.pos} )`
      )

      const popup = (
        <div className="pop-up">
          <h4>{item.word} {item.pos ? pos : ''} </h4>
          <p>{item.def}</p>
          {item.app ? <div><h5>Application</h5><ul>{this.applicationList(item.app)}</ul></div> : ''}
        </div>
      )

      const template = (
        <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted />
      )

      return template

    });  // close your map
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
            <FilterLink filter='SHOW_CITY' title='city' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_NAME' title='name' onClick={this.handleGetVisibility} />
            <FilterLink filter='SHOW_PIE' title='pie' onClick={this.handleGetVisibility} />
          </div>

          {this.renderList(this.props.lexis)}
    
        </Grid.Row>
      </Grid>
    );
  }
}




const mapStateToProps = state => {
  return ({
    lexis: getVisibility(state.lexis, state.lexisFilterReducer, null),
    lexisFilter: state.lexisFilterReducer
  })
}

const mapDispatchToProps = (dispatch) => ({
  saveSelection: bindActionCreators(actions.saveSelection, dispatch),
  setFilter: bindActionCreators(actions.setFilter, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(CourseLexis)


