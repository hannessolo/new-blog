import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { INLINES } from '@contentful/rich-text-types'

import postStyle from '../templates/post.module.css'

function handleEmbeddedEntry(node) {
console.log(node)
  try {
    switch (node.data.target.sys.contentType.sys.id) {
      case "codeSnippet":
        return (
          <pre>
            <code className={`language-${node.data.target.fields.language["en-US"]}`}>
              {node.data.target.fields.code["en-US"]}
            </code>
          </pre>
        )
      default: return (<div>Unknwon content type</div>)
    }
  } catch (err) {
    return <div>{err.message}</div>
  }
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      return handleEmbeddedEntry(node)
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      return handleEmbeddedEntry(node)
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return handleEmbeddedEntry(node)
    }, [BLOCKS.PARAGRAPH]: (node) => {
      return <p className={postStyle.pa}>{node.content[0].value}</p>
    }, [BLOCKS.HEADING_1]: (node) => {
      return <h1 className={postStyle.he1}>{node.content[0].value}</h1>
    }, [BLOCKS.HEADING_2]: (node) => {
      return <h2 className={postStyle.he2}>{node.content[0].value}</h2>
    }, [BLOCKS.HEADING_3]: (node) => {
      return <h3 className={postStyle.he3}>{node.content[0].value}</h3>
    }, [BLOCKS.HEADING_4]: (node) => {
      return <h4 className={postStyle.he4}>{node.content[0].value}</h4>
    }, [BLOCKS.HEADING_5]: (node) => {
      return <h5 className={postStyle.he5}>{node.content[0].value}</h5>
    }, [BLOCKS.HEADING_6]: (node) => {
      return <h6 className={postStyle.he6}>{node.content[0].value}</h6>
    },
  }
}

export default options;
