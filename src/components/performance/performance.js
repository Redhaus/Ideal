import React from 'react';
import { Grid } from 'semantic-ui-react';


const Performance = (props) => {


    const renderContent = (content) => {

        return content.map( (item, key) => {

            const title = (
                <Grid.Column key={key}>
                    <div className="performance">
                    <h4>{item.header}</h4>
                    <div>{item.description}</div>
                    </div>
                </Grid.Column>   
            )
                
            return title;

        })

    }
    

    

        return(
            <div className="top-padding">
                <Grid>
                <Grid.Row columns={3}>
                {renderContent(props.content)}
                </Grid.Row>
                </Grid>

            </div>
        )

};

export default Performance;
