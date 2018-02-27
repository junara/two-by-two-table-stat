import React, { Component } from 'react'
import {
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
} from 'material-ui'

class StatForm extends Component {
  render () {
//    const {caseTreatment, caseNonTreatment, controlTreatment, controlNonTreatment} = this.props
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Card elevation={0}>
              <CardContent>
                <Typography gutterBottom variant={'headline'}>
                  入力フォーム
                </Typography>
                <Grid container spacing={40}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Treat</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Non treat</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={40}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Case</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      autoFocus
                      type={'number'}
                      onChange={this.props.handleChange('caseTreatment')}
                      value={this.props['caseTreatment']}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      onChange={this.props.handleChange('caseNonTreatment')}
                      value={this.props['caseNonTreatment']}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={40}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Cont</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      onChange={this.props.handleChange('controlTreatment')}
                      value={this.props['controlTreatment']}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      onChange={this.props.handleChange('controlNonTreatment')}
                      value={this.props['controlNonTreatment']}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default StatForm
