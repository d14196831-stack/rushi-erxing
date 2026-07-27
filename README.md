# 如实而行，各自成林

将同名 PDF 重构为响应式长文阅读网站。页面采用暖纸色、衬线标题、克制的陶土色强调与章节化阅读路径，完整保留原文结构，并提供原 PDF 下载。

## 本地运行

```bash
npm ci
npm run dev
```

## 构建

```bash
# Sites / Cloudflare Worker build
npm run build

# GitHub Pages static export
npm run build:pages
```

静态文件输出到 `out/`。站点不加载 Google Fonts、公共 CDN、第三方分析脚本或远程图片，核心资源全部随仓库发布。

## 发布

`main` 保存网站源码，静态构建产物发布到 `gh-pages` 分支。GitHub Pages 从该分支根目录提供网站。

## 内容

原文作者：树林  
版本：V2.4 / 2026.07
