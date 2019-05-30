import styled from 'styled-components'

import { media } from 'utils/theme'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Main = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 5rem;
  align-items: center;
 
  ${media.greaterThan('medium')} {
    width: 90%;
  }

  ${media.greaterThan('large')} {
    max-width: 1000px;
  }
`

export const NotFoundMain = styled.main`
  display: flex;
  flex: 1;
  width: 100%;
  height: calc(100vh - 200px);
  margin: 0 auto;
  padding: 0 20px;
  align-items: center;

  ${media.lessThan('mobile')} {
    height: calc(100vh - 160px);
  }
 
  ${media.greaterThan('medium')} {
    width: 90%;
  }

  ${media.greaterThan('large')} {
    max-width: 1000px;
  }
`