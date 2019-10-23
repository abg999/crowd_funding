'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider);

var web3 = void 0; //let keyword ensures we are able to reassign a variable
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// makes sure we are in the browser and metamask is running
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//We are on the server **OR** and the user is not running or using metamask
	var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/1c45002f11c84ee5975a98b1cc4ea887');
	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7O0FBRUEsSUFBSSxZQUFKLEEsR0FBUztBQUNULElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQ3RFO0FBQ0E7UUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNDO0FBSEYsT0FHUSxBQUNQO0FBQ0E7S0FBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDakIsQUFEaUIsQUFBakIsQUFHQTtRQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFJQztBQUVGOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiYzovYmxvY2tfY2hhaW5fcHJvamVjdHMvY3Jvd2RfZnVuZGluZyJ9