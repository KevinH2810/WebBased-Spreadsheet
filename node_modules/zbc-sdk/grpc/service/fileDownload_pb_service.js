// package: service
// file: service/fileDownload.proto

var service_fileDownload_pb = require("../service/fileDownload_pb");
var model_fileDownload_pb = require("../model/fileDownload_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var FileDownloadService = (function () {
  function FileDownloadService() {}
  FileDownloadService.serviceName = "service.FileDownloadService";
  return FileDownloadService;
}());

FileDownloadService.FileDownload = {
  methodName: "FileDownload",
  service: FileDownloadService,
  requestStream: false,
  responseStream: false,
  requestType: model_fileDownload_pb.FileDownloadRequest,
  responseType: model_fileDownload_pb.FileDownloadResponse
};

exports.FileDownloadService = FileDownloadService;

function FileDownloadServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

FileDownloadServiceClient.prototype.fileDownload = function fileDownload(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(FileDownloadService.FileDownload, {
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

exports.FileDownloadServiceClient = FileDownloadServiceClient;

