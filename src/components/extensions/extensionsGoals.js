import React from 'react'
import { Grid, Icon, Popup } from 'semantic-ui-react'
import Extensions from './extensions';
import { style } from '../../utils/utils';
import { extensions, extensionsRollover } from '../../fixtures/extensionsData';
import { continualData, continualRollover } from '../../fixtures/continualData';
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
      <Popup trigger={title} content={popup} size='small' style={style} inverted />
    )

    return template;

  } // end handle()


  return (

    <Grid>
      <Grid.Row>
        <Grid.Column width={5}>
          {handlePopup('Extensions', extensionsRollover)}
          <Extensions list={extensions} />
        </Grid.Column>

        <Grid.Column width={11} >

          {handlePopup('Continual Goals', continualRollover)}
          <Goals list={continualData} />

        </Grid.Column>



      </Grid.Row>
    </Grid>

  )
}

export default ExtensionsGoals;
