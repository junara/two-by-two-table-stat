import React, { Component } from 'react'
import { StatHeader, StatBody, StatForm, StatFooter } from './'
import {
  Grid,
} from 'material-ui'
import scrollToComponent from 'react-scroll-to-component'

class TwoByTwoTable extends Component {
  state = {
    caseTreatment: 50,
    caseNonTreatment: 21,
    controlTreatment: 121,
    controlNonTreatment: 85,
  }

  componentDidMount () {
    this.scrollToForm()
  }

  scrollToForm = () => {
    scrollToComponent(this['form'], {
      align: 'bottom',
      duration: 1000,
    })
  }

  handleChange = name => event => {
    const value = event.target.value ? parseInt(event.target.value, 10) : ''
    this.setState({[name]: value})
  }

  render () {
    return (
      <div>
        <StatHeader/>
        <Grid container justify={'center'} spacing={0}>
          <Grid item xs={12} md={4}>
            <StatBody {...this.state}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <StatForm {...this.state}
                      handleChange={this.handleChange}
                      ref={(section) => {this['form'] = section}}
            />
          </Grid>
        </Grid>
        <StatFooter/>
      </div>
    )
  }
}

export default TwoByTwoTable
