import { blue, pink } from 'material-ui/colors'

export const data = (t = 10, nt = 10) => {
  return {
    labels: [
      'Treat',
      'Non Treat',
    ],
    datasets: [{
      data: [t, nt],
      backgroundColor: [
        pink['500'],
        blue['500'],
      ],
      hoverBackgroundColor: [
        pink['500'],
        blue['500'],
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
}
export default Graph