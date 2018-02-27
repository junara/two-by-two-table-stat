import React, { Component } from 'react'
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
}
  from 'material-ui'
import Logo from '../logo.svg'

class StatBody extends Component {
  render () {
    return (
      <AppBar position={'sticky'} color={'default'} elevation={0}>
        <Toolbar>
          <Grid container spacing={8} alignItems={'center'} justify={'center'}>
            <Grid item>
              <img src={Logo} alt={'logo'}/>
            </Grid>
            <Grid item>
              <Typography variant={'body1'}>2x2のカイ二乗検定</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default StatBody
