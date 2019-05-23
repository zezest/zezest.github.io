import React, { useState } from 'react'

import withConnector from './connector'

import CustomHits from '../CustomHits'

import { SearchForm, Input, RemoveBtn } from './styled'


const CustomSearchBoxComponent = ({
  currentRefinement, refine,
}) => {
  const [isOpen, setOpen] = useState(false)

  const onFocusToForm = () => {
    setOpen(true)
  }

  const onBlurToForm = () => {
    refine('')
    setOpen(false)
  }

  return (
    <SearchForm onFocus={onFocusToForm} onBlur={onBlurToForm}>
      <Input
        type="text"
        value={currentRefinement}
        onChange={e => refine(e.currentTarget.value)} />

      {currentRefinement && <RemoveBtn onClick={() => refine('')}>
        <svg viewBox="0 0 18 18">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 4.0374 4.0374 0 9 0C13.9626 0 18 4.0374 18 9C18 13.9626 13.9626 18 9 18C4.0374 18 0 13.9626 0 9ZM7.6225 9L5.32668 11.2958C5.32668 11.2958 4.61038 12.0121 5.29913 12.7009C5.98788 13.3896 6.70417 12.6733 6.70417 12.6733L9 10.3775L11.2958 12.6733C11.2958 12.6733 12.0121 13.3896 12.7009 12.7009C13.3896 12.0121 12.6733 11.2958 12.6733 11.2958L10.3775 9L12.6733 6.70417C12.6733 6.70417 13.3896 5.98787 12.7009 5.29913C12.0121 4.61038 11.2958 5.32668 11.2958 5.32668L9 7.6225L6.70417 5.32668C6.70417 5.32668 5.98788 4.61038 5.29913 5.29913C4.61038 5.98788 5.32668 6.70417 5.32668 6.70417L7.6225 9Z" />
        </svg>
      </RemoveBtn>}

      {isOpen && currentRefinement && <CustomHits />}
    </SearchForm>
  )
}

export default withConnector(CustomSearchBoxComponent)
