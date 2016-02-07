define('transfer',	function(require) {
	"use strict";
		var Config = require('Capital One');

	var Transfer = {
		initWithKey: function(apiKey) {
			Config.setApiKey(apiKey);
			return this;
		},
		urlWithEntity: function() {
			return Config.baseUrl+'/transfers/';
		},
		urlWithAccountEntity: function() {
			return Config.baseUrl+'/accounts/';
		},
		apiKey: function() {
			return Config.apiKey;
		},
		//get all transfers from account ID
		getAllByAccountId: function(accID) {
			var transfer;
			var request = $.ajax({
				url: this.urlWithAccountEntity()+accID+'/transfers',
				data: 'key='+this.apiKey(),
				async: false,
				dataType: 'json'
			});

			request.complete(function(results) {
				transfers = results.responseJSON;
			});
			return transfers;
		},
		//get transfer by its ID
		getTransferById: function(id) {
			var transfer;
			var request = $.ajax({
				url: this.urlWithEntity()+id,
				data: 'key='+this.apiKey(),
				async: false,
				dataType: 'json'});

			request.complete(function(results) {
				transfer = results.responseJSON;
			});
			return transfer;
		},
		//create transfer where the ID specified is the payer
		createTransfer: function(toAcc, json) {
			var respCode;
			var request = $.ajax({
					url: this.urlWithAccountEntity()+toAcc+'/transfers?key='+this.apiKey(),
					data: json,
					contentType: 'application/json',
					async: false,
					type: 'POST'
				});
			request.complete(function(jqXHR, textStatus) {
				respCode = jqXHR.status;
			});
			return respCode;
		},
		//update a specific transfer
		updateTransferById: function(id, json){
			var respCode;
			var request = $.ajax({
				url: this.urlWithEntity()+id+'/?key='+this.apiKey(),
				data: json,
				contentType: 'application/json',
				async: false,
				type: 'PUT'
			});
			request.complete(function(jqXHR, textStatus){
				respCode = jqXHR.status;
			});
			return respCode;
		},
		//delete a transfer
		deleteTransfers: function(id)  {
			var respCode;
			var request = $.ajax({
					url: this.urlWithEntity()+id,
					data: {'key': this.apiKey()},
					async: false,
					type: 'DELETE'
				});
			request.complete(function(jqXHR, textStatus) {
				respCode = jqXHR.status;
			});
			return respCode;
		}
	};
    return Transfer;
});
