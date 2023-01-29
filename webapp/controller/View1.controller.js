sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-5_Aggregation-Binding.controller.View1", {
			
			onInit : function() {
				var student = new sap.ui.model.json.JSONModel();
				
				student.loadData("model/studentData.json");
			
				this.getView().setModel(student);
			}

	});
});