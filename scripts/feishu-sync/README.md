# 飞书 → GitHub 同步小测试

用 **1 篇飞书文档** 验证：改飞书 → 跑脚本 / 点按钮 → GitHub 文件更新。

## 一定要「飞书企业应用」吗？

| 概念 | 是否必须 | 说明 |
|------|----------|------|
| 飞书**企业版付费** | ❌ 不必 | 普通飞书团队即可 |
| **企业自建应用** | ✅ 必须 | 在 [飞书开放平台](https://open.feishu.cn/app) 免费创建，用于调 API |
| Webhook / 公网服务器 | ❌ 测试不必 | 本 PoC 用手动触发；全自动上线再加 |
| 文档应用授权 | ✅ 必须 | 把自建应用加为文档协作者，否则读不到内容 |

「企业自建应用」≠ 大企业专属，任何飞书管理员都能在开发者后台 5 分钟创建一个。

---

## 第一步：创建飞书自建应用（约 5 分钟）

1. 打开 https://open.feishu.cn/app → **创建企业自建应用**
2. **权限管理** → 开通（只读即可）：
   - `docx:document:readonly` — 查看新版文档
   - `wiki:wiki:readonly` — 查看知识库节点（**知识库链接必开**）
   - `drive:file:readonly` — 查看云空间文件
   - `docs:document.media:download` — **下载文档内图片**（图片同步必开）
3. **凭证与基础信息** → 复制 **App ID**、**App Secret**
4. **版本管理与发布** → 创建版本并发布（测试企业也要发布）
5. 打开你要测试的飞书文档 → 右上角 **…** → **添加文档应用** → 搜索你的应用 → 设为 **可阅读** 或 **可编辑**

---

## 第二步：准备一篇测试文档

1. 在飞书新建一篇 **新版文档（docx）**
2. 写几句容易辨认的内容，例如：`Feishu sync test - 2026-06-10`
3. 从浏览器地址栏复制链接或 token：

**知识库链接（常见）：**

```text
https://d5.feishu.cn/wiki/C1snwEs4hiVZtNk1fZlcCfTEnRe
                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                              这是 wiki 节点 token，不是 doxcn
```

**云文档链接：**

```text
https://xxx.feishu.cn/docx/doxcnAbCdEf123456
                              ^^^^^^^^^^^^^^^^
                              这是 docx token（doxcn 开头）
```

> `doxcnAbCdEf123456` 只是示例。你的链接是 `/wiki/` 格式，请用下面的 `--url` 命令，不必找 doxcn。

4. （可选）复制映射表：

```bash
cp .feishu-map.yml.example .feishu-map.yml
# 编辑 .feishu-map.yml，填入真实 doc_token
```

---

## 第三步：本地跑同步（最快验证）

在项目根目录：

```powershell
# PowerShell — 直接粘贴你的飞书知识库链接
$env:FEISHU_APP_ID = "cli_xxxxxxxx"
$env:FEISHU_APP_SECRET = "xxxxxxxxxxxxxxxx"

node scripts/feishu-sync/sync.mjs `
  --url "https://d5.feishu.cn/wiki/C1snwEs4hiVZtNk1fZlcCfTEnRe" `
  --path "docs/feishu-sync-test.md"
```

若已是 docx 链接，同样用 `--url`；或显式指定 token：

```powershell
node scripts/feishu-sync/sync.mjs `
  --wiki "C1snwEs4hiVZtNk1fZlcCfTEnRe" `
  --path "docs/feishu-sync-test.md"
```

```bash
# macOS / Linux
export FEISHU_APP_ID=cli_xxxxxxxx
export FEISHU_APP_SECRET=xxxxxxxxxxxxxxxx

node scripts/feishu-sync/sync.mjs \
  --doc doxcnAbCdEf123456 \
  --path docs/feishu-sync-test.md
```

成功后会更新 `docs/feishu-sync-test.md`：

```bash
git diff docs/feishu-sync-test.md
```

再在飞书里改几个字，重新跑同一条命令，应能看到 diff。

---

## 第四步：GitHub Actions 远程验证（可选）

1. 打开仓库 **Settings → Secrets and variables → Actions**
2. 新建 Secrets：
   - `FEISHU_APP_ID`
   - `FEISHU_APP_SECRET`
3. **Actions** → **Feishu Sync Test** → **Run workflow**
4. 填入 `doc_token` 和 `github_path`（默认 `docs/feishu-sync-test.md`）
5. 跑完后看 commit 是否出现 `docs(feishu): sync ...`

---

## 验证清单

- [ ] 飞书改文字 → 本地脚本 → `git diff` 有变化
- [ ] frontmatter 里出现 `feishu_synced_at`
- [ ] GitHub Actions 手动跑 → 仓库自动 commit
- [ ] 权限错误时，给文档加了「文档应用」后恢复正常

---

## 全自动同步（已配置）

push 以下文件到 GitHub 并配置 Secrets 后，**PM 只改飞书，不用跑本地脚本**：

| 文件 | 作用 |
|------|------|
| `.feishu-map.yml` | 飞书 wiki/doc ↔ GitHub 路径 |
| `.github/workflows/feishu-sync.yml` | 每 15 分钟自动同步 + 支持 Webhook 触发 |
| `scripts/feishu-sync/sync-all.mjs` | 按映射表批量同步 |

### GitHub Secrets（Settings → Secrets → Actions）

- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`

### 上线步骤

1. `git push` 把本次改动推到 `main`
2. 确认 Secrets 已配置
3. Actions → **Feishu Sync** → Run workflow（先手动跑一次）
4. PM 改飞书 → 最多等 **15 分钟** → GitHub 自动 commit → **Deploy VitePress** 自动构建

### 以后加 Webhook（秒级，可选）

飞书事件订阅 → 公网服务 → 调 GitHub API：

```http
POST /repos/leah-47/gitbook/dispatches
{ "event_type": "feishu-doc-updated", "client_payload": { "wiki_token": "C1snw..." } }
```

`feishu-sync.yml` 已支持 `repository_dispatch` 事件。

---

## 常见问题

### `91403` / `99991672` Access denied

应用没有该文档权限。在文档里 **添加文档应用**，或把含应用机器人的群加为文档协作者。

### 正文格式很 plain

本 PoC 使用飞书 `raw_content` API，适合验证链路；表格、图片等复杂格式后续可换 [feishu2md](https://github.com/Wsine/feishu2md) 或自研 Block 转换器。

### 怎么变成「改飞书自动同步」？

本地 / Actions 手动触发验证通过后，再加：

1. 飞书事件订阅（`drive.file.edit_v1`）→ 你的同步服务
2. 服务里 debounce 后调用本脚本同样的 API 逻辑
3. GitHub App 或 Actions 自动 commit

Webhook 仍需要同一个自建应用，只是多配一个回调 URL。

---

## 文件说明

| 文件 | 作用 |
|------|------|
| `scripts/feishu-sync/sync.mjs` | 拉飞书文档 → 写 Markdown |
| `.feishu-map.yml.example` | doc_token ↔ 文件路径映射示例 |
| `docs/feishu-sync-test.md` | 默认测试目标页 |
| `.github/workflows/feishu-sync-test.yml` | GitHub 手动触发同步 |
