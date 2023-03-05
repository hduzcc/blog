const config = {
  // highlight-start
  title: 'HDUzcc', //博客名字
  tagline: '不积跬步 无以至千里', //博客标语
  url: 'https://hduzcc.github.io/', //改成自己的域名
  baseUrl: '/blog/',
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
        // docs: false, //如果不想保留 docs 的功能就设置为 false; 如果想保留文档的功能就删除这一行
        docs: {
          //...
          // highlight-next-line
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', // 删除这一行，这是某个页面下的‘编辑本页面'功能
        },
        blog: {
		  showReadingTime: true,
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
	  announcementBar: {
        id: 'support_us',
        content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/hduzcc/blog">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      }, 
      navbar: {
        //highlight-start  
        title: 'HDUzcc的博客', // 导航条左上角的名字
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png', // 导航条左上角的 logo
        },
        items: [
          {to: '/blog/面试回顾', label: '面试回顾', position: 'right'}, 
	  {to: '/blog/网络', label: '网络', position: 'right'}, 
	  {to: '/blog/数据库', label: '数据库', position: 'right'}, 
	  {to: '/blog/linux', label: 'linux', position: 'right'}, 
	  {to: '/blog/中间件', label: '中间件', position: 'right'}, 
          {
            href: 'https://github.com/hduzcc/blog',
            label: 'GitHub',
            position: 'right',
          },
        // highlight-end
          //...

        ],
      },
        // highlight-next-line
        // copyright: `Copyright © ${new Date().getFullYear()} 简疏志 Wrote by Mengjun Guo Built with Docusaurus.`, // 页脚底部声明设置
      }),
};

module.exports = config;

