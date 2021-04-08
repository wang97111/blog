const utils = require('./utils')

module.exports = {
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}],
        ["script", {}, `var _hmt = _hmt || [];
      (function() {
       var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?33f8558e113968d0fe6140a4b1ca9956";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
      })();`
        ]
    ],
    title: `Wangrr's Blog`,
    description: "This is a blog.",
    themeConfig: {
        search: false,
        repo: 'https://github.com/wang97111/blog',
        repoLabel: 'My GitHub',
        logo: '/logo.jpg',
        nav: [
            {text: 'Blog', link: '/blog/'},
            {text: 'Notes', link: '/notes/'},
            // {text: 'Bookmark', link: '/guide/'},
            // {text: 'Tools', link: '/guide/'},
            {
                text: 'About',
                items: [
                    {
                        text: 'Group1',
                        items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    },
                    {
                        text: 'Group2',
                        items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    }
                ]
            },
            {text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/guide/', target: '_blank'}
        ],
        sidebar: utils.getSidebars(),
        lastUpdated: 'Last Updated',
    },
    port: '3000',
    plugins: ['@vuepress/back-to-top'],
}