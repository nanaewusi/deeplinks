import navigate from './navigator'

const handleDeepLink = (url) => {
  if (url.startsWith('https://')) { // is web url
    const route = url.replace(/.*?:\/\//g, '')
    const routeName = route.split('/')[1]

    if (routeName === 'airtime') {
      navigate('BuyAirtime', {
        source: 'Deeplink'
      })
    } else if (routeName === 'verification') {
      navigate('IdentityVerification', {
        source: 'Deeplink'
      })
    } else {
      console.log('Cannot process unsupported URL')
    }
  } else { // is custom app url
    const route = url.replace(/.*?:\/\//g, '')
    const matches = route.match(/\/([^\/]+)\/?$/)
    const id = matches ? matches[1] : undefined
    const routeName = route.split('/')[0]

    if (routeName === 'pay') {
      navigate('PayRequestScreen', {
        isModal: true,
        mode: 'Send',
        user: { id },
        shouldFetch: true,
      })
    } else {
      console.log('Unable to handle deep link url: ', url)
    }
  }
}

export default handleDeepLink