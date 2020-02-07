const path = require('path');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';
const isDevelopment = env === 'development';


module.exports = {
  // 入口函数
  entry: 'src/index.jsx',
  publicPath: './', // build时的路径
  // devPublicPath:'', // dev时候的路径
  hash: true,// 构建后的资源是否带 hash 版本
  outputDir: 'dist',// 修改构建后的文件目录
  vendor: false,// 配置是否生成 vendor
  externals: isProduction
    ? {
        moment: 'moment',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM ',
        '@wocloud/design': 'WocloudDesign',
        '@wocloud/utils': 'WocloudUtils',
      }
    : {},
  
  // 建议使用 proxy 来设置代理而不要修改 webpack 的 devServer.proxy
  // proxy: {
  //   '/**': {
  //     // 通过 enable 字段快速开关代理配置
  //     enable: true,
  //     target: 'http://127.0.0.1:6001'
  //   }
  // },
  // injectBabel: 'runtime',
  minify: false, // 构建后的资源将进行压缩，如果不希望资源被压缩可以修改为 false
  outputAssetsPath: {
    // 示例1：修改为 build/css-dist/ build/js-dist/
    js: 'js-dist',
    css: 'css-dist',
  },
  //
  targets: {
    chrome: 49,
    ie: 11,
  },
  chainWebpack: (config,{ command }) => {
        // 执行 ice-scripts dev 命令时
        if (command === 'dev') {
          config.devServer.historyApiFallback(true);
        }
        // 内置 jsx 和 tsx 规则均会使用到 babel 配置
        if (command === 'build') {
          // config.module
          // .rule('new-rule')
          // .test(/\.scss$/)
          // .use('sass-loader')
          //   .loader('sass-loader');
          
          // 生成 soruce-map 进行调试
          config.devtool('source-map');
          config.optimization
            .splitChunks({ cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/, // 匹配 node_modules 目录
                name: 'vendor',
                chunks: 'all',
                minChunks: 2,
              },
            }})
            .minimizer('UglifyJsPlugin')
            .tap(([options]) => [
              {
                ...options,
                sourceMap: true,
              },
            ]);
        }

        ['jsx', 'tsx'].forEach((rule) => {
          config.module
            .rule(rule)
            .use('babel-loader')
            .tap((options) => {
              // 添加一条 babel plugin，同理可添加 presets
              options.plugins.push(require.resolve('babel-plugin-transform-jsx-list'));
    
              // 修改 babel preset 配置，同理可修改 plugins
              options.presets = options.presets.map((preset) => {
                if (Array.isArray(preset)) {
                  const [modulePath, presetOptions] = preset;
                  // 判断指定配置
                  if (modulePath.indexOf('preset-env') > -1) {
                    return [
                      modulePath,
                      // 自定义新的 options
                      { ...presetOptions, modules: false },
                    ];
                  }
                }
                return preset;
              });
              return options;
            });
        });
    // 修改 webpack devServer.hot
    // config.devServer.hot('dist');

    // 修改 webpack output.path
    // config.output.path('dist');
    // 输出所有定义的 rule 配置
      // console.log('config',config.toString(config.module.toConfig().rules.plugins));

      // 输出指定 rule 的配置
      // const ruleName = 'scss';
      // console.log(config.toString(
      //   config.module.rule(ruleName).toConfig(),
      // ));

        // 输出所有定义的 plugin 配置
        // console.log(config.toString(config.toConfig().plugins));

        // 输出指定 rule 的配置
        // const pluginName = 'WebpackPluginImport';
        // console.log(config.toString(
        //   config.plugins.get(pluginName).toConfig(),
        // ));
  },
  // plugins: [
  
  //   [
  //     'ice-plugin-moment-locales',
  //     {
  //       locales: ['zh-cn'],
  //     },
  //   ],
  // ],
  plugins: isDevelopment
  ? [
      [
        'ice-plugin-modular-import',
        [
          {
            libraryName: '@wocloud/design',
            style: true,
          },
          {
            libraryName: 'lodash',
            libraryDirectory: '',
            camel2DashComponentName: false,
          },
        ],
      ],
    ]
  : [],
  alias: {
    '@': path.resolve(__dirname, './src/'),
  },
  define: {
    // 此处不能省略 JSON.stringify，否则构建过程会出现语法问题
    ASSETS_VERSION: JSON.stringify('全局变量配置'),
  },
  // 修改 devServer 配置
  devServer: {
    historyApiFallback: true,
  },
};
