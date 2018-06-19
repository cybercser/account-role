/**
 * 角色业务操作
 */

const roleModel = require("../models/role");

const role = {
    /**
     * 查找角色
     * @param  {string} accountID 账号ID
     * @return {object|null}      查找结果
     */
    async getRoles(accountID) {
        let result = (await roleModel.getRoles(accountID)) || {};
        return result;
    },

    /**
     * 创建角色
     * @param  {object} role    角色信息
     * @return {object|null}    创建结果
     */
    async createRole(role) {
        let result = (await roleModel.createRole(role)) || {};
        return result;
    },

    /**
     * 更新角色
     * @param  {object} role  更新的角色信息
     * @return {object}       更新结果
     */
    async updateRole(role) {
        let result = await roleModel.updateRole(role);
        return result;
    }
};

module.exports = role;
