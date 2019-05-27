import React from 'react'

import highlight from 'utils/highlight'

const Highlight = ({ 
  attribute, hit, tagName = 'mark',
}) => {
  const parsedHighlightedValue = highlight({
    hit,
    attribute,
    highlightProperty: '_highlightResult',
  })

  return parsedHighlightedValue.map((v, idx) => {
    if (v.isHighlighted) {
      const TagName = tagName
      return (
        <TagName key={idx}>
          {v.value}
        </TagName>
      )
    }
    return (
      <span key={idx}>
        {v.value}
      </span>
    )
  })
}

export default Highlight