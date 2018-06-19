USE test;
CREATE TABLE IF NOT EXISTS `account_role` (
    `account_id` VARCHAR(100) NOT NULL,
    `role_id` VARCHAR(100) NOT NULL,
    `role_name` VARCHAR(100) NOT NULL,
    `role_level` TINYINT NOT NULL,
    `role_class` TINYINT NOT NULL,
    `role_sex` TINYINT NOT NULL,
    `role_avatar` VARCHAR(255) NOT NULL,
    `area_id` VARCHAR(100) NOT NULL,
    `area_name` VARCHAR(100) NOT NULL,
    `server_id` VARCHAR(100) NOT NULL,
    `server_name` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`account_id`, `role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE USER 'rockrole'@'%' IDENTIFIED BY 'WMtLxUe3#5=%@DRGs8ILf';
GRANT ALL PRIVILEGES ON test.* TO 'rockrole'@'%';
FLUSH PRIVILEGES;
