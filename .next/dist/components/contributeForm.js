'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _dynamicCampaignInteraction = require('../ethereum/dynamicCampaignInteraction');

var _dynamicCampaignInteraction2 = _interopRequireDefault(_dynamicCampaignInteraction);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\block_chain_projects\\crowd_funding\\components\\contributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								campaign = (0, _dynamicCampaignInteraction2.default)(_this.props.address); //from show.js passed as an argument when contibuteForm is called

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 9:

								_routes.Router.replaceRoute('/campaigns/' + _this.props.address); //will replace current route again with same route and refresh the page 

								_context.next = 15;
								break;

							case 12:
								_context.prev = 12;
								_context.t0 = _context['catch'](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 15:

								_this.setState({ loading: false, value: '' });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 12]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return (
				// we are not calling onSubmit during render time therefore no parenthesis
				_react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
						fileName: _jsxFileName,
						lineNumber: 41
					}
				}, _react2.default.createElement(_semanticUiReact.Form.Field, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 42
					}
				}, _react2.default.createElement('label', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 43
					}
				}, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
					value: this.state.value,
					onChange: function onChange(event) {
						return _this3.setState({ value: event.target.value });
					},
					label: 'ether',
					labelPosition: 'right',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 44
					}
				})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'oops!', content: this.state.errorMessage, __source: {
						fileName: _jsxFileName,
						lineNumber: 51
					}
				}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
						fileName: _jsxFileName,
						lineNumber: 52
					}
				}, 'Contribute!'))
			);
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsImR5bmFtaWNDYW1wYWlnbkludGVyYWN0aW9uIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWdDOzs7O0FBQ3ZDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7Ozs7OzBOQUVMLEE7VUFBTyxBQUNDLEFBQ1A7aUJBRk0sQUFFTyxBQUNiO1lBSE0sQUFHRyxBO0FBSEgsQUFDTixXLEFBS0Q7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO2tCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFDQTtBQUZJLG1CQUVPLDBDQUEyQixNQUFBLEFBQUssTUFGdkMsQUFFTyxBQUFzQyxVQUFVLEFBRWpFOztjQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLGNBSmxCLEFBSVYsQUFBYyxBQUEyQjs7d0JBSi9CO3dCQUFBO2VBT2MsY0FBQSxBQUFLLElBUG5CLEFBT2MsQUFBUzs7WUFBMUI7QUFQRyw0QkFBQTt3QkFBQTt3QkFRSCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7ZUFDOUIsU0FEbUMsQUFDbkMsQUFBUyxBQUNkO2dCQUFNLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FWMUIsQUFRSCxBQUFtQyxBQUVsQyxBQUFrQztBQUZBLEFBQ3hDLFNBREs7O1lBS047O3VCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWI5QixBQWFULEFBQTZDLFVBYnBDLEFBYThDOzt3QkFiOUM7QUFBQTs7WUFBQTt3QkFBQTt3Q0FnQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQWhCckIsQUFnQlQsQUFBYyxBQUFvQjs7WUFJbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0FwQm5CLEFBb0JWLEFBQWMsQUFBcUI7O1lBcEJ6QjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7MkJBc0JIO2dCQUNQOztBQUNDO0FBQ0E7b0JBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2dCQUFuRDtrQkFBQSxBQUNDO0FBREQ7dUJBQ0UsY0FBRCxzQkFBQSxBQUFNOztnQkFBTjtrQkFBQSxBQUNDO0FBREQ7QUFBQSx1QkFDQyxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsT0FERCxBQUNDLEFBQ0EseUNBQUEsQUFBQztZQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2VBQVUseUJBQUE7YUFBTyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU0sTUFBQSxBQUFNLE9BQW5DLEFBQU8sQUFBYyxBQUFxQjtBQUZyRCxBQUdDO1lBSEQsQUFHTyxBQUNOO29CQUpELEFBSWU7O2dCQUpmO2tCQUhGLEFBQ0MsQUFFQyxBQU9EO0FBUEM7QUFDQyx5QkFNRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7Z0JBQWxEO2tCQVZELEFBVUMsQUFDQTtBQURBO3dCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztnQkFBcEM7a0JBQUE7QUFBQTtPQWJGLEFBRUMsQUFXQyxBQUtGOzs7Ozs7QUFqRDJCLEEsQUFvRDdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6ImM6L2Jsb2NrX2NoYWluX3Byb2plY3RzL2Nyb3dkX2Z1bmRpbmcifQ==