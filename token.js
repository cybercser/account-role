const APIError = require('./rest').APIError;
const crypto = require('crypto');
const URLSafeBase64 = require('urlsafe-base64');
const config = require("./config");

let validateToken = function(token, param) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(config.key);
    sha1.update(param);
    if (!URLSafeBase64.validate(token) || token != URLSafeBase64.encode(sha1.digest())) {
        console.log('[WARNING] invalid access token');
        throw new APIError('roles:not_found', 'invalid access token.');
    }
};

module.exports = {
    validateToken
};