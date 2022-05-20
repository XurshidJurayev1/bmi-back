import './single.scss';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ImageApi } from '../../../../Api/ImageApi';
import { deleteQuiz } from '../../../../action';


const CoursesSingle = (props) => {
  const navigate = useNavigate();

  console.log(props);

  function createMarkup(text) {
    return { __html: `${text}` };
  }

  const users = props.users;
  const owner = users.filter(user => user._id === props.item.owner);
  console.log(owner);
  const categ = props.categories.filter(category => category._id === props.item.category_id);

  const deleteFunc = () => {
    props.deleteQuiz(props.item._id);
    navigate('/admin/courses');
  };


  return (
    <div className="single">

      <div className="top">
        <div className="left">
          <Link to="/admin/courses/edit" className="editButton">Edit</Link>
          <h1 className="title">Course</h1>
          <div className="item">
            <img
              src={`${ImageApi}${props.item.image_path}`}
              alt=""
              className="CourseImg"
            />
            <div className="details">
              <h1 className="itemTitle">Title: {props.item.title} </h1>
              <div className="detailItem">
                <span className="itemKey">link: </span>
                <span className="itemValue">{props.item.link}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Content: </span>
                <span className="itemValue">
                  <div dangerouslySetInnerHTML={createMarkup(props.item.text)} />
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">owner: </span>
                <span className="itemValue">{owner && owner[0].first_name}</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">category: </span>
                <span className="itemValue">{categ[0].name}</span>
              </div>
              {
                props.item.quiz &&

                <>
                  <div className="detailItem">
                    <Link className="btn btn-outline-primary" to="/admin/courses/quiz/quiz">Go Quiz</Link>
                  </div>
                  <div className="detailItem">
                    <button className="btn btn-outline-danger" onClick={() => deleteFunc()}>Delete
                      Quiz
                    </button>
                  </div>
                </>

              }

              <div className="detailItem">
                <Link className="btn btn-primary" to="/admin/courses/quiz/add">Add Quiz</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.selectedCourse,
    users: state.getUser,
    categories: state.listCategory,
  };
};

export default connect(mapStateToProps, { deleteQuiz })(CoursesSingle);
