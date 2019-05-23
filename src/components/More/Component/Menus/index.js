import React from 'react'
import { Link } from 'gatsby'
import { connectStateResults } from 'react-instantsearch-dom'

import { MoreContext } from '../../Context'
import useMore from '../../Context/useMore'

import CustomHits from './module/CustomHits'

import {
  List, Menu,
  NoResult } from './styled'

const MenuLink = ({
  children,
}) => {
  const { toggleMenu } = useMore(MoreContext)
  return (
    <Menu>
      <Link 
        to="/devlog/all.html"
        onClick={() => toggleMenu(false)}>
        {children}
      </Link>
    </Menu>
  )
}

const MenusComponent = ({
  searchState, searchResults,
}) => {
  if (!searchState.attributeForMyQuery || searchState.attributeForMyQuery === '') {
    return (
      <List>
        <MenuLink>devlog</MenuLink>
      </List>
    )
  }

  if (searchResults.nbHits === 0) {
    return (
      <NoResult>
        <p>
          No results found matching
          <b>{searchState.attributeForMyQuery}</b>
        </p>
      </NoResult>
    )
  }

  return (
    <CustomHits />
  )
}

export default connectStateResults(MenusComponent)
