import styled from 'styled-components'
import hex2rgba from 'hex2rgba'

import { media, colors } from 'utils/theme'

const prismColors = {
  char: '#D8DEE9',
  comment: '#B2B2B2',
  keyword: '#c5a5c5',
  lineHighlight: '#353b45', // colors.dark + extra lightness
  primitive: '#5a9bcf',
  string: '#8dc891',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#88C6BE',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
}

export const MarkdownWrap = styled.div`
  .anchor {
    float: none;
    padding-right: 0;

    > svg {
      visibility: visible;
      position: relative;
      right: 5px;
    }
  }

  .gatsby-highlight {
    margin-top: 25px;
    margin-bottom: 25px;
    padding-left: 25px;
    padding-right: 25px;
    color: ${colors.white};
    border-radius: 5px;
    background: ${colors.dark};
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    ${media.lessThan('small')} {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      border-radius: 5px;
    }
    ${media.lessThan('xsmall')} {
      margin-top: 10px;
      margin-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 5px;
    }
  }

  .gatsby-highlight code[class*="gatsby-code-"],
  .gatsby-highlight pre[class*="gatsby-code-"],
  .gatsby-highlight pre.prism-code {
    height: auto !important;
    margin: 1rem 0;
    font-size: 14px;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
    hyphens: none;

    ${media.lessThan('small')} {
      margin: 1rem 0;
    }
  }

  .gatsby-highlight + .gatsby-highlight {
    margin-top: 20px;
  }

  .gatsby-highlight-code-line {
    display: block;
    margin: -0.125rem -25px;
    padding: 0.125rem 25px;
    background-color: ${prismColors.lineHighlight};

    ${media.lessThan('small')} {
      margin: -0.125rem -20px;
      padding: 0.125rem 20px;
    }
    ${media.lessThan('xsmall')} {
      margin: -0.125rem -10px;
      padding: 0.125rem 10px;
    }
  }

  a:not(.anchor):not(.gatsby-resp-image-link) {
    color: ${colors.text};
    border-bottom: 1px solid ${hex2rgba(colors.black, 0.2)};
    background-color: ${hex2rgba(colors.brandLight, 0.3)};

    &:hover {
      border-bottom-color: ${colors.text};
      background-color: ${colors.brandLight};
    }
  }

  > p:first-child {
    color: ${colors.subtle};
    font-size: 18px;
    font-weight: 300;

    ${media.greaterThan('xlarge')} {
      font-size: 24px;
    }

    a,
    strong {
      font-weight: 400;
    }
  }

  p {
    max-width: 42em;
    margin-top: 30px;
    font-size: 17px;
    line-height: 1.8;

    &:first-of-type {
      margin-top: 15px;
    }

    &:first-child {
      margin-top: 0;
    }

    ${media.lessThan('large')} {
      margin-top: 25px;
      font-size: 16px;
    }
  }

  h3 + p,
  h3 + p:first-of-type {
    margin-top: 20px;
  }

  p > code,
  li > code {
    color: ${colors.text};
    background: ${hex2rgba(colors.note, 0.3)};
  }

  p > a,
  strong > a,
  li > a {
    display: inline-block;
    line-height: 21px;
  }

  p > a > code,
  li > a > code {
    font-size: 1em;
    line-height: 19px;
  }

  p > code,
  li > code,
  p > a > code,
  li > a > code {
    padding: 0 4px 0 6px;
    font-size: 0.94em;
    word-break: break-word;
  }

  hr {
    height: 1px;
    margin-top: 40px;
    margin-bottom: -1px;
    border: none;
    border-bottom: 1px solid ${colors.divider};

    &:first-child {
      margin-top: 0;
    }
  }

  h1 {
    line-height: 1.2;

    /* ${media.size('xsmall')} {
      font-size: 30px;
    } */

    /* ${media.between('small', 'large')} {
      font-size: 45px;
    }

    ${media.greaterThan('xlarge')} {
      font-size: 60px;
    } */
  }

  h2 {
    margin-top: 35px;
    padding-top: 40px;
    line-height: 1.2;
    border-top: 1px solid ${colors.divider};

    /* ${media.lessThan('large')} {
      font-size: 20px;
    }
    ${media.greaterThan('xlarge')} {
      font-size: 35px;
    } */
  }

  hr + h2 {
    margin-top: 0;
    border-top: 0;
  }

  h3 {
    padding-top: 40px;

    ${media.lessThan('small')} {
      word-break: break-word;
      overflow-wrap: break-word;
    }

    /* ${media.greaterThan('xlarge')} {
      font-size: 25px;
      line-height: 1.3;
    } */
  }

  h2 + h3,
  h2 + h3:first-of-type {
    padding-top: 30px;
  }

  h4 {
    padding-top: 30px;
    /* color: ${colors.subtle}; */
    /* font-size: 20px; */
    /* font-weight: 400; */
    line-height: 1.3;
  }

  h4 + p {
    margin-top: 20px;
  }

  ol,
  ul {
    margin-top: 20px;
    padding-left: 20px;
    color: ${colors.text};
    font-size: 16px;

    p {
      margin-top: 0;
      font-size: 16px;
      line-height: 1.2;
    }

    li {
      margin-top: 10px;
      line-height: 25px;
    }

    li.button-newapp {
      margin-top: 0;
    }

    ol,
    ul {
      margin-top: 10px;
      margin-left: 20px;
    }
  }

  img {
    max-width: 100%;
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  blockquote {
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 20px 45px 20px 26px;
    border-left: 9px solid ${colors.note};
    border-radius: 5px;
    background-color: ${hex2rgba(colors.note, 0.2)};

    p {
      margin-top: 15px;

      &:first-of-type {
        margin-top: 0;
      }

      &:nth-of-type(2) {
        margin-top: 0;
      }
    }

    .gatsby-highlight {
      margin-left: 0;
    }
  }

  .gatsby-highlight + blockquote {
    margin-top: 40px;
  }
/* 
  .gatsby-highlight + h4 {
    &::before {
      content: '';
      display: block;
      margin-top: -60px;
      padding-top: 85px;
    }
  } */










  .token.attr-name {
    color: ${prismColors.keyword};
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${prismColors.comment};
  }

  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${prismColors.primitive};
  }

  .token.boolean {
    color: ${prismColors.boolean};
  }

  .token.tag {
    color: ${prismColors.tag};
  }

  .token.string {
    color: ${prismColors.string};
  }

  .token.punctuation {
    color: ${prismColors.punctuation};
  }

  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${prismColors.char};
  }

  .token.function {
    color: ${prismColors.function};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: ${prismColors.variable};
  }

  .token.attr-value {
    color: ${prismColors.string};
  }

  .token.keyword {
    color: ${prismColors.keyword};
  }

  .token.atrule,
  .token.class-name {
    color: ${prismColors.className};
  }

  .token.important {
    font-weight: 400;
  }

  .token.bold {
    font-weight: 700;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .namespace {
    opacity: 0.7;
  }
`