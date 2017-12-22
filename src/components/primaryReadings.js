import React from 'react'
import { Grid, Checkbox} from 'semantic-ui-react'

const PrimaryReadings = () => (
  <Grid>


    <Grid.Row columns={3}>
      <Grid.Column>
        <p>Beginner</p>
        <h4>Homer 850BCE-800BCE</h4>
        <em><Checkbox label='The Odyssey translated by Ian Johnston' /></em>

      </Grid.Column>
      <Grid.Column>
        <p>Intermediate</p>
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='The Odyssey' />

      </Grid.Column>
      <Grid.Column>
        <p>Advanced</p>
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='Metamorphoses' />
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='Tales from Ovid' />

      

      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default PrimaryReadings;