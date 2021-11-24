"use strict";(self["webpackChunkcloud_power_webui"]=self["webpackChunkcloud_power_webui"]||[]).push([[217],{9217:(e,l,a)=>{a.r(l),a.d(l,{default:()=>W});var r=a(3673),t=a(2323);const n={class:"main"},o={class:"content"};function s(e,l,a,s,i,c){const d=(0,r.up)("q-card-section"),u=(0,r.up)("q-input"),p=(0,r.up)("q-btn"),g=(0,r.up)("q-icon"),m=(0,r.up)("recaptcha-vue"),b=(0,r.up)("q-form"),w=(0,r.up)("q-card");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",o,[(0,r.Wm)(w,{class:"register-card"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{class:"card-title"},{default:(0,r.w5)((()=>[(0,r._)("span",null,(0,t.zw)(e.$t("Register.LoginTitle")),1)])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(b,{class:"register-form"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"register-input",outlined:"","bg-color":"blue-grey-1",modelValue:e.registerInput.email,"onUpdate:modelValue":l[0]||(l[0]=l=>e.registerInput.email=l),label:e.$t("Register.Username"),"lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("Register.UsernameInputwarning")]},null,8,["modelValue","label","rules"]),(0,r.Wm)(u,{class:"register-input",outlined:"","bg-color":"blue-grey-1",modelValue:e.registerInput.verifyCode,"onUpdate:modelValue":l[2]||(l[2]=l=>e.registerInput.verifyCode=l),label:e.$t("Register.EmailVerifyCode"),"lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("Register.EmailVerifyCodeInpuWarning")]},{append:(0,r.w5)((()=>[(0,r.Wm)(p,{flat:"",rounded:"",onClick:l[1]||(l[1]=l=>e.sendCode())},{default:(0,r.w5)((()=>[(0,r.Uk)((0,t.zw)(e.$t("Register.SendCode")),1)])),_:1})])),_:1},8,["modelValue","label","rules"]),(0,r.Wm)(u,{class:"register-input",outlined:"","bg-color":"blue-grey-1",modelValue:e.registerInput.password,"onUpdate:modelValue":l[4]||(l[4]=l=>e.registerInput.password=l),label:e.$t("Register.Password"),type:e.isPwd?"password":"text","lazy-rules":"",rules:[l=>l&&l.length>0||e.$t("Register.PasswordInputWarning")]},{append:(0,r.w5)((()=>[(0,r.Wm)(g,{name:e.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[3]||(l[3]=l=>e.isPwd=!e.isPwd)},null,8,["name"])])),_:1},8,["modelValue","label","type","rules"]),(0,r._)("div",null,[(0,r.Wm)(m,{onCallback:e.callback},null,8,["onCallback"])]),(0,r.Wm)(p,{class:"register-btn",onClick:l[5]||(l[5]=l=>e.login())},{default:(0,r.w5)((()=>[(0,r.Uk)((0,t.zw)(e.$t("Register.Login")),1)])),_:1})])),_:1})])),_:1})])),_:1})])])}var i=a(1959);const c={id:"robot"};function d(e,l,a,t,n,o){return(0,r.wg)(),(0,r.iD)("div",c)}const u=(0,r.aZ)({emits:["callback"],data(){return{siteKey:"6LdlXU4dAAAAAJz1WqVn2xkIwQrSH38x6tYRAD_m"}},mounted:function(){window.onloadCallback=this.onloadCallback;var e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit&lang=en",document.head.appendChild(e)},methods:{onloadCallback:function(){let e=this;window.grecaptcha.render("robot",{sitekey:e.siteKey,callback:e.callback,"expired-callback":e.expiredCallback,"error-callback":e.errorCallback})},callback:function(e){console.log("response is: ",e),this.$emit("callback",e)},expiredCallback:function(e){this.$emit("callback","expired")},errorCallback:function(e){this.$emit("callback","error")}}});var p=a(4260);const g=(0,p.Z)(u,[["render",d]]),m=g,b=(0,r.aZ)({components:{RecaptchaVue:m},setup(){const e=(0,i.iH)(""),l=(0,i.iH)(""),a=(0,i.iH)(""),r=(0,i.qj)({email:e,verifyCode:l,password:a});return{registerInput:r,isPwd:(0,i.iH)(!0)}},data(){return{siteKey:"6LdlXU4dAAAAAJz1WqVn2xkIwQrSH38x6tYRAD_m",response:null}},methods:{sendCode:function(){},login:function(){},callback:function(e){switch(e){case"expired":console.log("expired");break;case"error":console.log("error");break;default:this.response=e,console.log(e);break}console.log("main response is",this.response)}}});var w=a(151),k=a(5589),f=a(8689),C=a(1206),h=a(7435),_=a(4554),y=a(7518),v=a.n(y);const I=(0,p.Z)(b,[["render",s],["__scopeId","data-v-6804e048"]]),W=I;v()(b,"components",{QCard:w.Z,QCardSection:k.Z,QForm:f.Z,QInput:C.Z,QBtn:h.Z,QIcon:_.Z})}}]);