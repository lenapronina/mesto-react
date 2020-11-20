(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{20:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),o=a(9),i=a.n(o),s=(a(19),a(20),a(13)),u=a(5),d=a(2),l=a(4),p=a.p+"static/media/header-logo.a307e1c4.svg";var j=function(){return Object(n.jsx)("header",{className:"header page__header",children:Object(n.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto"})})};var b=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},_=r.a.createContext();var f=function(e){var t=e.card,a=e.onCardClick,c=e.onCardLike,o=e.onDeleteButtonClick,i=r.a.useContext(_),s=t.owner._id===i._id,u=t.likes.some((function(e){return e._id===i._id})),d="mesto-card__like-icon ".concat(u?"mesto-card__like-icon_active":""),l="mesto-card__trash ".concat(s?"":"mesto-card__trash_hidden");return Object(n.jsxs)("li",{className:"mesto-card",children:[Object(n.jsx)("img",{className:"mesto-card__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(n.jsx)("button",{className:l,onClick:function(){o(t)}}),Object(n.jsxs)("div",{className:"mesto-card__info",children:[Object(n.jsx)("h2",{className:"mesto-card__title",children:t.name}),Object(n.jsxs)("div",{className:"mesto-card__like-group",children:[Object(n.jsx)("button",{className:d,onClick:function(){c(t)}}),Object(n.jsx)("p",{className:"mesto-card__like-number",children:t.likes.length})]})]})]})},h=a(10),m=a.n(h);var O=function(e){var t=e.cards,a=e.onEditProfile,c=e.onAddPlace,o=e.onEditAvatar,i=e.onCardClick,s=e.onCardLike,u=e.onDeleteButtonClick,d=e.isLoading,l=r.a.useContext(_);return Object(n.jsxs)("main",{className:"main page__main",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsx)("div",{className:"profile__avatar",onClick:o,style:d?{backgroundColor:"#cccccc"}:{backgroundImage:"url(".concat(l.avatar,")")}}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__title",children:d?"User":l.name}),Object(n.jsx)("button",{className:"profile__edit-button",onClick:a}),Object(n.jsx)("p",{className:"profile__subtitle",children:d?"Description":l.about})]}),Object(n.jsx)("button",{className:"profile__add-button",onClick:c})]}),Object(n.jsx)("section",{className:"mesto-collection main__mesto-collection",children:Object(n.jsx)("ul",{className:"mesto-cards",children:d?Object(n.jsx)(m.a,{type:"ThreeDots",color:"#ffffff",height:60,width:60,style:{margin:"auto"}}):t.map((function(e){return Object(n.jsx)(f,{card:e,onCardClick:i,onCardLike:s,onDeleteButtonClick:u},e._id)}))})})]})};var v=function(e){var t=e.card,a=e.onClose,c=e.onOverlayClick,o=t?"popup_opened":"";function i(e){t&&27===e.keyCode&&a()}return r.a.useEffect((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}})),Object(n.jsx)("div",{className:"popup popup_image-viewer ".concat(o),onClick:c,children:Object(n.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(n.jsxs)("figure",{className:"popup__figure",children:[Object(n.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(n.jsx)("figcaption",{className:"popup__caption",children:t.name})]}),Object(n.jsx)("button",{className:"popup__close-button",onClick:a})]})})};var C=function(e){var t=e.title,a=e.formName,c=e.isOpen,r=e.onClose,o=e.onOverlayClick,i=e.onSubmit,s=e.children,u=c?"popup_opened":"";return Object(n.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(u),id:a,onClick:o,children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsxs)("div",{className:"popup__header",children:[Object(n.jsx)("h2",{className:"popup__title",children:t}),Object(n.jsx)("button",{className:"popup__close-button",onClick:r})]}),Object(n.jsx)("form",{className:"popup__form",id:a,name:a,onSubmit:i,method:"POST",action:"#",noValidate:!0,children:s})]})})};var k=function(e){var t=e.className,a=e.text,c=e.type,r=e.isActive,o=e.isLoading;return Object(n.jsx)("button",{className:r||o?t:"".concat(t," ").concat(t,"_disabled"),type:c,disabled:!r,children:a})};var x=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateUser,o=e.onOverlayClick,i=e.values,s=e.errors,u=e.setValues,p=e.setErrors,j=e.handleChange,b=e.isLoading,f=r.a.useContext(_),h=r.a.useState(!1),m=Object(l.a)(h,2),O=m[0],v=m[1];function x(e){t&&27===e.keyCode&&a()}return r.a.useEffect((function(){u(Object(d.a)(Object(d.a)({},i),{},{editProfile:Object(d.a)(Object(d.a)({},i.editProfile),{},{user:f.name,job:f.about})}))}),[f]),r.a.useEffect((function(){var e=Array.from(Object.values(i.editProfile));Array.from(Object.values(s.editProfile)).every((function(e){return""===e}))&&2===e.length?v(!0):v(!1)}),[s,i]),r.a.useEffect((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}})),Object(n.jsx)(C,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",formName:"editProfile",isOpen:t,onClose:function(){a(),u(Object(d.a)(Object(d.a)({},i),{},{editProfile:Object(d.a)(Object(d.a)({},i.editProfile),{},{user:f.name,job:f.about})})),p(Object(d.a)(Object(d.a)({},s),{},{editProfile:{}}))},onOverlayClick:o,onSubmit:function(e){e.preventDefault(),c({name:i.editProfile.user,about:i.editProfile.job}),u(Object(d.a)(Object(d.a)({},i),{},{editProfile:{}})),p(Object(d.a)(Object(d.a)({},s),{},{editProfile:{}}))},children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:O||0!==i.editProfile.user?"popup__input":"popup__input popup__input_type_error",name:"user",value:i.editProfile.user||"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",type:"text",minLength:"2",maxLength:"40",onChange:j,required:!0}),s.editProfile.user&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.editProfile.user})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:O||0!==i.editProfile.job?"popup__input":"popup__input popup__input_type_error",name:"job",value:i.editProfile.job||"",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",type:"text",minLength:"2",maxLength:"200",onChange:j,required:!0}),s.editProfile.job&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.editProfile.job})]}),Object(n.jsx)(k,{className:"popup__submit-button",text:b?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",isActive:O,isLoading:b})]})})};var g=function(e){var t=e.isOpen,a=e.onClose,c=e.onUpdateAvatar,o=e.onOverlayClick,i=e.values,s=e.errors,u=e.setValues,p=e.setErrors,j=e.handleChange,b=e.isLoading,_=r.a.useRef(null),f=r.a.useState(!1),h=Object(l.a)(f,2),m=h[0],O=h[1];function v(e){t&&27===e.keyCode&&a()}return r.a.useEffect((function(){var e=Array.from(Object.values(i.editAvatar));Array.from(Object.values(s.editAvatar)).every((function(e){return""===e}))&&1===e.length?O(!0):O(!1)}),[s,i]),r.a.useEffect((function(){return document.addEventListener("keydown",v),function(){document.removeEventListener("keydown",v)}})),Object(n.jsx)(C,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",formName:"editAvatar",isOpen:t,onClose:function(){a(),u(Object(d.a)(Object(d.a)({},i),{},{editAvatar:{}})),p(Object(d.a)(Object(d.a)({},s),{},{editAvatar:{}}))},onSubmit:function(e){e.preventDefault(),c({avatar:_.current.value}),u(Object(d.a)(Object(d.a)({},i),{},{editAvatar:{}})),p(Object(d.a)(Object(d.a)({},s),{},{editAvatar:{}}))},onOverlayClick:o,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:m||""===i.editAvatar.avatar||void 0===i.editAvatar.avatar?"popup__input":"popup__input popup__input_type_error",name:"avatar",ref:_,value:i.editAvatar.avatar||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",onChange:j,required:!0}),s.editAvatar.avatar&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.editAvatar.avatar})]}),Object(n.jsx)(k,{className:"popup__submit-button",text:b?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"submit",isActive:m,isLoading:b})]})})};var y=function(e){var t=e.isOpen,a=e.onClose,c=e.onOverlayClick,o=e.onCardDelete,i=e.isLoading,s=e.card,u=t?"popup_opened":"";function d(e){t&&27===e.keyCode&&a()}return r.a.useEffect((function(){return document.addEventListener("keydown",d),function(){document.removeEventListener("keydown",d)}})),Object(n.jsx)("div",{className:"popup popup_submit-action ".concat(u),onClick:c,children:Object(n.jsxs)("div",{className:"popup__container popup__container_type_submit-action",children:[Object(n.jsxs)("div",{className:"popup__header",children:[Object(n.jsx)("h2",{className:"popup__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(n.jsx)("button",{className:"popup__close-button"})]}),Object(n.jsxs)("button",{className:"popup__submit-button popup__submit-button_type_action",onClick:function(){o(s)},children:[i?"\u0423\u0434\u0430\u043b\u044f\u0435\u043c...":"\u0414\u0430"," "]})]})})},N=a(11),L=a(12),A=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(N.a)(this,e),this._baseURL=a,this._headers=n}return Object(L.a)(e,[{key:"_checkResStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseURL,"/cards"),{headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseURL,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResStatus(t)}))}},{key:"getAllInitialData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"patchUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResStatus(e)}))}},{key:"patchUpdatedUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkResStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return t?fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return a._checkResStatus(e)})):fetch("".concat(this._baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return a._checkResStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResStatus(e)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this._baseURL,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResStatus(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"fba2c732-c582-4b59-a665-759f5dbd039a","Content-Type":"application/json"}});var E=function(e){var t=e.isOpen,a=e.onClose,c=e.onAddPlace,o=e.onOverlayClick,i=e.values,s=e.errors,u=e.setValues,p=e.setErrors,j=e.handleChange,b=e.isLoading,_=r.a.useState(!1),f=Object(l.a)(_,2),h=f[0],m=f[1];function O(e){t&&27===e.keyCode&&(a(),u(Object(d.a)(Object(d.a)({},i),{},{addCard:{}})),p(Object(d.a)(Object(d.a)({},s),{},{addCard:{}})))}return r.a.useEffect((function(){var e=Array.from(Object.values(i.addCard));Array.from(Object.values(s.addCard)).every((function(e){return""===e}))&&2===e.length?m(!0):m(!1)}),[s,i]),r.a.useEffect((function(){return document.addEventListener("keydown",O),function(){document.removeEventListener("keydown",O)}})),Object(n.jsx)(C,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",formName:"addCard",isOpen:t,onClose:function(){a(),u(Object(d.a)(Object(d.a)({},i),{},{addCard:{}})),p(Object(d.a)(Object(d.a)({},s),{},{addCard:{}}))},onSubmit:function(e){e.preventDefault(),c({name:i.addCard.placeName,link:i.addCard.placeUrl}),u(Object(d.a)(Object(d.a)({},i),{},{addCard:{}})),p(Object(d.a)(Object(d.a)({},s),{},{addCard:{}}))},onOverlayClick:o,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:h||0!==i.addCard.placeName?"popup__input":"popup__input popup__input_type_error",name:"placeName",value:i.addCard.placeName||"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",minLength:"1",maxLength:"30",onChange:j,required:!0}),s.addCard.placeName&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.addCard.placeName})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{className:h||0!==i.addCard.placeUrl?"popup__input":"popup__input popup__input_type_error",name:"placeUrl",value:i.addCard.placeUrl||"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",onChange:j,required:!0}),s.addCard.placeUrl&&Object(n.jsx)("span",{className:"popup__input-error popup__input-error_active",children:s.addCard.placeUrl})]}),Object(n.jsx)(k,{className:"popup__submit-button",text:b?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",type:"submit",isActive:h,isLoading:b})]})})};var P=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=r.a.useState(!1),i=Object(l.a)(o,2),p=i[0],f=i[1],h=r.a.useState(!1),m=Object(l.a)(h,2),C=m[0],k=m[1],N=r.a.useState(!1),L=Object(l.a)(N,2),P=L[0],S=L[1],U=r.a.useState(!1),w=Object(l.a)(U,2),R=w[0],D=w[1],I=r.a.useState(!1),T=Object(l.a)(I,2),V=T[0],q=T[1],B=r.a.useState({}),J=Object(l.a)(B,2),M=J[0],F=J[1],H=r.a.useState([]),z=Object(l.a)(H,2),G=z[0],K=z[1],Q=r.a.useState(!1),W=Object(l.a)(Q,2),X=W[0],Y=W[1],Z=r.a.useState({addCard:{},editProfile:{},editAvatar:{}}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=r.a.useState({addCard:{},editProfile:{},editAvatar:{}}),ne=Object(l.a)(ae,2),ce=ne[0],re=ne[1];function oe(e){te(Object(d.a)(Object(d.a)({},ee),{},Object(u.a)({},e.target.form.id,Object(d.a)(Object(d.a)({},ee[e.target.form.id]),{},Object(u.a)({},e.target.name,e.target.value))))),re(Object(d.a)(Object(d.a)({},ce),{},Object(u.a)({},e.target.form.id,Object(d.a)(Object(d.a)({},ce[e.target.form.id]),{},Object(u.a)({},e.target.name,e.target.validationMessage)))))}function ie(){f(!1),k(!1),S(!1),D(!1),q(!1)}function se(e){e.target===e.currentTarget&&ie()}return r.a.useEffect((function(){Y(!0),A.getInitialCards().then((function(e){K(e.map((function(e){return{_id:e._id,owner:e.owner,name:e.name,link:e.link,likes:e.likes}}))),Y(!1)})).catch((function(e){return console.log(e)}))}),[]),r.a.useEffect((function(){A.getUserInfo().then((function(e){c(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)(_.Provider,{value:a,children:Object(n.jsxs)("div",{className:"App page",children:[Object(n.jsx)(j,{}),Object(n.jsx)(O,{onEditProfile:function(){f(!0)},onEditAvatar:function(){k(!0)},onAddPlace:function(){S(!0)},onCardClick:function(e){q(e)},cards:G,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));A.changeLikeCardStatus(e._id,t).then((function(t){var a=G.map((function(a){return a._id===e._id?t:a}));K(a)})).catch((function(e){return console.log(e)}))},onDeleteButtonClick:function(e){D(!0),F(e)},isLoading:X}),Object(n.jsx)(b,{}),Object(n.jsx)(v,{card:V,onClose:ie,onOverlayClick:se}),Object(n.jsx)(y,{card:M,isOpen:R,onClose:ie,onOverlayClick:se,onCardDelete:function(e){Y(!0),A.deleteCard(e._id).then((function(){var t=G.filter((function(t){return t._id!==e._id}));K(t),Y(!1),ie()})).catch((function(e){return console.log(e)}))},isLoading:X}),Object(n.jsx)(x,{isOpen:p,onClose:ie,onOverlayClick:se,onUpdateUser:function(e){Y(!0),A.patchUpdatedUserInfo(e).then((function(e){c(e),Y(!1),ie()})).catch((function(e){return console.log(e)}))},values:ee,errors:ce,setValues:te,setErrors:re,handleChange:oe,isLoading:X}),Object(n.jsx)(g,{isOpen:C,onClose:ie,onOverlayClick:se,onUpdateAvatar:function(e){Y(!0),A.patchUserAvatar(e).then((function(e){c(e),Y(!1),ie()})).catch((function(e){return console.log(e)}))},values:ee,errors:ce,setValues:te,setErrors:re,handleChange:oe,isLoading:X}),Object(n.jsx)(E,{isOpen:P,onClose:ie,onAddPlace:function(e){Y(!0),A.postNewCard(e).then((function(e){K([e].concat(Object(s.a)(G))),Y(!1),ie()})).catch((function(e){return console.log(e)}))},onOverlayClick:se,values:ee,errors:ce,setValues:te,setErrors:re,handleChange:oe,isLoading:X})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.6af0f650.chunk.js.map