const dbUtils = require("../utils/db-util");

const role = {
    /**
     * 根据账号ID查找其所有的角色数据
     * @param  {string} accountID 账号ID
     * @return {object|null}      查找结果
     */
    async getRoles(accountID) {
        let _sql = `
    SELECT * from account_role
    WHERE account_id="${accountID}"`;
        let result = await dbUtils.query(_sql);
        return result;
    },

    /**
     * 数据库创建角色
     * @param  {object} d 角色数据
     * @return {object}   执行结果
     */
    async createRole(d) {
        let _sql = `
    INSERT INTO account_role(
        account_id,
        role_id,
        role_name,
        role_level,
        role_class,
        role_sex,
        role_avatar,
        area_id,
        area_name,
        server_id,
        server_name)
    VALUES(
        "${d.account_id}",
        "${d.role_id}",
        "${d.role_name}",
        ${d.role_level},
        ${d.role_class},
        ${d.role_sex},
        "${d.role_avatar}",
        "${d.area_id}",
        "${d.area_name}",
        "${d.server_id}",
        "${d.server_name}")
    ON DUPLICATE KEY UPDATE
        role_name="${d.role_name}",
        role_level=${d.role_level},
        role_class=${d.role_class},
        role_sex=${d.role_sex},
        role_avatar="${d.role_avatar}",
        area_id="${d.area_id}",
        area_name="${d.area_name}",
        server_id="${d.server_id}",
        server_name="${d.server_name}"`;
        let result = await dbUtils.query(_sql);
        return result;
    },

    /**
     * 根据账号ID和角色ID更新角色数据
     * @param  {object} d 更新数据
     * @return {object}   执行结果
     */
    async updateRole(d) {
        let _sql = `
    UPDATE account_role
    SET
      role_name="${d.role_name}",
      role_level=${d.role_level},
      role_avatar="${d.role_avatar}",
      server_id="${d.server_id}",
      server_name="${d.server_name}"
    WHERE
      account_id="${d.account_id}" and role_id="${d.role_id}"`;
        let result = await dbUtils.query(_sql);
        return result;
    }
};

module.exports = role;
