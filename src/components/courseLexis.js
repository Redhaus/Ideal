import React from 'react'
import { Grid, Checkbox} from 'semantic-ui-react'

const CourseLexis = () => (
  <Grid>


    <Grid.Row columns={2}>
      <Grid.Column>
       
       <Checkbox label='Apollo' />
       <Checkbox label='abstract' />
       <Checkbox label='alliteration' />
       <Checkbox label='allusion' />
       

      </Grid.Column>

      <Grid.Column>

      <Checkbox label='Dionysus' />
      <Checkbox label='antagonist' />
      <Checkbox label='archetype' />
      <Checkbox label='context' />

      </Grid.Column>

    </Grid.Row>
  </Grid>
)

export default CourseLexis;