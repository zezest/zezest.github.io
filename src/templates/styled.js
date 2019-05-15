import styled from 'styled-components'
import { media } from 'src/theme'

export const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0px 20px 5rem;

  ${media.greaterThan('xxlarge')} {
    max-width: 1260px;
  }
  
  ${media.greaterThan('medium')} {
    width: 90%;
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
  max-width: 700px;
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
  transition: color 500ms ease;

  > span {
    font-size: 0.85rem;
  }
`