import React, { Component } from 'react'
import { Button } from 'material-ui'
import { LocationHref } from '../modules'
import { MailOutline as MailIcon } from 'material-ui-icons'

class SendMailButton extends Component {
  render () {
    const {subject = '', body = ''} = this.props
    return (
      <Button
        href={LocationHref.mail({subject, body})}
        color={'default'}
      >
        結果をメールで送る
        <MailIcon/>
      </Button>
    )
  }
}

export default SendMailButton

