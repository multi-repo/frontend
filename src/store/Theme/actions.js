import { switchTheme } from './slice'

export const asyncSwitchTheme = () => async (dispatch) => {
  dispatch(switchTheme())
}
