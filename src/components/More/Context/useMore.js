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

  return {
    ...state,
    toggleMenu,
  }
}

export default useMore

