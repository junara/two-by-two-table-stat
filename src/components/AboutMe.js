import React, { Component } from 'react'
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
}
  from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faFacebook } from '@fortawesome/fontawesome-free-brands'
import { MyProfile } from '../modules'

class AboutMe extends Component {
  render () {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>About me</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>{MyProfile.nickname}</Typography>
              <ul>
                <li>
                  <Typography>
                    Qiita:
                    <a href={MyProfile.qiita}>{MyProfile.qiita}</a>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth/>
                    <a href={MyProfile.gitHub}>{MyProfile.gitHub}</a>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <FontAwesomeIcon icon={faTwitter} size="lg" fixedWidth/>
                    <a href={MyProfile.twitter}>{MyProfile.twitter}</a>
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <FontAwesomeIcon icon={faFacebook} size="lg" fixedWidth/>
                    <a href={MyProfile.facebook}>{MyProfile.facebook}</a>
                  </Typography>
                </li>
              </ul>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default AboutMe
