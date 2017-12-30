import React from 'react'
import { Grid,  Popup, Card } from 'semantic-ui-react'
import SummerReading from '../../components/performance/summerReading';
import KeyQuestions from '../../components/performance/keyQuestions';
import { popSize, style } from '../../utils/utils';
import {performanceData, performanceRollover, summerData, keyQuestions, keyRollover, firstDay} from '../../fixtures/summerPerformanceData';


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
      <div><h4>Summer Reading</h4></div>
      <SummerReading books={summerData} /> 

      <div>{ handlePopup('Key Questions', keyRollover) }</div>
      <KeyQuestions questions={keyQuestions} /> 
      </Grid.Column>

   

      <Grid.Column width={11}>
      <div>{ handlePopup('Performance', performanceRollover) }</div>
      <Card.Group itemsPerRow={3} items={performanceData} className="performance-list"/>


      <div><p><strong>First Day: </strong> {firstDay}</p>
      
      </div>
     


      </Grid.Column>
     
    
      

    </Grid.Row>

  </Grid>
)}

export default CourseSummerPerformance;
