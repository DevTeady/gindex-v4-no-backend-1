(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0babe1"],{3905:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"navigation-buttons"},[s("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?s("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?s("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?s("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?s("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?s("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():s("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),s("hr")])},o=[],i=(s("d3b7"),s("25f0"),{data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=localStorage.getItem("tokendata"),t=localStorage.getItem("userdata");null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=localStorage.getItem("tokendata"),s=localStorage.getItem("userdata");if(null!=s&&null!=t){var a=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),o=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:a.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?o.admin&&!o.superadmin?(e.logged=!0,e.admin=!0):o.admin&&o.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{id:0,cmd:"results",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})}))}else this.logged=!1}}),n=i,r=s("2877"),u=Object(r["a"])(n,a,o,!1,null,null,null);t["default"]=u.exports}}]);