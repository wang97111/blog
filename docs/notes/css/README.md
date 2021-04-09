# VuePress

最近将自己的博客从Hexo转移到VuePress中来，使用VuePress的过程中也遇到了一些问题，写一篇文章来记录一下搭建过程和踩过的坑。

## VuePress是什么？

VuePress是以Vue驱动的静态网站生成器，是一个由Vue、Vue
Router和webpack驱动的单页应用。在VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。

详情请看[VuePress官方文档](https://vuepress.vuejs.org/zh/)