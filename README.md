# 账号-角色服务器

## 运行环境

* MySQL 5.7
* Node.js 8.11.1

## 部署步骤

1. root登录MySQL，source init.sql完成数据库初始化。
2. 配置nginx反向代理或者使用pm2负载均衡。
3. 配置https保证安全通信。

## 逻辑概要

* 客户端登录游戏服务器之前，以上次登录的账号http GET查询其角色信息，显示于客户端“选择服务器-已有角色”界面。
* 游戏中创建角色后后，客户端http POST角色数据到account-role服务器。
* 游戏中角色数据更新（改名、升级、合服）时，客户端http PUT角色数据到account-role服务器。
* RESTful API access_token = URLSafeBase64.encode(sha1(config.key+account_id).digest())。

## 注意事项

* 暂不提供“删除角色”功能。