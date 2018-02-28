import React, { Component } from 'react'
import {
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
} from 'material-ui'
import CircleIcon from 'material-ui-icons/FiberManualRecord'
import FormIcon from 'material-ui-icons/ModeEdit'
import { Graph } from '../modules'

class StatForm extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Card elevation={0}>
              <CardContent>
                <Typography gutterBottom variant={'headline'}>
                  <FormIcon/>入力フォーム
                </Typography>
                <Grid container spacing={40}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}></Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={0}>
                      <Grid item>
                        <CircleIcon style={{color: Graph.color.treat}}/>
                      </Grid>
                      <Grid item>
                        <Typography variant={'title'} align={'center'}>
                          T
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Grid container spacing={0}>
                      <Grid item>
                        <CircleIcon style={{color: Graph.color.nonTreat}}/>
                      </Grid>
                      <Grid item>
                        <Typography variant={'title'} align={'center'}>
                          NT
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={40} alignItems={'center'}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Case</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      id={'number'}
                      autoFocus
                      type={'number'}
                      margin={'normal'}
                      onChange={this.props.handleChange('caseTreatment')}
                      value={this.props['caseTreatment']}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      margin={'normal'}
                      onChange={this.props.handleChange('caseNonTreatment')}
                      value={this.props['caseNonTreatment']}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={40} alignItems={'center'}>
                  <Grid item xs={4}>
                    <Typography variant={'title'} align={'center'}>Cont</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      margin={'normal'}
                      onChange={this.props.handleChange('controlTreatment')}
                      value={this.props['controlTreatment']}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type={'number'}
                      margin={'normal'}
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
