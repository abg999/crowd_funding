'use strict';

//***Note***
//whenever changes has to be performed in this file restaart server by npm run dev 
//*************

var routes = require('next-routes')();

routes
//2nd arg specifies which component from pages directory should be accessed when routed to 1st argument
.add('campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTSxTQUFTLEFBQWY7O0FBRUE7QUFDQSxBQURBO0NBRUUsQUFGRixJQUVNLEFBRk4saUJBRXNCLEFBRnRCLGtCQUdFLEFBSEYsSUFHTSxBQUhOLHVCQUc0QixBQUg1QixtQkFJRSxBQUpGLElBSU0sQUFKTixnQ0FJcUMsQUFKckMsNkJBS0UsQUFMRixJQUtNLEFBTE4sb0NBS3lDLEFBTHpDO0FBTUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJjOi9ibG9ja19jaGFpbl9wcm9qZWN0cy9jcm93ZF9mdW5kaW5nIn0=