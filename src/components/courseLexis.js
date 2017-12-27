import React from 'react'
import { Grid, Popup, Divider, Checkbox } from 'semantic-ui-react'
import { handleOnClick } from '../utils/utils';

const CourseLexis = (props) => {

  const list = props.words;


  const renderList = (words) => {

    return words.map((item, key) => {

      // item template
      const title = (
        <Grid.Column>
          <div className="lexis-guide">
            <Checkbox label={item.word} desc={item.def} onClick={handleOnClick} />
          </div>
        </Grid.Column>
      )

      const popup = (
        <div>
          <h4>{item.word}</h4>
          <p>{item.def}</p>
        </div>
      )
      
      const template = (
        <Popup key={key} trigger={ title } content={ popup } size='tiny' />
      )

      return template

    });  // close your map
  };  // close renderList


  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <div><h4>Lexis</h4></div>
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

