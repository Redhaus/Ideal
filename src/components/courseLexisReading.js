import React from 'react'
import { Grid } from 'semantic-ui-react'
import CourseLexis from '../components/courseLexis';
import CourseFurtherReadings from '../components/courseFurtherReading';

const CourseLexisReading = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <CourseLexis/>
      </Grid.Column>
      <Grid.Column width={11}>
        <CourseFurtherReadings/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default CourseLexisReading;
