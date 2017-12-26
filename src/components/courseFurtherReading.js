import React from 'react'
import { Grid, Checkbox, Popup} from 'semantic-ui-react'
import { handleOnClick } from '../utils/utils';

const CourseFurtherReadings = (props) => {



  const handleReadings = (readings) => {

    return readings.map( (item, key) => {

      const title = (
        <Grid.Column >
            <div className="further-reading">
              <h5>{item.author} | {item.date}</h5>
              <Checkbox label={item.title} desc={item.description}  value={item.title} onClick={handleOnClick} /> 
            </div>
        </Grid.Column>
          
      )

      const essaytitle = (
        <Grid.Column>
          <div className="further-reading">
            <h5>{item.source} </h5>
            <Checkbox label={item.title} desc={item.description}  onClick={handleOnClick} /> 
            <p> 
            {item.author ? `${item.author}` : ''} 
            {item.author && item.date ? ' | ': ''}       
            {item.date ? `${item.date}` : ''}
            </p>    
          </div>
        </Grid.Column>
      )

      const popup = (
        <div>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      )

      const poemTemplate = (
        <Popup key={key} trigger={title} content={popup} size='tiny' />
      )

      const essayTemplate = (
        <Popup key={key} trigger={essaytitle} content={popup} size='tiny' />
      )


      if(readings[key].source){
        return essayTemplate;
      }else{
        return poemTemplate;
      }

    })

  }

    
    return(
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <div><h4>Further Reading</h4></div>
          </Grid.Column>

          <Grid.Column>
            <h3>Poetry</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          {handleReadings(props.readings.poems)}
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <h3>Essays</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          {handleReadings(props.readings.essays)}
        </Grid.Row>
      </Grid>
    )
}

export default CourseFurtherReadings;