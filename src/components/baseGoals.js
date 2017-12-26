import React from 'react';
import { Grid, Popup, Checkbox } from 'semantic-ui-react';
import { handleOnClick } from '../utils/utils';


const BaseGoals = (props) => {


    const renderGoals = (goals) => {

        return goals.map( (item, key) => {

            const title = (
                <Grid.Column >
                    <div className="base-goals">
                    <Checkbox label={item.goal} desc={item.standards} onClick={handleOnClick} /> 
                    </div>
                </Grid.Column>   
            )
                
            const popup = (
                <div>
                    <h4>Common Core Standards</h4>
                    <p>{item.standards}</p>
                 </div>
            )
                
            const template = (
                <Popup key={key} trigger={title} content={popup} size='tiny' />
            )

            return template;

        })

    }
    

    

        return(
            <div>
                <Grid>
                <Grid.Row columns={1}>
                {renderGoals(props.goals.unitOne)}
                </Grid.Row>
                </Grid>

            </div>
        )

};

export default BaseGoals;
