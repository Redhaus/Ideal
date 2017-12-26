import React from 'react'
import { Grid, Checkbox, Popup } from 'semantic-ui-react'
import { handleOnClick } from '../utils/utils'

const PrimaryReadings = (props) => {

  const handlePrimaryReadings = (readings) => {

    return readings.map((item, key) => {

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
        <Popup key={key} trigger={title} content={popup} size='tiny' />
      )

      return template;

    }) // end map()
  } // end handle()



  return (
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column >
          <h5>Beginner</h5>
          {handlePrimaryReadings(props.readings.category.beginner)}
        </Grid.Column>
        
        <Grid.Column>
          <h5>Intermediate</h5>
          {handlePrimaryReadings(props.readings.category.intermediate)}
        </Grid.Column>

        <Grid.Column>
          <h5>Advanced</h5>
          {handlePrimaryReadings(props.readings.category.advanced)}
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default PrimaryReadings;


