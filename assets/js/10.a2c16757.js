(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("JavaScript是一门弱类型语言，它并不像其他强类型语言那样有多种变量类型的声明形式，如：int, double, string… 等，在JavaScript中声明变量统一使用 var 关键字。")]),t._v(" "),a("p",[t._v("例如想要声明一个整数来使用，可以使用 "),a("code",[t._v("var num = 1;")]),t._v(" 这样的语句，声明一串字符串也一样 "),a("code",[t._v("var str = 'string';")]),t._v(" ,"),t._v("声明一个布尔值、数组、对象都是使用 "),a("code",[t._v("var")]),t._v(" 这个关键字： "),a("code",[t._v("var boo = true; var arr = [1,2,3]; var obj = { x: 1, y: 2};")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个整数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一串字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个布尔值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" point "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个对象")]),t._v("\n")])])]),a("p",[t._v("在ES5标准之前，只有 "),a("code",[t._v("var")]),t._v(" 这一个关键字用来声明一个可以使用的变量（函数暂不讨论）。而在ES6标准中，在此之上添加了两个新的声明变量的关键字，"),a("code",[t._v("let")]),t._v(" 和 "),a("code",[t._v("const")]),t._v("。严格说起来应该是一个声明变量，一个声明常量， "),a("code",[t._v("const")]),t._v(" 就是用来声明常量的关键字。")]),t._v(" "),a("h2",{attrs:{id:"let与var有什么不同？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let与var有什么不同？","aria-hidden":"true"}},[t._v("#")]),t._v(" let与var有什么不同？")]),t._v(" "),a("p",[t._v("这需要从变量的作用域说起。在ES5标准之前，JavaScript中只有两种作用域：全局作用域与函数作用域。全局作用域的变量可以在代码运行中的任何位置访问到，而函数作用域的变量只有在该函数内部能够访问到。而在ES6标准中新增了一个块级作用域的概念，let关键字就是对应块级作用域的概念的变量声明。通过let声明的变量只有在声明时所在的块级作用域的范围内能访问，所谓块级作用域指的是代码中被"),a("code",[t._v("{}")]),t._v("包裹起来的代码（对象除外），函数体也属于代码块。")]),t._v(" "),a("p",[a("code",[t._v("let")]),t._v(" 与 "),a("code",[t._v("var")]),t._v(" 另一个不同的地方在于：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("var")]),t._v(" 声明的变量可以重复声明，但只有第一次声明有效，且有声明提升；")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("let")]),t._v(" 声明的变量不能再次声明，否则会报错，且let声明的变量并没有声明提升。")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: y is not defined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let声明的变量在他所在的块级范围之外无法访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* --------------------------------------- */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined: 因为var声明有变量名提升，所以运行代码时，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 系统就知道a是一个变量，只是这个变量并没有被赋值，因此是undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ReferenceError: b is not defined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为let声明没有变量名提升，所以运行到这句代码时，")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b还没有定义，不能作为一个变量使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* --------------------------------------- */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SyntaxError: Identifier 'c' has already been declared")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let 无法重复声明已有变量")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"const常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const常量","aria-hidden":"true"}},[t._v("#")]),t._v(" const常量")]),t._v(" "),a("p",[t._v("所谓常量，与变量相反。变量就是可以改变的量，而常量则是一旦声明，就无法改变的量。有些数据在使用过程中是不会改变的，甚至有些就是固定不变的值，如圆周率PI，像这样的数据，使用 "),a("code",[t._v("var")]),t._v(" 声明，之后一直不做改动自然也是不算错的，但是使用 "),a("code",[t._v("const")]),t._v(" 声明的话，更能够表达出符合的语义，用 "),a("code",[t._v("const PI = 3.14;")]),t._v(" 代替 "),a("code",[t._v("var PI = 3.14;")]),t._v(" 更能让人清楚地知道这是一个常量。")]),t._v(" "),a("p",[t._v("const声明的变量的作用域范围同let关键字，也是声明变量所在的块级作用域，用const声明的变量也不能重复声明，且没有变量声明提升，另外不能通过赋值来改变常量的值。")]),t._v(" "),a("p",[t._v("基于这几点，在声明一个常量的时候就要将这个常量的值赋给它，而不能先声明一个没有值的常量，再在之后赋值。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RWBY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RWBY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ruby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"weiss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blake"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yang"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SyntaxError: Missing initializer in const declaration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 虽然错误是在重新给常量赋值时抛出的，也就是说 const RWBY; 这一步并没有错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是很显然这样的语句毫无意义，所以通常声明一个常量时应该直接将值赋予该常量")]),t._v("\n")])])]),a("h2",{attrs:{id:"关于变量声明提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于变量声明提升","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于变量声明提升")]),t._v(" "),a("p",[t._v("JavaScript是解释型语言，解析一句执行一句，为了提高效率，在代码解析执行之前，有一个预解析的过程。在预解析时，代码并不会执行，系统只会检查当前作用域（函数内部的代码不会检查，只有在调用函数时，才会重复 "),a("code",[t._v("“预解析->执行”")]),t._v(" 这样的步骤）的代码有没有语法上的错误和代码中的变量声明关键字 "),a("code",[t._v("var")]),t._v(" 和函数声明的关键字 "),a("code",[t._v("function")]),t._v("。")]),t._v(" "),a("p",[t._v("在遇到这两种声明时，系统会在内存中预先记录下声明的变量名和函数名，也就是标识符。在预解析结束后，运行代码之前，系统就得到了有哪些标识符是可以作为变量来使用的，如果使用了系统未记录的标识符，也就是没有声明的变量，这时系统就会抛出一个引用错误 "),a("code",[t._v("ReferenceError: xxx is not defined")]),t._v(" 。")]),t._v(" "),a("p",[t._v("在预解析过程中，如果遇到了同一个标识符多次声明，是不会多次记录的，只会记录第一次。如果同一个标识符既有变量声明var，又有函数声明function，最终记录下来的标识符是一个函数，遵循的原则是先有什么就记录什么，函数声明会记录两件事，一个同变量声明，记录该标识符可以使用，第二个记录该标识符指向一个函数。\n所以有说法 "),a("em",[t._v("函数是JavaScript中的一等公民")]),t._v("。\n但要知道该记录只保持在预解析结束，运行代码之前。\n在运行代码过程中，需要根据实际情况判断标识符到底是一个变量还是一个函数。")])])},[],!1,null,null,null);s.default=e.exports}}]);