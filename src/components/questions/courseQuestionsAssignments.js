import React from 'react'
import { Grid, Form } from 'semantic-ui-react'

const CourseQuestionsAssignments = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={5}>

        <Form>
        <h4 className="caps">Key Questions</h4>
            <Form.Field control='textarea'  />
        </Form>


      </Grid.Column>
      <Grid.Column width={11}>

        <Form>
        <h4 className="caps">Assignments</h4>
          
            <Form.Field control='textarea'  />
        </Form>

      </Grid.Column>
    </Grid.Row>

  </Grid>
)

export default CourseQuestionsAssignments;



