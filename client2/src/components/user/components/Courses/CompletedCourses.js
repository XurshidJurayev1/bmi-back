import React from 'react';
import { connect } from 'react-redux';
import { Container, ListItem, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const CompletedCourses = (props) => {

  const filter = props.list.filter(course => props.user.courses.map(item => course._id === item ? course : null));

  console.log(filter);
  return (<Container>
    <Typography variant="h5" className="mt-3 text-center">On Completed Courses</Typography>
    <Box>

      <Link to="/student/courses/completed"> <ListItem>sadasdasdas</ListItem></Link>
      <ListItem>sadasdasdas</ListItem>
      <ListItem>sadasdasdas</ListItem>
      <ListItem>sadasdasdas</ListItem>
      <ListItem>sadasdasdas</ListItem>
    </Box>
  </Container>)
    ;
};

const mapStateToProps = (state) => {
  return {
    user: state.user, list: state.getCourses,
  };
};

export default connect(mapStateToProps, {})(CompletedCourses);