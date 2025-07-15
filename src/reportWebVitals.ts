import { onCLS, onLCP, onFCP, onTTFB, Metric } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry)
    onLCP(onPerfEntry)
    onFCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}

export default reportWebVitals
export { reportWebVitals }
