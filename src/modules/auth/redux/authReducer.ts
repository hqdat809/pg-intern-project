import { ActionType, createCustomAction, getType } from 'typesafe-actions'
import { AuthToken, IUserLogin } from '../../../models/user'

export interface AuthState {
  auth?: AuthToken
  user?: IUserLogin
}

export const setAuthorization = createCustomAction('auth/setAuthorization', (data: AuthToken) => ({
  data,
}))

export const setUserInfo = createCustomAction('auth/setUserInfo', (data: IUserLogin) => ({
  data,
}))

export const removeUserInfo = createCustomAction('auth/removeUserInfo')

const actions = { setAuthorization, setUserInfo, removeUserInfo }

type Action = ActionType<typeof actions>

export default function reducer(state: AuthState = {}, action: Action) {
  switch (action.type) {
    case getType(setAuthorization):
      return { ...state, auth: action.data }
    case getType(setUserInfo):
      return { ...state, user: action.data }
    case getType(removeUserInfo):
      return { ...state, user: {} }
    default:
      return state
  }
}
