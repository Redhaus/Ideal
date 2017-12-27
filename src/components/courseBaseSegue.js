import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import BaseGoals from '../components/baseGoals';
import baseGoalsData from '../fixtures/baseGoalsData';
import { segueData, quoteData} from '../fixtures/quoteSegue';
// import UnitImage from '../components/unitImage';


const CourseBaseSegue = () => {


  // const handleSegue = (popup) => {
    
  //         const title = (
  //           <div className='primary-reading'>
  //           <h4>Base Goals</h4>
  //           </div>
  //         )
    
  //         const popup = (
  //           <div>
  //             <h4>{item.title}</h4>
  //             <p>{item.description}</p>
  //           </div>
  //         )
    
  //         const template = (
  //           <Popup key={key} trigger={title} content={popup} size='tiny' />
  //         )
    
  //         return template;
    
      
  //     } // end handle()
    



return (
  <Grid >
    <Grid.Row>
      <Grid.Column width={5}>
      <h4>Base Goals</h4>
      <BaseGoals goals={baseGoalsData} /> 
      </Grid.Column>

      <Grid.Column width={5}>
      <h4>Segue to Next Unit</h4>
      <p>{segueData.segue}</p>
      </Grid.Column>

      <Grid.Column width={6}>
      <Image src='https://ichef.bbci.co.uk/images/ic/1200x675/p01jxvfv.jpg' fluid rounded />
   
      <div >
      <p>"{quoteData.quote}"</p>
      <p>– {quoteData.author}</p>
      </div>
      </Grid.Column>
     
    
      

    </Grid.Row>

  </Grid>
)}

export default CourseBaseSegue;
