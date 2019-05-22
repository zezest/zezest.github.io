import React from 'react'
import { InstantSearch, Hits, Highlight } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch'

import { MoreProvider } from './Context'

import MenuBtn from './Component/MenuBtn'
import Panel from './Component/Panel'

const searchClient = algoliasearch(
  'LX9K5UR5A1',
  '5b94fd00f67dceb8c1be5c5003ace9c4'
)

const MoreComponent = () => {
  return (
    <MoreProvider>
      <MenuBtn />

      <InstantSearch 
        searchClient={searchClient}
        indexName="dev_BLOG">
          
        <Panel />
      </InstantSearch>
    </MoreProvider>
  )
}

export default MoreComponent
