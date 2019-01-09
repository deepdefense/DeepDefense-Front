# Vue template by GuYi

## 安装&运行

### 开发
``` bash
# 克隆项目
git clone http://192.168.3.2/xAlert/vue-template.git

# 安装依赖
npm install
//or # 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 本地开发运行服务&热更新
npm run dev

# 项目打包
npm run build
```

### 发布
``` bash
# 项目打包
npm run build
```


## 目录结构
```
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有后台数据的API请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── view                   // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 第三方不打包资源
│   ├── mock                   // mock数据
│   └── Tinymce                // 富文本
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── favicon.ico                // favicon图标
├── index.html                 // html模板
└── package.json               // package.json
```


