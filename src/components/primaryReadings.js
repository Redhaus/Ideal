import React from 'react'
import { Grid, Checkbox, Popup} from 'semantic-ui-react'
import { handleOnClick } from '../utils/utils'

const PrimaryReadings = (props) => {




  const handlePrimaryReadings = (readings) => {

    return readings.map( (item, key) => {


        const title = (


          <div className='primary-reading'>
          <h5>{item.author} | {item.date}</h5>
          <Checkbox label={item.title} onClick={handleOnClick} />
          
          </div>
          
        )

        const popup = (
          <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>

        )

        const template = (

          <Popup  key={key} trigger={title} content={popup} size='tiny' />


        )

        return template;


    })





  }



return (
  <Grid>


    <Grid.Row columns={3}>
    <Grid.Column>
    <h6>Beginner</h6>
      
      {handlePrimaryReadings(props.readings.category.beginner)}
    </Grid.Column>
    <Grid.Column>
    <h6>Intermediate</h6>
      
      {handlePrimaryReadings(props.readings.category.intermediate)}
    </Grid.Column>
    <Grid.Column>
    <h6>Advanced</h6>
      
      {handlePrimaryReadings(props.readings.category.advanced)}
   
    </Grid.Column>

    </Grid.Row>
  </Grid>
)
}

export default PrimaryReadings;



// <Grid.Column>
// <p>Beginner</p>
// <h4>Homer 850BCE-800BCE</h4>
// <em><Checkbox label='The Odyssey translated by Ian Johnston' /></em>

// </Grid.Column>
// <Grid.Column>
// <p>Intermediate</p>
// <h4>Homer 850BCE-800BCE</h4>
// <Checkbox label='The Odyssey' />

// </Grid.Column>
// <Grid.Column>
// <p>Advanced</p>
// <h4>Homer 850BCE-800BCE</h4>
// <Checkbox label='Metamorphoses' />
// <h4>Homer 850BCE-800BCE</h4>
// <Checkbox label='Tales from Ovid' />



// </Grid.Column>