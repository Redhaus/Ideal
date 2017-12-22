import React from 'react'
import { Grid, Checkbox, Popup} from 'semantic-ui-react'

const CourseFurtherReadings = () => {
    
    const title2 = (
        <div>
        <Checkbox label='The Odyssey translated by Ian Johnston' />
            
        </div>
    )

    const titlePopup2 = (
        <div>
        <h4>The Odyssey</h4>
        <p>Homer's Odyssey, composed in the eighth century BC, is the most influential 
            and most popular epic poem in our cultural traditions. The story of Odysseus' 
            adventures on his return home from the Trojan War has inspired the imaginations 
            of readers for centuries and has become an integral part of our civilization's 
            greatest artistic achievements, exerting its appeal on writers, painters, poets, 
            film makers, and others, right up to the present time. Ian Johnston's abridged 
            version of this magnificent poem, approximately one third the length of the original, 
            is based upon his acclaimed new translation of the entire work. </p>
        <p>Every line in the abridged text comes from Homer's poem, and a few short summary 
            comments are included to keep the narrative thrust of the action coherent. 
            This abridgment also has explanatory footnotes, a glossary of names and places, 
            a floor plan of Odysseus' palace, and a map of his route home. It thus serves as 
            an ideal entry into Homer's poem for those who do not have the time yet to tackle the full poem.</p>
        
        </div>
    )

    const style = {
       
        width: '30em' 
      }
    
    return(
  <Grid>


    <Grid.Row columns={3}>
      <Grid.Column>
        
        <p>Beginner</p>
        <h4>Homer 850BCE-800BCE</h4>
        <Popup trigger={title2} content={titlePopup2} size='tiny' width='huge' flowing style={style}/>
        
        

      </Grid.Column>
      <Grid.Column>
        <p>Intermediate</p>
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='The Odyssey' />

      </Grid.Column>
      <Grid.Column>
        <p>Advanced</p>
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='Metamorphoses' />
        <h4>Homer 850BCE-800BCE</h4>
        <Checkbox label='Tales from Ovid' />

      

      </Grid.Column>
    </Grid.Row>
  </Grid>
)}

export default CourseFurtherReadings;