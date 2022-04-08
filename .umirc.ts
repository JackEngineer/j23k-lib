import { defineConfig } from 'dumi';
function getMenus(opts: { lang?: string; base: '/docs' | '/components' }) {
  const menus = {
    '/docs': [
      {
        title: 'VERSION 1.X',
        children: [],
      },
      {
        title: 'Introduce',
        'title_zh-CN': '介绍',
        children: [],
      },
    ],
    '/components': [
      {
        title: 'C',
        children: [],
      },
      {
        title: 'Player',
        'title_zh-CN': '播放器',
        path: '/components/Player',
      },
    ],
  };
  return (menus[opts.base] as []).map((menu: any) => {
    if (!opts.lang) return menu;
    return {
      ...menu,
      title: menu[`title_${opts.lang}`] || menu.title,
    };
  });
}
console.log(getMenus({ base: '/docs' }));

export default defineConfig({
  title: 'j23k-lib',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // resolve: {
  //   includes: ['./docs'],
  //   previewLangs: [],
  // },
  menus: {
    // '/zh-CN/docs': getMenus({ lang: 'zh-CN', base: '/docs' }),
    '/docs': getMenus({ base: '/docs' }),
    // '/components': [
    //   {
    //     title: 'Media',
    //     children: [
    //       '/src/components/Player'
    //     ]
    //   }
    // ]
  },
  navs: [
    {
      title: 'Docs',
      path: '/docs',
    },
    {
      title: 'Components',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/JackEngineer/j23k-lib',
    },
  ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  // more config: https://d.umijs.org/config
});
