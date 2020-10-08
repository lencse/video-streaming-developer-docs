(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RJCf:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),i=n("XbGe");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={},r={_frontmatter:s},c=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"IBM Video Streaming SDK sends diagnostic data along with the video stream to IBM servers. Diagnostic data contains only transmit statistics, capture events. It does not contain personal information."),Object(a.b)("h2",null,"Diagnostic ID"),Object(a.b)("p",null,"Session diagnostic ID is an autogenerated unique identifier that helps IBM identify diagnostic data — produced during the current broadcast session — across IBM systems. SDK users can’t access the diagnostic data using the diagnostic ID, rather SDK users should use this ID to report a possible problem during a broadcast session. The accompanying diagnostic data will be used by IBM internally to debug your specific issue."),Object(a.b)("p",null,"Please note that the diagnostic ID may change over time, therefore it is best to not cache or store this value."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Lifecycle of diagnosticID"),":\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"diagnosticID")," is first generated when the ",Object(a.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," instance is created and re-generated after each broadcast stop, thus every broadcast session has its unique ",Object(a.b)("inlineCode",{parentName:"p"},"diagnosticID"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Accessing diagnosticID"),":\nYou can always access the current ID via ",Object(a.b)("inlineCode",{parentName:"p"},"getDiagnosticId()")," function in ",Object(a.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster"),".\nIf you want to store a diagnostic ID for a later bug report of the current session, we recommend to save it when the SDK ",Object(a.b)("em",{parentName:"p"},"instance is created")," ( ",Object(a.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster"),"’s constructor) and update it whenever the ",Object(a.b)("em",{parentName:"p"},"SDK’s preview has started")," ( ",Object(a.b)("inlineCode",{parentName:"p"},"Broadcaster.LifeCycleListener.onReady()")," callback)."),Object(a.b)("p",null,"If your app has its own diagnostics reporting you can send the diagnostic ID to your own records."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-android-diagnosing-a-problem-mdx-69b0cb181b2fdfdd46f3.js.map