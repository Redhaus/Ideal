import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { Button } from 'semantic-ui-react';
import SubHeader from '../../components/subheader';
import CourseOverviewPrimary from '../../components/courseOverviewPrimary';
import CourseLexisReading from '../../components/courseLexisReading';
import CourseQuestionsAssignments from '../../components/courseQuestionsAssignments';
import CourseBaseSegue from '../../components/courseBaseSegue';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
 
  <div>
  <SubHeader/>
  <CourseOverviewPrimary/>
  <CourseLexisReading/>
  <CourseQuestionsAssignments/>
  <CourseBaseSegue/>

  
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
