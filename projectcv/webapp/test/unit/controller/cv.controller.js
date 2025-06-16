/*global QUnit*/

sap.ui.define([
	"projectcv/controller/cv.controller"
], function (Controller) {
	"use strict";

	QUnit.module("cv Controller");

	QUnit.test("I should test the cv controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
