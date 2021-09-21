(this.webpackJsonpmeet_app=this.webpackJsonpmeet_app||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(21),o=n.n(r),c=(n(27),n(3)),i=n(4),l=n(6),u=n(5),d=(n(28),n(29),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={details:!1},e}return Object(i.a)(n,[{key:"handleShowDetailsClicked",value:function(){this.setState({details:!0})}},{key:"handleHideDetailsClicked",value:function(){this.setState({details:!1})}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"collapsed",children:[Object(d.jsx)("div",{className:"title",children:Object(d.jsx)("h1",{className:"summary",children:t.summary})}),Object(d.jsxs)("div",{className:"line1",children:[Object(d.jsx)("span",{className:"startTime",children:t.start.dateTime}),Object(d.jsx)("span",{className:"startTimeZone",children:t.start.timeZone})]}),Object(d.jsxs)("div",{className:"line2",children:[Object(d.jsx)("span",{children:"@"}),Object(d.jsx)("span",{className:"summary",children:t.summary}),Object(d.jsx)("span",{children:"|"}),Object(d.jsx)("span",{className:"location",children:t.location})]}),!1===this.state.details&&Object(d.jsx)("button",{className:"showDetails",onClick:function(){return e.handleShowDetailsClicked()},children:"show details"})]}),!0===this.state.details&&Object(d.jsxs)("div",{className:"expanded",children:[Object(d.jsx)("h2",{className:"aboutEvent",children:"About event: "}),Object(d.jsx)("link",{className:"googleCalendar",href:t.htmlLink,children:"See details on Google Calendar"}),Object(d.jsx)("p",{className:"description",children:t.description}),Object(d.jsx)("button",{className:"hideDetails",onClick:function(){return e.handleHideDetailsClicked()},children:"hide details"})]})]})}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(d.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,10)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(d.jsx)("li",{onClick:function(){e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{onClick:function(){e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={query:10,message:""},e.handleInputChanged=function(t){var n=t.target.value;isNaN(n)||n<0||"0"===n||n.includes(".")?e.setState({message:"Please enter a valid number"}):(e.setState({query:n}),e.props.updateEvents("all",n))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"NumberOfEvents",children:[Object(d.jsx)("label",{className:"numberOfEventsLabel",children:"Number of events: "}),Object(d.jsx)("span",{children:Object(d.jsx)("input",{type:"text",className:"numberOfEvents",value:this.state.query,onChange:function(t){return e.handleInputChanged(t)}})}),Object(d.jsx)("span",{children:Object(d.jsx)("p",{className:"errorMessage",children:this.state.message})})]})}}]),n}(a.Component),v=n(7),j=n.n(v),b=n(8),g=n(22),w=n(12),y=n.n(w),O=n(9),x=n.n(O),k=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},C=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,s,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,N(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(s=e.sent){e.next=20;break}return e.next=17,y.a.get("https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return r=e.sent,o=r.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",s&&T(s));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(s=a.access_token)&&localStorage.setItem("access_token",s),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return x.a.done(),e.abrupt("return",k);case 4:return e.next=6,C();case 6:if(!(t=e.sent)){e.next=16;break}return E(),n="https://qeobgl0ka7.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+t,e.next=12,y.a.get(n);case 12:return(a=e.sent).data&&(s=S(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),x.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={events:[],locations:[],eventCount:10},e.updateEvents=function(t,n){Z().then((function(a){var s="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:s});var r=s.slice(0,n-1);e.setState({eventCount:n}),e.setState({events:r})}))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(d.jsx)(f,{eventCount:this.state.eventCount,updateEvents:this.updateEvents}),Object(d.jsx)(p,{events:this.state.events})]})}},{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t,locations:S(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),I()}},[[51,1,2]]]);
//# sourceMappingURL=main.10b8fad3.chunk.js.map