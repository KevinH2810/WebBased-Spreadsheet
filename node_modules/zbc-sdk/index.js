// Licensed to the Quasisoft Limited - Hong Kong under one or more agreements
// The Quasisoft Limited - Hong Kong licenses this file to you under MIT license.

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/zoobc-sdk.production.min.js')
} else {
  module.exports = require('./dist/zoobc-sdk.development.js')
}