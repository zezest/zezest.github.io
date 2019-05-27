import React, { useState, useEffect } from 'react'
import algoliasearch from 'algoliasearch'

export default PanelComponent => {
  const indexName = process.env.NODE_ENV === 'production' ? 'prod_BLOG' : 'dev_BLOG'

  const client = algoliasearch(
    'LX9K5UR5A1',
    '5b94fd00f67dceb8c1be5c5003ace9c4',
  )
  
  const index = client.initIndex(indexName)
  
  return ({ ...props }) => {
    const [active, setActive] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [hits, setHits] = useState([])

    useEffect(() => {
      if (keyword !== '') {
        index.search({
          query: keyword,
          hitsPerPage: 5,
          page: 0,
        }, (err, { hits } = {}) => {
          if (err) throw err
          setHits(hits)
        })
      }
    }, [keyword])

    const toggleMenu = (bool) => {
      if (active === bool) return
      if (!bool) reset()
      setActive(bool)
    }

    const onChangeToKeyword = e => {
      const { value } = e.currentTarget

      if (value === '') {
        setHits([])
      }

      setKeyword(value)
    }

    const reset = () => {
      setHits([])
      setKeyword('')
    }

    const state = {
      active,
      keyword,
      hits,
      toggleMenu,
      onChangeToKeyword,
      reset,
    }

    return <PanelComponent {...props} {...state} />
  }

}
