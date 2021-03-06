// @flow

import {
  PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  GET_PROJECTS_SUCCESS,
  UPDATE_PROJECT_SUCCESS,
  DELETE_PROJECT_SUCCESS,
  PROJECT_FAILURE,
} from '../actions/projectActions'

const initialState = {
  loading: false,
  projects: [],
  error: {},
}

const projectsReducer = (
  state: { loading: boolean, projects: any[], error: any } = initialState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    case PROJECT_REQUEST:
      return Object.assign({}, state, { loading: true })
    case ADD_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        projects: [...state.projects, action.payload],
        loading: false,
      })
    case GET_PROJECTS_SUCCESS:
      return Object.assign({}, state, { projects: action.payload, loading: false })
    case UPDATE_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        // eslint-disable-next-line
        projects: state.projects.map(project => (project._id === action.payload._id) ? action.payload : project),
        loading: false,
      })
    case DELETE_PROJECT_SUCCESS:
      return Object.assign({}, state, {
        projects: state.projects.filter(project => project._id !== action.payload),
        loading: false,
      })
    case PROJECT_FAILURE:
      return Object.assign({}, state, { error: action.payload, loading: false })
    default:
      return state
  }
}

export default projectsReducer
