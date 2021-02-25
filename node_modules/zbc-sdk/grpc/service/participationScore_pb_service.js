// package: service
// file: service/participationScore.proto

var service_participationScore_pb = require("../service/participationScore_pb");
var model_participationScore_pb = require("../model/participationScore_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ParticipationScoreService = (function () {
  function ParticipationScoreService() {}
  ParticipationScoreService.serviceName = "service.ParticipationScoreService";
  return ParticipationScoreService;
}());

ParticipationScoreService.GetParticipationScores = {
  methodName: "GetParticipationScores",
  service: ParticipationScoreService,
  requestStream: false,
  responseStream: false,
  requestType: model_participationScore_pb.GetParticipationScoresRequest,
  responseType: model_participationScore_pb.GetParticipationScoresResponse
};

ParticipationScoreService.GetLatestParticipationScoreByNodeID = {
  methodName: "GetLatestParticipationScoreByNodeID",
  service: ParticipationScoreService,
  requestStream: false,
  responseStream: false,
  requestType: model_participationScore_pb.GetLatestParticipationScoreByNodeIDRequest,
  responseType: model_participationScore_pb.ParticipationScore
};

exports.ParticipationScoreService = ParticipationScoreService;

function ParticipationScoreServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ParticipationScoreServiceClient.prototype.getParticipationScores = function getParticipationScores(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ParticipationScoreService.GetParticipationScores, {
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

ParticipationScoreServiceClient.prototype.getLatestParticipationScoreByNodeID = function getLatestParticipationScoreByNodeID(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ParticipationScoreService.GetLatestParticipationScoreByNodeID, {
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

exports.ParticipationScoreServiceClient = ParticipationScoreServiceClient;

