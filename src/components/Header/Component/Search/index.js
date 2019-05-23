import React from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'

import CustomSearch from './module/CustomSearch'

const searchClient = algoliasearch(
  'LX9K5UR5A1',
  '5b94fd00f67dceb8c1be5c5003ace9c4',
)

const SearchComponent = () => {
  const name = process.env.NODE_ENV === 'production' ? 'prod_BLOG' : 'dev_BLOG'
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={name}>

      <CustomSearch />
    </InstantSearch>
  )
}

export default SearchComponent
