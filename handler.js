const navigate = require("./navigator");
const URL = require("url");
const assert = require("assert");
const querystring = require("querystring");

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
  i.    URL: chippercash://send 
        TargetScreenName: 'SendMoney'

  ii.   URL: chippercash://request 
        TargetScreenName: 'RequestMoney'

  iii.  URL: chippercash://authorize 
        TargetScreenName: 'AuthorisationMerchant'

  iv.   URL: chippercash://airtime/buy
        TargetScreenName: 'BuyAirtime'

  iv.   URL: chippercash://airtime/share
        TargetScreenName: 'ShareAirtime'

  v.    URL: chippercash://verify 
        TargetScreenName: 'Verification'

  vi.    URL: chippercash://help 
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

// a mapping of URL -> View name
const urlMapping = {
  send: "SendMoney",
  request: "RequestMoney",
  authorize: "AuthorisationMerchant",
  "airtime/buy": "BuyAirtime",
  "airtime/share": "ShareAirtime",
  verify: "Verification",
  help: "Support",
};

// function to parse a URL
const parseUrl = (url) => {
  // Parse the URL
  const { query, pathname } = URL.parse(url);

  // Determine which view we will navigate to
  const viewName = urlMapping[pathname.replace("/", "")];

  // Parse the query string into a parameters object
  const queryObj = querystring.parse(query)
  return [viewName, queryObj];
};

// Implement your solution.
const processDeepLink = (url) => {
  const [viewName, query] = parseUrl(url);
  // Navigate to the appropriate view and provide the parameters
  navigate(viewName, query);
};

module.exports = processDeepLink;


// BELOW here tests
const runTests = () => {
  const testUrls = [
    "chippercash://chippercash.com/send?amount=50&currency=GHS",
    // "chippercash://chippercash.com/airtime/buy?package=midnight",
    // "chippercash://chippercash.com/help?topic=id_verification",
    // "chippercash://chippercash.com/request?amount=100",
  ];

  const expected = [
    // viewName, queryParameters
    ["SendMoney", { amount: "50", currency: "GHS" }],
    //      ["", {}],
    //      ["", {}],
    //      ["", {}],
  ];

  testUrls.forEach((testUrl, index) => {
    const [viewName, query] = parseUrl(testUrl);
    const [expectedViewName, expectedQuery] = expected[index];

    assert.strictEqual(viewName, expectedViewName);
    assert.deepStrictEqual(Object.assign({}, query), expectedQuery);
  });
};

runTests();
