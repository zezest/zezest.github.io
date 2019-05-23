import React from 'react'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'

import { MoreProvider } from './Context'

import MenuBtn from './Component/MenuBtn'
import Panel from './Component/Panel'

const searchClient = algoliasearch(
  'LX9K5UR5A1',
  '5b94fd00f67dceb8c1be5c5003ace9c4'
)

const MoreComponent = () => {
  const name = process.env.NODE_ENV === 'production' ? 'prod_BLOG' : 'dev_BLOG'

  return (
    <MoreProvider>
      <MenuBtn />

      <InstantSearch 
        searchClient={searchClient}
        indexName={name}>
          
        <Panel />
      </InstantSearch>
    </MoreProvider>
  )
}

export default MoreComponent
