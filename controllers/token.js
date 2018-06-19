const APIError = require('../rest').APIError;
const crypto = require('crypto');
const config = require("../config");

let validateToken = function(token, param) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(config.key);
    sha1.update(param);
    if (token != sha1.digest().toString('base64')) {
        console.log('[WARNING] invalid access token');
        throw new APIError('roles:not_found', 'invalid access token.');
    }
};

module.exports = {
    validateToken
};