import React from 'react'
import { Grid, Popup, Icon } from 'semantic-ui-react'
import { style, popSize } from '../../utils/utils';
import Skills from './skills';

const FinalGoals = (props) => {

  const handleList = (list) => {

    // const skillList;
    return list.map((item, key) => {

      const title = (
        <Grid.Column>
          <div className="goals">
            <h5>{item.goal} <Icon name='help circle outline' size="tiny"/> </h5>
          </div>
        </Grid.Column>
      )


      const popup = (
        <div>
          <p>{item.description}</p>
        </div>
      )

      const template = (
        <Grid.Column key={key} className="skills" >
          <Popup trigger={title} content={popup} size={popSize} style={style} inverted />
          <Skills skills={item.skills} />
        </Grid.Column >
      )

      return template;

    })

  }


  return (
    <div className="top-padding masonry ">
      {handleList(props.list)}
    </div>
  )
}

export default FinalGoals;