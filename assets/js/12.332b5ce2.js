(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{228:function(t,v,e){"use strict";e.r(v);var _=e(2),a=Object(_.a)({},function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("CSS-"),e("em",[t._v("Cascading Style Sheet(层叠样式表)")]),t._v("，给HTML元素添加各种样式的文件。CSS选择器就是用来匹配要添加样式的元素的。\n"),t._v(" "),e("a",{attrs:{href:"http://www.w3school.com.cn/cssref/css_selectors.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("W3school"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("按照我个人的理解，将其分为：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("基础选择器")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E5%B1%9E%E6%80%A7%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("属性选择器")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E4%BC%AA%E7%B1%BB%E3%80%81%E4%BC%AA%E5%85%83%E7%B4%A0%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("伪类、伪元素选择器")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#%E7%BB%84%E5%90%88%E9%80%89%E6%8B%A9%E5%99%A8"}},[t._v("组合选择器")])])]),t._v(" "),e("h3",{attrs:{id:"基础选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础选择器")]),t._v(" "),e("p",[t._v("基础选择器就相当于选择器的基础组成部分一样。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("通配符选择器(*)\n匹配所有的标签，但权重最低(比继承高)")])]),t._v(" "),e("li",[e("p",[t._v("标签(元素)选择器(tag/element)\n匹配对应的标签。\n"),e("em",[t._v("tips")]),t._v(": 标签就是元素，元素就是标签，不同的叫法而已")])]),t._v(" "),e("li",[e("p",[t._v("类选择器(.class)\n选择属性"),e("code",[t._v("class")]),t._v("中有对应名称的元素")])]),t._v(" "),e("li",[e("p",[t._v("ID选择器(#id)\n选择属性"),e("code",[t._v("id")]),t._v("中有对应名称的元素")])])]),t._v(" "),e("p",[t._v("其实属性选择器应该也可以归为基础选择器，但是因为属性选择器里有多种匹配模式，所以单独提出来了。")]),t._v(" "),e("h3",{attrs:{id:"属性选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性选择器")]),t._v(" "),e("p",[t._v("属性选择器一般都会与其他选择器组合使用。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("[attribute]\n选择具有"),e("code",[t._v("attribute")]),t._v("属性的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute=value]\n选择具有属性"),e("code",[t._v("attribute")]),t._v("且值为"),e("code",[t._v("value")]),t._v("的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute~=value]\n选择属性"),e("code",[t._v("attribute")]),t._v("中含有单词"),e("code",[t._v("value")]),t._v("的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute|=value]\n选择属性"),e("code",[t._v("attribute")]),t._v("以单词"),e("code",[t._v("value")]),t._v("开头的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute*=value]\n选择属性"),e("code",[t._v("attribute")]),t._v("中包含字符串"),e("code",[t._v("value")]),t._v("的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute^=value]\n选择属性"),e("code",[t._v("attribute")]),t._v("以字符串"),e("code",[t._v("value")]),t._v("开头的元素")])]),t._v(" "),e("li",[e("p",[t._v("[attribute$=value]\n选择属性"),e("code",[t._v("attribute")]),t._v("以字符串"),e("code",[t._v("value")]),t._v("结尾的元素")])])]),t._v(" "),e("h4",{attrs:{id:"attribute-value-与-attribute-value-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribute-value-与-attribute-value-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" [attribute~=value]与[attribute*=value]的区别")]),t._v(" "),e("p",[e("code",[t._v("[attribute~=value]")]),t._v("匹配的是"),e("em",[t._v("单词")]),t._v("，表示的是某个属性attribute的值里有value这个词，而"),e("code",[t._v("[attribute*=value]")]),t._v("匹配的是"),e("em",[t._v("字符串")]),t._v("，表示attribute的值里包含value这串字符。")]),t._v(" "),e("p",[t._v("举个例子：")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[class~=err]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[class*=err]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  错误信息\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("err or"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  另一条\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("上面的例子中"),e("code",[t._v("[class~=err]")]),t._v("并不会选中"),e("code",[t._v('class="error"')]),t._v("只会选中"),e("code",[t._v('class="err or"')]),t._v("，而"),e("code",[t._v("[class*=err]")]),t._v("则两个都能选中。")]),t._v(" "),e("p",[t._v("也就是说"),e("code",[t._v("[attribute~=value]")]),t._v("是以"),e("em",[t._v("单词")]),t._v("为度量进行匹配，而"),e("code",[t._v("[attribute*=value]")]),t._v("则以"),e("em",[t._v("字符串")]),t._v("的形式进行匹配，不论是否是完整的一个单词。")]),t._v(" "),e("blockquote",[e("p",[t._v("同样的"),e("code",[t._v("[attribute|=value]")]),t._v("与"),e("code",[t._v("[attribute^=value]")]),t._v("的区别也是如此。")])]),t._v(" "),e("h3",{attrs:{id:"伪类、伪元素选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#伪类、伪元素选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 伪类、伪元素选择器")]),t._v(" "),e("p",[e("code",[t._v("伪类/伪元素")]),t._v("就是一种拥有类似"),e("code",[t._v("类/元素")]),t._v("的性质却又不是"),e("code",[t._v("类/元素")]),t._v("的东西。一般的，伪类选择器以"),e("code",[t._v(":")]),t._v("开头，伪元素选择器以"),e("code",[t._v("::")]),t._v("开头。")]),t._v(" "),e("blockquote",[e("p",[t._v("伪类、伪元素选择器一般不会单独使用，而是与其他选择器组合在一起使用。")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":before/:after/::before/::after")])])]),t._v(" "),e("blockquote",[e("p",[t._v("tips: "),e("code",[t._v(":before/:after")]),t._v("与"),e("code",[t._v("::before/::after")]),t._v("实际上的用法完全相同，之所以一个是伪类一个是伪元素只是不同时期的归类不同而已。\n早期将其归类为"),e("em",[t._v("伪类")]),t._v("，而后来则归为了"),e("em",[t._v("伪元素")]),t._v("。\n不过现代浏览器也支持伪类写法，所以如果需要兼容旧版浏览器的话，可以直接以伪类形式书写。\n另外该选择器有一个必须的样式属性"),e("code",[t._v("content")]),t._v("，否则该选择器不生效。")])]),t._v(" "),e("pre",[e("code",[t._v("+ `:before/::before`在某个元素的内容之前插入\n+ `:after/::after`在某个元素的内容之后插入\n")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v(":link/:visited/:active/:hover/:focus")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":link")]),t._v("用于选择未被访问过的链接")]),t._v(" "),e("li",[e("code",[t._v(":visited")]),t._v("用于选择已被访问过的链接")]),t._v(" "),e("li",[e("code",[t._v(":active")]),t._v("用于选择活动"),e("strong",[t._v("元素")]),t._v("(即当前选中的元素，直观点表达就是按下鼠标不松开的状态)")]),t._v(" "),e("li",[e("code",[t._v(":hover")]),t._v("用于选择鼠标悬浮于其上的"),e("strong",[t._v("元素")]),t._v("(即鼠标指针指向的元素)")]),t._v(" "),e("li",[e("code",[t._v(":focus")]),t._v("用于选择获得焦点的"),e("strong",[t._v("可获取焦点的元素")]),t._v("(一般是表单元素和超链接)")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v(":first-letter/:first-line")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":first-letter")]),t._v("选择首字母，中文下选择首字")]),t._v(" "),e("li",[e("code",[t._v(":first-line")]),t._v("选择首行")])])]),t._v(" "),e("li",[e("p",[t._v("子元素伪类(需要有父元素)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":first-child")]),t._v("选择首个子元素")]),t._v(" "),e("li",[e("code",[t._v(":last-child")]),t._v("选择最后一个子元素")]),t._v(" "),e("li",[e("code",[t._v(":nth-child(n)")]),t._v("选择第n个子元素")])]),t._v(" "),e("blockquote",[e("p",[t._v("可以使用数学表达式来选择多个子元素。\n如："),e("code",[t._v(":nth-child(n + 2)")]),t._v("选择第2个以后的子元素，"),e("code",[t._v("nth-child(2n)")]),t._v("选择偶数子元素\n还可以使用负数表示：`nth-child(-n + 2)选择最后两个")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("nth-last-child(n)")]),t._v("同上，从最后一个开始计数")]),t._v(" "),e("li",[e("code",[t._v(":only-child")]),t._v("选择唯一的子元素")]),t._v(" "),e("li",[e("code",[t._v(":first-of-type")]),t._v("选择首个(某一类型的)子元素")]),t._v(" "),e("li",[e("code",[t._v(":last-of-type")]),t._v("选择最后一个(某一类型的)子元素")]),t._v(" "),e("li",[e("code",[t._v(":nth-of-type(n)")]),t._v("选择第n个(某一类型的)子元素")]),t._v(" "),e("li",[e("code",[t._v(":nth-last-of-type(n)")]),t._v("同上，从最后一个开始计数")]),t._v(" "),e("li",[e("code",[t._v(":only-of-type")]),t._v("选择唯一的(某一类型的)子元素")])])])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("child")]),t._v("与"),e("code",[t._v("of-type")]),t._v("的区别：\n"),e("code",[t._v("child")]),t._v("是包含所有子元素进行计算的，\n而"),e("code",[t._v("of-type")]),t._v("则只包含先通过与其组合的其他选择器匹配后得到的子元素，而非全部子元素。")])]),t._v(" "),e("ul",[e("li",[t._v("其他\n"),e("ul",[e("li",[e("code",[t._v(":root")]),t._v("选择根元素，HTML里的根元素就是"),e("code",[t._v("html")]),t._v("标签")]),t._v(" "),e("li",[e("code",[t._v(":lang(language)")]),t._v("选择带有以"),e("code",[t._v("language")]),t._v("开头的"),e("code",[t._v("lang")]),t._v("属性值的元素")])]),t._v(" "),e("blockquote",[e("p",[t._v("如："),e("code",[t._v("p:lang(it)")]),t._v("表示选择带有以"),e("code",[t._v("it")]),t._v("开头的"),e("code",[t._v("lang")]),t._v("属性的p元素")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v(":empty")]),t._v("选择没有子元素(包括文本节点)的元素")]),t._v(" "),e("li",[e("code",[t._v(":target")]),t._v("选择当前活动的元素(url中的锚点指向的ID元素)")]),t._v(" "),e("li",[e("code",[t._v(":enabled")]),t._v("选择启用的元素")]),t._v(" "),e("li",[e("code",[t._v(":disabled")]),t._v("选择禁用的元素")]),t._v(" "),e("li",[e("code",[t._v(":checked")]),t._v("选择被选中的元素")]),t._v(" "),e("li",[e("code",[t._v(":not(selector)")]),t._v("选择不是selector选中的元素")]),t._v(" "),e("li",[e("code",[t._v("::selection")]),t._v("选择被用户选取的元素部分")])]),t._v(" "),e("blockquote",[e("p",[t._v("应用了"),e("code",[t._v(":first-letter")]),t._v("样式的元素，不会应用"),e("code",[t._v("::selection")]),t._v("的样式")])])])]),t._v(" "),e("h3",{attrs:{id:"组合选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 组合选择器")]),t._v(" "),e("p",[t._v("顾名思义，组合选择器就是由两个或多个基础选择器组合成的选择器。")]),t._v(" "),e("blockquote",[e("p",[t._v("以下用a, b, ... 等表示基础选择器")])]),t._v(" "),e("ul",[e("li",[t._v("并集选择器(a, b)")]),t._v(" "),e("li",[t._v("交集选择器(ab)")]),t._v(" "),e("li",[t._v("兄弟选择器(a ~ b)")]),t._v(" "),e("li",[t._v("直接兄弟选择器(a + b)")]),t._v(" "),e("li",[t._v("父子选择器(a > b)")]),t._v(" "),e("li",[t._v("后代选择器(a b)")]),t._v(" "),e("li",[t._v("其他由以上多种选择器进行组合的选择器(a > b c, d + e f ~ g)")])]),t._v(" "),e("blockquote",[e("p",[t._v("注意后代选择器之间是"),e("strong",[t._v("有空格")]),t._v("的，而交集选择器之间是"),e("strong",[t._v("没有空格")]),t._v("的\n"),e("code",[t._v("a ~ b")]),t._v("是选择与a元素同级的后面所有的b元素，\n而"),e("code",[t._v("a + b")]),t._v("则是选择紧跟着a元素后面的b元素，如果a元素后面的元素不是b，则不匹配")])])])},[],!1,null,null,null);v.default=a.exports}}]);