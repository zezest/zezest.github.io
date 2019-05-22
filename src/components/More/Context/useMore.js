import { useContext } from 'react'

import { MoreContext } from './index'

const useMore = () => {
  const [state, setState] = useContext(MoreContext)

  function toggleMenu(bool) {
    if (state.active === bool) return
    setState(state => ({
      ...state,
      active: bool,
    }))
  }

  function setKeyword(value) {
    setState(state => ({
      ...state,
      keyword: value,
    }))
  }

  function removeKeyword() {
    setState(state => ({
      ...state,
      keyword: '',
    }))
  }

  return {
    ...state,
    toggleMenu,
    setKeyword,
    removeKeyword,
  }
}

export default useMore

