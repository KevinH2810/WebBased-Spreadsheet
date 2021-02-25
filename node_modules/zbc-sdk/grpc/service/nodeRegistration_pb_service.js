// package: service
// file: service/nodeRegistration.proto

var service_nodeRegistration_pb = require("../service/nodeRegistration_pb");
var model_empty_pb = require("../model/empty_pb");
var model_nodeRegistration_pb = require("../model/nodeRegistration_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var NodeRegistrationService = (function () {
  function NodeRegistrationService() {}
  NodeRegistrationService.serviceName = "service.NodeRegistrationService";
  return NodeRegistrationService;
}());

NodeRegistrationService.GetNodeRegistrations = {
  methodName: "GetNodeRegistrations",
  service: NodeRegistrationService,
  requestStream: false,
  responseStream: false,
  requestType: model_nodeRegistration_pb.GetNodeRegistrationsRequest,
  responseType: model_nodeRegistration_pb.GetNodeRegistrationsResponse
};

NodeRegistrationService.GetNodeRegistration = {
  methodName: "GetNodeRegistration",
  service: NodeRegistrationService,
  requestStream: false,
  responseStream: false,
  requestType: model_nodeRegistration_pb.GetNodeRegistrationRequest,
  responseType: model_nodeRegistration_pb.GetNodeRegistrationResponse
};

NodeRegistrationService.GetNodeRegistrationsByNodePublicKeys = {
  methodName: "GetNodeRegistrationsByNodePublicKeys",
  service: NodeRegistrationService,
  requestStream: false,
  responseStream: false,
  requestType: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysRequest,
  responseType: model_nodeRegistration_pb.GetNodeRegistrationsByNodePublicKeysResponse
};

NodeRegistrationService.GetPendingNodeRegistrations = {
  methodName: "GetPendingNodeRegistrations",
  service: NodeRegistrationService,
  requestStream: true,
  responseStream: true,
  requestType: model_nodeRegistration_pb.GetPendingNodeRegistrationsRequest,
  responseType: model_nodeRegistration_pb.GetPendingNodeRegistrationsResponse
};

NodeRegistrationService.GetMyNodePublicKey = {
  methodName: "GetMyNodePublicKey",
  service: NodeRegistrationService,
  requestStream: false,
  responseStream: false,
  requestType: model_empty_pb.Empty,
  responseType: model_nodeRegistration_pb.GetMyNodePublicKeyResponse
};

exports.NodeRegistrationService = NodeRegistrationService;

function NodeRegistrationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

NodeRegistrationServiceClient.prototype.getNodeRegistrations = function getNodeRegistrations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeRegistrationService.GetNodeRegistrations, {
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

NodeRegistrationServiceClient.prototype.getNodeRegistration = function getNodeRegistration(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeRegistrationService.GetNodeRegistration, {
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

NodeRegistrationServiceClient.prototype.getNodeRegistrationsByNodePublicKeys = function getNodeRegistrationsByNodePublicKeys(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeRegistrationService.GetNodeRegistrationsByNodePublicKeys, {
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

NodeRegistrationServiceClient.prototype.getPendingNodeRegistrations = function getPendingNodeRegistrations(metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.client(NodeRegistrationService.GetPendingNodeRegistrations, {
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport
  });
  client.onEnd(function (status, statusMessage, trailers) {
    listeners.status.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners.end.forEach(function (handler) {
      handler({ code: status, details: statusMessage, metadata: trailers });
    });
    listeners = null;
  });
  client.onMessage(function (message) {
    listeners.data.forEach(function (handler) {
      handler(message);
    })
  });
  client.start(metadata);
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    write: function (requestMessage) {
      client.send(requestMessage);
      return this;
    },
    end: function () {
      client.finishSend();
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

NodeRegistrationServiceClient.prototype.getMyNodePublicKey = function getMyNodePublicKey(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(NodeRegistrationService.GetMyNodePublicKey, {
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

exports.NodeRegistrationServiceClient = NodeRegistrationServiceClient;

