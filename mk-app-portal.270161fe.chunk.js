webpackJsonp([4],{1904:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o,u=n(2),i=a(u),c=n(61),s=a(c),f=n(4),d=a(f),p=n(10),m=a(p),l=n(7),g=a(l),h=n(8),v=a(h),b=n(0),k=(a(b),n(289)),y=n(716),w=a(y),x=(r=(0,k.wrapper)(w.default))(o=function(e){function t(){return(0,d.default)(this,t),(0,g.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),t}(b.Component))||o;t.default=x,e.exports=t.default},1905:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new h.action(e),n=new y((0,u.default)({},e,{metaAction:t})),a=(0,u.default)({},t,n);return t.config({metaHandlers:a}),a}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=a(o),i=n(91),c=a(i),s=n(631),f=a(s),d=n(632),p=a(d),m=n(4),l=a(m);t.default=r;var g=n(0),h=(a(g),n(190),n(289)),v=n(189),b=n(657),k=a(b),y=function e(t){var a=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;a.component=t,a.injections=n,n.reduce("init"),a.load()},this.load=(0,p.default)(f.default.mark(function e(){var t,n;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.config.apps["mk-app-login"]){e.next=5;break}return t={id:1,mobile:"13334445556",nickname:"齐天大圣"},a.metaAction.context.set("currentUser",t),a.metaAction.sf("data.other.currentUser",(0,v.fromJS)(t)),e.abrupt("return");case 5:return e.next=7,a.webapi.portal.init();case 7:n=e.sent,n.user?(a.metaAction.context.set("currentUser",n.user),a.metaAction.sf("data.other.currentUser",(0,v.fromJS)(n.user))):(a.metaAction.context.set("currentUser",void 0),a.component.props.onRedirect&&a.config.goAfterLogout&&a.component.props.onRedirect(a.config.goAfterLogout));case 9:case"end":return e.stop()}},e,a)})),this.getLogo=function(){return a.config.logo},this.getPhoto=function(){return n(2056)},this.getCurrentUser=function(){return a.metaAction.context.get("currentUser")||{}},this.getMenuChildren=function(){var e=a.metaAction.gf("data.menu").toJS();return function e(t){var n=[];return t.forEach(function(t){t.children?n.push({name:t.key,key:t.key,title:t.name,component:"Menu.SubMenu",children:e(t.children)}):n.push({name:t.key,key:t.key,component:"Menu.Item",children:t.name})}),n}(e)},this.topMenuClick=function(){var e=(0,p.default)(f.default.mark(function e(t){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t.key,e.next="logout"===e.t0?3:"github"===e.t0?9:"gitter"===e.t0?11:"mySetting"===e.t0?13:"toggleTabs"===e.t0?17:18;break;case 3:if(!a.component.props.onRedirect||!a.config.goAfterLogout){e.next=8;break}return e.next=6,a.webapi.user.logout();case 6:a.metaAction.context.set("currentUser",void 0),a.component.props.onRedirect(a.config.goAfterLogout);case 8:return e.abrupt("break",18);case 9:return window.open("https://www.github.com/ziaochina/mk-app-portal"),e.abrupt("break",18);case 11:return window.open("https://gitter.im/mk-js/mk-js?utm_source=share-link&utm_medium=link&utm_campaign=share-link"),e.abrupt("break",18);case 13:if(a.config.apps["mk-app-my-setting"]){e.next=15;break}throw"不存在mk-app-my-setting应用，该功能不能使用";case 15:return a.setContent("个人设置","mk-app-my-setting"),e.abrupt("break",18);case 17:a.metaAction.sf("data.isTabsStyle",!a.metaAction.gf("data.isTabsStyle"));case 18:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),this.menuClick=function(e){var t=a.metaAction.gf("data.menu").toJS(),n=function t(n){var a=!0,r=!1,o=void 0;try{for(var u,i=(0,c.default)(n);!(a=(u=i.next()).done);a=!0){var s=u.value;if(s.key==e.key)return s;if(s.children){var f=t(s.children);if(f)return f}}}catch(e){r=!0,o=e}finally{try{!a&&i.return&&i.return()}finally{if(r)throw o}}}(t);n&&a.setContent(n.name,n.appName,n.appParams)},this.getMenuSelectKeys=function(){var e=a.metaAction.gf("data.content");if(e){return[a.metaAction.gf("data.menuKeyNameMap").get(e.get("name"))]}},this.tabChange=function(e){var t=a.metaAction.gf("data.openTabs"),n=t.find(function(t){return t.get("name")==e});a.setContent(n.get("name"),n.get("appName"),n.get("appProps"))},this.tabEdit=function(e,t){"remove"==t&&a.injections.reduce("closeContent",e)},this.setContent=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a.injections.reduce("setContent",e,t,n)},this.metaAction=t.metaAction,this.config=k.default.current,this.webapi=this.config.webapi};e.exports=t.default},1906:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new f.reducer(e),n=new l((0,u.default)({},e,{metaReducer:t}));return(0,u.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=a(o),i=n(4),c=a(i);t.default=r;var s=n(189),f=n(289),d=n(657),p=a(d),m=n(717),l=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){return e=n.metaReducer.init(e,(0,m.getInitState)()),n.config.menu&&!n.config.webapi.getMenu?n.load(e,{menu:n.config.menu}):e},this.load=function(e,t){var a=t.menu;if(!a||0==a.lenght)return e;var r,o,u=[],i={};!function e(t){var n=[];return t.forEach(function(t){i[t.name]=t.key,t.children?(t.isExpand&&u.push(t),e(t.children)):(o||(o=t),t.isDefault&&(r=t))}),n}(a),r=r||o;var c=(0,s.fromJS)(r?[r.key]:[]),f=(0,s.fromJS)(u.map(function(e){return e.key})),d=r||{};return e=n.metaReducer.sf(e,"data.menu",(0,s.fromJS)(a)),e=n.metaReducer.sf(e,"data.menuKeyNameMap",(0,s.fromJS)(i)),e=n.metaReducer.sf(e,"data.menuSelectedKeys",c),e=n.metaReducer.sf(e,"data.menuDefaultOpenKeys",f),n.setContent(e,d.name,d.appName,d.appProps)},this.setContent=function(e,t,a,r){var o=(0,s.fromJS)({name:t,appName:a,appProps:r});e=n.metaReducer.sf(e,"data.content",o);var u=n.metaReducer.gf(e,"data.openTabs")||(0,s.List)(),i=-1!=u.findIndex(function(e){return e.get("name")==t||e.get("appName")==a}),c=n.metaReducer.gf(e,"data.isTabsStyle");return i?c||(u=(0,s.List)().push(o),e=n.metaReducer.sf(e,"data.openTabs",u)):(u=c?u.push(o):(0,s.List)().push(o),e=n.metaReducer.sf(e,"data.openTabs",u)),e},this.closeContent=function(e,t){var a=n.metaReducer.gf(e,"data.openTabs")||(0,s.List)(),r=a.findIndex(function(e){return e.get("name")==t});return a=a.remove(r),e=n.metaReducer.sf(e,"data.openTabs",a),n.metaReducer.sf(e,"data.content",a.get(a.size-1))},this.metaReducer=t.metaReducer,this.config=p.default.current};e.exports=t.default},2056:function(e,t,n){e.exports=n.p+"photo.36d29d9e.png"}});