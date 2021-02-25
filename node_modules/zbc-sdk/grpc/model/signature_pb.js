// source: model/signature.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.model.BitcoinPublicKeyFormat', null, global);
goog.exportSymbol('proto.model.PrivateKeyBytesLength', null, global);
goog.exportSymbol('proto.model.SignatureType', null, global);
/**
 * @enum {number}
 */
proto.model.SignatureType = {
  DEFAULTSIGNATURE: 0,
  BITCOINSIGNATURE: 1,
  MULTISIGSIGNATURE: 2,
  ESTONIAEIDSIGNATURE: 3,
  ETHEREUMSIGNATURE: 4
};

/**
 * @enum {number}
 */
proto.model.PrivateKeyBytesLength = {
  PRIVATEKEYINVALID: 0,
  PRIVATEKEY256BITS: 32,
  PRIVATEKEY384BITS: 48,
  PRIVATEKEY512BITS: 64
};

/**
 * @enum {number}
 */
proto.model.BitcoinPublicKeyFormat = {
  PUBLICKEYFORMATUNCOMPRESSED: 0,
  PUBLICKEYFORMATCOMPRESSED: 1
};

goog.object.extend(exports, proto.model);
