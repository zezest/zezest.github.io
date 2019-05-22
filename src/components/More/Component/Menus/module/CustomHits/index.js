import React from 'react'
import { Link } from 'gatsby'
import {
  Highlight,
  connectHits } from 'react-instantsearch-dom'

import { List, Item } from './styled'

const Hit = ({ item }) => {
  console.log(item)
  return (
    <Item>
      <Link to={item.fields.slug}>
        <Highlight className="title" attribute="frontmatter.title" hit={item} tagName="mark" />
      </Link>
    </Item>
  )
}

const CustomHitsComponent = ({ hits }) => {
  console.log(hits)
  return (
    <List>
      {hits.map(hit => (
        <Hit item={hit} key={hit.objectID} />
      ))}
    </List>
  )
}

export default connectHits(CustomHitsComponent)
