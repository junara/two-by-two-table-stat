export const mail = ({subject = '', body = ''}) => {
  return (
    'mailto:?subject=' +
    encodeURIComponent(subject) +
    '&body=' +
    encodeURIComponent(body)
  )
}

export const line = (message) => `http://line.me/R/msg/text/?${encodeURIComponent(message)}`

export const LocationHref = {
  mail,
  line,
}
export default LocationHref