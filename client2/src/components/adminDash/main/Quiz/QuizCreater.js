import React, { useState } from 'react';
import './QuizCreater.scss';
import { connect } from 'react-redux';
import { quizApi } from '../../../../action';
import { QuizAdd } from '../../../../Api/QuizAdd';


const state = {
  id: Date.now() + Math.random(),
  question: '',
  questionType: 'text',
  answerSelectionType: 'single',
  answers: [],
  correctAnswer: '',
  messageForCorrectAnswer: 'Correct answer. Good job.',
  messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
  explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  point: '1',
};
const QuizCreater = (props) => {
  const [quiz, setQuiz] = useState({
    quizTitle: '', quizSynopsis: '', nrOfQuestions: '', questions: [],
  });
  const [answer, setAnswer] = useState([]);
  const [questionsArr, setQuestionsArr] = useState([]);
  const [helper, setHelper] = useState(state);

  const removeAnswer = () => {

  };

  const pushAnswer = () => {

  };

  const addQuestion = () => {

  };
  const changeHandler = () => {

  };
  const removeQuestion = () => {

  };
  const onSubmit = () => {

  };
  const asd = () => {

  };


  return (<div className="quiz-creater">
    {/*<div className="top">*/}
    {/*  <h1>Add Quiz</h1>*/}
    {/*</div>*/}
    {/*<form className="form">*/}
    {/*  <div className="quiz-title">*/}
    {/*    <div className="detail">*/}
    {/*      <p>Test sarlavhasi :</p>*/}
    {/*      <input type="text" value={quiz.quizTitle}*/}
    {/*             onChange={(e) => setQuiz({ ...quiz, quizTitle: e.target.value })} />*/}
    {/*    </div>*/}
    {/*    <div className="detail">*/}
    {/*      <p>Test haqida batafsil :</p>*/}
    {/*      <input type="text" value={quiz.quizSynopsis}*/}
    {/*             onChange={(e) => setQuiz({ ...quiz, quizSynopsis: e.target.value })} />*/}
    {/*    </div>*/}
    {/*    <div className="detail">*/}
    {/*      <p>Bajarilishi shart testlar soni :</p>*/}
    {/*      <input type="number" value={quiz.nrOfQuestions}*/}
    {/*             onChange={(e) => setQuiz({ ...quiz, nrOfQuestions: e.target.value })} />*/}
    {/*    </div>*/}
    {/*  </div>*/}

    {/*  <div className="added-test">*/}
    {/*    <hr />*/}
    {/*    <input type="text" value={helper.question}*/}
    {/*           onChange={(e) => setHelper({ ...helper, question: e.target.value })} />*/}

    {/*    <p>answers</p>*/}

    {/*    {*/}
    {/*      helper.answers.map((item, idx) => {*/}
    {/*        return (*/}
    {/*          <div key={idx}>*/}
    {/*            {item}*/}
    {/*            <br />*/}
    {/*            <button type="button" onClick={() => removeAnswer(item)}>remove</button>*/}
    {/*          </div>*/}
    {/*        );*/}
    {/*      })*/}
    {/*    }*/}
    {/*    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />*/}

    {/*    <button type="button" onClick={() => pushAnswer(answer)}>add answer</button>*/}
    {/*    <hr />*/}
    {/*    <button className="btn btn-outline-primary" type="button" onClick={() => addQuestion()}>*/}
    {/*      add question*/}
    {/*    </button>*/}
    {/*  </div>*/}


    {/*  {*/}
    {/*    questionsArr.map((ques, idx) => {*/}
    {/*      return (*/}
    {/*        <div key={idx}>*/}
    {/*          <input type="text" value={ques.question}*/}
    {/*                 onChange={(e) => changeHandler('question', e.target.value, ques.id)} />*/}

    {/*          <button onClick={() => removeQuestion(ques.id)}>remove question</button>*/}


    {/*        </div>*/}
    {/*      );*/}
    {/*    })*/}
    {/*  }*/}

    {/*  <button type="button" onClick={() => onSubmit()}>submit</button>*/}

    {/*</form>*/}
    <iframe src={QuizAdd} style={{
      width: '100%', minHeight: '100vh',
    }}>

    </iframe>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    item: state.selectedCourse, users: state.getUser, categories: state.listCategory,
  };
};

export default connect(mapStateToProps, { quizApi })(QuizCreater);