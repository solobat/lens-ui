# `@solobat/lens-ui`

`@solobat/lens-ui` 是给 `veridex`、`slipstream`、`tradfi-monitor` 这类独立部署 Svelte 前端准备的共享 UI 基础包。

## 包含内容

- 统一主题 token：`theme.css`
- 统一主题切换逻辑：`theme.js`
- 通用基础组件：
  - `BrandMark`
  - `PageHeader`
  - `Panel`
  - `StatCard`
  - `EmptyState`

## 设计边界

这个包只放跨项目稳定的基础设施：

- 放进包里：主题、外壳、基础卡片、标题区、空态、通用展示组件
- 不放进包里：具体业务页面、记录流、行情卡片、设置表单逻辑

这样三个项目可以统一视觉和结构基础，但不会被彼此业务代码绑死。

## 使用方式

### 1. 直接从 GitHub 安装

如果三个前端项目都是独立仓库、独立部署，最直接的接法是直接引用这个仓库：

```bash
npm install git+https://github.com/solobat/lens-ui.git#main
```

### 2. 本地联调

如果 `lens-ui` 作为独立项目放在 `~/github/lens-ui`，并且你的业务项目也在 `~/github` 下，也可以先把它当兄弟仓库安装：

```bash
npm install ../lens-ui
```

然后：

```js
import { BrandMark, Panel, PageHeader, StatCard, EmptyState } from "@solobat/lens-ui";
import { initTheme, toggleTheme } from "@solobat/lens-ui/theme";
```

在样式入口里：

```css
@import "@solobat/lens-ui/theme.css";
```

### 3. 三个独立仓库正式共用

更适合 Vercel 的方式有两种：

1. 发布到私有 npm / GitHub Packages
2. 单独建 `lens-ui` 仓库，再通过 package manager 安装

建议优先用私有 package，因为：

- 三个仓库可以保持独立部署
- Vercel 只需要安装依赖，不需要跨仓库拷源码
- 后续 UI 迭代可以版本化，而不是手工同步目录

## 迁移顺序建议

1. 先让一个项目真实消费这个包并构建通过
2. 再把 `slipstream`、`tradfi-monitor` 改成依赖它
3. 等三个项目都稳定后，删除各仓库内的本地 `src/lib/ui` 副本
