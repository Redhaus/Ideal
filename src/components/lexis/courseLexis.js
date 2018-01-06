import React from 'react'
import { Grid, Popup, Checkbox } from 'semantic-ui-react'

import {connect} from 'react-redux';
import { saveSelection } from '../../actions/action';
import { bindActionCreators } from 'redux'


import { style, popSize } from '../../utils/utils';

class CourseLexis extends React.Component {



  // constructor(props){
  //   super(props)
   
    
  // }
  


  handleOnClick = (e, data) => {
    
      // console.log(data.id);
      // console.log(e.target);
      // console.log(this.props);
      // console.log('clicked')
      const activeTarget = e.target.parentNode.parentNode;
      // const info = {
      //     title: data.label
      //   }

        
      this.props.saveSelection(data); 
      //maybe throwing error due to async process isn;t complete when lexis is rerederend by render list
      
        
      // add an remove classes if item clicked
      if(data.checked){
        return activeTarget.className += " active";
      }else{
        return activeTarget.classList.remove("active");
      }

      
  }











  // testlist = (list) => {
  //   list.map((item, key) => {
  //        return console.log(item);
  //   })
  // }



 applicationList = (app) => {

    return app.map( (item, key) => {

      const list = (
        <li key={key}>{item}</li>
      )

      return list;
    })

  }

 

  renderList = (lexis) => {
    console.log('renderListCalled')
    return lexis.map((item, key) => {
      // console.log(item, key)

      // item template
      const title = (
        <Grid.Column>
          <div className="lexis-guide">
            <Checkbox label={item.word} idx={item.id} onClick={this.handleOnClick}  />
          </div>
        </Grid.Column>
      )


    
      const pos = (
        `( ${item.pos} )`
      )


      const popup = (
        <div className="pop-up">
          <h4>{item.word} { item.pos ? pos : '' } </h4>
          <p>{item.def}</p>
          { item.app ? <div><h5>Application</h5><ul>{this.applicationList(item.app)}</ul></div> : '' }
        </div>
      )

      const template = (
        <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted/>
      )

      return template

    });  // close your map
  };  // close renderList

render(){
  return (
    <Grid className="lexis">
      <Grid.Row>
        <Grid.Column>
          <div><h4 className="caps">Lexis</h4></div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2} className="lexis-cols">
        {this.renderList(this.props.lexis)}

        {/* {this.testlist(this.props.lexis)}
        {this.testlist(this.props.words)} */}
        
    {/* {console.log(this.props.words)} */}
    {/* {console.log(this.props.lexis)} */}
    
      </Grid.Row>
    </Grid>
  );
}
}



const mapStateToProps = state => {

  return ({

    lexis: state.lexis
  
     
  
  })
}
  
  const mapDispatchToProps = (dispatch) => ({
    
        saveSelection: bindActionCreators(saveSelection, dispatch)
    
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CourseLexis)
  

