var Nightmare = require('nightmare');





module.exports = function (loc) {

//	testLoc = {
//		lat: 34.08022,
//		lon: -120.44893
//		}

	return new Promise((resolve, reject) => {
		var nightmare = new Nightmare({show: false});
		
		nightmare
			.goto('https://generalsnus.com/m/find')
			.type('form[action*="/m/find"] [name = location]', testLoc.lat + ', ' + testLoc.lon)
			//.type('form[action*="/m/find"] [name = location]', loc.lat + ', ' + loc.lon)
			.click('form[action*="/m/find"] [id=btnMapIt]')
  			.wait(5000)
  			.evaluate(function () {
				var selector = '#findArea > div > div:nth-child(1) > a:nth-child(2)'
   				//var selectorName = '#findArea > div > div:nth-child(1) > a:nth-child(1) > b'
				var closestStore = {};
				var arr = [];
				var storeString = document.querySelector(selector).innerText;
				arr = storeString.split('\n');		

				closestStore.storeAddress = arr[1] + ' ' + arr[2];
				closestStore.storeName = arr[0];
				closestStore.storeUrl = document.querySelector(selector).href;
				return closestStore;
   			})
  			.end()
			.then(function (store) {
    			//	console.log(store);
				resolve(store);
  			})
  			.catch(function (error) {
    				console.error('Search failed:', error);
				reject(error);
  			});
	});
}






















