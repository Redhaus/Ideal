import React, { Component } from 'react'
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Button } from 'semantic-ui-react';
import SubHeader from '../../components/header/subheader';
import CourseOverviewPrimary from '../../components/overview/courseOverviewPrimary';
import CourseLexisReading from '../../components/lexis/courseLexisReading';
import CourseQuestionsAssignments from '../../components/questions/courseQuestionsAssignments';
import CourseBaseSegue from '../../components/goals/courseBaseSegue';
import CourseSummerPerformance from '../../components/performance/courseSummerPerformance';
import ExtensionsGoals from '../../components/extensions/extensionsGoals';
import { Image, Button, Sidebar, Menu, Icon } from 'semantic-ui-react';
import imgHeader from '../../images/survey1header.png';
import Footer from '../../components/footer/footer';
import LexisResults from '../../components/results/lexisResults';

import { saveSelection } from '../../actions/action' //maybe move

class Home extends Component {


  state = { visible: false }
  toggleVisibility = () => this.setState(() => ({
    visible: !this.state.visible
  })
  );



  render() {

    const { visible } = this.state


    return (
      
      
      <div>
        <Sidebar.Pushable >



          <Sidebar
            as={Menu}
            animation='uncover'
            width='wide'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
          <Icon name="close"  size='big' link  onClick={this.toggleVisibility}/>
          
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
        </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
        </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
        </Menu.Item>
          </Sidebar>



          <Sidebar.Pusher>



            <div className="full-body">

              <div className="ui nav">
                <div className="ui container">
                  <SubHeader />
                </div>
              </div>

              <div className="ui container">
                <Image src={imgHeader} fluid />

                <div className="background">
                  <CourseOverviewPrimary />
                  <CourseLexisReading saveSelection={this.props.saveSelection}/>
                  <CourseQuestionsAssignments />
                  <CourseBaseSegue />
                  <CourseSummerPerformance />
                  <ExtensionsGoals />

                  <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                  
                  <div>
                    <h4>LEXIS RESULTS</h4>
                    <LexisResults />


                  </div>

                  <Footer />
                </div>

              </div>
              </div>
              

          </Sidebar.Pusher>

          </Sidebar.Pushable>
      </div>


        )

  }
}

const mapStateToProps = state => ({

  
    word: state.lexis.word,
    def: state.lexis.def, 
    selected: state.lexis.selected
  


  //         count: state.counter.count,
  // isIncrementing: state.counter.isIncrementing,
  // isDecrementing: state.counter.isDecrementing
})

// const mapDispatchToProps = function (dispatch) {
//   return bindActionCreators({
//     saveSelection: actionCreators.saveSelection,
//   }, dispatch)
// }

const mapDispatchToProps = (dispatch) => ({
  
      saveSelection: bindActionCreators(saveSelection, dispatch)
  
})

// const mapDispatchToProps = dispatch => bindActionCreators({

//   //         increment,
//   //       incrementAsync,
//   // decrement,
//   // decrementAsync,
//   // changePage: () => push('/about-us')
// }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)






// // import React, {Component} from 'react'
// // import {Sidebar, Segment, Button, Menu,  Icon, Header } from 'semantic-ui-react'

// class SidebarOverlay extends Component {
//   state = { visible: false }

//   toggleVisibility = () => this.setState({ visible: !this.state.visible })

//   render() {
//     const { visible } = this.state
//     return (
//       <div>
//         <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
//         <Sidebar.Pushable >



//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             width='thin'
//             direction='right'
//             visible={visible}
//             icon='labeled'
//             vertical
//             inverted
//           >
//             <Menu.Item name='home'>
//               <Icon name='home' />
//               Home
//             </Menu.Item>
//             <Menu.Item name='gamepad'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item name='camera'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//           </Sidebar>



//           <Sidebar.Pusher>


//         //ADDD CONTENT HERE 


//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </div>
//     )
//   }
// }

// export default SidebarOverlay;
