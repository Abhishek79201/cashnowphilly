declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    _vwo_code?: any
  }
}

export {}


