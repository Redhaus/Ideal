import React from 'react'
import { Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';


class LexisResults extends React.Component {


    applicationList = (app) => {

        return app.map((item, key) => {
            const list = (
                <li key={key}>{item}</li>
            )
            return list;
        })

    }



    renderList = (lexis) => {

        return lexis.map((item, key) => {

            const wordGuide = (
                <div key={key} className="top-padding">
                    <h3>{item.word} {item.pos}</h3>

                    {item.variation 
                        ? <div><p><strong>variations</strong></p>
                        <ul>{this.applicationList(item.variation)}</ul></div>
                        : ''
                    }
                    
                    

                    <p><strong>etymology</strong></p>
                    <p>{item.application}</p>

                    <p><strong>quote</strong></p>
                    <p>{item.quote}</p>

                    <p>{item.author} | {item.book}</p>

                    <p><strong>application</strong></p>
                    <ul>
                    {this.applicationList(item.application)}
                    </ul>

                    <p><strong>key questions</strong></p>
                    <ul>
                    {this.applicationList(item.questions)}
                    </ul>
                    <Divider />


                </div>
            )

            return wordGuide;

        });  // close your map
    };  // close renderList

    render() {
        
        return (
            <div>{this.renderList(this.props.lexisSelect)}</div>
        );
    }
}



const mapStateToProps = state => {
    return ({
      // lexis: getVisibility(state.lexis, state.lexisFilterReducer, state.lexisSelectedReducer),
      lexisSelect: state.lexisSelect,
      lexisFilter: state.lexisFilterReducer,
      lexisSelectedReducer: state.lexisSelectedReducer
  
    })
  }

export default connect(mapStateToProps)(LexisResults)


