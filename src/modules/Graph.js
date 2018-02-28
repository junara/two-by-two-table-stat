import { blue, pink } from 'material-ui/colors'

export const color = {
  nonTreat: blue['500'],
  treat: pink['500'],
}

export const data = (t = 10, nt = 10) => {
  return {
    labels: [
      'Non Treat',
      'Treat',
    ],
    datasets: [{
      data: [nt, t],
      backgroundColor: [
        color.nonTreat,
        color.treat,
      ],
      hoverBackgroundColor: [
        color.nonTreat,
        color.treat,
      ],
    }],
  }
}

export const legend = {
  display: false,
}

export const options = {
}

export const Graph = {
  data,
  legend,
  options,
  color,
}
export default Graph