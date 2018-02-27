import React, { Component } from 'react'
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Grid,
  withStyles,
} from 'material-ui'
import { Stat, Graph } from '../modules'
import { Doughnut } from 'react-chartjs-2'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemText } from 'material-ui/List'

const styles = {
  sticky: {
    top: 60,
  },
}

class StatBody extends Component {
  render () {
    const {caseTreatment, caseNonTreatment, controlTreatment, controlNonTreatment} = this.props
    const chiSq = Stat.chiSq({a: caseTreatment, b: caseNonTreatment, c: controlTreatment, d: controlNonTreatment})
    const chiP = Stat.chiP(chiSq)
    return (
      <div>
        <Card elevation={0}>
          <CardContent>
            <ListSubheader classes={{sticky: this.props.classes.sticky}}>
              <Typography variant={'headline'}>
                統計量
              </Typography>
            </ListSubheader>
            <Grid container spacing={0}>
              <Grid item><Typography variant={'body2'}>χ2=</Typography></Grid>
              <Grid item><Typography variant={'body2'}>{chiSq}</Typography></Grid>
            </Grid>
          </CardContent>

          <CardContent>
            <ListSubheader classes={{sticky: this.props.classes.sticky}}>
              <Typography variant={'headline'}>
                要約表
              </Typography>
            </ListSubheader>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding={'dense'}></TableCell>
                  <TableCell padding={'dense'}>Treat</TableCell>
                  <TableCell padding={'dense'}>Non treat</TableCell>
                  <TableCell padding={'dense'}>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell padding={'dense'}>Case</TableCell>
                  <TableCell numeric padding={'dense'}>
                    {caseTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    {caseNonTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    {caseTreatment + caseNonTreatment}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding={'dense'}>Control</TableCell>
                  <TableCell numeric padding={'dense'}>
                    {controlTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    {controlNonTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    {controlTreatment + controlNonTreatment}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell padding={'dense'}></TableCell>
                  <TableCell numeric padding={'dense'}>
                    {controlTreatment + caseTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    {controlNonTreatment + caseNonTreatment}
                  </TableCell>
                  <TableCell numeric padding={'dense'}>
                    <Typography>
                      {controlTreatment + caseTreatment + controlNonTreatment + caseNonTreatment}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>

          <CardContent>
            <ListSubheader classes={{sticky: this.props.classes.sticky}}>
              <Typography variant={'headline'}>
                検定結果
              </Typography>
            </ListSubheader>

            <Grid container justify={'center'} spacing={0}>
              <Grid item xs={12}>
                <Grid container justify={'center'} spacing={0}>
                  <Grid item><Typography variant={'body2'}>p=</Typography></Grid>
                  <Grid item><Typography variant={'body2'}>{chiP}</Typography></Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Grid container justify={'center'}>
                  <Grid item xs={12}>
                    <Typography align={'center'}>Case</Typography>
                    <Doughnut data={Graph.data(caseTreatment, caseNonTreatment)} options={Graph.options}
                              legend={Graph.legend}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container justify={'center'}>
                  <Grid item xs={12}>
                    <Typography align={'center'}>Control</Typography>
                    <Doughnut data={Graph.data(controlTreatment, controlNonTreatment)} options={Graph.options}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(StatBody)
