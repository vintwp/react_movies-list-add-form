(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var i=a(7),c=a.n(i),n=(a(14),a(6)),s=a(2),l=a(1),r=(a(15),a(16),a(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=a(8),b=a.n(m);var j=function(e){var t=e.name,a=e.value,i=e.label,c=void 0===i?t:i,n=e.placeholder,o=void 0===n?"Enter ".concat(c):n,d=e.required,m=void 0!==d&&d,j=e.onChangeCallback,u=void 0===j?function(){}:j,h=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(h,1)[0],g=Object(l.useState)(""),v=Object(s.a)(g,2),p=v[0],f=v[1],w=m&&p;return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:O,children:c}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":w}),placeholder:o,value:a,onChange:function(e){return u(e.target.value,!1)},onBlur:function(e){return function(e){var t=function(e,t,a){if(t&&a&&!t.match(/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/))return"Please insert correct url";switch(!0){case!t:return"".concat(e," is required");case t.length<3&&!a:return"".concat(e," requires min 3 characters");default:return""}}(c,e.target.value,c.toLowerCase().includes("url"));f(t),u(e.target.value,!!t)}(e)}})}),w&&Object(r.jsx)("p",{className:"help is-danger",children:p})]})},u=function(e){var t=e.onAdd,a=Object(l.useState)(0),i=Object(s.a)(a,2),c=i[0],n=i[1],o=Object(l.useState)(""),d=Object(s.a)(o,2),m=d[0],b=d[1],u=Object(l.useState)(!0),h=Object(s.a)(u,2),O=h[0],g=h[1],v=Object(l.useState)(""),p=Object(s.a)(v,2),f=p[0],w=p[1],x=Object(l.useState)(""),M=Object(s.a)(x,2),N=M[0],I=M[1],k=Object(l.useState)(!0),U=Object(s.a)(k,2),y=U[0],S=U[1],T=Object(l.useState)(""),B=Object(s.a)(T,2),_=B[0],C=B[1],z=Object(l.useState)(!0),A=Object(s.a)(z,2),D=A[0],V=A[1],Y=Object(l.useState)(""),F=Object(s.a)(Y,2),Z=F[0],X=F[1],q=Object(l.useState)(!0),L=Object(s.a)(q,2),E=L[0],R=L[1],J=O||y||D||E,G=function(e){e.preventDefault(),t({title:m,description:f,imgUrl:N,imdbId:Z,imdbUrl:_}),n((function(e){return e+1})),b(""),w(""),I(""),C(""),X(""),g(!0)};return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){G(e)},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(j,{name:"title",label:"Title",value:m,onChangeCallback:function(e,t){g(t),b(e)},required:!0}),Object(r.jsx)(j,{name:"description",label:"Description",value:f,onChangeCallback:function(e){w(e)}}),Object(r.jsx)(j,{name:"imgUrl",label:"Image URL",value:N,required:!0,onChangeCallback:function(e,t){S(t),I(e)}}),Object(r.jsx)(j,{name:"imdbUrl",label:"Imdb URL",value:_,required:!0,onChangeCallback:function(e,t){V(t),C(e)}}),Object(r.jsx)(j,{name:"imdbId",label:"Imdb ID",value:Z,required:!0,onChangeCallback:function(e,t){R(t),X(e)}}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:J,children:"Add"})})})]},c)},h=a(9),O=(a(18),function(){var e=Object(l.useState)(Object(n.a)(h)),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:a})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(u,{onAdd:function(e){a.find((function(t){return e.imdbId===t.imdbId}))?alert("Movie ID exists in current list"):i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})});c.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.64c0b779.chunk.js.map