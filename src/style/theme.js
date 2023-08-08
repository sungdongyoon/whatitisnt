const size = {
  iphone12Pro: "392px",
  mobile: "768px",
  tablet: "1024px",
  laptop: "1400px",
  onlyAside: "2300px",
}

const theme = {
  iphone12Pro: `(max-width: ${size.iphone12Pro})`,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  onlyAside: `(max-width: ${size.onlyAside})`,
}

export default theme;