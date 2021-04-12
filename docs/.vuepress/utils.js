// const path = require('path')
// const fs = require('fs')

/*const sidebarMap = [
    {title: 'Blog', dirname: 'blog', flag: 0},
    {title: 'Notes', dirname: 'notes', flag: 1},
    {title: 'BookStore', dirname: 'book', flag: 0, collapsable: true},
]*/
exports.getSidebars = title => {
    console.log(title,'title')
    const siderbar = {
        '/blog/': [
            {
                isGroup: true,
                title: 'Blog',
                collapsable: false,
                children: [
                    '',
                    '/blog/FirstBlog.md'
                    // {title: 'items01', path: '/blog/'},
                    // {title: 'items02', path: '/blog/FirstBlog'}
                ]
            }
        ],
        '/notes/css/': [
            {
                title: 'CSS',
                collapsable: false,
                children: [
                    '',
                    'a',
                    'b',
                ]
            }
        ],
        '/notes/js/': [
            {
                title: 'JS',
                collapsable: false,
                children: ['']
            }
        ],
        '/notes/vue/': [
            {
                title: 'VUE',
                collapsable: false,
                children: ['']
            }
        ],
        '/notes/wechat/': [
            {
                title: 'Wechat',
                collapsable: false,
                children: ['']
            }
        ]
    }
    return siderbar;
    /*
    * sidebarMap.forEach(({ title, dirname, flag, collapsable }) => {
    let dirpath = path.resolve(__dirname, '../' + dirname)
    let key = `/${dirname}/`;
    let children = [];
    if (flag) {
      sidebar[key] = fs.readdirSync(dirpath).map(item => {
        if (item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile()) {
          children.push(item);
          return {
            title,
            children,
            collapsable: collapsable ? true : false
          }
        }
      }).filter(item => item)
    } else {
      sidebar[key] = fs.readdirSync(dirpath).map(item => {
        if (fs.statSync(path.join(dirpath, item)).isDirectory()) {
          title = item;
          children = fs.readdirSync(path.join(dirpath, item)).map(name => {
            if (name.endsWith('.md') && fs.statSync(path.join(path.join(dirpath, item), name)).isFile()) {
              return `${item}/${name}`;
            }
          }).filter(item => item).sort((a, b) => {
            if (a.match(/\d+/g) && b.match(/\d+/g)) {
              return a.match(/\d+/g)[0] - b.match(/\d+/g)[0]
            } else {
              return a - b
            }
          })
          return {
            title,
            children,
            collapsable: collapsable ? true : false
          }
        }
      }).filter(item => item)
    }
  })*/
}