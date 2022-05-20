import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {
  userSingle,
  addNews,
  listNews,
  deleteNews,
  getUser,
  deleteUser,
  upadetUser,
  listCategory,
  createCategory, selectCategory, getCourses, selectedCourse,
} from './adminRed';
import {
  register,
  token,
  user,
  role,
  userEdit,
  userContactSend,
  listContact,
  selectContact,
  viewsNews, joined,
} from './userRed';


const rootReducer = combineReducers({
  form: formReducer,
  viewsNews,
  selectedCourse,
  getCourses,
  userSingle,
  addNews,
  listNews,
  deleteNews,
  getUser,
  deleteUser,
  upadetUser,
  listCategory,
  createCategory,
  selectCategory,
  register,
  token,
  user,
  role,
  userEdit,
  userContactSend,
  listContact,
  selectContact,
  joined,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));