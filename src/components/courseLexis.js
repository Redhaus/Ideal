import React from 'react'
import { Grid, Checkbox, Popup } from 'semantic-ui-react'
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
            <Popup key={key} trigger={title} content={popup} size='tiny'  />
            
          )

          return template
      });  // close your map
    };  // close renderList
  
  return (
    <Grid>
      <div><h4>Lexis</h4></div>
        <Grid.Row columns={2}>
          {renderList(list)}   
        </Grid.Row>
    </Grid>
  );
}


export default CourseLexis;




      // /* <Grid.Column>  
      //  {renderList(list)}
      // </Grid.Column>

      // <Grid.Column>

      // <Checkbox label='Dionysus' />
      // <Checkbox label='antagonist' />
      // <Checkbox label='archetype' />
      // <Checkbox label='context' />

      // </Grid.Column> */
