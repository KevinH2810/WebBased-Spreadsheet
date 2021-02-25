// package: service
// file: service/accountDataset.proto

var service_accountDataset_pb = require("../service/accountDataset_pb");
var model_accountDataset_pb = require("../model/accountDataset_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AccountDatasetService = (function () {
  function AccountDatasetService() {}
  AccountDatasetService.serviceName = "service.AccountDatasetService";
  return AccountDatasetService;
}());

AccountDatasetService.GetAccountDatasets = {
  methodName: "GetAccountDatasets",
  service: AccountDatasetService,
  requestStream: false,
  responseStream: false,
  requestType: model_accountDataset_pb.GetAccountDatasetsRequest,
  responseType: model_accountDataset_pb.GetAccountDatasetsResponse
};

AccountDatasetService.GetAccountDataset = {
  methodName: "GetAccountDataset",
  service: AccountDatasetService,
  requestStream: false,
  responseStream: false,
  requestType: model_accountDataset_pb.GetAccountDatasetRequest,
  responseType: model_accountDataset_pb.AccountDataset
};

exports.AccountDatasetService = AccountDatasetService;

function AccountDatasetServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AccountDatasetServiceClient.prototype.getAccountDatasets = function getAccountDatasets(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccountDatasetService.GetAccountDatasets, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

AccountDatasetServiceClient.prototype.getAccountDataset = function getAccountDataset(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AccountDatasetService.GetAccountDataset, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.AccountDatasetServiceClient = AccountDatasetServiceClient;

