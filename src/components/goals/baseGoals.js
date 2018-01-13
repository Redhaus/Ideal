import React from 'react';
import { Grid, Popup } from 'semantic-ui-react';
import { handleOnClick, style, popSize } from '../../utils/utils';


const BaseGoals = (props) => {


    const renderGoals = (goals) => {

        // <Checkbox label={item.title} desc={item.goal} onClick={handleOnClick} /> 
        
        return goals.map( (item, key) => {

            const title = (
                <Grid.Column >
                    <div className="base-goals">
                    <span onClick={handleOnClick}>{item.title}</span>
                    </div>
                </Grid.Column>   
            )
                
            const popup = (
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.goal}</p>
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
                {renderGoals(props.goals.unitOne)}
                </Grid.Row>
                </Grid>

            </div>
        )

};

export default BaseGoals;
