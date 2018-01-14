import React from 'react'

// Redux / Action / Selector Imports
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import { bindActionCreators } from 'redux'
import { getVisibility } from '../selectors/filter';

// Layout
import { Grid, Popup, Checkbox, Icon } from 'semantic-ui-react'
import { style, popSize } from '../../utils/utils';

// Component imports
import FilterGroup from './filterGroup';


// icons
// person - user circle / male / id card outline  / address card
// common - copyright / repeat  
// device - low vision / road / file image outline / write / wizard 
// essential - linkify /  key 
// concept - lightbulb
// event - checked calendar / calendar outline / calendar 


class CourseLexis extends React.Component {

  // saves checkbox selection to redux store
  handleOnClick = (e, data) => {
    console.log(e.target.parentNode.parentNode.parentNode)
    this.props.saveSelection(data); 
    
  }


  // iterates through application list of lexis for each word
  applicationList = (app) => {

    return app.map((item, key) => {

      const list = (
        <li key={key}>{item}</li>
      )

      return list;
    })
  }

  iconHighlight = (item, icon, key) => {
    if(this.props.lexisSelectedReducer.includes(item)){
      return <Icon className='activeIcon' key={key} name={icon}/> 
    }else{
      return <Icon key={key} name={icon}/> 
    }

    // return false;
  }



  icon = (icons) => {
    // console.log(this.props.lexisSelectedReducer)

    

    return icons.map( (item, key) => {
      // console.log(item);
      switch (item) {

        case 'person':
          
          return this.iconHighlight(item, "user outline", key )
  
        case 'common':
        
          return this.iconHighlight(item, "copyright", key )

        case 'device':
          return this.iconHighlight(item, "low vision", key )
         

        case 'essential':
          return this.iconHighlight(item, "key", key )

        case 'concept':
          return this.iconHighlight(item, "lightbulb", key )

        case 'event':
          return this.iconHighlight(item, "calendar outline", key )
      
        default:
          break;
      }

      return false;
      
    })
  }


  // renders list based on filtered lexis it is given
  renderList = (lexis) => {


    // if list doesn't have any words tell user to make new selection
    if (lexis.length === 0) {
      return <p>Please make different selections</p>
    } else {
      return lexis.map((item, key) => {


        // if the selected lexis array contains item.word add active class 
        const active = this.props.lexisSelect.some((e) => e.word === item.word) ? 'active' : '';

        const title = (
          <Grid.Column className={`lex ${active}`}>
            <div className="lexis-guide" >
              <span><Checkbox className='list-item' checked={this.props.lexisSelect.includes(item)} label={item.word} idx={item.id} onClick={this.handleOnClick} />
               <span className="hard-right"> {this.icon(item.icons)} </span>
              </span>
             
            
            </div>
          </Grid.Column>
        )

        const pos = (
          `( ${item.pos} )`
        )


        const popup = (
          <div className="pop-up">
            <h4>{item.word} {item.pos ? pos : ''} <span className="hard-right">{this.icon(item.icons)}</span></h4>
            <p>{item.etymology}</p>
            
            {item.application ? <div><h5>Application</h5><ul>{this.applicationList(item.application)}</ul></div> : ''}
          </div>
        )

        const template = (
          <Popup wide="true" key={key} trigger={title} content={popup} size={popSize} style={style} inverted />
        )

        return template

      });  // close your map
    } // else close
  };  // close renderList


  render() {

    return (
      <Grid id="words" className="lexis">
        <Grid.Row>
          <Grid.Column>
            <div><h4 className="caps">Lexis</h4></div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5} className="lexis-cols list">





        <div className="filter-group">
        <FilterGroup  />
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





// <Icon name="male"/>
// <Icon name="user circle"/>
// <Icon name="id card outline"/>
// <Icon name="address card"/>
// <Icon name="repeat"/>
// <Icon name="low vision"/>
// <Icon name="road"/>
// <Icon name="file image outline"/>
// <Icon name="write"/>
// <Icon name="wizard"/>
// <Icon name="linkify"/>
// <Icon name="checked calendar"/>
// <Icon name="calendar"/>

