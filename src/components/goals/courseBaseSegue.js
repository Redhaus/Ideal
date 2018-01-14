import React from 'react'
import { Grid, Popup, Icon } from 'semantic-ui-react'
import BaseGoals from './baseGoals';
import baseGoalsData from '../../fixtures/baseGoalsData';
import { segueData, quoteData, baseData } from '../../fixtures/quoteSegue';
import { style } from '../../utils/utils';
import UnitImage from './unitImage';
import strauss1 from '../../images/strauss1.jpg';
import strauss2 from '../../images/strauss2.jpg';
import strauss3 from '../../images/strauss3.jpg';
// import strauss3 from '../../images/strauss3.jpg';



const CourseBaseSegue = () => {

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
    <Grid >
      <Grid.Row>
        <Grid.Column width={5}>
          {handlePopup('Base Goals', baseData)}
          <BaseGoals goals={baseGoalsData} />
        </Grid.Column>

        <Grid.Column width={5}>
          {handlePopup('Segue to Next Unit', segueData)}
          <p className="top-padding"> {segueData.segue}</p>
        </Grid.Column>

        <Grid.Column width={6}>
          <UnitImage img1={strauss1} img2={strauss2} img3={strauss3} img='https://ichef.bbci.co.uk/images/ic/1200x675/p01jxvfv.jpg' quote={quoteData.quote} author={quoteData.author} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default CourseBaseSegue;
