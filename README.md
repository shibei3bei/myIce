# ice-stark-child

## 使用

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`

## 目录结构

- react-router @5.x 默认采用 browerHistory 的单页应用
- 入口文件: `src/index.js`
- 路由配置: `src/config/routes.js`
- 数据源配置: `src/config/dataSource.js`
- 路由入口: `src/router.jsx`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

├── public/                        # 静态文件，构建时会 copy 到 build/
│   ├── index.html                 # 应用入口 HTML
│   └── favicon.png                # Favicon
├── src/
│   ├── components/                # 自定义业务组件
│   │   └── pageLoading/
│   │       ├── index.jsx
│   │       └── index.module.scss
│   ├── config/                    # 配置文件
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout
│   │       ├── index.jsx
│   │       └── index.module.scss
│   ├── pages/                     # 页面
│   │   └── List/                  # List 页面
│   │       ├── index.jsx          # 页面入口
│   │       └── index.module.scss  # css module 样式
│   ├── utils/                     # 工具库
│   │   └── request.js             # 通用的数据源请求方法
│   ├── global.scss                # 全局样式
│   ├── index.jsx                  # 子应用注册
│   ├── router.jsx                 # 路由渲染组件，依赖 config/
 `webpack` 配置等
├── README.md                   # 项目说明 
├── package.json                # node模块依赖
├── ice.config.js               # 项目工程配置，包含插件配置及自定义
|-- jsconfig.json               # jsx的配置
├── stylelintrc                 # css代码检测规则配置
├── stylelintignore             # css代码检查文件忽略配置
├── prettierrc                  # 代码格式化配置
├── prettierignore              # 代码格式化忽略的配置文件
├── gitignore                   # git提交配置
├── gitattributes               # 文件说明
└── eslintrc                    # 代码检测规则配置
├── eslintignore                # 代码检测忽略文件配置
└── editorconfig                # 编码风格配置
└── commitlintrc                # spec配置
.

## 效果图

![screenshot](https://img.alicdn.com/tfs/TB1X5.paYr1gK0jSZFDXXb9yVXa-2480-1200.png)
