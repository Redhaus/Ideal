import React from 'react'
import { Grid, Checkbox, Popup } from 'semantic-ui-react'

const CourseLexis = (props) => {

const list = props.words;


    const renderList = (words) => {

      return words.map((item, key) => {
      
          // item template
          const title = (
            <Checkbox label={item.word} />
          )
      
          const popup = (
            <div>
            <h4>{item.word}</h4>
            <p>{item.def}</p>
            </div>
          )

          return (
            <Grid.Column key={key}>  
            <div>
              <Popup trigger={title} content={popup} size='tiny'  />
            </div>
            </Grid.Column>    
        
          )
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
