(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{3826:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return t(9896)}])},4873:function(e,s,t){"use strict";var i=t(4246),n=t(7378),r=t(6677),c=t(1394),a=t(9257),l=t(3738),u=t(7231),h=t(9894),o=t.n(h);s.Z=()=>{let[e,s]=(0,n.useState)([]),{movies:t,searchMovie:h}=(0,n.useContext)(c.sZ),d=(0,r.useRouter)();return(0,n.useEffect)(()=>{"/search"===d.pathname?s(h):s(t)},[d,e,t]),(0,i.jsx)(l.Z,{children:0!==e.length?e.map(e=>(0,i.jsx)(u.Z,{md:4,className:"my-3",children:(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(a.Z.Img,{variant:"top",src:"http://image.tmdb.org/t/p/w300".concat(e.backdrop_path),className:"img-thumbnail img-homeList"}),(0,i.jsxs)(a.Z.Body,{children:[(0,i.jsx)(a.Z.Title,{children:(0,i.jsx)(o(),{href:"/movies/".concat(e.id),children:e.original_title})}),(0,i.jsx)(a.Z.Text,{children:e.overview.slice(0,90)+" ..."}),(0,i.jsxs)(a.Z.Subtitle,{children:["Release Date: ",e.release_date]})]})]})},e.id)):null})}},9896:function(e,s,t){"use strict";t.r(s);var i=t(4246),n=t(754),r=t(4873);s.default=()=>(0,i.jsxs)(n.Z,{children:[(0,i.jsx)("h1",{className:"primerTitulo my-3",children:"Movies"}),(0,i.jsx)(r.Z,{})]})}},function(e){e.O(0,[821,774,888,179],function(){return e(e.s=3826)}),_N_E=e.O()}]);