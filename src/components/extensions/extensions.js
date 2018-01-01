import React from 'react'
import { Grid, Checkbox, Popup, Icon } from 'semantic-ui-react'
import { handleOnClick, style, iconSize, iconColor, popSize } from '../../utils/utils';
import renderHTML from 'react-render-html';

const Extensions = (props) => {


  const handleList = (list) => {

    return list.map((item, key) => {

      const ext = renderHTML(item.ext)

      const title = (
        <Grid.Column key={key}>
          <div className="extensions">
            <Checkbox label={ext} desc={item.rollover} onClick={handleOnClick} />
            {item.link ? <a href={item.link} target='blank' ><Icon size={iconSize} color={iconColor} name='book' link className="icon-right" /></a> : ''}
          </div>
        </Grid.Column>
      )

      const popup = (
        <div>
          {item.callout ? <h4>{item.callout}</h4> : '' }
          <p>{item.rollover}</p>
        </div>
      )

      const template = (
        <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted />
      )

      if (item.rollover) {
        return template;
      } else {
        return title;
      }

    })

  }


  return (
    <div className="top-padding">
      <Grid>
        <Grid.Row columns={1}>
          {handleList(props.list)}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Extensions;