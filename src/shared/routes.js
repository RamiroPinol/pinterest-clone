// @flow

export const HOME_PAGE_ROUTE = '/'
export const MY_PROJECTS_ROUTE = '/my-projects'
export const SAVED_PROJECTS_ROUTE = '/saved-projects'
export const PROFILE_PAGE_ROUTE = '/profile'
export const LOGOUT_PAGE_ROUTE = '/logout'
export const USER_PAGE_ROUTE = '/user'

export const AUTH_TWITTER = '/auth/twitter'
export const AUTH_TWITTER_CALLBACK = '/auth/twitter/callback'
export const AUTH_GOOGLE = '/auth/google'
export const AUTH_GOOGLE_CALLBACK = '/auth/google/callback'
export const AUTH_GITHUB = '/auth/github'
export const AUTH_GITHUB_CALLBACK = '/auth/github/callback'

export const ADD_PROJECT_ROUTE = '/api/projects/add-project'
export const GET_PROJECTS_ROUTE = '/api/projects/get-projects'
export const EDIT_PROJECT_ROUTE = (project: string) => `/api/projects/edit-project/${project}`
export const PIN_PROJECT_ROUTE = (project: string, user: string) => `/api/projects/pin-project/${project}/${user}`
export const DELETE_PROJECT_ROUTE = (project: string) => `/api/projects/delete-project/${project}`

export const ADD_PROFILE_ROUTE = 'api/profile/add-profile'
export const GET_USER_ROUTE = (user: string) => `/api/profile/${user}`
