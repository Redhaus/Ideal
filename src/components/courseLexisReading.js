import React from 'react'
import { Grid } from 'semantic-ui-react'
import CourseLexis from '../components/courseLexis';
import CourseFurtherReadings from '../components/courseFurtherReading';
import lexisOne from '../fixtures/lexisData';
import readings from '../fixtures/readingData';

const CourseLexisReading = () => {


return(
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
        <CourseLexis words={lexisOne}/>
      </Grid.Column>
      <Grid.Column width={11}>
        <CourseFurtherReadings readings={readings.unitOne.further.category}/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)
}

export default CourseLexisReading;
