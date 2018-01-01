import React from 'react'
import { Grid, Icon, Popup, Divider, Card } from 'semantic-ui-react'
import Extensions from './extensions';
import { style } from '../../utils/utils';
import {extensions, extensionsRollover} from '../../fixtures/extensionsData';
import { continualData } from '../../fixtures/continualData';
import Goals from './goals';

const ExtensionsGoals = () => {



  const handlePopup = (header, data) => {
    
          const title = (
            <div>
            <h4 className="caps">{header} <Icon name='help circle outline' /></h4>
            </div>
          )
    
          const popup = (
            <div>
              <p>{data.rollover}</p>
            </div>
          )
    
          const template = (
            <Popup trigger={title} content={popup} size='small' style={style} inverted/>
          )
    
          return template;
    
      
      } // end handle()


return(
<div>
  <div width="30%">
  <Grid >
    <Grid.Row>
      <Grid.Column width={5}>
        {handlePopup('Extensions', extensionsRollover)}
        <Divider />
      <Extensions list={extensions} />
      </Grid.Column>


      </Grid.Row>

  </Grid>
  </div>

<div width="60%">
<Grid className="masonry" >
<Grid.Row columns={11}>

      <Grid.Column width={11}  >
      <Card.Group itemsPerRow={3} >
      <Goals list={continualData}/>
      </Card.Group >
      </Grid.Column>
    </Grid.Row>

  </Grid>
  </div>
  </div>
)
}

export default ExtensionsGoals;
