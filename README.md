# Fast ElementPlus Components Monorepo

基于 **pnpm Workspaces + Vue 3 + Vite + VitePress** 的 Monorepo，组件库、示例应用和文档共享同一份组件源码。

## 目录结构

```text
component/
├── apps/
│   ├── docs/                 # VitePress 文档站点
│   └── playground/           # 组件开发与调试示例
├── packages/
│   └── components/           # fast-elementplus-components 组件库
├── package.json              # 根目录统一脚本
├── pnpm-workspace.yaml       # Workspace 配置
└── tsconfig.base.json        # 共享 TypeScript 配置
```

## 环境要求

- Node.js >= 20
- pnpm 10.11.0（已在 `packageManager` 中声明）

## 安装

在仓库根目录执行：

```sh
pnpm install
```

不要分别在子目录维护独立的 lockfile；整个 Monorepo 只使用根目录的 `pnpm-lock.yaml`。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动 playground 开发服务器 |
| `pnpm dev:docs` | 启动文档开发服务器 |
| `pnpm build` | 按依赖顺序构建组件库、playground 和文档 |
| `pnpm build:components` | 仅构建组件库 |
| `pnpm build:playground` | 仅构建 playground |
| `pnpm build:docs` | 仅构建文档 |
| `pnpm preview` | 预览 playground 构建产物 |
| `pnpm preview:docs` | 预览文档构建产物 |
| `pnpm type-check` | 构建组件类型声明并检查组件库和 playground |
| `pnpm lint` | 检查并自动修复 ESLint 问题 |
| `pnpm lint:check` | 只检查 ESLint 问题，不修改文件 |
| `pnpm format` | 使用 Prettier 格式化工作区文件 |

也可以对单个 Workspace 执行命令：

```sh
pnpm --filter fast-elementplus-components <script>
pnpm --filter @fast-elementplus/playground <script>
pnpm --filter @fast-elementplus/docs <script>
```

## Workspace 依赖

两个应用都通过以下方式引用本地组件库，不再依赖 npm 上的旧版本：

```json
{
  "dependencies": {
    "fast-elementplus-components": "workspace:*"
  }
}
```

组件库的 `development` export 条件指向 `src`，因此开发时修改组件源码即可由应用热更新；生产构建使用 `dist`。根目录 `pnpm build` 会先构建组件库，再构建依赖它的应用。

## 构建产物

- 组件库：`packages/components/dist`
- playground：`apps/playground/dist`
- 文档：`apps/docs/docs/.vitepress/dist`

## 自动发布

`.github/workflows/publish.yml` 在推送到 `main` 时构建并发布三个 Workspace，也支持在 Actions 页面手动运行。

### GitHub Pages

文档发布到站点根路径，playground 发布到 `/playground/`：

```text
https://<owner>.github.io/<repository>/
https://<owner>.github.io/<repository>/playground/
```

首次运行前，在仓库 **Settings → Pages** 中将 **Source** 设置为 **GitHub Actions**。工作流会根据仓库名自动设置 VitePress 和 Vite 的 `base`。

### npm

在仓库 **Settings → Secrets and variables → Actions** 中添加具有组件包发布权限的 `NPM_TOKEN`。

- 推送到 `main` 时，如果 `packages/components/package.json` 中的版本尚未发布到 npm，工作流会自动发布。
- 如果版本已存在则跳过，不会重复发布；发布新版本前需要先更新 `version`。
- 手动运行工作流时，可勾选 `publish_npm` 发布当前未发布的版本；不勾选则只更新 Pages。
- npm 发布与 Pages 部署是两个独立任务，npm 配置或发布失败不会阻止文档和 playground 部署。
