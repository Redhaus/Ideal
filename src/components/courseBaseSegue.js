import React from 'react'
import { Grid } from 'semantic-ui-react'
import BaseGoals from '../components/baseGoals';
import baseGoalsData from '../fixtures/baseGoalsData';


const CourseBaseSegue = () => {



return (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={5}>
      <h4>Base Goals</h4>
      <BaseGoals goals={baseGoalsData} />
        
      </Grid.Column>
      <Grid.Column width={11}>
      <h4>Segue to Next Unit</h4>
        
      </Grid.Column>
    </Grid.Row>

  </Grid>
)}

export default CourseBaseSegue;
