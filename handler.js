import navigate from './navigator'

/*

Overview:
=========
The ChipperCash marketing team, runs a new social media ad campaign every 3 weeks and would like to start using 
mobile app deeplinks as a way to funnel web traffic from these campaings into to our app. 

Their intention is to place urls in these ads such that, when tapped the user is taken to a specific screen in the app depending on the url path. 
They have approached you about this and asked that you add functionality to make this possible. 

Here is their brief:
====================

1. We would like to have the following links setup. For each url we've indicated the name of the screen to which users should be sent.
  i.    URL: https://chippercash.app.link/send 
        TargetScreenName: 'SendMoney'

  ii.   URL: https://chippercash.app.link/request 
        TargetScreenName: 'RequestMoney'

  iii.  URL: https://chippercash.app.link/authorize 
        TargetScreenName: 'AuthorisationMerchant'

  iv.   URL: https://chippercash.app.link/airtime/buy
        TargetScreenName: 'BuyAirtime'

  iv.   URL: https://chippercash.app.link/airtime/share
        TargetScreenName: 'ShareAirtime'

  v.    URL: https://chippercash.app.link/verify 
        TargetScreenName: 'Verification'

  vi.   URL: https://chippercash.app.link/help 
        TargetScreenName: 'Support'

2. Deeplink urls MAY contain query parameters containing extra information that should be sent to the target screen. For example, the chippercash://send url
may include an `recipient` parameter indicating how much to send. This value could then be used to prefill the amount input saving the user extra typing. 
You should ensure that any query parameters present in the URL are collected and passed along to the target screen.

3. They are likely to need new urls setup at the beginning of each 3 week campaign cycle and would like your solution to make it easy to quickly setup new urls later on.

Your Task:
==========
To implement the function named `processDeepLink()` that looks at an incoming url and:
- 1) Determines what screen the user needs to be sent to depending on the url path and:
- 2) Extract and passes along any query parameters present in the url to the target screen
- 3) Navigates to said screen, passing along any parameters present in the url

Notes:
======
1) You have been provided a `navigate()` function (imported above). You should not concern yourself with the details of that function.
You are to assume that when called with the name of a screen and and object containing parameters to be sent to that screen, 
the navigate function will correctly navigate to that screen and pass the provided parameters to that screen.

2) Here a few example of what real incoming links might look like based on the requirements described above:
  chippercash://send?amount=50&currency=GHS
  chippercash://airtime/buy?package=midnight
  chippercash://help?topic=id_verification
  chippercash://request?amount=100

*/


// Implement your solution.
const processDeepLink = (url) => {
}

export default processDeepLink