var orm = require("../config/orm.js");

var burger = {
	all: function(bb) {
		orm.all("burgers", function(res){
			bb(res);
		});
	},

	create: function(cols, vals, bb) {
		orm.create("burgers", cols, vals, function(res) {
			bb(res);
		});
	},
	update: function(objColVals, condition, bb) {
		orm.update("burgers", objColVals, condition, function(res) {
			bb(res);
		});
	},
	delete: function(condition, bb) {
		orm.delete("burgers", condition, function(res){
			bb(res);
		});;
	}
};
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;