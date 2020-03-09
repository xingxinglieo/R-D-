# 插件

#### 仿vue-router插件

我使用了这个插件  它要求与pages.json的页面目录一致

```javascript
//pages.json内
"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
		{
			"path": "pages/my/my",
			"style": {}
		},
		{
			"path": "pages/my/information",
			"style": {}
		},
		{
			"path": "pages/index/index",
			"style": {}
		}, {
			"path": "pages/regist/regist-message-first",
			"style": {}
		}, {
			"path": "pages/regist/regist-message-second",
			"style": {}
		}
	]
//router-config内
//目录一致，前面要多一个'/' 
//name用来跳转
export default {
	encodeURI: false,
	routes: [{
		path: "/pages/index/index",
		name: 'index'
	}, {
		path: "/pages/regist/regist-message-first",
		name: 'regist-message-first'
	}, {
		path: "/pages/regist/regist-message-second",
		name: 'regist-message-second'
	},{
		path:"/pages/my/my",
		name:'my',
	},{
		path:"/pages/my/information",
		name:"information"
	}
	]
}
```

常用用法

如`this.$Router.push({name:'index'});`就可以跳转到 `/pages/index/index`页面。

[插件文档](http://hhyang.cn/src/router/start/cross/nameRoute.html)

#### 仿axios插件

```javascript
//request-config内
import Request from '@/js_sdk/luch-request/request.js';
const request = new Request;
request.setConfig(config => {
	config.baseUrl = 'https://rdc.kim:888';
	return config;
})
export default request;
```

```javascript
//使用
import request from '@/request-config.js';
...
request.get(url,{ params });
request.post(url,{ openid:openod });
```

[插件文档](https://ext.dcloud.net.cn/plugin?id=392)

