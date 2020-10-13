(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"w+7M":function(e,t,b){"use strict";b.r(t),b.d(t,"_frontmatter",(function(){return s})),b.d(t,"default",(function(){return o}));b("91GP"),b("rGqo"),b("yt8O"),b("Btvt"),b("RW0V"),b("q1tI");var r=b("7ljp"),n=b("XbGe"),c=b("Drr0");b("qKvR");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var r in b)Object.prototype.hasOwnProperty.call(b,r)&&(e[r]=b[r])}return e}).apply(this,arguments)}var s={},a={_frontmatter:s},i=n.a;function o(e){var t=e.components,b=function(e,t){if(null==e)return{};var b,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)b=c[r],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,["components"]);return Object(r.b)(i,d({},a,b,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Batch input for server creation/modification."),Object(r.b)(c.k,{mdxType:"GQLCodeSnippet"},Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.d,{mdxType:"GQLKeyword"},"type")," BatchServerInput ",Object(r.b)(c.h,{mdxType:"GQLOpen"})),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Hostname of server. FQDN = hostname + domain suffix of customer.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"hostname"),": ",Object(r.b)(c.f,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# ID of location this server belongs to.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"location"),": ",Object(r.b)(c.f,{href:"/ecdn-api-scalars/ID",mdxType:"GQLLink"},"ID"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Which hypervisor will this server run on.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"hypervisor"),": ",Object(r.b)(c.f,{href:"/ecdn-api-enums/Hypervisor",mdxType:"GQLLink"},"Hypervisor"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Network interfaces of ECDN server.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"interfaces"),": [",Object(r.b)(c.f,{href:"/ecdn-api-input-objects/InterfaceInput",mdxType:"GQLLink"},"InterfaceInput"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!"),"]",Object(r.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# DNS servers used for name resolutions. Google resolvers will be used if omitted.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"dnsServers"),": [",Object(r.b)(c.f,{href:"/ecdn-api-scalars/ServerAddress",mdxType:"GQLLink"},"ServerAddress"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!"),"]"),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Address of NTP servers used by ECDN server. Ubuntu NTP pools will be used if omitted.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"ntpServers"),": [",Object(r.b)(c.f,{href:"/ecdn-api-scalars/ServerAddress",mdxType:"GQLLink"},"ServerAddress"),Object(r.b)(c.i,{mdxType:"GQLOperator"},"!"),"]"),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Log collector's address. Omit if log forwarding is disabled.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"logCollector"),": ",Object(r.b)(c.f,{href:"/ecdn-api-scalars/TransportAddress",mdxType:"GQLLink"},"TransportAddress")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Community string of SNMP v2c. Omit if SNMP polling is disabled.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"snmpCommunityString"),": ",Object(r.b)(c.f,{href:"/ecdn-api-scalars/String",mdxType:"GQLLink"},"String")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.c,{mdxType:"GQLComment"},"# Is remote assistance enabled on server. Enabled by default.")),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.j,{mdxType:"GQLTab"}),Object(r.b)(c.g,{mdxType:"GQLName"},"remoteAssistanceEnabled"),": ",Object(r.b)(c.f,{href:"/ecdn-api-scalars/Boolean",mdxType:"GQLLink"},"Boolean")),Object(r.b)(c.e,{mdxType:"GQLLine"}," "),Object(r.b)(c.e,{mdxType:"GQLLine"},Object(r.b)(c.b,{mdxType:"GQLClose"}))),Object(r.b)("h2",null,"Fields"),Object(r.b)("h3",null,"hostname: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/String"}),"String"),"!"),Object(r.b)("p",null,"Hostname of server. FQDN = hostname + domain suffix of customer."),Object(r.b)("h3",null,"location: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/ID"}),"ID"),"!"),Object(r.b)("p",null,"ID of location this server belongs to."),Object(r.b)("h3",null,"hypervisor: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-enums/Hypervisor"}),"Hypervisor"),"!"),Object(r.b)("p",null,"Which hypervisor will this server run on."),Object(r.b)("h3",null,"interfaces: [",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-input-objects/InterfaceInput"}),"InterfaceInput"),"!]!"),Object(r.b)("p",null,"Network interfaces of ECDN server."),Object(r.b)("h3",null,"dnsServers: [",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/ServerAddress"}),"ServerAddress"),"!]"),Object(r.b)("p",null,"DNS servers used for name resolutions. Google resolvers will be used if omitted."),Object(r.b)("h3",null,"ntpServers: [",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/ServerAddress"}),"ServerAddress"),"!]"),Object(r.b)("p",null,"Address of NTP servers used by ECDN server. Ubuntu NTP pools will be used if omitted."),Object(r.b)("h3",null,"logCollector: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/TransportAddress"}),"TransportAddress")),Object(r.b)("p",null,"Log collector’s address. Omit if log forwarding is disabled."),Object(r.b)("h3",null,"snmpCommunityString: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/String"}),"String")),Object(r.b)("p",null,"Community string of SNMP v2c. Omit if SNMP polling is disabled."),Object(r.b)("h3",null,"remoteAssistanceEnabled: ",Object(r.b)("a",d({parentName:"h3"},{href:"/video-streaming-developer-docs/ecdn-api-scalars/Boolean"}),"Boolean")),Object(r.b)("p",null,"Is remote assistance enabled on server. Enabled by default."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-input-objects-batch-server-input-mdx-fa4d3b370fd625dbcd0f.js.map