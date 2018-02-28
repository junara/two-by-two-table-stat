import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Grid,
}
  from 'material-ui'
import Logo from '../logo.svg'

class StatHeader extends Component {
  render () {
    return (
      <AppBar position={'static'} color={'default'} elevation={0}>
        <Toolbar>
          <Grid container spacing={8} alignItems={'center'} justify={'center'}>
            <Grid item>
              <img src={Logo} alt={'logo'}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default StatHeader
