import styled from 'styled-components'

import { media } from 'utils/theme'

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: auto;
  align-items: center;
  justify-content: center;

  ${media.lessThan('mobile')} {
    height: 100px;
  }
`