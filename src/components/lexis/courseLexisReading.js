import React from 'react'
import { Grid } from 'semantic-ui-react'
import CourseLexis from './courseLexis';
import CourseFurtherReadings from './courseFurtherReading';
import lexisOne from '../../fixtures/lexisData';
import readings from '../../fixtures/readingData';

const CourseLexisReading = (props) => {

  // console.log('typelexis one: ', typeof lexisOne);
  // console.log(this.props)
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <CourseLexis words={lexisOne} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <CourseFurtherReadings readings={readings.unitOne.further.category} />
        </Grid.Column>
      </Grid.Row>



    </Grid>
  )
}

export default CourseLexisReading;
