import React from 'react';
import './UserCourse.scss';
import { connect } from 'react-redux';
import { ImageApi } from '../../../../Api/ImageApi';
import { useNavigate } from 'react-router-dom';
import { joinedCourse } from '../../../../action';

const UserCourses = (props) => {
  const navigate = useNavigate();
  const course = props.course;
  console.log(course);

  function createMarkup(text) {
    return {
      __html: `${text}`,
    }
      ;
  };

  const ren = course.joined.filter(i => i === props.user._id);

  console.log(ren);

  const joinedFunc = () => {
    console.log('click');
    const formData = new FormData();

    const user = props.user;

    formData.append('user', user._id);
    props.joinedCourse(course._id, formData);
    navigate('/student/courses');
  };


  return (
    <div className="userCourses">
      <div className="container_user_courses">
        <div className="item_user_course">
          <div className="img_user_course ">
            <img src={`${ImageApi}${course.image_path}`} alt="png" />
          </div>
          <h2>{course.title}</h2>
          <a href={course.link} target="_blank" rel="noreferrer">link</a>
          <div dangerouslySetInnerHTML={createMarkup(course.text)} className="create_markup" />


          <div>
            {
              ren.length > 0 ? <button type="button" className="btn btn-info"
                                       onClick={() => navigate('/student/courses/test')}> Test </button> :
                <button type="button" className="btn btn-success"
                        onClick={joinedFunc}>Joined</button>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.selectedCourse,
    user: state.user,
  };
};

export default connect(mapStateToProps, { joinedCourse })(UserCourses);