# 酷名字生成器

## 2026-10-27 · 页面联系邮箱统一 hello@（已上线，P06-19）

- 源码 `5a0e5f1`（task/19 合入 main，已 push）；Vercel 生产 `dpl_B39rQJ1G12quZfV1492HXRZUJ3W4`，别名 coolnamegen.com 已核对。回滚点：上一个生产 `dpl_6XVqij5UBbVybiocMTceq49a3X9P`（源码 `9867c88`）。
- 改动只有两处页面文案：`/privacy-policy` 的 `privacy@coolnamegen.com` → `hello@coolnamegen.com`；`/terms-of-service` 的 `legal@coolnamegen.com` → `hello@coolnamegen.com`。GA4/同意逻辑、Stripe、登录、DNS/MX 均未动。
- 发布前核对：线上仍是 `9867c88`（7 天前那次部署），未漂移；本地 main 有 2 个未推送的 docs 提交（`ebe909c`、`0b34a37`），与线上源码不同源，本次从 `origin/main` 开 worktree 改，未覆盖它们。
- 线上验证：`/`、`/privacy-policy`、`/terms-of-service` 全 200；两个法律页 mailto 均为 hello@；首页仍含 `G-5X4NEGP0RV`，`/api/consent-region` 200。
- 未验证：hello@ 实际收信（Porkbun MX 存在：fwd1/fwd2.porkbun.com，但邮箱路由是否指向有人看的收件箱本轮没测，也未发测试邮件）。
- worktree 已删。

## 2026-10-19 · 生产验收补齐404原始head

- 已发布 f208896 / dpl_6wuCj8aD6XXjESD6rY4veRtCyWYt，正式三页各一次204及DE/US通过；404返回框架错误HTML时手写head meta只在序列化数据出现。
- 将同一个ID迁至Next metadata.other，删除手写meta，保持正常页一次ID并覆盖404错误HTML；不改统计行为、接口或依赖。此为生产验收发现的修复，验证后追加修复部署，不是重复确认部署。

## 2026-10-19 · 按用户要求统一普通页面统计

- 用户明确要求改我们代码、与其他站一致。所有内部链接改普通文档导航；删除手动SPA page_view与路由监听，使用一次gtag config的标准页面加载统计。
- 无需修改GA后台历史变化开关；此前待后台设置方案被本次实现替代。本地真实 Google 请求已验证首页、工具页、隐私页各一次 page_view/204，无 query/hash 泄漏，撤回后停止；地区同意矩阵、37页 ID、构建通过，lint 仅3条既有警告。等待绑定新 SHA 的局部独立审查后沿用既有授权上线。


## 历史记录（已被上方方案替代）：2026-10-19 GA4 候选

- `G-5X4NEGP0RV`；代码候选 `f9b5ed3e875c78127fb13e8e76fdf70fe6f39671` 在隔离分支，未push/未部署。
- 37页面ID/退出入口、地区同意和接口、构建、源/产物安全扫描通过；首次渲染错误、404退出和统计标题已修复。
- 唯一发布阻断：GA4后台增强历史统计重复page_view且带query；等待Veronica关闭该数据流的“基于浏览器历史记录的网页变化”后真实网络复验。旧PM出局/不产品化决定不变。
- [完整文件清单、证据与继续入口](docs/handoffs/2026-10-19-ga4-pending.md)。当前无需其他操作，只处理上述后台设置。

## 2026-10-19 GA4 候选

- 用户提供 G-5X4NEGP0RV 并授权安装、生产部署与验证。基础页统计，SPA 手动统计候选，后台自动历史统计待关闭，输入仍本地。
- 使用 Vercel 可信地区头，EEA/UK/CH/未知默认不加载；广告功能关闭。GitHub 既有 Public 状态保持；安全扫描覆盖历史及当前源码。
- 隔离分支 feat/ga4-install-20261019；生产暂不发布：GA4 数据流历史变化自动 page_view 与本站手动路由统计重复，并在测试中带入合成 query 标记作为 referrer。已请 Veronica 关闭该数据流的历史变化增强衡量，待回复后复验；其余 4 站独立推进。


## 当前状态：已上线
- 2026-04-15

## 在做什么
- （待补充）

## 卡在哪
- （待补充）

## 下一步
- （待补充）

- 独立审查补充项已修复：固定公开页标题，避免Next metadata异步导致空标题；自定义404带页脚Privacy settings，避免404无法撤回。复验后仍等待GA后台历史统计关闭。
