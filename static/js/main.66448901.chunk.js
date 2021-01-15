(this["webpackJsonpprofile-portfolio"]=this["webpackJsonpprofile-portfolio"]||[]).push([[0],{21:function(e,s,t){},22:function(e,s,t){},28:function(e,s,t){"use strict";t.r(s);var a=t(0),i=t(1),n=t.n(i),c=t(13),r=t.n(c),l=(t(21),t(2)),o=t(3),j=t(5),d=t(4),m=(t(22),function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)(n.a.Fragment,{children:Object(a.jsxs)("header",{id:"home",children:[Object(a.jsxs)("nav",{id:"nav-wrap",children:[Object(a.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show Navigation",children:"Show navigation"}),Object(a.jsx)("a",{className:"mobile-btn",href:"#",title:"Hide Navigation",children:"Hide navigation"}),Object(a.jsxs)("ul",{id:"nav",className:"nav",children:[Object(a.jsx)("li",{className:"current",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(a.jsx)("div",{className:"row banner",children:Object(a.jsxs)("div",{className:"banner-text",children:[Object(a.jsx)("h1",{className:"responsive-headline",children:e.name}),Object(a.jsxs)("h3",{style:{color:"#fff",fontFamily:"sans-serif "},children:[e.role,". Who specializes in ",e.roleDescription]}),Object(a.jsx)("hr",{}),Object(a.jsx)("ul",{className:"social",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,target:"",children:Object(a.jsx)("i",{className:e.className})})},e.name)}))})]})}),Object(a.jsx)("p",{className:"scrolldown",children:Object(a.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(a.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(i.Component)),h=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"about",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"three columns",children:Object(a.jsx)("img",{className:"profile-pic",src:"images/profile2.jpg",alt:""})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsx)("h2",{children:"About Me"}),Object(a.jsx)("p",{children:e.aboutme})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"columns contact-details",children:[Object(a.jsx)("h2",{children:"Contact Details"}),Object(a.jsxs)("p",{className:"address",children:[Object(a.jsx)("span",{children:e.name}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:e.address}),Object(a.jsx)("br",{}),Object(a.jsx)("span",{children:Object(a.jsxs)("a",{href:"mailto:alexjbustillos@gmail.com",children:[Object(a.jsx)("i",{className:"fa fa-envelope-o"})," ",e.website]})})]})]})})]})})}}]),t}(i.Component),b=t.p+"static/media/ABR.577f10b5.pdf",u=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"resume",children:Object(a.jsxs)("div",{className:"row skill",children:[Object(a.jsx)("div",{className:"three columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"Skills"})})}),Object(a.jsxs)("div",{className:"nine columns main-col",children:[Object(a.jsxs)("a",{href:b,target:"_blank",children:[Object(a.jsx)("element",{className:"fa-folder-open"}),Object(a.jsx)("p",{children:"Resume"})]}),Object(a.jsx)("div",{className:"bars",children:Object(a.jsx)("ul",{className:"skills",children:e.skills&&e.skills.map((function(e){return Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),Object(a.jsx)("em",{children:e.skillname})]})}))})})]})]})})}}]),t}(i.Component),p=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"portfolio",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"twelve columns collapsed",children:[Object(a.jsx)("h1",{children:"Check Out Some of My Works."}),Object(a.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid=thirds cf",alt:"",children:e.portfolio&&e.portfolio.map((function(e){return Object(a.jsx)("div",{className:"columns portfolio-item",children:Object(a.jsxs)("div",{className:"item-wrap",children:[Object(a.jsx)("img",{src:"".concat(e.imgurl),className:"item-img"}),Object(a.jsx)("div",{className:"overlay",children:Object(a.jsxs)("div",{className:"portfolio-item-meta",children:[Object(a.jsx)("a",{href:e.url,target:"_blank",children:e.name}),Object(a.jsx)("p",{children:e.description})]})})]})})}))})]})})})}}]),t}(i.Component),O=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("section",{id:"testimonials",children:Object(a.jsx)("div",{className:"text-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"two columns header-col",children:Object(a.jsx)("h1",{children:Object(a.jsx)("span",{children:"References"})})}),Object(a.jsx)("div",{className:"ten columns flex-container\u201d",children:Object(a.jsx)("div",{className:"flexslider",children:Object(a.jsx)("ul",{className:"slides",children:e.testimonials&&e.testimonials.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsxs)("blockquote",{children:[Object(a.jsx)("p",{children:e.description}),Object(a.jsx)("cite",{children:e.name})]})})}))})})})]})})})}}]),t}(i.Component),x=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){this.props.resumeData;return Object(a.jsx)("section",{id:"contact",children:Object(a.jsx)("div",{className:"row section-head",children:Object(a.jsxs)("div",{className:"ten columns",children:[Object(a.jsx)("p",{className:"lead",children:"Feel free to contact me for any work or suggestions below"}),Object(a.jsxs)("form",{id:"form",className:"topBefore",action:"https://formspree.io/f/xjvpjqga",method:"POST",children:[Object(a.jsx)("input",{id:"name",placeholder:"NAME",type:"text",name:"name"}),Object(a.jsx)("input",{id:"email",placeholder:"E-MAIL",type:"text",name:"_replyto"}),Object(a.jsx)("textarea",{id:"message",placeholder:"MESSAGE",name:"message"}),Object(a.jsx)("button",{id:"submit",type:"submit",children:"Send"})]})]})})})}}]),t}(i.Component),f=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"twelve columns",children:Object(a.jsx)("ul",{className:"social-links",children:e.socialLinks&&e.socialLinks.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,children:Object(a.jsx)("i",{className:e.className})})})}))})}),Object(a.jsx)("div",{id:"go-top",children:Object(a.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(a.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(i.Component),v={imagebaseurl:"https://avatars3.githubusercontent.com/u/70779389?s=460&u=045c08b322426315c024c5212394c336181b6ad3&v=4",name:"Alex Bustillos",role:"Full Stack Engineer",linkedinId:"alexjbustillos",roleDescription:"Front end",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/alexjbustillos/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/AlexJBustillos",className:"fa fa-github"}],aboutme:"My passion for wanting more from my career was sparked when I was working as an assistant manager at a produce department in Whole Foods. In this position I managed to develop strong leadership and customer service skills which helped get my team 3rd in the NorthEast region in sales. The role inspired me to continue wanting to grow and help others grow around me as well. I enjoyed the team atmosphere and always pushed my team to keep improving. While at my managing position I learned how to take a step back when problems arise and use my calm attitude to assess the situation and solve problems according to level of importance. With my work ethic and positive calm attitude I continued to lead my department in record sales and profit and helped get my team excel while keeping labor and costs at a minimum. I love using my resources to help people, and find it most constructive when I treat others the way I would like to be treated as well. I want to do the same in the software engineering field, I\u2019d like to work in a junior role and prove to the team and others that we can all achieve greatness as one.",address:"Queens, NY",website:"alexjbustillos@gmail.com",skillsDescription:"images/portfolio/ABR.pdf",skills:[{skillname:"HTML5"},{skillname:"React"},{skillname:"CSS"},{skillname:"Javascript"},{skillname:"mongodb"},{skillname:"express"}],portfolio:[{name:"Keep Up",description:"Game created using vanilla JS",imgurl:"images/portfolio/123.png",url:"https://alexjbustillos.github.io/keepup/"},{name:"Loud and Green",description:"App created using Sequelize, Express, EJS, and Node",imgurl:"images/portfolio/loudgreen.png",url:"http://loud-and-green.herokuapp.com/"},{name:"Irezumi",description:"App created with Ruben Cedeno, Ashton Mitchell, and Amari James. Using Mongoose, Express, React, and Node",imgurl:"images/portfolio/irezumi.png",url:"http://irezumi-tattoo.herokuapp.com/"},{name:"tbd",description:"tbd",imgurl:"images/portfolio/tbd.jpeg",url:""}],testimonials:[{description:"Alex is one of the hardest working people I know. His work ethic and attention to detail goes above and beyond. Trustworthy individual who leads by example. Knows how to people manage and always treated his team with repsect.",name:"Colin, Produce Manager, Whole Foods Market"},{description:"Alex has a great creative eye and has a knack for solving problems in an efficient way. His progression with his work has been really impressive. I think he would make a great addition to any team he's on.",name:"Jimmy De Los Angeles"}]},g=function(e){Object(j.a)(t,e);var s=Object(d.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{resumeData:v}),Object(a.jsx)(h,{resumeData:v}),Object(a.jsx)(u,{resumeData:v}),Object(a.jsx)(p,{resumeData:v}),Object(a.jsx)(O,{resumeData:v}),Object(a.jsx)(x,{resumeData:v}),Object(a.jsx)(f,{resumeData:v})]})}}]),t}(i.Component),N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,n=s.getLCP,c=s.getTTFB;t(e),a(e),i(e),n(e),c(e)}))},k=t(15);r.a.render(Object(a.jsx)(k.a,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),N()}},[[28,1,2]]]);
//# sourceMappingURL=main.66448901.chunk.js.map