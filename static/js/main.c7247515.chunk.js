(this.webpackJsonpnrx=this.webpackJsonpnrx||[]).push([[0],{39:function(e,t,s){},40:function(e,t,s){},54:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),a=s(19),i=s.n(a),l=(s(39),s(6)),r=s(4),j=(s(40),s.p+"static/media/logo2.8767602e.svg"),o=s(3),d=s(14),b=s(17),h=s(21),x=s(10),m=s(1),O=function(e){return Object(m.jsx)("div",{className:"square",style:{backgroundColor:e.color}})},u=function(e){return Object(m.jsx)("div",{className:"unread"})},p=function(e){var t=Object(r.f)();var s=n.a.useState("all"),c=Object(l.a)(s,2),a=c[0],i=c[1];return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Messages "}),Object(m.jsxs)("div",{className:"filters",children:[Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("button",{className:"all"===a?"selected":"",onClick:function(){return i("all")},children:"View All"}),Object(m.jsx)("button",{className:"following"===a?"selected":"",onClick:function(){return i("following")},children:"Following"}),Object(m.jsx)("button",{className:"unread"===a?"selected":"",onClick:function(){return i("unread")},children:"Unread"}),Object(m.jsx)("button",{className:"open"===a?"selected":"",onClick:function(){return i("open")},children:"Open"}),Object(m.jsx)("button",{className:"closed"===a?"selected":"",onClick:function(){return i("closed")},children:"Closed"}),Object(m.jsx)("button",{className:"mentions"===a?"selected":"",onClick:function(){return i("mentions")},children:"Mentions"})]}),Object(m.jsxs)("button",{children:[Object(m.jsx)(o.x,{}),"Search Messages"]}),Object(m.jsxs)("button",{className:"primary right",children:[Object(m.jsx)(o.a,{}),"New Message"]})]}),Object(m.jsxs)("table",{className:"messages",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{onClick:function(){t.push("/browse-data"),e.setCommentsState("open")},children:[Object(m.jsx)("td",{children:Object(m.jsx)(u,{})}),Object(m.jsx)("td",{children:"Bill Staples"}),Object(m.jsxs)("td",{children:["Hosts / ",Object(m.jsx)(O,{color:"green"}),"pd-mailin-10-101-0-230.codestream.us",Object(m.jsx)("span",{className:"subtle",children:"This is the same problem as the last time we checked it"})]}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"open",children:"OPEN"})}),Object(m.jsx)("td",{children:"Nov 2"})]}),Object(m.jsxs)("tr",{onClick:function(){t.push("/mobile"),e.setCommentsState("open")},children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:"Mick Jaggar"}),Object(m.jsxs)("td",{children:[Object(m.jsx)(o.A,{style:{verticalAlign:"-2px"}})," Alert Service - Production violated Response Time 95th",Object(m.jsx)("span",{className:"subtle",children:"Looks like we have a real issue here"})]}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"open",children:"OPEN"})}),Object(m.jsx)("td",{children:"Nov 1"})]}),Object(m.jsxs)("tr",{onClick:function(){t.push("/apm"),e.setCommentsState("open")},children:[Object(m.jsx)("td",{style:{position:"relative"},children:Object(m.jsx)("div",{className:"unread-mention",children:Object(m.jsx)(o.u,{})})}),Object(m.jsx)("td",{children:"Donald Knuth"}),Object(m.jsxs)("td",{children:["Hosts / ",Object(m.jsx)(O,{color:"red"}),"pd-api-20-101-0-237.codestream.us",Object(m.jsx)("span",{className:"subtle",children:"Spooky!"})]}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"closed",children:"CLOSED"})}),Object(m.jsx)("td",{children:"Oct 31"})]}),Object(m.jsxs)("tr",{onClick:function(){t.push("/dashboards"),e.setCommentsState("open")},children:[Object(m.jsx)("td",{children:Object(m.jsx)(u,{})}),Object(m.jsx)("td",{children:"Lew Cirne"}),Object(m.jsxs)("td",{children:["API Gateway APIs / ",Object(m.jsx)(O,{color:"green"}),"demotronLoggin_gateway_api"]}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"closed",children:"CLOSED"})}),Object(m.jsx)("td",{children:"Oct 27"})]}),Object(m.jsxs)("tr",{onClick:function(){t.push("/browse-data"),e.setCommentsState("open")},children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:"Larry Wall"}),Object(m.jsxs)("td",{children:["Workloads / ",Object(m.jsx)(O,{color:"gray"}),"Demo Workload - bgomes",Object(m.jsx)("span",{className:"subtle",children:"Are we sure this problem isn't related to the one where we had fourteen different services all running at the same time?"})]}),Object(m.jsx)("td",{children:Object(m.jsx)("div",{className:"open",children:"OPEN"})}),Object(m.jsx)("td",{children:"Oct 26"})]})]})]})]})},g=s(16),v=s(13),y=s(34),f=s(33),S=s(30),w=s.n(S),N=s(32),C=s(31),k=function(e){return Object(m.jsx)("div",{className:"square",style:{backgroundColor:e.color}})},A={"/mobile":"Mobile","/browser":"Browser","/apm":"APM","/home":"Home","/explorer":"Explorer","/browse-data":"Browse Data","/dashboards":"Dashboards","/alerts--ai":"Alerts & AI","/errors-inbox":"Errors Inbox","/infrastructure":"Infrastructure","/logs":"Logs","/synthetics":"Synthetics","/messages":"Messages","/nrx/mobile":"Mobile","/nrx/browser":"Browser","/nrx/apm":"APM","/nrx/home":"Home","/nrx/explorer":"Explorer","/nrx/browse-data":"Browse Data","/nrx/dashboards":"Dashboards","/nrx/alerts--ai":"Alerts & AI","/nrx/errors-inbox":"Errors Inbox","/nrx/infrastructure":"Infrastructure","/nrx/logs":"Logs","/nrx/synthetics":"Synthetics","/nrx/messages":"Messages"},T={mobile:[{pinned:!0,headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:["Shared to ",Object(m.jsx)("span",{className:"mention",children:"#mobile"})," on ",Object(m.jsx)(d.b,{})," ","Slack"]})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"mention",children:"@sally"})," why are we getting so many errors on mobile all of a sudden?"]})},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsxs)(m.Fragment,{children:["Perhaps this deployment is the issue?"," ",Object(m.jsxs)("span",{style:{whiteSpace:"nowrap"},className:"mention",children:[Object(m.jsx)(k,{color:"blue"}),"12/13/83 47fsdfu"]})]})},{reply:!0,headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"Nah, that was just a docs change."})}],browse:[{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"mention",children:"@dave"})," any idea what happened here? this doesn't look like anything I've seen before. help!"]})},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsxs)(m.Fragment,{children:["Could it have something to do with"," ",Object(m.jsxs)("span",{style:{whiteSpace:"nowrap"},className:"mention",children:[Object(m.jsx)(k,{color:"red"}),"demotron_gateway_api"]}),"?"]})},{reply:!0,headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"I don't think so."})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"What happened to the workload it used to be a part of?"})},{newline:!0},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsx)(m.Fragment,{children:"This is the same problem as the last time we checked it"})}],dashboards:[{pinned:!0,headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:["Ticket ",Object(m.jsx)("span",{className:"mention",children:"NR1-3038"})," on ",Object(m.jsx)(b.a,{})," ","Jira"]})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"mention",children:"@dave"})," any idea what happened here? this doesn't look like anything I've seen before. help!"]})},{date:"Nov 22, 7pm et"},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsxs)(m.Fragment,{children:["Could it have something to do with"," ",Object(m.jsxs)("span",{style:{whiteSpace:"nowrap"},className:"mention",children:[Object(m.jsx)(k,{color:"red"}),"demotron_gateway_api"]}),"?"]})},{reply:!0,headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"I don't think so."})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"What happened to the workload it used to be a part of?"})},{newline:!0},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsx)(m.Fragment,{children:"This is the same problem as the last time we checked it"})}],apm:[{headshot:"https://i.imgur.com/jSrZwhT.jpg",pinned:!0,body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{position:"absolute",top:"-10px",right:"0"},children:Object(m.jsx)(o.v,{})}),"Runbook for this app lives ",Object(m.jsx)("span",{className:"mention",children:"here"})]})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("span",{className:"mention",children:"@dave"})," any idea what happened here? this doesn't look like anything I've seen before. help!"]})},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsxs)(m.Fragment,{children:["Could it have something to do with"," ",Object(m.jsxs)("span",{style:{whiteSpace:"nowrap"},className:"mention",children:[Object(m.jsx)(k,{color:"red"}),"demotron_gateway_api"]}),"?"]})},{headshot:"https://i.imgur.com/jSrZwhT.jpg",reply:!0,body:Object(m.jsx)(m.Fragment,{children:"I don't think so."})},{newline:!0},{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsx)(m.Fragment,{children:"What happened to the workload it used to be a part of?"})},{headshot:"https://i.imgur.com/1xDVxPQ.png",body:Object(m.jsx)(m.Fragment,{children:"This is the same problem as the last time we checked it"})}]},D=function(e){var t=e.pinned?"pinned":e.reply?"reply":"";return e.headshot||(t+=" no-headshot"),e.newline?Object(m.jsx)("div",{className:"new-line",children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:"new"})})}):e.date?Object(m.jsx)("div",{className:"date-line",children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:e.date})})}):Object(m.jsxs)("div",{className:"comment "+t,children:[e.headshot&&Object(m.jsx)("img",{className:"headshot",src:e.headshot}),Object(m.jsxs)("div",{className:"comment-body",children:[e.pinned&&Object(m.jsx)("div",{style:{position:"absolute",top:"-10px",right:"0"},children:Object(m.jsx)(o.v,{})}),e.body]})]})},M=function(e){var t=n.a.useState(""),s=Object(l.a)(t,2),c=s[0],a=s[1],i=n.a.useState([]),r=Object(l.a)(i,2),j=r[0],b=r[1],h=function(e){if(e){var t=e.endsWith("mobile")?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:"https://i.imgur.com/FVcAiJC.png"}),Object(m.jsx)(x.b,{to:"/mobile",children:e})]}):Object(m.jsx)("span",{children:e});a(""),b([].concat(Object(y.a)(j),[{body:t,headshot:"https://i.imgur.com/jSrZwhT.jpg"}]))}};return Object(m.jsxs)(m.Fragment,{children:[e.resolved&&Object(m.jsx)(D,{body:Object(m.jsxs)("div",{onClick:function(){return e.setResolved(Object(v.a)(Object(v.a)({},e.resolved),{},Object(g.a)({},e.commentThread,!1)))},children:[Object(m.jsx)(V,{children:"5"}),"Thread"," ",Object(m.jsx)("div",{className:"closed",style:{cursor:"pointer"},children:"CLOSED"})," ","on 12/12/21 by ",Object(m.jsx)("span",{className:"mention",children:"@pez"})," "]})}),e.existingComments.map((function(e){return Object(m.jsx)(D,Object(v.a)({},e))})),j.map((function(e){return Object(m.jsx)(D,Object(v.a)({},e))})),Object(m.jsx)(D,{headshot:"https://i.imgur.com/jSrZwhT.jpg",body:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{type:"text",style:{border:"none",width:"100%",outline:"none",margin:"-8px",padding:"8px"},placeholder:e.resolved?"Start a new thread...":"Add a comment...",value:c,onChange:function(e){return a(e.target.value)}}),Object(m.jsxs)("div",{className:"comment-attachments",children:[Object(m.jsx)(d.a,{title:"Markdown Help"})," ",Object(m.jsx)(C.a,{title:"Mention a teammate"})," ",Object(m.jsx)(o.z,{title:"Emoji"})," ",Object(m.jsx)(o.q,{title:"Link to current page",onClick:function(){return h("/mobile")}})," ",Object(m.jsx)(N.a,{title:"Attach a file"}),Object(m.jsx)("div",{className:"primary right ".concat(c?"active":"disabled"),onClick:function(){return h(c)},style:{marginLeft:"auto"},children:Object(m.jsx)(f.a,{})})]})]})}),Object(m.jsx)("div",{className:"comment-actions",style:{marginTop:"-0px",paddingRight:"10px",paddingLeft:"55px",display:"flex"}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]})},F=function(e){var t=n.a.useState(!1),s=Object(l.a)(t,2),c=s[0],a=s[1],i=n.a.useState(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],b=e.resolved,h=e.setResolved,x=e.commentThread,O=e.threadState,u=T[x]||[],p=b[x]?[]:u,y="open"==O?"green":"purple",f="float"===e.commentsState?A[pathname]+" ":"",S="float"===e.commentsState?void 0:{x:0,y:0};return Object(m.jsx)(w.a,{handle:".float .comments-header",position:S,children:Object(m.jsxs)("div",{className:e.offScreen?"comments off-screen":"float"===e.commentsState?"comments float":"comments",children:[Object(m.jsxs)("div",{className:"comments-header",style:{display:"flex",position:"float"===e.commentsState?"sticky":"relative",top:0},children:[Object(m.jsxs)("div",{children:[f," ",Object(m.jsx)("span",{style:{fontSize:"15px",verticalAlign:"-3px"},onClick:function(){return a(!c)}})]}),Object(m.jsxs)("div",{style:{marginLeft:"auto"},children:[u.length>0&&Object(m.jsxs)("button",{className:(j?"active ":"")+y,onClick:function(){return d(!j)},children:["open"==O?"Open":"Closed",Object(m.jsx)(o.c,{style:{verticalAlign:"-2px",marginLeft:"5px"}}),j&&Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return h(Object(v.a)(Object(v.a)({},b),{},Object(g.a)({},x,"open"==O?"closed":void 0)))},children:"open"==O?"Resolve":"Reopen"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{onClick:function(){return alert("Not implemented. Would create a google doc from the thread as an instant-retro.")},children:"Export"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{onClick:function(){return alert("Not implemented. Would hide the thread completely including on this tab and on the Messages page.")},children:"Archive"})]})})]}),Object(m.jsx)(o.r,{style:{cursor:"pointer"},onClick:function(){return"float"===e.commentsState?e.setCommentsState("open"):e.setCommentsState("float")}})]})]}),Object(m.jsx)(M,{commentThread:x,resolved:b[x],setResolved:h,existingComments:p,commentsState:e.commentsState})]})})},I=function(e){return Object(m.jsx)("div",{className:"content",children:e.children})},L=function(e){return Object(m.jsx)("div",{className:"title",children:e.children})},E=function(e){return Object(m.jsxs)("div",{className:"step",children:[Object(m.jsx)("div",{className:e.checked?"step-number checked":"step-number",children:e.number}),Object(m.jsx)("div",{className:"step-title",children:e.title}),e.children,Object(m.jsx)("div",{className:"mention learn-more",children:"Show me how"})]})},P=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Getting Started"}),Object(m.jsxs)("div",{className:"getting-started",children:[Object(m.jsx)(E,{title:"Add your data",number:"\u2714",checked:!0,children:"Connect your data to New Relic and gain insights in 5 minutes."}),Object(m.jsx)(E,{title:"Explore your data",number:"\u2714",checked:!0,children:"Traverse your entire stack in one place."}),Object(m.jsx)(E,{title:"Monitor critical workflows",number:"3",children:"Detect outages and poor performance before your users notice."}),Object(m.jsx)(E,{title:"Configure an alert",number:"4",children:"Configure an alert and we'll tell you when to worry."}),Object(m.jsx)(E,{title:"Query your data",number:"5",children:"Write your first query in our powerful New Relic Query Language (NRQL)."}),Object(m.jsx)(E,{title:"Set up a dashboard",number:"6",children:"Create and share dashboards that matter to you and your team."}),Object(m.jsx)(E,{title:"Invite your teammates",number:"\u2714",checked:!0,children:"Create and share dashboards that matter to you and your team."})]}),Object(m.jsx)(L,{children:"Add Data"}),Object(m.jsx)("img",{src:"https://i.imgur.com/iOZgwom.png",style:{width:"100%"}})]})},R=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Explorer"}),Object(m.jsx)("img",{src:"https://i.imgur.com/lYDpx6c.png",style:{width:"100%"}})]})},W=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Mobile"}),Object(m.jsx)("img",{src:"https://i.imgur.com/FVcAiJC.png",style:{width:"100%"}})]})},Z=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Alerts & AI"}),Object(m.jsx)("img",{src:"https://i.imgur.com/mIZAU3v.png",style:{width:"100%"}})]})},_=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Logs"}),Object(m.jsx)("img",{src:"https://i.imgur.com/g0St7AZ.png",style:{width:"100%"}})]})},Q=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(L,{children:"Browse Data"}),Object(m.jsx)("img",{src:"https://i.imgur.com/QxHws6n.png",style:{width:"100%"}})]})},B=function(e){var t=n.a.useState(!1),s=Object(l.a)(t,2),c=s[0],a=s[1];return c?null:Object(m.jsxs)("div",{className:"banner",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("b",{children:"New Relic CodeStream"})," Debug prod and discuss code straight from your IDE."]}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("button",{children:"Get started"}),Object(m.jsx)("span",{style:{verticalAlign:"-2px",cursor:"pointer"},children:Object(m.jsx)(o.d,{onClick:function(){return a(!0)}})})]})]})},J=function(e){return Object(m.jsxs)(I,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(L,{children:"Dashboards"}),Object(m.jsx)("img",{src:"https://i.imgur.com/S3USDNH.png",style:{width:"100%"}})]})},V=function(e){return Object(m.jsx)("div",{className:"badge "+(e.className||""),children:e.children})},H=function(e){return Object(m.jsx)("div",{className:"keybinding",children:"\u2318 K"})},z=[{label:"Home",icon:Object(m.jsx)(o.o,{})},{label:"Explorer",icon:Object(m.jsx)(o.m,{}),hover:""},{label:"Browse Data",icon:Object(m.jsx)(o.f,{}),extra:Object(m.jsx)(o.c,{}),subnav:[{label:"Events"},{label:"Metrics"},{label:"Logs"},{label:"Traces"}]},{label:"Dashboards",icon:Object(m.jsx)(o.h,{}),extra:Object(m.jsx)(o.c,{}),subnav:[{label:"Mel Test"},{label:"Mel Test / Mel Test"},{label:"Sonja Test Dashboard"},{label:"vinit"},{label:"vinit / vinit"},{label:"Weekly_UI_Testing_Dash"}]},{label:"Alerts & AI",icon:Object(m.jsx)(o.A,{}),extra:Object(m.jsx)(o.c,{}),subnav:[{label:"Overview"},{label:"Issues & activity"},{label:"-Alerts"},{label:"Incidents"},{label:"Events"},{label:"Policies"},{label:"Notification channels"},{label:"Muting rules"},{label:"-Proactive Detection"},{label:"Settings"},{label:"-Incident Intelligence"},{label:"Decisions"},{label:"Sources"},{label:"Destinations"},{label:"Pathways"},{label:"System settings"},{label:"-Enrich & Respond"},{label:"Workflows"},{label:"Destinations"}]},{label:"Errors Inbox",icon:Object(m.jsx)(o.p,{})},{label:"APM",icon:Object(m.jsx)(o.n,{}),extra:Object(m.jsx)(o.c,{})},{label:"Browser",icon:Object(m.jsx)(o.b,{}),extra:Object(m.jsx)(o.c,{})},{label:"Infrastructure",icon:Object(m.jsx)(o.y,{}),extra:Object(m.jsx)(o.c,{})},{label:"Logs",icon:Object(m.jsx)(o.s,{})},{label:"Mobile",icon:Object(m.jsx)(o.i,{}),extra:Object(m.jsx)(o.c,{})},{label:"Synthetics",icon:Object(m.jsx)(o.l,{}),extra:Object(m.jsx)(o.c,{})},{label:"Messages",icon:Object(m.jsx)(o.e,{}),badge:Object(m.jsx)(V,{children:"3"}),noComment:!0},{label:"More",icon:Object(m.jsx)(o.j,{}),subnav:[{label:"AWS Lamba Setup"},{label:"Key Transactions"},{label:"Kubernetes"},{label:"Legacy custom dashboards"},{label:"Lookout"},{label:"Manage Insights data"},{label:"Network"},{label:"New Relic Edge"},{label:"Plugins"},{label:"Serverless"},{label:"Service Levels"},{label:"Service Maps"},{label:"Traces"},{label:"Workload views"},{label:"-Customize this list"}]}],U=function(e){return Object(m.jsx)("ul",{className:"links submenu",children:e.items.map((function(e){return Object(m.jsx)(q,{item:e})}))})},q=function(e){var t=e.item;return t.label.startsWith("-")?Object(m.jsx)("div",{className:"sep",children:t.label.replace("-","")}):Object(m.jsx)("li",{children:Object(m.jsxs)(x.b,{to:t.label.toLocaleLowerCase().replace(" ","-").replace(" ","-").replace("&",""),activeClassName:"active",onClick:function(){t.noComment&&e.setCommentsState("closed")},children:[t.icon," ",Object(m.jsx)("span",{className:"label",children:t.label}),Object(m.jsx)("span",{className:"extra",children:t.extra}),t.badge&&t.badge,t.subnav&&Object(m.jsx)("span",{className:"hover",children:Object(m.jsx)(U,{items:t.subnav})})]})})},G=function(e){return Object(m.jsxs)("div",{className:"nav",children:[Object(m.jsx)("div",{className:"logo-wrap",onClick:function(){return e.setNavState("normal"==e.navState?"collapsed":"collapsed"==e.navState?"hidden":"normal")},children:Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{className:"logo-svg",src:j,alt:"logo"})})}),"hidden"===e.navState&&Object(m.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:400,cursor:"pointer"},onClick:function(){return e.setNavState("normal")}}),Object(m.jsx)("ul",{className:"links",style:{marginTop:0},children:z.map((function(t){return Object(m.jsx)(q,{item:t,setCommentsState:e.setCommentsState,commentsState:e.commentsState})}))}),Object(m.jsx)("div",{className:"bottom",children:Object(m.jsxs)("ul",{className:"links",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(x.b,{to:"/account",activeClassName:"active",children:[Object(m.jsx)(o.w,{})," Help"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(x.b,{to:"/feedback",activeClassName:"active",children:[Object(m.jsx)(o.k,{})," Feedback"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(x.b,{to:"/invite",activeClassName:"active",children:[Object(m.jsx)(h.c,{})," Invite"]})}),Object(m.jsx)("img",{src:"https://i.imgur.com/lYDpx6c.png",style:{width:"1px",height:"0px"}})]})})]})},K=function(e){var t=n.a.useState(!1),s=Object(l.a)(t,2),c=s[0],a=s[1],i=n.a.useState(!1),j=Object(l.a)(i,2),x=j[0],O=j[1],u=n.a.useState(!1),p=Object(l.a)(u,2),g=p[0],v=p[1],y=n.a.useState(!1),f=Object(l.a)(y,2),S=f[0],w=f[1],N=Object(r.g)(),C=n.a.useState(N.pathname),k=Object(l.a)(C,2),A=k[0],T=k[1],D=n.a.useState({dashboards:!0}),M=Object(l.a)(D,2),I=M[0],L=M[1];n.a.useEffect((function(){"float"!==e.commentsState&&T(N.pathname)}),[N.pathname,e.commentState]);var E=A.endsWith("dashboards")?"dashboards":A.endsWith("browse-data")?"browse":A.endsWith("apm")?"apm":A.endsWith("mobile")?"mobile":"",P=I[E]||!1===I[E]?"closed":"open",R="open"==P?"green":"purple";return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(F,{threadState:P,commentThread:E,resolved:I,setResolved:L,commentsState:e.commentsState,setCommentsState:e.setCommentsState,offScreen:"closed"==e.commentsState}),Object(m.jsxs)("button",{style:{margin:"0 auto 0 0",flexGrow:2,textAlign:"left",position:"relative"},className:c?"active":"",onClick:function(){return a(!c)},children:[Object(m.jsxs)("label",{children:[Object(m.jsx)(o.x,{style:{verticalAlign:"-2px",marginRight:"5px"}}),Object(m.jsx)("span",{style:{opacity:.4},children:"Search & Query"}),Object(m.jsx)("div",{style:{position:"absolute",right:"10px",top:"5px",color:"#999",fontSize:"12px"},children:Object(m.jsx)(H,{})})]}),c&&Object(m.jsx)("div",{className:"menu",style:{width:"100%"},children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("hr",{}),Object(m.jsx)("div",{style:{padding:"5px 15px"},children:Object(m.jsx)("div",{className:"filters",children:Object(m.jsxs)("div",{className:"group",children:[Object(m.jsx)("button",{className:"selected",children:"Search New Relic One"}),Object(m.jsx)("button",{children:"Query Builder"}),Object(m.jsx)("button",{children:"Data Explorer"})]})})}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Most recent"}),Object(m.jsx)("li",{children:"Julian's log test account"}),Object(m.jsx)("li",{children:"Json_logs"}),Object(m.jsx)("li",{children:"Cell Logging Testing 7"}),Object(m.jsx)("li",{children:"Account with suffixed license dt"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"AAA Research"}),Object(m.jsx)("li",{children:"abrunner"}),Object(m.jsx)("li",{children:"abuchanan"}),Object(m.jsx)("li",{children:"Account-Nerdlet"}),Object(m.jsx)("li",{children:"Acct_test"}),Object(m.jsx)("li",{children:"ace"}),Object(m.jsx)("li",{children:"ace: eu-production"})]})})]}),Object(m.jsxs)("button",{className:S?"active":"",onClick:function(){return w(!S)},children:[Object(m.jsxs)("label",{children:["Account: Sunstone Staging"," ",Object(m.jsx)(o.c,{style:{verticalAlign:"-2px"}})]}),S&&Object(m.jsx)("div",{className:"menu",style:{width:"100%"},children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("hr",{}),Object(m.jsxs)("li",{children:[Object(m.jsx)(o.x,{})," Search"]}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Most recent"}),Object(m.jsx)("li",{children:"Julian's log test account"}),Object(m.jsx)("li",{children:"Json_logs"}),Object(m.jsx)("li",{children:"Cell Logging Testing 7"}),Object(m.jsx)("li",{children:"Account with suffixed license dt"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"AAA Research"}),Object(m.jsx)("li",{children:"abrunner"}),Object(m.jsx)("li",{children:"abuchanan"}),Object(m.jsx)("li",{children:"Account-Nerdlet"}),Object(m.jsx)("li",{children:"Acct_test"}),Object(m.jsx)("li",{children:"ace"}),Object(m.jsx)("li",{children:"ace: eu-production"})]})})]}),Object(m.jsxs)("button",{className:g?"active":"",onClick:function(){return v(!g)},children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("img",{src:"https://i.imgur.com/jSrZwhT.jpg"}),Object(m.jsx)(o.c,{style:{verticalAlign:"-2px"}})]}),g&&Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"User preferences"}),Object(m.jsx)("li",{children:"API keys"}),Object(m.jsx)("li",{children:"Manage your plan"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Account settings"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Theme"}),Object(m.jsx)("li",{children:"NRQL console"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Add more data"}),Object(m.jsx)("li",{children:"Manage your data"}),Object(m.jsx)("li",{children:"View your usage"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{children:"Support"}),Object(m.jsx)("hr",{}),Object(m.jsx)("li",{style:{color:"#c00"},children:"Logout"})]})})]}),Object(m.jsxs)("button",{className:x?"active":"",onClick:function(){return O(!x)},children:[Object(m.jsxs)("label",{children:[Object(m.jsx)(h.b,{style:{verticalAlign:"-2px",marginRight:"5px"}}),"Share"]}),x&&Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)(o.g,{}),"Copy permalink"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(o.t,{}),"Share via Email"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(d.b,{}),"Share to Slack"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(b.b,{}),"Share to MS Teams"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)(b.a,{}),"Create Jira Ticket"]})]})})]}),Object(m.jsxs)("button",{className:"open"===e.commentsState?"comment-button active":"comment-button",onClick:function(){return"closed"===e.commentsState?e.setCommentsState("open"):e.setCommentsState("closed")},children:[N.pathname.endsWith("browse-data")?Object(m.jsx)(V,{className:R,children:"5"}):N.pathname.endsWith("dashboards")||N.pathname.endsWith("apm")?Object(m.jsx)(V,{className:R,children:"6"}):N.pathname.endsWith("mobile")?Object(m.jsx)(V,{className:R,children:"4"}):Object(m.jsx)(h.a,{style:{verticalAlign:"-2px",marginRight:"5px"}}),"Commments"]})]})};function Y(){var e=n.a.useState("closed"),t=Object(l.a)(e,2),s=t[0],c=t[1],a=n.a.useState("normal"),i=Object(l.a)(a,2),j=i[0],o=i[1];return Object(m.jsx)(x.a,{children:Object(m.jsxs)("div",{className:"page ".concat(j),children:[Object(m.jsx)(G,{setCommentsState:c,commentsState:s,setNavState:o,navState:j}),Object(m.jsxs)("div",{className:"body",children:[Object(m.jsx)(K,{commentsState:s,setCommentsState:c,navState:j}),Object(m.jsx)("div",{style:{paddingRight:"open"===s?"300px":"0",position:"relative",transition:"padding-right 0.2s"},children:Object(m.jsxs)(r.c,{children:[Object(m.jsx)(r.a,{exact:!0,path:"/home",children:Object(m.jsx)(P,{})}),Object(m.jsx)(r.a,{exact:!0,path:"/explorer",children:Object(m.jsx)(R,{})}),Object(m.jsx)(r.a,{path:"/browse-data",children:Object(m.jsx)(Q,{})}),Object(m.jsx)(r.a,{path:"/dashboards",children:Object(m.jsx)(J,{})}),Object(m.jsx)(r.a,{path:"/logs",children:Object(m.jsx)(_,{})}),Object(m.jsx)(r.a,{path:"/alerts--ai",children:Object(m.jsx)(Z,{})}),Object(m.jsx)(r.a,{path:"/messages",children:Object(m.jsx)(p,{setCommentsState:c})}),Object(m.jsx)(r.a,{path:"/mobile",children:Object(m.jsx)(W,{})}),Object(m.jsx)(r.a,{exact:!0,path:"/nrx/home",children:Object(m.jsx)(P,{})}),Object(m.jsx)(r.a,{exact:!0,path:"/nrx/explorer",children:Object(m.jsx)(R,{})}),Object(m.jsx)(r.a,{path:"/nrx/browse-data",children:Object(m.jsx)(Q,{})}),Object(m.jsx)(r.a,{path:"/nrx/dashboards",children:Object(m.jsx)(J,{})}),Object(m.jsx)(r.a,{path:"/nrx/logs",children:Object(m.jsx)(_,{})}),Object(m.jsx)(r.a,{path:"/nrx/alerts--ai",children:Object(m.jsx)(Z,{})}),Object(m.jsx)(r.a,{path:"/nrx/messages",children:Object(m.jsx)(p,{setCommentsState:c})}),Object(m.jsx)(r.a,{path:"/nrx/mobile",children:Object(m.jsx)(W,{})})]})})]})]})})}var X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,55)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Y,{})}),document.getElementById("root")),X()}},[[54,1,2]]]);
//# sourceMappingURL=main.c7247515.chunk.js.map