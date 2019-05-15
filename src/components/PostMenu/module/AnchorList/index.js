import React from 'react'

import withController from './Controller'

import { Item } from './styled'

const AnchorListComponent = ({
  tocs, 
  active,
}) => {
  console.log(tocs)
  return (
    <ul className="anchor-list">
      {tocs.map(toc => {
        return (
          <Item
            key={toc.id}
            level={toc.level}
            isActive={toc.id === active}>
            
            <a href={`#${toc.id}`}>
              {toc.title}
            </a>
          </Item>
        )
      })}
    </ul>
  )
}

export default withController(AnchorListComponent)
