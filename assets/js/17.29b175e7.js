(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{113:function(t,i,s){"use strict";s.r(i);var a=s(0),_=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"扫码登录实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扫码登录实现原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 扫码登录实现原理")]),t._v(" "),s("p",[t._v("[菜鸟要飞](javascript:void(0)😉 "),s("em",[t._v("8月20日")])]),t._v(" "),s("h2",{attrs:{id:"原文：https-www-cnblogs-com-liyasong-p-saoma-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原文：https-www-cnblogs-com-liyasong-p-saoma-html","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_jpg/5kkib9oAJf2aicvqrVemuPPF0aP7bJU34PLmj6icSEWrsOut1DN4CbibfvHVkrnEUYvDo89j24CQ1ia1tgDShT9KrZw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}}),t._v("原文：https://www.cnblogs.com/liyasong/p/saoma.html")]),t._v(" "),s("p",[t._v("失踪人口回归。好久没有写博客了，感觉自己都要废掉了。今天就说一说现在比较流行的扫码登录的实现原理吧。")]),t._v(" "),s("p",[s("strong",[t._v("需求介绍")])]),t._v(" "),s("p",[t._v("首先，介绍下什么是扫码登录。现在，大部分同学手机上都装有qq和淘宝，天猫等这一类的软件。而开发这些app的企业，都有他们相对应的网站。为了让用户在使用他们的网站时，登录更加方便和安全。这些企业提供了， 使用手机，扫一扫，就可以登录的服务。网页登录时的效果如下：")]),t._v(" "),s("pre",[s("code",[t._v("                    ![img](https://mmbiz.qpic.cn/mmbiz_png/5kkib9oAJf2auESRiaiasKlYCHJH4noZENJvJM2hRcybPs1FOIbC8tUkyad6cJ2UMYklOYcJAcJmviaUDtEEpayqsA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)![img](https://mmbiz.qpic.cn/mmbiz_png/5kkib9oAJf2auESRiaiasKlYCHJH4noZENJyzLvsBdqWAnbY2P9gHWaydRyicypLYV2SImUdxZZ5QFWOy9xQ8PIr7A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)\n")])]),t._v(" "),s("p",[t._v("有很多小伙伴可能会感到很神奇，网页上只是显示了个二维码，它怎么就知道是哪个手机扫到了二维码，并且进行登录的呢？而且，登录完成以后，还能直接把用户信息显示给用户，真的是很神奇啊。")]),t._v(" "),s("p",[s("strong",[t._v("原理解释")])]),t._v(" "),s("p",[s("strong",[t._v("网页端+服务器")])]),t._v(" "),s("p",[t._v("接下来就是对于这个服务的详细实现。首先，大概说一下原理：用户打开网站的登录页面的时候，向浏览器的服务器发送获取登录二维码的请求。服务器收到请求后，随机生成一个uuid，将这个id作为key值存入redis服务器，同时设置一个过期时间，再过期后，用户登录二维码需要进行刷新重新获取。同时，将这个key值和本公司的验证字符串合在一起，通过二维码生成接口，生成一个二维码的图片（二维码生成，网上有很多现成的接口和源码，这里不再介绍。）然后，将二维码图片和uuid一起返回给用户浏览器。")]),t._v(" "),s("p",[t._v("浏览器拿到二维码和uuid后，会每隔一秒向浏览器发送一次，登录是否成功的请求。请求中携带有uuid作为当前页面的标识符。这里有的同学就会奇怪了，服务器只存了个uuid在redis中作为key值，怎么会有用户的id信息呢？")]),t._v(" "),s("p",[t._v("这里确实会有用户的id信息，这个id信息是由手机服务器存入redis中的。具体操作如下：")]),t._v(" "),s("p",[s("strong",[t._v("手机端+服务器")])]),t._v(" "),s("p",[t._v("话说，浏览器拿到二维码后，将二维码展示到网页上，并给用户一个提示：请掏出您的手机，打开扫一扫进行登录。用户拿出手机扫描二维码，就可以得到一个验证信息和一个uuid（扫描二维码获取字符串的功能在网上同样有很多demo，这里就不详细介绍了）。由于手机端已经进行过了登录，在访问手机端的服务器的时候，参数中都回携带一个用户的token，手机端服务器可以从中解析到用户的userId（这里从token中取值而不是手机端直接传userid是为了安全，直接传userid可能会被截获和修改，token是加密的，被修改的风险会小很多）。手机端将解析到的数据和用户token一起作为参数，向服务器发送验证登录请求（这里的服务器是手机服务器，手机端的服务器跟网页端服务器不是同一台服务器）。服务器收到请求后，首先对比参数中的验证信息，确定是否为用户登录请求接口。如果是，返回一个确认信息给手机端。")]),t._v(" "),s("p",[t._v("手机端收到返回后，将登录确认框显示给用户（防止用户误操作，同时使登录更加人性化）。用户确认是进行的登录操作后，手机再次发送请求。服务器拿到uuId和userId后，将用户的userid作为value值存入redis中以uuid作为key的键值对中。")]),t._v(" "),s("p",[s("strong",[t._v("登录成功")])]),t._v(" "),s("p",[t._v("然后，浏览器再次发送请求的时候，浏览器端的服务器就可以得到一个用户Id，并调用登录的方法，声成一个浏览器端的token，再浏览器再次发送请求的时候，将用户信息返回给浏览器，登录成功。这里存储用户id而不是直接存储用户信息是因为，手机端的用户信息，不一定是和浏览器端的用户信息完全一致。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/mmbiz_png/5kkib9oAJf2auESRiaiasKlYCHJH4noZENJOwn8z421A0Kf9rAdM4wwe96FmGevcreU5h64M75oncI7fFhCIicEnGw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"img"}})]),t._v(" "),s("p",[t._v("登录原理图")])])}],!1,null,null,null);_.options.__file="扫码登录实现原理.md";i.default=_.exports}}]);