import React from 'react'
import { Grid,  Popup, Divider, Icon } from 'semantic-ui-react'
import SummerReading from './summerReading';
import KeyQuestions from './keyQuestions';
import Performance from './performance';
import { popSize, style } from '../../utils/utils';
import {performanceData, performanceRollover, summerData, keyQuestions, keyRollover, firstDay} from '../../fixtures/summerPerformanceData';


const CourseSummerPerformance = () => {


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
            <Popup trigger={title} content={popup} size={popSize} style={style} inverted/>
          )
    
          return template;
    
      
      } // end handle()
    



return (
  <Grid >
    <Grid.Row>
      <Grid.Column width={5}>
      <div><h4 className="caps">Summer Reading</h4></div>
      
      <SummerReading books={summerData} /> 

      <div>{ handlePopup('Key Questions', keyRollover) }</div>
      
      <KeyQuestions questions={keyQuestions} /> 
      </Grid.Column>

   

      <Grid.Column width={11}>
      <div>{ handlePopup('Performance', performanceRollover) }</div>
      <Performance content={performanceData}/>
      <Divider />
      
      <div><p><strong>First Day: </strong> {firstDay}</p>
      <Divider />
      
      </div>
     


      </Grid.Column>
     
    
      

    </Grid.Row>

  </Grid>
)}

export default CourseSummerPerformance;
