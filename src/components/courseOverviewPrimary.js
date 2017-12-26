import React from 'react'
import { Grid, Popup } from 'semantic-ui-react'
import CourseOverview from '../components/courseOverview';
import PrimaryReadings from '../components/primaryReadings';
import readings from '../fixtures/readingData';
import primarydata from '../fixtures/primaryData';

const CourseIntro = () => {

const title = (
    <h2>{primarydata.title}</h2>
)

const popup = (
    <div>
    <h4>{primarydata.title}</h4>
    <p>{primarydata.titleRollover}</p>
    </div>
)


// console.log(primarydata.primaryRollover);


return (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <h4>{primarydata.category}</h4> 
        <CourseOverview title={title} popup={popup} />
      </Grid.Column>
      <Grid.Column width={11}>
        <Popup trigger={<h4>PRIMARY READING</h4>} content={primarydata.primaryRollover} size='tiny' position='bottom left'  />
        <PrimaryReadings readings={readings.unitOne.primary}/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)}

export default CourseIntro;
