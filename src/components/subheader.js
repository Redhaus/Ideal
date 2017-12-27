import React from 'react';
import { Grid, Popup } from 'semantic-ui-react';
import primarydata from '../fixtures/primaryData';


const SubHeader = () => {

  const title = (
    <p><strong>Prior Knowledge:</strong>{primarydata.knowledge}</p>
  )
  
  const popup = (
    <div>
    <h4>{primarydata.knowledge}</h4>
    <p>{primarydata.knowledgeRollover}</p>
    </div>
  )


return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
            <h5>{primarydata.unit}</h5>
        </Grid.Column>
        <Grid.Column width={11} textAlign='right'>
            <Popup trigger={title} content={popup} size="tiny"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  
  )
}

export default SubHeader;
