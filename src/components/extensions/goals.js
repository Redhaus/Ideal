import React from 'react'
import { Grid, Checkbox, Popup, Icon, Card } from 'semantic-ui-react'
import { handleOnClick, style, iconSize, iconColor, popSize } from '../../utils/utils';
import renderHTML from 'react-render-html';
import Skills from './skills';

const FinalGoals = (props) => {


  const handleList = (list) => {


    // const skillList;

    return list.map((item, key) => {

      // const skills = item.skills.map( (skill, key) => {

        
      //   return (
      //     <p key={key}>{skill}</p>
      //   )

      // })




  

      const title = (


        <Grid.Column>
          <div className="goals">
            <h5>{item.goal}</h5>
          </div>
        </Grid.Column>
      )


      const popup = (
        <div>
          <p>{item.description}</p>
        </div>
      )

      const template = (
      <Card fluid>
      
        <Grid.Column key={key} >
        <Popup  trigger={title} content={popup} size={popSize} style={style} inverted />
        <Skills skills={item.skills}/>
        </Grid.Column >
        </Card>
      )

      
        return template;
    
      



    })

  }


  return (



    <div className="top-padding">
    <Grid>
    <Grid.Row columns={3}>
    {handleList(props.list)}
    {/* </Card> */}
    {/* </Card.Group> */}
    
    </Grid.Row>
    </Grid>
    </div>

  )
}

export default FinalGoals;