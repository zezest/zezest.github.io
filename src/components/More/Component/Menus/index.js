import React from 'react'
import { Link } from 'gatsby'

import Highlight from 'components/Highlight'

import { List, Item, Menu, NoResult } from './styled'

const MenuLink = ({
  children,
  toggleMenu,
}) => {
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
  keyword, hits,
  toggleMenu,
}) => {
  if (keyword === '') {
    return (
      <List>
        <MenuLink toggleMenu={toggleMenu}>devlog</MenuLink>
      </List>
    )
  }

  if (keyword !== '' && hits.length <= 0) {
    return (
      <NoResult>
        <p>검색결과를 찾을 수 없습니다.</p>
      </NoResult>
    )
  }

  return (
    <List>
      {hits.map(hit => (
        <Item key={hit.objectID}>
          <Link to={hit.fields.slug}>
            <Highlight hit={hit} tagName="mark" attribute="frontmatter.title" />
          </Link>
        </Item>
      ))}
    </List>
  )
}

export default MenusComponent
