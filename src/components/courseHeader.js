import React from 'react'
import { Grid } from 'semantic-ui-react'
import CourseOverview from '../components/courseOverview';
import PrimaryReadings from '../components/primaryReadings';
import readings from '../fixtures/readingData';

const CourseIntro = () => {

const title = (
    <h2>Myth and Classical Archetypes</h2>
)

const popup = (
    <div>
    <h4>Header Title</h4>
    <p>The Unit Title and Unit Descriptor sets the required focus and must be followed to maintain uniformity and a scope and sequence across the guides.</p>
    <p>Examine the Unit Title and Descriptor for keywords that suggest the core of the unit. These keywords function like a thesis statement for the unit and should be returned to throughout the lessons.</p>
    </div>
)

// const style = {
//     // borderRadius: 0,
//     // opacity: 0.7,
//     // padding: '2em',
//     width: '40em' 
//   }


return (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <CourseOverview title={title} popup={popup} />
      </Grid.Column>
      <Grid.Column width={11}>
      <h4>PRIMARY READING</h4>
        <PrimaryReadings readings={readings.unitOne.primary}/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)}

export default CourseIntro;
