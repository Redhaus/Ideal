import React from 'react'
import { Divider } from 'semantic-ui-react'

import {connect} from 'react-redux';


class LexisResults extends React.Component {



 applicationList = (app) => {

    return app.map( (item, key) => {

      const list = (
        <p key={key}>{item}</p>
      )

      return list;
    })

  }

 

  renderList = (lexis) => {
    // console.log('renderListCalled')
    return lexis.map((item, key) => {
      console.log(item, key)

      const wordGuide = (
          <div key={key} className="top-padding">
        <h3>{item.word} {item.pos}</h3>
        <strong>variations</strong>
          <p>{this.applicationList(item.variation)}</p>
        <strong>etymology</strong>
          <p>{item.application}</p>

          <strong>quote</strong>
          <p>{item.quote}</p>

          <p>{item.author} | {item.book}</p>

          <strong>application</strong>
          <p>{this.applicationList(item.application)}</p>

          <strong>key questions</strong>
          <p>{this.applicationList(item.questions)}</p>
          <Divider />


          </div>
      )

    //   // item template
    //   const title = (
    //     // <Grid.Column>
    //     //   <div className="lexis-guide">
    //     //     <Checkbox label={item.word} idx={item.id} onClick={this.handleOnClick}  />
    //     //   </div>
    //     // </Grid.Column>
    //   )


    
    //   const pos = (
    //     `( ${item.pos} )`
    //   )


    //   const popup = (
    //     <div className="pop-up">
    //       <h4>{item.word} { item.pos ? pos : '' } </h4>
    //       <p>{item.def}</p>
    //       { item.app ? <div><h5>Application</h5><ul>{this.applicationList(item.app)}</ul></div> : '' }
    //     </div>
    //   )

    //   const template = (
    //     <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted/>
    //   )

      return wordGuide;

    });  // close your map
  };  // close renderList

render(){
  return (
      <div>
        
        {this.renderList(this.props.lexisSelect)}
        </div>
        );
}
}



const mapStateToProps = state => {

  return ({

    lexisSelect: state.lexisSelect
  
  })
}
  
//   const mapDispatchToProps = (dispatch) => ({

//         saveSelection: bindActionCreators(saveSelection, dispatch)
    
//   })

  export default connect(mapStateToProps)(LexisResults)
  

