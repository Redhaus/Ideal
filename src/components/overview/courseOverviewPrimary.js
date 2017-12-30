import React from 'react'
import { Grid, Popup, Icon } from 'semantic-ui-react'
import CourseOverview from '../../components/overview/courseOverview';
import PrimaryReadings from '../../components/overview/primaryReadings';
import readings from '../../fixtures/readingData';
import primarydata from '../../fixtures/primaryData';
import { style, popSize } from '../../utils/utils';

const CourseIntro = () => {

const title = (
    <h2>{primarydata.title}</h2>
)

const popup = (
    <div>
    <h4>{primarydata.title} </h4>
    <p>{primarydata.titleRollover}</p>
    </div>
)

return (
  <Grid>
    <Grid.Row>
      <Grid.Column width={5}>
        <h4>{primarydata.category}</h4> 
        <CourseOverview title={title} popup={popup} />
      </Grid.Column>
      <Grid.Column width={11}>
        <Popup trigger={<h4 className="title">PRIMARY READING <Icon name='help circle outline'  /></h4>} content={primarydata.primaryRollover}  position='bottom left' size={popSize} style={style} inverted/>
        <PrimaryReadings readings={readings.unitOne.primary}/>
      </Grid.Column>
    </Grid.Row>

  </Grid>
)}

export default CourseIntro;
