const APIError = require('../rest').APIError;
const role = require('../service/role')
const validateToken = require('../token').validateToken;

module.exports = {
    'GET /api/roles': async (ctx, next) => {
        var accountID = ctx.query.account_id;
        var accessToken = ctx.query.access_token;
        validateToken(accessToken, accountID);
        var roles = await role.getRoles(accountID);
        ctx.rest({
            roles: roles
        });
    },

    'POST /api/roles': async (ctx, next) => {
        var
            t = ctx.request.body,
            r;
        if (!t.account_id || !t.account_id.trim()) {
            throw new APIError('invalid_input', 'Missing account_id');
        }
        validateToken(t.access_token, t.account_id);
        if (!t.role_id || !t.role_id.trim()) {
            throw new APIError('invalid_input', 'Missing role_id');
        }
        if (!t.role_name || !t.role_name.trim()) {
            throw new APIError('invalid_input', 'Missing role_name');
        }
        if (!t.role_level || !t.role_level.trim()) {
            throw new APIError('invalid_input', 'Missing role_level');
        }
        if (!t.role_class || !t.role_class.trim()) {
            throw new APIError('invalid_input', 'Missing role_class');
        }
        if (!t.role_sex || !t.role_sex.trim()) {
            throw new APIError('invalid_input', 'Missing role_sex');
        }
        if (!t.role_avatar || !t.role_avatar.trim()) {
            throw new APIError('invalid_input', 'Missing role_avatar');
        }
        if (!t.area_id || !t.area_id.trim()) {
            throw new APIError('invalid_input', 'Missing area_id');
        }
        if (!t.area_name || !t.area_name.trim()) {
            throw new APIError('invalid_input', 'Missing area_name');
        }
        if (!t.server_id || !t.server_id.trim()) {
            throw new APIError('invalid_input', 'Missing server_id');
        }
        if (!t.server_name || !t.server_name.trim()) {
            throw new APIError('invalid_input', 'Missing server_name');
        }
        r = await role.createRole({
            account_id: t.account_id.trim(),
            role_id: t.role_id.trim(),
            role_name: t.role_name.trim(),
            role_level: parseInt(t.role_level.trim()),
            role_class: parseInt(t.role_class.trim()),
            role_sex: parseInt(t.role_sex.trim()),
            role_avatar: t.role_avatar.trim(),
            area_id: t.area_id.trim(),
            area_name: t.area_name.trim(),
            server_id: t.server_id.trim(),
            server_name: t.server_name.trim()
        });
        ctx.rest(r);
    },

    'PUT /api/roles': async (ctx, next) => {
        var
            t = ctx.request.body,
            r;
        if (!t.account_id || !t.account_id.trim()) {
            throw new APIError('invalid_input', 'Missing account_id');
        }
        validateToken(t.access_token, t.account_id);
        if (!t.role_id || !t.role_id.trim()) {
            throw new APIError('invalid_input', 'Missing role_id');
        }
        if (!t.role_name || !t.role_name.trim()) {
            throw new APIError('invalid_input', 'Missing role_name');
        }
        if (!t.role_level || !t.role_level.trim()) {
            throw new APIError('invalid_input', 'Missing role_level');
        }
        if (!t.role_avatar || !t.role_avatar.trim()) {
            throw new APIError('invalid_input', 'Missing role_avatar');
        }
        if (!t.server_id || !t.server_id.trim()) {
            throw new APIError('invalid_input', 'Missing server_id');
        }
        if (!t.server_name || !t.server_name.trim()) {
            throw new APIError('invalid_input', 'Missing server_name');
        }
        r = await role.updateRole({
            account_id: t.account_id.trim(),
            role_id: t.role_id.trim(),
            role_name: t.role_name.trim(),
            role_level: t.role_level.trim(),
            role_avatar: t.role_avatar.trim(),
            server_id: t.server_id.trim(),
            server_name: t.server_name.trim()
        });
        ctx.rest(r);
    }
}
