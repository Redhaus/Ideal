import React from 'react';
import { Grid, Checkbox } from 'semantic-ui-react';
import { handleOnClick } from '../../utils/utils';


const Performance = (props) => {


    const renderContent = (content) => {

        return content.map( (item, key) => {

            const title = (
                <Grid.Column key={key}>
                
                    <div className="performance">
                    <h4><Checkbox label={item.header} onClick={handleOnClick} /></h4>
                    <div>{item.description}</div>
                    </div>
                </Grid.Column>   
            )
                        

            return title ;

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
