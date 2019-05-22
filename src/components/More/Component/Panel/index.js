import React from 'react'

import { MoreContext } from '../../Context'
import useMore from '../../Context/useMore'

import Search from '../Search'
import Menus from '../Menus'

import { Wrap, Header, CloseIcon } from './styled'

const PanelComponent = () => {
  const { active, toggleMenu } = useMore(MoreContext)
  return (
    <Wrap isActive={active}>
      <Header>
        <CloseIcon viewBox="0 0 12 12" onClick={() => toggleMenu(false)}>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.41425 6.00025L11.7072 1.70725C12.0982 1.31625 12.0982 0.68425 11.7072 0.29325C11.3162 -0.09775 10.6843 -0.09775 10.2933 0.29325L6.00025 4.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L4.58625 6.00025L0.29325 10.2933C-0.09775 10.6843 -0.09775 11.3162 0.29325 11.7072C0.48825 11.9022 0.74425 12.0002 1.00025 12.0002C1.25625 12.0002 1.51225 11.9022 1.70725 11.7072L6.00025 7.41425L10.2933 11.7072C10.4883 11.9022 10.7442 12.0002 11.0002 12.0002C11.2562 12.0002 11.5122 11.9022 11.7072 11.7072C12.0982 11.3162 12.0982 10.6843 11.7072 10.2933L7.41425 6.00025Z" />
        </CloseIcon>
      </Header>

      <Search />
      <Menus />
    </Wrap>
  )
}

export default PanelComponent
