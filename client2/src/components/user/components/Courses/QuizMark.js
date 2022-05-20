import React, { useState } from 'react';
import Quiz from 'react-quiz-component';
import { connect } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { completeCourse } from '../../../../action';


const QuizMark = (props) => {
  const [quiz, setQuiz] = useState(JSON.parse(props.course.quiz));
  const navigate = useNavigate();
  const pathName = props.pathName;


  const unCompleted = () => {
    if (window.location.pathname.toString().includes('admin')) {
      console.log('admin');
      navigate(`/admin/courses/view/${props.course._id}`);
    } else if (window.location.pathname.toString().includes('teacher')) {
      console.log('teacher');
      navigate(`/teacher/courses/view/${props.course._id}`);
    } else if (window.location.pathname.toString().includes('student')) {
      console.log('user');
      navigate(`/student/courses/view`);
    } else {
      console.log('else');
    }
  };

  const completed = () => {
    const id = props.user._id;
    const course = props.course._id;
    const formData = new FormData();
    formData.append('course', course);
    props.completeCourse(id, formData);
    if (window.location.pathname.toString().includes('admin')) {
      console.log('admin');
      navigate(`/admin/courses/view/${props.course._id}`);
    } else if (window.location.pathname.toString().includes('teacher')) {
      console.log('teacher');
      navigate(`/teacher/courses/view/${props.course._id}`);
    } else if (window.location.pathname.toString().includes('student')) {
      console.log('user');
      navigate(`/student/courses/view`);
    } else {
      console.log('else');
    }
  };

  const renderCustomResultPage = (obj) => {
    console.log(obj);

    const foiz = Math.ceil((100 / obj.numberOfQuestions) * obj.numberOfCorrectAnswers);

    console.log(foiz);

    return (<Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column',
    }}>
      <Typography variant="h4" textAlign="center">
        Test natijalari
      </Typography>
      <Typography variant="h5">
        Test savollarining soni - <span style={{ fontWeight: '700' }}> {obj.numberOfQuestions}</span>
      </Typography>
      <Typography variant="h5">
        To'g'ri javoblar soni - <span style={{ fontWeight: '700' }}> {obj.numberOfCorrectAnswers}</span>
      </Typography>
      <Typography variant="h5">
        O'tish balli >= <span style={{ fontWeight: '700' }}> 70%</span>
      </Typography>
      <Typography variant="h5">
        O'zlashtirish ko'rsatgichi - <span style={{ fontWeight: '700' }}> {foiz}%</span>
      </Typography>
      {foiz < 71 ? <Box>
        <Typography variant="h4" sx={{
          backgroundColor: 'red', width: '100%', padding: '15px 15px', fontSize: '25px', color: '#fff',
        }}>Siz test topshira olmadingiz</Typography>

        <button type="button" className="btn btn-primary" onClick={() => unCompleted()}> Testni yakunlash</button>
      </Box> : <Box>
        <Typography variant="h4" sx={{
          backgroundColor: 'green', width: '100%', padding: '15px 15px', fontSize: '25px', color: '#fff',
        }}>Siz testni muvaffaqiyatli topshirdingiz</Typography>
        <button type="button" className="btn btn-primary" onClick={() => completed()}> Testni yakunlash</button>
      </Box>}
    </Box>);
  };


  const setQuizResult = (obj) => {
    console.log(obj);

    // YOUR LOGIC GOES HERE
  };
  return (<Box sx={{
    width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
  }}>
    {quiz ? <Quiz quiz={quiz} shuffle={true} onComplete={setQuizResult} showDefaultResult={false}
                  customResultPage={renderCustomResultPage}

      />

      : <Typography> Iltimos avval test savollarini kiriting !!!</Typography>}


  </Box>);
};

const mapStateToProps = (state) => {
  return {
    course: state.selectedCourse, user: state.user,
  };
};


export default connect(mapStateToProps, { completeCourse })(QuizMark);