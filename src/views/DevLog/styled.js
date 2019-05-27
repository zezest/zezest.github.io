import styled from 'styled-components'
import { media } from 'utils/theme'

export const Wrap = styled.div`
  display: flex;
  width: 100%;

  ${media.greaterThan('medium')} {
    justify-content: space-between;
  }
`

export const Post = styled.article`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 750px;
`

export const Title = styled.h1`
  margin-bottom: 15px;
  line-height: 35px;
`

export const Date = styled.p`
  display: flex;
  padding-bottom: 25px;
  margin-bottom: 30px;
  justify-content: space-between;

  > span {
    font-size: 0.85rem;
  }
`