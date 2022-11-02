/* eslint-disable import/no-anonymous-default-export */
import { mergeDeep } from 'utils'
import MuiButton from './MuiButton'

export default function overrides(theme) {
  return mergeDeep(
    MuiButton(theme)
    // other components separated with a comma
  )
}
