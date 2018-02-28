import React, { Component } from 'react'
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid,
}
  from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands/index'

const gitHubSource = 'junara/two-by-two-table-stat'
const gitHubSourceSite = `https://github.com/${gitHubSource}`

class AboutThis extends Component {
  render () {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography>About This</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Grid container direction={'column'}>
                <Grid item>
                  <Typography>
                    これは、2 x 2の四分表の統計解析（χ2検定）を行うアプリです。スキマ時間にふとχ2検定がやりたくなる人のためにつくりました。
                  </Typography>
                  <Typography>
                    データ入力フォームを画面下部に配置し、スマホ片手で操作しやすいことが特徴です。
                  </Typography>
                  <Typography>
                    数値を入力するだけでリアルタイムで解析がなされます。ぜひ、統計解析に親しんで下さい。
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>ソースは、GitHubで公開しています。</Typography>
                  <ul>
                    <li>
                      <Typography>
                        <FontAwesomeIcon icon={faGithub} size="lg" fixedWidth/>
                        <a href={gitHubSourceSite}>{gitHubSource}</a>
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}

export default AboutThis
