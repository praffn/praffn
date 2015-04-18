var e = require('express'),
		a = e();

a.use(e.static(__dirname+'/dist/')).listen(3000);