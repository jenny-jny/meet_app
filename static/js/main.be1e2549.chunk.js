(this.webpackJsonpmeet_app=this.webpackJsonpmeet_app||[]).push([[0],{190:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},350:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(63),c=n.n(r),s=(n(190),n(25)),i=n.n(s),l=n(50),u=n(22),d=n(28),h=n(23),f=n(24),p=(n(192),n(193),n(194),n(2));var m=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://jenny-jny.github.io/meet_app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="yellow",a}return n}(v),g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""}),e.props.updateEvents(n,-1),console.log("end of city input change")},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t,-1),console.log("end of city item click")},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(b,{text:this.state.infoText}),Object(p.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:function(t){return e.handleInputChanged(t)},onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:10,infoText:void 0},e.handleInputChanged=function(t){var n=t.target.value;e.setState({infoText:!0}),isNaN(n)||n<0||"0"===n||(n+"").includes(".")?e.setState({infoText:"Please enter a valid number"}):(e.setState({query:n,infoText:""}),e.props.updateNumberOfEvents(n),console.log("number input changed"))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("label",{className:"numberOfEventsLabel",children:"Number of events: "}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",className:"numberOfEvents",value:this.state.query,onChange:function(t){return e.handleInputChanged(t)}})}),Object(p.jsx)(g,{text:this.state.infoText})]})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={details:!1},e.handleDetailsButtonClicked=function(){e.setState((function(e){return{details:!e.details}}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"collapsed",children:[Object(p.jsx)("div",{className:"title",children:Object(p.jsx)("h1",{className:"summary",children:t.summary})}),Object(p.jsxs)("div",{className:"line1",children:[Object(p.jsx)("span",{className:"startTime",children:t.start.dateTime}),Object(p.jsx)("span",{className:"startTimeZone",children:t.start.timeZone})]}),Object(p.jsxs)("div",{className:"line2",children:[Object(p.jsx)("span",{children:"@"}),Object(p.jsx)("span",{className:"summary",children:t.summary}),Object(p.jsx)("span",{children:" | "}),Object(p.jsx)("span",{className:"location",children:t.location})]}),!1===this.state.details&&Object(p.jsx)("button",{className:"showDetails",onClick:function(){return e.handleDetailsButtonClicked()},children:"show details"})]}),!0===this.state.details&&Object(p.jsxs)("div",{className:"expanded",children:[Object(p.jsx)("h2",{className:"aboutEvent",children:"About event: "}),Object(p.jsx)("a",{className:"googleCalendar",href:t.htmlLink,children:"See details on Google Calendar"}),Object(p.jsx)("p",{className:"description",children:t.description}),Object(p.jsx)("button",{className:"hideDetails",onClick:function(){return e.handleDetailsButtonClicked()},children:"hide details"})]})]})}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{className:"event",children:Object(p.jsx)(O,{event:e})},e.id)}))})}}]),n}(a.Component),k=n(180),S=n(113),T=n.n(S),N=n(72),C=n.n(N),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},Z=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,L(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(o=e.sent){e.next=20;break}return e.next=17,T.a.get("https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,c=r.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",o&&q(o));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",E);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,Z();case 10:if(!(n=e.sent)){e.next=20;break}return I(),a="https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,T.a.get(a);case 16:return(o=e.sent).data&&(r=W(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(r))),C.a.done(),e.abrupt("return",o.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=n(352),M=n(353),B=n(357),_=n(176),J=n(177),U=n(75),R=n(181),F=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={showWelcomeScreen:void 0,infoText:void 0,events:[],locations:[],eventCount:10,currentLocation:"all"},e.updateEvents=function(t,n){A().then((function(a){var o="all"===t?a:a.filter((function(e){return e.location===t})),r=e.state.eventCount;-1===n&&(n=r),o=o.slice(0,n),e.setState({events:o,eventCount:n,currentLocation:t}),console.log("location and number of events updated "+t+" | "+n)}))},e.updateNumberOfEvents=function(t){var n=e.state.currentLocation;e.updateEvents(n,t),console.log("number of events updated")},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,r,c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=this.state.eventCount,n=localStorage.getItem("access_token"),e.next=5,L(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,o=new URLSearchParams(window.location.search),r=o.get("code"),this.setState({showWelcomeScreen:!(r||a)}),(r||a)&&this.mounted&&A().then((function(e){c.mounted&&c.setState({events:e.slice(0,t),locations:W(e)})})),navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"Offline: events loaded from cache and may not be up to date"});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.locations,a=t.events,o=t.infoText,r=t.showWelcomeScreen;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Meet App"}),Object(p.jsx)("h4",{children:"Choose your nearest city"}),Object(p.jsx)(w,{locations:n,updateEvents:function(t,n){return e.updateEvents(t,n)}}),Object(p.jsx)(x,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(p.jsx)(j,{text:o}),Object(p.jsx)("h4",{children:"Events in each city"}),Object(p.jsx)(D.a,{height:400,children:Object(p.jsxs)(M.a,{margin:{top:20,right:20,left:20,bottom:20},children:[Object(p.jsx)(B.a,{}),Object(p.jsx)(_.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(J.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(p.jsx)(U.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(R.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(p.jsx)(y,{events:a}),Object(p.jsx)(m,{showWelcomeScreen:r,getAccessToken:function(){return Z()}})]})}}]),n}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,359)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};n(178).config("b5029f6fbf75490e83605fd72193128c").install(),c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet_app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet_app","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):z(t,e)}))}}(),G()}},[[350,1,2]]]);
//# sourceMappingURL=main.be1e2549.chunk.js.map