# d5render-docs

D5 Render 官方帮助中心（[docs.d5render.com](https://docs.d5render.com/)）的 Markdown 镜像，便于离线阅读、检索与归档。

> **说明：** 文档内容版权归 D5 Render 所有。本仓库仅作个人学习/备份用途，请以[官方网站](https://docs.d5render.com/)为准。

## 目录结构

```
docs/                    # 文档正文（按官网 URL 路径组织）
docs/SUMMARY.md          # 文档索引（自动生成）
links.json               # 发现的页面链接列表（自动生成）
scripts/update_docs.js   # 一键更新脚本
run_update.bat           # ★ 双击这个即可更新（推荐）
```

## 更新文档（无需再导出 JSON）

**双击 `run_update.bat`**，会自动完成：

1. 从官网发现所有文档链接（写入 `links.json`）
2. 抓取每篇正文到 `docs/`
3. 修复异常链接格式
4. 重新生成 `docs/SUMMARY.md`
5. 删除官网已下架的本地旧文件

或命令行：

```bash
node scripts/update_docs.js
```

完成后查看 `fetch_summary.json` 了解成功/失败统计。

> **不再需要** 使用「帮助中心爬取小助手」单独爬链接、导出 JSON。

## 推送到 GitHub

```bash
cd C:\Users\Administrator\Projects\d5render-docs
git add .
git commit -m "Update docs from docs.d5render.com"
git push
```

## 其他脚本（可选）

| 文件 | 说明 |
|------|------|
| `run_update.bat` | 一键更新（推荐） |
| `run_fetch.bat` | 同 `run_update.bat`（已合并） |
| `run_fix_links.bat` | 仅修复链接（通常不需要单独运行） |
