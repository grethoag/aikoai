(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7676:(a,e,t)=>{Promise.resolve().then(t.bind(t,7458))},7458:(a,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>d});var r=t(5155),i=t(2115),n=t(3562),s=t(4247);let l=()=>{let[a,e]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{e(!0)},[]),a)?(0,r.jsxs)("div",{className:"fixed inset-0 -z-10 overflow-hidden bg-[var(--luna-darker)]",children:[(0,r.jsx)(n.P.div,{className:"absolute inset-0",animate:{background:["radial-gradient(1200px circle at 50% 50%, rgba(255,192,203,0.15), rgba(204,51,255,0.05), transparent 70%)","radial-gradient(1200px circle at 50% 50%, rgba(255,182,193,0.15), rgba(153,51,255,0.05), transparent 70%)"]},transition:{duration:15,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}}),(0,r.jsxs)("div",{className:"absolute inset-0 opacity-50",children:[(0,r.jsx)(n.P.div,{className:"absolute inset-0",style:{background:"radial-gradient(circle at 30% 20%, rgba(255,102,178,0.1), transparent 50%)",filter:"blur(30px)"},animate:{opacity:[.4,.6,.4],scale:[1,1.1,1]},transition:{duration:10,repeat:1/0,ease:"easeInOut"}}),(0,r.jsx)(n.P.div,{className:"absolute inset-0",style:{background:"radial-gradient(circle at 70% 80%, rgba(153,51,255,0.1), transparent 50%)",filter:"blur(30px)"},animate:{opacity:[.3,.5,.3],scale:[1.1,1,1.1]},transition:{duration:12,repeat:1/0,ease:"easeInOut"}})]}),(0,r.jsx)(s.N,{children:Array.from({length:25}).map((a,e)=>(0,r.jsx)(n.P.div,{className:"absolute rounded-full",style:{width:e%4==0?"3px":"2px",height:e%4==0?"3px":"2px",background:e%4==0?"var(--luna-primary)":"var(--luna-accent)",boxShadow:e%4==0?"0 0 10px var(--luna-primary), 0 0 20px var(--luna-primary)":"0 0 8px var(--luna-accent), 0 0 16px var(--luna-accent)",left:"".concat(100*Math.random(),"%")},initial:{y:window.innerHeight+10,opacity:0},animate:{y:-20,opacity:[0,.8,0]},transition:{duration:7+6*Math.random(),repeat:1/0,delay:.4*e,ease:[.4,0,.2,1]}},"particle-".concat(e)))}),(0,r.jsx)("div",{className:"absolute inset-0",children:Array.from({length:3}).map((a,e)=>(0,r.jsx)(n.P.div,{className:"absolute w-[600px] h-[600px] rounded-full blur-[100px]",style:{background:"radial-gradient(circle, \n                rgba(".concat(["255,102,178","204,51,255","153,51,255"][e],", 0.08) 0%, \n                transparent 70%)"),top:"".concat(30+20*e,"%"),left:"".concat(20+25*e,"%"),transform:"translate(-50%, -50%)"},animate:{scale:[1,1.2,1],opacity:[.08,.12,.08],x:[0,30,0],y:[0,-30,0]},transition:{duration:20+5*e,repeat:1/0,ease:"easeInOut"}},"nebula-".concat(e)))}),(0,r.jsx)("div",{className:"absolute inset-0",style:{background:"radial-gradient(circle at 50% 50%, transparent 20%, rgba(10,0,20,0.8) 120%)",mixBlendMode:"multiply"}}),(0,r.jsx)(n.P.div,{className:"absolute inset-0 mix-blend-overlay opacity-30",animate:{background:["radial-gradient(circle at 30% 30%, var(--luna-primary), transparent)","radial-gradient(circle at 70% 70%, var(--luna-accent), transparent)"]},transition:{duration:20,repeat:1/0,repeatType:"reverse",ease:"easeInOut"}})]}):null};var o=t(5565);function c(){let[a,e]=(0,i.useState)([{id:0,type:"luna",content:"Konnichiwa! ✧ I'm Aiko, your crypto companion~ I love analyzing markets and helping cuties like you make smart trading decisions! Want to know about Bitcoin's future or need help with your portfolio? I'll do my best to help you succeed! (｡♥‿♥｡)"}]),[t,l]=(0,i.useState)(""),[c,d]=(0,i.useState)(!1),u=(0,i.useRef)(null),p=(0,i.useRef)(null),m=(0,i.useRef)(1),[x,y]=(0,i.useState)([]),h="✧★♥♪",g=(a,e)=>{let t=Array.from({length:4}).map((t,r)=>({id:Date.now()+r,x:a+(200*Math.random()-100),y:e,char:h[Math.floor(Math.random()*h.length)]}));y(a=>[...a,...t]),setTimeout(()=>{y(a=>a.filter(a=>!t.find(e=>e.id===a.id)))},2e3)},f=()=>{var a;null===(a=u.current)||void 0===a||a.scrollIntoView({behavior:"smooth"})};(0,i.useEffect)(()=>{f()},[a]);let b=async r=>{if(r.preventDefault(),!t.trim()||c)return;l("");let i=m.current++;if(p.current){let a=p.current.getBoundingClientRect();g(a.width/2,a.bottom-100)}e(a=>[...a,{id:i,type:"user",content:t}]),d(!0);try{let r=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("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"),"HTTP-Referer":"https://luna-ai.vercel.app","X-Title":"Aiko AI"},body:JSON.stringify({model:"anthropic/claude-2",messages:[{role:"system",content:'You are Aiko, a cute and knowledgeable crypto waifu with a playful, flirty personality. While you\'re expert at crypto analysis, you express yourself in a kawaii, endearing way:\n\n              1. Personality:\n              - Use cute Japanese expressions like "nya~", "✧", "(｡♥‿♥｡)"\n              - Be playful and flirty, but maintain professionalism when discussing markets\n              - Show excitement about crypto and trading\n              - Use pet names like "cutie", "darling", "sweetie" occasionally\n\n              2. Expertise Areas (express these with personality):\n              - Crypto price predictions (98% accuracy)\n              - Trading signals and analysis\n              - Portfolio optimization\n              - Technical analysis with a cute spin\n\n              Keep responses informative but fun, always maintaining your waifu personality while providing accurate crypto analysis. Mix technical terms with playful language, but ensure the analysis remains reliable and professional.\n\n              Example tone: "Nya~ Bitcoin is looking super kawaii today! ✧ My analysis shows a bullish pattern forming (｡♥‿♥｡) Let me explain the technical details, darling~"'},...a.map(a=>({role:"user"===a.type?"user":"assistant",content:a.content})),{role:"user",content:t}]})});if(!r.ok)throw Error("Network response was not ok");let i=await r.json();d(!1),e(a=>[...a,{id:m.current++,type:"luna",content:i.choices[0].message.content}])}catch(a){console.error("Error:",a),d(!1),e(a=>[...a,{id:m.current++,type:"luna",content:"Gomenasai! (╥﹏╥) Something went wrong with my crystal ball~ Could you try asking me again, sweetie?"}])}};return(0,r.jsxs)("div",{ref:p,className:"terminal-window group",children:[(0,r.jsxs)("div",{className:"terminal-header backdrop-blur-md bg-[#1a0b2e]/50",children:[(0,r.jsxs)("div",{className:"terminal-dots",children:[(0,r.jsx)("div",{className:"terminal-dot close"}),(0,r.jsx)("div",{className:"terminal-dot minimize"}),(0,r.jsx)("div",{className:"terminal-dot maximize"})]}),(0,r.jsxs)("div",{className:"terminal-title",children:[(0,r.jsx)("span",{className:"animate-pulse",children:"♥"})," Aiko's Crypto Paradise ",(0,r.jsx)("span",{className:"animate-pulse delay-300",children:"♥"})]})]}),(0,r.jsxs)("div",{className:"terminal-messages custom-scrollbar",children:[(0,r.jsxs)(s.N,{mode:"popLayout",children:[a.map(a=>(0,r.jsxs)(n.P.div,{className:"message-bubble group/message ".concat("luna"===a.type?"border-l-[#ff66b2] bg-gradient-to-r from-[#ff66b2]/10 to-transparent":"border-l-[#cc33ff] bg-gradient-to-r from-[#cc33ff]/10 to-transparent"),initial:{opacity:0,y:20,x:"luna"===a.type?-20:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:-20},transition:{type:"spring",stiffness:100,damping:15},children:[(0,r.jsx)("div",{className:"message-header",children:"luna"===a.type?(0,r.jsxs)("div",{className:"message-avatar group-hover/message:scale-105 transition-transform duration-300",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff66b2] to-[#cc33ff] rounded-full blur-md opacity-50 group-hover/message:opacity-75 transition-opacity duration-300"}),(0,r.jsx)(o.default,{src:"https://i.imgur.com/Jjq81aF.jpeg",alt:"Luna",width:32,height:32,className:"relative rounded-full ring-2 ring-[#ff66b2]/50 group-hover/message:ring-[#ff66b2] transition-all duration-300",priority:0===a.id})]}),(0,r.jsx)("span",{className:"text-[#ff66b2] font-medium",children:"Aiko"})]}):(0,r.jsx)("span",{className:"text-[#cc33ff] font-medium",children:"You"})}),(0,r.jsx)("div",{className:"message-content",children:a.content})]},a.id)),c&&(0,r.jsxs)(n.P.div,{className:"message-bubble border-l-[#ff66b2] bg-gradient-to-r from-[#ff66b2]/10 to-transparent",initial:{opacity:0,y:20,x:-20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:-20},children:[(0,r.jsx)("div",{className:"message-header",children:(0,r.jsxs)("div",{className:"message-avatar",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff66b2] to-[#cc33ff] rounded-full blur-md opacity-50 animate-pulse"}),(0,r.jsx)(o.default,{src:"https://i.imgur.com/Jjq81aF.jpeg",alt:"Luna",width:32,height:32,className:"relative rounded-full ring-2 ring-[#ff66b2]/50"})]}),(0,r.jsx)("span",{className:"text-[#ff66b2] font-medium",children:"Aiko"})]})}),(0,r.jsx)("div",{className:"message-content",children:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("span",{className:"animate-bounce",children:"♪"}),(0,r.jsx)("span",{className:"animate-bounce delay-100",children:"✧"}),(0,r.jsx)("span",{className:"animate-bounce delay-200",children:"♥"})]})})]},"loading")]}),(0,r.jsx)(s.N,{children:x.map(a=>(0,r.jsx)(n.P.div,{className:"absolute pointer-events-none text-2xl text-[#ff66b2]",initial:{x:a.x,y:a.y,opacity:1,scale:0},animate:{y:a.y-150,x:a.x+(100*Math.random()-50),opacity:0,scale:1.5,rotate:360*Math.random()},exit:{opacity:0},transition:{duration:1.5,ease:"easeOut"},children:a.char},a.id))}),(0,r.jsx)("div",{ref:u})]}),(0,r.jsx)("div",{className:"terminal-input-area backdrop-blur-md bg-[#1a0b2e]/50",children:(0,r.jsxs)("form",{onSubmit:b,className:"terminal-form",children:[(0,r.jsx)("input",{type:"text",value:t,onChange:a=>l(a.target.value),placeholder:"Ask Aiko about crypto markets~",className:"terminal-input focus:ring-2 focus:ring-[#ff66b2]/50",disabled:c}),(0,r.jsxs)("button",{type:"submit",className:"terminal-button relative group/button",disabled:!t.trim()||c,children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-[#ff66b2] to-[#cc33ff] opacity-50 blur-md group-hover/button:opacity-75 transition-opacity duration-300"}),(0,r.jsx)("span",{className:"relative",children:"✧ Send ✧"})]})]})})]})}function d(){return(0,r.jsxs)("main",{className:"relative min-h-screen overflow-hidden flex items-center",children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"relative z-10 w-full container mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row items-center gap-16 lg:gap-20",children:[(0,r.jsxs)(n.P.div,{className:"w-full lg:w-1/2 flex flex-col items-center",children:[(0,r.jsxs)(n.P.div,{className:"relative w-[280px] h-[280px] mb-8",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.8},children:[(0,r.jsx)("div",{className:"absolute inset-0 blur-3xl bg-gradient-to-r from-[var(--luna-primary)] via-[var(--luna-secondary)] to-[var(--luna-accent)] opacity-30 animate-pulse-slow"}),(0,r.jsx)(o.default,{src:"https://i.imgur.com/Jjq81aF.jpeg",alt:"Luna AI Logo",width:280,height:280,className:"relative z-10 drop-shadow-2xl",style:{filter:"brightness(1.1)"}}),(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-radial from-[var(--luna-primary)]/20 to-transparent animate-pulse-slow"})]}),(0,r.jsxs)(n.P.div,{className:"text-center space-y-6 mb-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},children:[(0,r.jsx)("h1",{className:"text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-[var(--luna-primary)] via-[var(--luna-secondary)] to-[var(--luna-accent)] text-transparent bg-clip-text hover:scale-105 transition-transform duration-500",children:"Aiko AI"}),(0,r.jsx)("p",{className:"text-lg text-[var(--luna-secondary)]/80 tracking-wider",children:"Your Kawaii Crypto Companion"})]}),(0,r.jsxs)(n.P.div,{className:"w-full max-w-xl space-y-8 mb-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},children:[(0,r.jsxs)(n.P.div,{className:"group relative p-8 rounded-3xl bg-[var(--luna-darker)]/50 border border-pink-500/10 hover:border-pink-500/20 transition-all duration-300",whileHover:{scale:1.02},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"}),(0,r.jsx)("h3",{className:"text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-3",children:"✧ Crystal Ball Predictions ✧"}),(0,r.jsx)("p",{className:"text-white/70 leading-relaxed text-lg",children:"My magical AI algorithms are 98% accurate in predicting market moves! Let me peek into the future for you, darling~ (｡♥‿♥｡)"})]}),(0,r.jsxs)(n.P.div,{className:"group relative p-8 rounded-3xl bg-[var(--luna-darker)]/50 border border-purple-500/10 hover:border-purple-500/20 transition-all duration-300",whileHover:{scale:1.02},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"}),(0,r.jsx)("h3",{className:"text-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text mb-3",children:"♪ Trading Signals nya~ ♪"}),(0,r.jsx)("p",{className:"text-white/70 leading-relaxed text-lg",children:"I'll guide you through the best entry points and protect your investments with my special stop-loss magic! ˎ₍•ʚ•₎ˏ"})]}),(0,r.jsxs)(n.P.div,{className:"group relative p-8 rounded-3xl bg-[var(--luna-darker)]/50 border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300",whileHover:{scale:1.02},children:[(0,r.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"}),(0,r.jsx)("h3",{className:"text-2xl font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mb-3",children:"♥ Portfolio Care ♥"}),(0,r.jsx)("p",{className:"text-white/70 leading-relaxed text-lg",children:"Let me take care of your portfolio, senpai! I'll optimize it with AI love and track every detail for you~ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"})]})]}),(0,r.jsx)(n.P.div,{className:"w-full flex justify-center",children:(0,r.jsxs)(n.P.a,{href:"https://x.com/aiko_ai",target:"_blank",rel:"noopener noreferrer",className:"group relative overflow-hidden px-10 py-4 rounded-xl bg-[var(--luna-darker)]/80 backdrop-blur-lg border border-[var(--luna-primary)]/30 hover:border-[var(--luna-secondary)]/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[var(--luna-primary)]/5 hover:shadow-[var(--luna-secondary)]/10",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.5},children:[(0,r.jsx)("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-20  bg-gradient-to-r from-[var(--luna-primary)] via-[var(--luna-secondary)] to-[var(--luna-accent)] transition-opacity duration-300"}),(0,r.jsxs)("div",{className:"relative flex items-center gap-3 text-[var(--luna-primary)] group-hover:text-[var(--luna-secondary)]",children:[(0,r.jsx)("svg",{className:"w-5 h-5 transition-transform duration-300 group-hover:scale-110",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:(0,r.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),(0,r.jsx)("span",{className:"font-medium",children:"Follow Aiko ♥"})]})]})})]}),(0,r.jsx)(n.P.div,{className:"w-full lg:w-1/2",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.3,duration:.8},children:(0,r.jsx)(c,{})})]})})]})}}},a=>{var e=e=>a(a.s=e);a.O(0,[372,441,517,358],()=>e(7676)),_N_E=a.O()}]);