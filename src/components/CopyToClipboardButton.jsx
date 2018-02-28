import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from 'material-ui'
import { ContentCopy as ClipboardIcon } from 'material-ui-icons'

class CopyToClipboardButton extends React.PureComponent {
  render () {
    const {text, children} = this.props
    return (
      <CopyToClipboard
        text={text}
      >
        {
          children ||
          <Button
            color={'default'}
          >
            結果をコピーする
            <ClipboardIcon/>
          </Button>
        }
      </CopyToClipboard>
    )
  }
}

export default CopyToClipboardButton

