import React from 'react';
import { Grid, Popup,  Header, Icon } from 'semantic-ui-react';
import { style, popSize, iconColor, iconSize } from '../../utils/utils';


const SummerReading = (props) => {


    const renderReading = (list) => {

        return list.map( (item, key) => {

            const title = (
                <Grid.Column >
                <div className="summer-reading">
                <Header as='h4'>
                 {item.level}
                <Header.Subheader className="summer-title">
                    {item.title} <a href={item.link} target='blank'>  <Icon name='book' className="icon-right" link color={iconColor} size={iconSize}/></a>
                </Header.Subheader>
                <Header.Subheader className="summer-author">
               {item.author} 
                </Header.Subheader>
                
              </Header>
                   
                  
                    </div>
                </Grid.Column>   
            )
                
            const popup = (
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.rollover}</p>
                 </div>
            )
                
            const template = (
                <Popup key={key} trigger={title} content={popup} size={popSize} style={style} inverted/>
            )

            return template;

        })

    }
    

    

        return(
            <div className="top-padding">
                <Grid>
                <Grid.Row columns={1}>
                {renderReading(props.books)}
                </Grid.Row>
                </Grid>

            </div>
        )

};

export default SummerReading;
