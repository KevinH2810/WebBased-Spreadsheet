// package: service
// file: service/multiSignature.proto

var service_multiSignature_pb = require("../service/multiSignature_pb");
var model_multiSignature_pb = require("../model/multiSignature_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var MultisigService = (function () {
  function MultisigService() {}
  MultisigService.serviceName = "service.MultisigService";
  return MultisigService;
}());

MultisigService.GetPendingTransactions = {
  methodName: "GetPendingTransactions",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetPendingTransactionsRequest,
  responseType: model_multiSignature_pb.GetPendingTransactionsResponse
};

MultisigService.GetPendingTransactionDetailByTransactionHash = {
  methodName: "GetPendingTransactionDetailByTransactionHash",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashRequest,
  responseType: model_multiSignature_pb.GetPendingTransactionDetailByTransactionHashResponse
};

MultisigService.GetMultisignatureInfo = {
  methodName: "GetMultisignatureInfo",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetMultisignatureInfoRequest,
  responseType: model_multiSignature_pb.GetMultisignatureInfoResponse
};

MultisigService.GetMultisigAddressByParticipantAddress = {
  methodName: "GetMultisigAddressByParticipantAddress",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetMultisigAddressByParticipantAddressRequest,
  responseType: model_multiSignature_pb.GetMultisigAddressByParticipantAddressResponse
};

MultisigService.GetPendingTransactionsByHeight = {
  methodName: "GetPendingTransactionsByHeight",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetPendingTransactionsByHeightRequest,
  responseType: model_multiSignature_pb.GetPendingTransactionsByHeightResponse
};

MultisigService.GetMultisigAddressesByBlockHeightRange = {
  methodName: "GetMultisigAddressesByBlockHeightRange",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeRequest,
  responseType: model_multiSignature_pb.GetMultisigAddressesByBlockHeightRangeResponse
};

MultisigService.GetParticipantsByMultisigAddresses = {
  methodName: "GetParticipantsByMultisigAddresses",
  service: MultisigService,
  requestStream: false,
  responseStream: false,
  requestType: model_multiSignature_pb.GetParticipantsByMultisigAddressesRequest,
  responseType: model_multiSignature_pb.GetParticipantsByMultisigAddressesResponse
};

exports.MultisigService = MultisigService;

function MultisigServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MultisigServiceClient.prototype.getPendingTransactions = function getPendingTransactions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetPendingTransactions, {
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

MultisigServiceClient.prototype.getPendingTransactionDetailByTransactionHash = function getPendingTransactionDetailByTransactionHash(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetPendingTransactionDetailByTransactionHash, {
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

MultisigServiceClient.prototype.getMultisignatureInfo = function getMultisignatureInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetMultisignatureInfo, {
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

MultisigServiceClient.prototype.getMultisigAddressByParticipantAddress = function getMultisigAddressByParticipantAddress(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetMultisigAddressByParticipantAddress, {
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

MultisigServiceClient.prototype.getPendingTransactionsByHeight = function getPendingTransactionsByHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetPendingTransactionsByHeight, {
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

MultisigServiceClient.prototype.getMultisigAddressesByBlockHeightRange = function getMultisigAddressesByBlockHeightRange(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetMultisigAddressesByBlockHeightRange, {
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

MultisigServiceClient.prototype.getParticipantsByMultisigAddresses = function getParticipantsByMultisigAddresses(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(MultisigService.GetParticipantsByMultisigAddresses, {
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

exports.MultisigServiceClient = MultisigServiceClient;

