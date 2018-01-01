import React from 'react'
import { Grid, Popup, Divider, Checkbox } from 'semantic-ui-react'

import { handleOnClick, style, popSize } from '../../utils/utils';

const CourseLexis = (props) => {

  const list = props.words;
  // console.log('Lexis: ', lexisData);

  // const style = {
  //   borderRadius: 5,
  //   opacity: 0.9,
  //   padding: '2em',
    
  // }
  



  const applicationList = (app) => {

    return app.map( (item, key) => {

      const list = (
        <li key={key}>{item}</li>
      )

      return list;
    })

  }

  const renderList = (words) => {

    return words.map((item, key) => {

      // item template
      const title = (
        <Grid.Column>
          <div className="lexis-guide">
            <Checkbox label={item.word} desc={item.def} cat='LEXIS' onClick={handleOnClick}  />
          </div>
        </Grid.Column>
      )

      // <Checkbox  label={item.word} id="test6" desc={item.def} cat='LEXIS' onClick={handleOnClick} />

    
      const pos = (
        `( ${item.pos} )`
      )


      const popup = (
        <div className="pop-up">
          <h4>{item.word} { item.pos ? pos : '' } </h4>
          <p>{item.def}</p>
          { item.app ? <div><h5>Application</h5><ul>{applicationList(item.app)}</ul></div> : '' }
        </div>
      )

      const template = (
        <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted/>
      )

      return template

    });  // close your map
  };  // close renderList


  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <div><h4 className="caps">Lexis</h4></div>
          <Divider />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={2}>
        {renderList(list)}
      </Grid.Row>
    </Grid>
  );
}


export default CourseLexis;

