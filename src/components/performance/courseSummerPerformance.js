import React from 'react'
import { Grid, Image, Popup } from 'semantic-ui-react'
import BaseGoals from '../../components/baseGoals';
import baseGoalsData from '../../fixtures/baseGoalsData';
import { segueData, quoteData, baseData} from '../../fixtures/quoteSegue';
import { popSize } from '../../utils/utils';


const CourseSummerPerformance = () => {


  const handlePopup = (header, data) => {
    
          const title = (
            <div>
            <h4>{header}</h4>
            </div>
          )
    
          const popup = (
            <div>
              <p>{data.rollover}</p>
            </div>
          )
    
          const template = (
            <Popup trigger={title} content={popup} size={popSize} style={style} inverted/>
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
      <Image src='https://ichef.bbci.co.uk/images/ic/1200x675/p01jxvfv.jpg' fluid rounded />
   
      <div  className="top-padding">
      <p>"{quoteData.quote}"</p>
      <p>– {quoteData.author}</p>



    

      </div>
      </Grid.Column>
     
    
      

    </Grid.Row>

  </Grid>
)}

export default CourseSummerPerformance;
