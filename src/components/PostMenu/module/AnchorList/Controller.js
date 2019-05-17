import React, { useState, useEffect } from 'react'
import throttle from 'lodash/throttle'
export default AnchorListComponent => {
  return ({ ...props }) => {
    const [pos, setPos] = useState({})
    const [active, setActive] = useState('')

    useEffect(() => {
      if (props.tocs.length > 0) {
        setActive(props.tocs[0].id)

        const section = document.querySelectorAll('.post-header')
     
        const positions = Array.from(section).reduce((result, item, idx) => {
          result[item.id] = item.offsetTop
          return result
        }, {})

        setPos(positions)
      }
    }, [props.tocs])

    
    useEffect(() => {
      if (Object.keys(pos).length > 0) {
        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }, [pos, handleScroll])


    const handleScroll = throttle(() => {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      const last = Object.keys(pos).reduce((result, name) => {
        if (pos[name] <= scrollPosition) {
          if (result.pos < pos[name]) {
            return {
              name,
              pos: pos[name],
            }
          }
        }
        return result
      }, {
        name: '',
        pos: 0,
      })

      setActive(last.name || props.tocs[0].id)
    }, 66)

    const state = {
      active,
    }

    return <AnchorListComponent {...props} {...state} />
  }
}
