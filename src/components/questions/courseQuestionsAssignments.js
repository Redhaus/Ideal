import React from 'react'
import { Grid, Form } from 'semantic-ui-react'

const CourseQuestionsAssignments = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={5}>

        <Form>
            <Form.Field label='Key Questions' control='textarea'  />
        </Form>


      </Grid.Column>
      <Grid.Column width={11}>

        <Form>
            <Form.Field label='Assignments' control='textarea'  />
        </Form>

      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default CourseQuestionsAssignments;



