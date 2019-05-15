import React from 'react'

import withController from './Controller'

import PostList from './module/PostList'
import AnchorList from './module/AnchorList'

import {
  Wrap, Content, BtnWrap, Btn } from './styled'

const PostMenuComponent = ({
  posts, active, tocs,
  tab,
  onClickToTab,
}) => {
  
  return (
    <Wrap>
      <Content>
        <BtnWrap>
          <Btn
            isActive={tab === 'post'}
            onClick={onClickToTab.bind(null, 'post')}>
            List
          </Btn>
          <Btn
            isActive={tab === 'anchor'}
            onClick={onClickToTab.bind(null, 'anchor')}>
            content
          </Btn>
        </BtnWrap>

        {tab === 'post' ? (
          <PostList posts={posts} active={active} />
        ) : tab === 'anchor' ? (
          <AnchorList tocs={tocs} />
        ) : null}
      </Content>
    </Wrap>
  )
}

export default withController(PostMenuComponent)
