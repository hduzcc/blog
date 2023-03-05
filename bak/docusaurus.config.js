const config = {
  // highlight-start
  title: 'HDUzcc', //博客名字
  tagline: '不积跬步 无以至千里', //博客标语
  url: 'https://HDUzcc.com', //改成自己的域名
  baseUrl: '/',
  //...
  favicon: 'img/favicon.ico', 
  organizationName: 'hduzcc', // 更改为自己的名字或者 github 的用户名.
  projectName: 'blog', // 改成这个项目的名字，可以写 github 上的仓库名字
  // highlight-end

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // highlight-next-line  
        docs: false, //如果不想保留 docs 的功能就设置为 false; 如果想保留文档的功能就删除这一行
        docs: {
          //...
          // highlight-next-line
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // 删除这一行，这是某个页面下的‘编辑本页面'功能
        },
        blog: {
          routeBasePath: '/', // 将博客设置为网站的根页面
          blogTitle: 'HDUzcc',
        },
        //...
      }),
    ],
  ],

  themeConfig:
   //...
    ({
      navbar: {
        //highlight-start  
        title: 'HDUzcc', // 导航条左上角的名字
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png', // 导航条左上角的 logo
        },
        items: [
          {to: '/', label: '博客', position: 'left'}, 
        // highlight-end
          //...

        ],
      },
        // highlight-next-line
        copyright: `Copyright © ${new Date().getFullYear()} 简疏志 Wrote by Mengjun Guo Built with Docusaurus.`, // 页脚底部声明设置
      }),
};

module.exports = config;
