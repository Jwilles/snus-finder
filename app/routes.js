// routes.js

var getSnus = require('./snus-nightmare');

module.exports = function(app) {
	
	app.get('/snus/:lat/:lon', (req, res) => {
		getSnus(req.params).then((store) => {
		//	console.log(weather);
		//	var closestStore = {url: store};
			res.json(store);
		}, (e) =>  {
		//	console.log(e)
			res.send(e);
		});
		
		// console.log(req.params);
	});

};
