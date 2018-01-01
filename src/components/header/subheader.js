import React from 'react';
import { Grid, Popup, Icon, Image, Dropdown } from 'semantic-ui-react';
import primarydata from '../../fixtures/primaryData';
import {style, popSize} from '../../utils/utils';
import logo from '../../images/Artboard 1.png';


const SubHeader = () => {

  const title = (
    <p> <Icon name='arrow left'  /><strong>  Prior Knowledge: </strong>{primarydata.knowledge} </p>
  )
  
  const popup = (
    <div>
    <h4>{primarydata.knowledge}</h4>
    <p>{primarydata.knowledgeRollover}</p>
    </div>
  )

  // import { eventOptions } from '../common'
  const eventOptions = [ { key: 'Event 1', value: 'Event 1', text: 'Event 1' }, 
                        { key: 'Event 2', value: 'Event 2', text: 'Event 2', disabled: true},
                        { key: 'Event 3', value: 'Event 3', text: 'Event 3', disabled: true }  ]


return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column className="top-padding" >
        <Popup trigger={title} content={popup} size={popSize} style={style} inverted/>
        </Grid.Column>
        
        <Grid.Column >
        <Image  centered src={logo} size='tiny' />
        </Grid.Column>

        <Grid.Column className="top-padding"  textAlign='right'>
        <Dropdown  placeholder="Event 1" options={eventOptions} />
        
        </Grid.Column>
      </Grid.Row>
    </Grid>
  
  )
}

export default SubHeader;
