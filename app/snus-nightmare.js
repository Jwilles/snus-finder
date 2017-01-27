var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })
var location = require('./location');





location().then( function (loc) {
	nightmare
  		//.goto('https://www.generalsnus.com/Account/LogOn?ReturnUrl=%2fFind%2f')
  	.goto('https://generalsnus.com/m/find')
  	.type('form[action*="/m/find"] [name = location]', 'New York')
  	.click('form[action*="/m/find"] [id=btnMapIt]')
  	.wait(5000)
  	.evaluate(function () {
	
	var selector = '#findArea > div > div:nth-child(1) > a:nth-child(1)'
	//var selector = '.m-shell .mid  #findArea .results .result a b'	
	//var selector = 'a';
	//var selector = 'a[href="http://maps"]';
   	return document.querySelector(selector).href;
   	})
  	.end()
  	.then(function (result) {
    		console.log(result);
  	})
  	.catch(function (error) {
    	console.error('Search failed:', error);
  	});
});

//console.log(loc);




//#findArea > div > div:nth-child(1) > a:nth-child(1)

















//var request = require('request');
//request = request.defaults({jar: true});
//var pRequest = require('promisified-request').create(request);
//var fScraper = require('form-scraper');
//
//
//var loginDetails = { location: '90210'};
//
////var formProvider = new fScraper.ScrapingFormProvider();
////var formSubmitter = new fScraper.FormSubmitter();
//
//var formStructure = fScraper.fetchForm('#frmSearch', 'https://www.generalsnus.com/m/find', pRequest);
//console.log(formStructure); 
//
////return false;
//
//setTimeout(function() {
//	fScraper.submitForm(loginDetails, fScraper.provideForm(formStructure), pRequest).then( function (response) {
//    		console.log(response.body);
//	}, function (e) {
//		console.log(e);
//	});
//
////	console.log(formStructure);
//}, 10000);
//
//
//
//
////formProvider.updateOptions({
////	formID:  'frmSearch',
////	url: 'https://www.generalsnus.com/Account/LogOn?ReturnUrl=%2fFind%2f',
////	promisifiedRequest : pRequest
////});
////
////
////formSubmitter
////	.updateOptions({
////		formProvider: formProvider,
////		promisifiedRequest: pRequest
////	})
////	.submitForm(formInput)
////		.then(function(response) {
////			console.log(response.body);
////		});
