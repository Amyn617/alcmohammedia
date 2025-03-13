"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[900],{111:(e,a,t)=>{t.d(a,{A:()=>x});var l=t(43),s=t(216),r=t(475),i=t(723),n=t(204),o=t(144),c=t(579);const m={code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},x=()=>{var e,a;const t=(0,s.Zp)(),[x,d]=(0,l.useState)(null),[h,g]=(0,l.useState)(!1),{language:p,setLanguage:f}=(0,l.useContext)(i.s),{t:u}=(0,l.useContext)(i.s),b=(0,l.useRef)(null),v=e=>d(e),j=()=>d(null),N=[{code:"en",name:"English",flag:"https://flagsapi.com/US/flat/64.png"},{code:"fr",name:"Fran\xe7ais",flag:"https://flagsapi.com/FR/flat/64.png"},{code:"sp",name:"Espa\xf1ol",flag:"https://flagsapi.com/ES/flat/64.png"},{code:"ar",name:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",flag:"https://flagsapi.com/MA/flat/64.png"}],k=(0,l.useCallback)((e=>{h&&b.current&&!b.current.contains(e.target)&&g(!1)}),[h]);(0,l.useEffect)((()=>(document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)})),[h,k]);const y=N.find((e=>e.code===p))||m,w=(e,a=null)=>{d(null),g(!1),a?(t(e),setTimeout((()=>{const e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})}),100)):(t(e),window.scrollTo({top:0,behavior:"smooth"}))},M=(null===(e=o.J.find((e=>"/english-program"===e.path)))||void 0===e?void 0:e.sections)||[],_=(null===(a=o.J.find((e=>"/french-program"===e.path)))||void 0===a?void 0:a.sections)||[];return(0,c.jsx)("div",{className:"sticky z-50 top-0",children:(0,c.jsxs)("div",{className:"flex items-center justify-between px-10 xl:px-20 bg-white shadow-md",children:[(0,c.jsx)(r.N_,{to:"/",onClick:()=>w("/"),children:(0,c.jsx)("img",{src:"/assets/images/svg/logo.svg",alt:"ALC Mohammedia",className:"w-56 lg:w-48 py-6"})}),(0,c.jsx)("div",{className:"fixed inset-0 bg-black z-40 transition-opacity duration-500 "+(h?"opacity-50 visible":"opacity-0 invisible")}),(0,c.jsxs)("ul",{dir:""+("ar"===p?"rtl":"ltr"),ref:b,className:"hidden gap-10 max-lg:flex max-xl:gap-6 max-lg:flex-col max-lg:z-50 max-lg:text-white max-lg:bg-blue-900 max-lg:absolute max-lg:top-0 max-lg:px-12 max-lg:py-20 max-lg:h-[100vh] max-lg:transition-all max-lg:duration-500 max-lg:ease-in-out lg:flex "+(h?"max-lg:translate-x-0 max-lg:left-0 opacity-100":"max-lg:-translate-x-full max-lg:left-0 max-lg:opacity-0"),children:[(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:"/",onClick:()=>w("/"),className:"hover:text-sky-600 transition-all navbar-link",children:u("home")})}),(0,c.jsx)("li",{className:"relative",onMouseEnter:()=>v("registration"),onMouseLeave:j,children:(0,c.jsx)(r.N_,{to:"/registration",onClick:()=>w("/registration"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:u("registration")})}),(0,c.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>v("english"),onMouseLeave:j,children:[(0,c.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[u("english_program"),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("english"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:M.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:`/english-program/${e}`,onClick:()=>w("/english-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:u(e.replace(/-/g,"_"))})},e)))})]}),(0,c.jsxs)("li",{className:"relative cursor-pointer",onMouseEnter:()=>v("french"),onMouseLeave:j,children:[(0,c.jsxs)("div",{className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:[u("french_program"),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("french"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full left-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[220px] transition-all duration-300 ease-in-out z-50",children:_.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:`/french-program/${e}`,onClick:()=>w("/french-program",e),className:"p-2 block hover:bg-sky-300 max-xl:text-black",children:u(e.replace(/-/g,"_"))})},e)))})]}),(0,c.jsx)("li",{className:"relative",onMouseEnter:()=>v("join"),onMouseLeave:j,children:(0,c.jsx)(r.N_,{to:"/join",onClick:()=>w("/join"),className:"flex items-center hover:text-sky-600 transition-all navbar-link",children:u("join")})}),(0,c.jsx)("li",{children:(0,c.jsx)(r.N_,{to:"/clubs",onClick:()=>w("/clubs"),className:"hover:text-sky-600 transition-all navbar-link",children:u("clubs")})})]}),(0,c.jsxs)("div",{className:"relative",onMouseEnter:()=>v("language"),onMouseLeave:j,children:[(0,c.jsxs)("div",{className:"flex items-center cursor-pointer",children:[(0,c.jsx)("img",{src:y.flag,width:"30",alt:y.code}),(0,c.jsx)(n.Vr3,{className:"ml-2 text-sm"})]}),(0,c.jsx)("ul",{className:("language"===x?"opacity-100 visible translate-y-0":"opacity-0 invisible translate-y-2")+" absolute top-full right-0 mt-2 bg-white backdrop-blur-md border border-gray-200 min-w-[150px] transition-all duration-300 ease-in-out z-50",children:N.filter((e=>e.code!==p)).map((e=>(0,c.jsx)("li",{children:(0,c.jsxs)("button",{onClick:()=>(e=>{f(e),d(null),console.log(`Language changed to: ${e}`)})(e.code),className:"w-full p-2 flex items-center hover:bg-sky-300 cursor-pointer",children:[(0,c.jsx)("img",{src:e.flag,width:"20",alt:e.name,className:"mr-2"}),e.name]})},e.code)))})]}),(0,c.jsx)("button",{className:"lg:hidden text-2xl",onClick:()=>g((e=>!e)),children:(0,c.jsx)(n.OXb,{})})]})})}},138:(e,a,t)=>{t.d(a,{A:()=>r});var l=t(204),s=t(579);const r=()=>(0,s.jsx)("div",{className:"hidden xl:flex items-center justify-center bg-blue-900 text-white py-3 text-base",children:(0,s.jsxs)("ul",{className:"nav-contact flex gap-12 2xl:gap-28",children:[(0,s.jsx)("li",{className:"flex items-center",children:(0,s.jsxs)("a",{href:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,s.jsx)(l.vq8,{className:"mr-2"})," 33 Rue de Damas, Mohammedia"]})}),(0,s.jsx)("li",{className:"flex items-center",children:(0,s.jsxs)("a",{href:"tel:+212661545636",className:"flex items-center hover:text-blue-300 transition",children:[(0,s.jsx)("i",{className:"fa-solid fa-phone mr-2"}),"+212 661-545636"]})}),(0,s.jsx)("li",{className:"flex items-center",children:(0,s.jsxs)("a",{href:"mailto:admin@alcmohammedia.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,s.jsx)(l.maD,{className:"mr-2"})," admin@alcmohammedia.com"]})}),(0,s.jsx)("li",{className:"flex items-center",children:(0,s.jsxs)("a",{href:"https://linktr.ee/alcmohammedia",target:"_blank",rel:"noopener noreferrer",className:"flex items-center hover:text-blue-300 transition",children:[(0,s.jsx)("i",{className:"fa-solid fa-link mr-2"}),"All Links"]})})]})})},796:(e,a,t)=>{t.d(a,{A:()=>r});var l=t(43),s=t(579);const r=()=>{const[e,a]=(0,l.useState)(!1),t=()=>{window.pageYOffset>300?a(!0):a(!1)};return(0,l.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[]),(0,s.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"fixed bottom-10 right-10 bg-sky-500 text-white text-2xl px-4 py-2 rounded-full transition-opacity duration-300 "+(e?"opacity-100":"opacity-0"),"aria-label":"Scroll to top",children:(0,s.jsx)("i",{className:"fa-solid fa-angle-up"})})}},834:(e,a,t)=>{t.d(a,{A:()=>c});var l=t(43),s=t(216),r=t(475),i=t(723),n=t(579);const o=({icon:e,link:a,prefix:t="solid"})=>(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:text-red-500 hover:scale-110 transition-all duration-300","aria-label":`Visit our ${e} page`,children:(0,n.jsx)("i",{className:`fa-${t} fa-${e} text-base`})}),c=()=>{const e=(0,s.Zp)(),{t:a,language:t}=(0,l.useContext)(i.s),c="ar"===t,m=({to:e,children:a})=>(0,n.jsx)("li",{children:(0,n.jsxs)(r.N_,{to:e,className:"group flex items-center gap-2 hover:text-red-500 transition-all duration-300",children:[(0,n.jsx)("span",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:(0,n.jsx)("i",{className:`fa-solid fa-chevron-${c?"left":"right"} text-xs`})}),(0,n.jsx)("span",{className:`group-hover:translate-x-${c?"-1":"1"} transition-transform`,children:a})]})}),x=a=>{e(a),window.scrollTo({top:0,behavior:"smooth"})};return(0,n.jsxs)("footer",{className:"bg-no-repeat bg-cover bg-blue-900/95 text-gray-300 "+(c?"text-right":"text-left"),style:{backgroundImage:"url(/assets/images/svg/footer-bg.svg)"},dir:c?"rtl":"ltr",children:[(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-16 lg:py-20",children:(0,n.jsxs)("div",{className:"grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",children:[(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)(r.N_,{to:"/",onClick:()=>x("/"),className:"block w-36 sm:w-48 transition-transform hover:scale-105",children:(0,n.jsx)("img",{src:"/assets/images/svg/logo.svg",alt:a("alcLogo"),className:"brightness-0 invert"})}),(0,n.jsx)("p",{className:"text-base leading-relaxed opacity-90 max-w-md",children:a("footerDescription")}),(0,n.jsx)("div",{className:"space-y-3 pt-4 border-t border-white/20",children:[{icon:"location-dot",text:"33 Rue de Damas, Mohammedia",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"},{icon:"phone",text:"+212 661-545636",link:"tel:+212661545636"},{icon:"envelope",text:"admin@alcmohammedia.com",link:"mailto:admin@alcmohammedia.com"},{icon:"link",text:"All Links",link:"https://linktr.ee/alcmohammedia"}].map((({icon:e,text:a,link:t})=>(0,n.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 hover:text-red-500 transition-all duration-300 group",children:[(0,n.jsx)("i",{className:`fa-solid fa-${e} w-5 group-hover:scale-110 transition-transform`}),(0,n.jsx)("span",{className:"group-hover:translate-x-1 transition-transform",children:a})]},a)))})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("alcMohammedia")}),(0,n.jsx)("nav",{"aria-label":"Footer navigation",children:(0,n.jsx)("ul",{className:"space-y-3 text-base",children:[{path:"/",label:"home"},{path:"/registration",label:"registration"},{path:"/english-program",label:"english_program"},{path:"/french-program",label:"french_program"},{path:"/join",label:"join"},{path:"/clubs",label:"clubs"}].map((e=>(0,n.jsx)(m,{to:e.path,onClick:()=>x(e.path),children:a(e.label)},e.label)))})})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("links")}),(0,n.jsxs)("ul",{className:"space-y-3 text-base",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("aca")})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://aca.org.ma/contact-3/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 transition-all inline-block hover:translate-x-1 duration-300",children:a("allAlcs")})})]})]}),(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsx)("h3",{className:`text-xl text-white font-semibold relative pb-3 ${c?"after:right-0":"after:left-0"} after:absolute after:bottom-0 after:w-12 after:h-1 after:bg-red-500`,children:a("contacts")}),(0,n.jsx)("div",{dir:"ltr",className:"flex flex-wrap gap-4",children:[{icon:"envelope",link:"mailto:admin@alcmohammedia.com"},{icon:"phone",link:"tel:+212661545636"},{icon:"facebook-f",prefix:"brands",link:"https://www.facebook.com/ALC.Mohammedia/"},{icon:"instagram",prefix:"brands",link:"https://www.instagram.com/alcmohammedia/"},{icon:"linkedin-in",prefix:"brands",link:"https://www.linkedin.com/company/alc-mohammedia/"},{icon:"youtube",prefix:"brands",link:"https://www.youtube.com/@alcmohammedia6915"},{icon:"location-dot",link:"https://maps.app.goo.gl/cyF9dEkNf9ypKHMM7"}].map((e=>(0,n.jsx)(o,{...e},e.icon)))})]})]})}),(0,n.jsx)("div",{className:"bg-gray-800",children:(0,n.jsx)("div",{className:"container mx-auto px-6 md:px-8 lg:px-12 py-4",children:(0,n.jsxs)("p",{className:"text-center text-sm text-gray-400",children:["\xa9 ",(new Date).getFullYear()," ",a("allRightsReserved")," ",(0,n.jsx)(r.N_,{to:"/",onClick:()=>x("/"),className:"text-sky-400 hover:text-red-500 transition-all",children:a("alcMohammedia")})]})})})]})}},900:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var l=t(138),s=t(111),r=t(834),i=t(796),n=t(204),o=t(723),c=t(43),m=t(579);const x=()=>{const{t:e,language:a}=(0,c.useContext)(o.s);return(0,m.jsxs)("div",{id:"top",className:"min-h-screen flex flex-col",children:[(0,m.jsx)(l.A,{}),(0,m.jsx)(s.A,{}),(0,m.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow bg-gray-100 p-8 md:p-16 lg:p-10",children:[(0,m.jsx)(n.BS8,{className:"text-red-600 text-8xl"}),(0,m.jsx)("h1",{className:"text-7xl font-extrabold text-red-600 mt-4",children:e("notFound404")}),(0,m.jsxs)("p",{className:"mt-4 text-xl text-gray-700 text-center max-w-md "+("ar"===a?"rtl":"ltr"),children:[e("pageNotFoundTitle")," ",e("pageNotFoundDescription")]}),(0,m.jsx)("a",{href:"/",className:"mt-6 px-6 py-3 text-white bg-sky-500 rounded-lg shadow-lg hover:bg-sky-700 transition duration-300 transform hover:scale-105",children:e("goToHome")})]}),(0,m.jsx)(r.A,{}),(0,m.jsx)(i.A,{})]})}}}]);
//# sourceMappingURL=900.d69b8a0a.chunk.js.map