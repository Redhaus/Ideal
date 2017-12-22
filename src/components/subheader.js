import React from 'react';
import { Grid } from 'semantic-ui-react';


const SubHeader = () => (
    <Grid padded>
      <Grid.Row>
        <Grid.Column width={5}>
            <h5>UNIT 1</h5>
        </Grid.Column>
        <Grid.Column width={11}>
            <p><strong>Prior Knowledge:</strong> Greek and Roman Mythology</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  
  )

export default SubHeader;
