const defaultOptions = {
  selector: 'h1, h2, h3, h4, h5, h6',
}

export default function buildToc(domNode, applyOptions = {}) {
  const options = Object.assign({}, defaultOptions, applyOptions)

  const headings = options.selector.toLowerCase().replace(/ /g, '').split(',')

  if (domNode && domNode.children.length) {
    const runningList = []
    let min = 9

    const tocList = Array.from(domNode.children).reduce((result, item) => {
      if (item.tagName) {
        const tagType = item.tagName.toLowerCase()

        if (headings.indexOf(tagType) !== -1) {
          const level = +tagType.replace('h', '')
          if (min > level) {
            min = level
          }

          const text = item.innerText
          let isMatchIndex = runningList.indexOf(text)
  
          let countIndex = isMatchIndex + 1
          runningList.push(text)
          runningList.push(0)
  
          if (isMatchIndex > -1) {
            ++runningList[countIndex]
          }
  
          let elementId = text.replace(/ /g, '-').replace(/(?=[^\-])[\W]/g, '')
  
          if (runningList[countIndex] > 0) {
            elementId += `-${runningList[countIndex]}`
          }
  
          item.className = 'post-header'

          const add = {
            id: elementId.toLowerCase(),
            tag: tagType,
            title: text,
            level,
          }

          result.push(add)
        }
      }
      
      return result
    }, [])

    return tocList.map(item => {
      item.level -= min
      return item
    })
  }

  return []
}