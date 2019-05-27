import React, { useState, useEffect, useRef } from 'react'
import algoliasearch from 'algoliasearch'

export default SearchComponent => {
  const indexName = process.env.NODE_ENV === 'production' ? 'prod_BLOG' : 'dev_BLOG'

  const client = algoliasearch(
    'LX9K5UR5A1',
    '5b94fd00f67dceb8c1be5c5003ace9c4',
  )
  
  const index = client.initIndex(indexName)
  
  return ({ ...props }) => {
    const [keyword, setKeyword] = useState('')
    const [hits, setHits] = useState([])

    const wrapRef = useRef(null)

    useEffect(() => {
      document.addEventListener('mousedown', onMouseDown, false)

      return () => {
        document.removeEventListener('mousedown', onMouseDown)
      }
    }, [wrapRef])

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

    const onMouseDown = e => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        reset()
      }
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
      wrapRef,
      keyword,
      hits,
      onChangeToKeyword,
      reset,
    }

    return <SearchComponent {...props} {...state} />
  }

}
