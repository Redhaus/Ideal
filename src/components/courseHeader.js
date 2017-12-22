import React from 'react'
import { Grid } from 'semantic-ui-react'
import CourseOverview from '../components/courseOverview';
import CourseReadings from '../components/courseReadings';

const CourseIntro = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <CourseOverview/>
      </Grid.Column>
      <Grid.Column width={11}>
        <CourseReadings/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default CourseIntro;
