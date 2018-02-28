import React, { Component } from 'react'
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
}
  from 'material-ui'
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
} from 'react-share'
import { AboutThis, AboutMe } from '../components'
import { Site } from '../modules'

const styles = {
  buttonMarginRight: {
    marginRight: '0.5em',
  },
}

class StatFooter extends Component {
  render () {
    return (
      <div>
        <AppBar position={'sticky'} color={'default'} elevation={0}>
          <Toolbar>
            <Grid container spacing={8} alignItems={'center'}>
              <Grid item>
                <Typography variant={'body1'}>{Site.title}</Typography>
              </Grid>
            </Grid>
            <TwitterShareButton
              title={Site.title}
              url={Site.rootUrl}
              hashtags={[Site.title]}
              style={styles.buttonMarginRight}
            >
              <TwitterIcon
                size={32}
                round/>
            </TwitterShareButton>
            <FacebookShareButton
              quote={Site.title}
              url={Site.rootUrl}
              hashtags={[Site.title]}
              style={styles.buttonMarginRight}
            >
              <FacebookIcon
                size={32}
                round/>
            </FacebookShareButton>
          </Toolbar>
          <AboutThis/>
          <AboutMe/>
        </AppBar>

      </div>
    )
  }
}

export default StatFooter
