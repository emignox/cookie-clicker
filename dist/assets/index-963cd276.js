(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function d(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=d(l);fetch(l.href,o)}})();(()=>{let t=parseInt(localStorage.getItem("score"),10)||0,c=parseInt(localStorage.getItem("priceMultiplicator"),10)||10,d=parseInt(localStorage.getItem("multiplicator"),10)||0,r=!1,l,o=parseInt(localStorage.getItem("lvlBooster"),10)||0,i=parseInt(localStorage.getItem("boostPrice"),10)||50,s=parseInt(localStorage.getItem("priceAutoClicker"),10)||50,a=parseInt(localStorage.getItem("autoClicker"),10)||0,p=0,u=30;document.getElementById("score").innerHTML="COOKIE: "+t,document.getElementById("cost-multiplicator").innerHTML=c,document.getElementById("lvl-multiplicator").innerHTML=d,document.getElementById("cost-booster").innerHTML=i,document.getElementById("lvl-booster").innerHTML=o,document.getElementById("cost-autoClicker").innerHTML=s,document.getElementById("lvl-autoClicker").innerHTML=a;const v=document.getElementById("gdprModal"),y=document.getElementById("overlay"),C=document.getElementById("acceptButton"),f=document.getElementById("bloc-instruction"),k=document.getElementById("close-instruction"),L=document.getElementById("bloc-game-over");document.getElementById("close-GameOver"),localStorage.getItem("gdprAccepted"),y.style.display="block",v.style.display="block";let g;C.addEventListener("click",()=>{v.style.display="none",g||(g=setInterval(T,1e3)),f.style.display="block"}),k.addEventListener("click",()=>{f.style.display="none",y.style.display="none"}),document.getElementById("btn-cookieClicker").addEventListener("click",function(){d>0?E(r?1*(d*2)*5:1*(d*2)):E(r?5:1),document.getElementById("score").textContent="COOKIE: "+t}),document.getElementById("btn-multiplicator").addEventListener("click",()=>{window.innerWidth>=768?t>=c?(I(c),h()):alert("Vous n'avez pas assez de crédits"):t>=c?(I(c),A()):alert("Vous n'avez pas assez de crédits")});function M(){t+=a,localStorage.setItem("score",t),document.getElementById("score").textContent="COOKIE: "+t}document.getElementById("btn-autoClicker").addEventListener("click",()=>{window.innerWidth>=768?t>=s?(I(s),K(),setInterval(M,1e3)):alert("Vous n'avez pas assez de crédits"):t>=s?(I(s),P(),setInterval(M,1e3)):alert("Vous n'avez pas assez de crédits")}),document.getElementById("btn-booster").addEventListener("click",function(){if(window.innerWidth>=768)r?alert("Attendre la fin du compteur"):!r&&t>=i?(r=!0,I(i),x(),document.getElementById("timer-booster").style.display="block",l=setInterval(function(){u--,document.getElementById("timer-booster").innerHTML="00:"+u,u<=0&&(clearInterval(l),r=!1,document.getElementById("timer-booster").innerHTML=" ")},1e3)):alert("pas assez de credits");else if(r)alert("Attendre la fin du compteur");else if(!r&&t>=i){r=!0,I(i),w();let e=30;l=setInterval(function(){e--,document.getElementById("timer-mobile").innerHTML="00:"+e,e<=0&&(clearInterval(l),r=!1)},1e3)}else alert("pas assez de credits")});function H(){const e=document.createElement("div");e.className="little-cookie",e.style.left=Math.random()*(window.innerWidth-20)+"px",e.style.top=Math.random()*(window.innerHeight-20)+"px",e.addEventListener("click",()=>{e.remove(),t-=1,document.getElementById("score").innerHTML="COOKIE: "+t});const n=document.createElement("img");n.src="img/cookie.png",n.style.width="100%",n.style.height="100%",e.appendChild(n),document.body.appendChild(e)}function S(e){const n=document.createElement("div");n.className="golden-cookie",n.style.left=Math.random()*(window.innerWidth-20)+"px",n.style.top=Math.random()*(window.innerHeight-20)+"px",n.addEventListener("click",()=>{n.remove(),b(),t*=2,document.getElementById("score").innerHTML="COOKIE: "+t});const m=document.createElement("img");m.src="img/dog-biscuit.png",m.style.width="100%",m.style.height="100%",n.appendChild(m),document.body.appendChild(n)}function b(){const e=document.querySelectorAll(".little-cookie"),n=document.querySelectorAll(".golden-cookie");e.forEach(function(m){m.remove()}),n.forEach(function(m){m.remove()})}document.getElementById("btn-cookieClicker").addEventListener("click",function(){Math.floor(Math.random()*50)+1==7?S():H()}),document.getElementById("acceptButton").addEventListener("click",function(){const e=document.querySelector(".custom-cursor");e.style.display="block",document.addEventListener("mousemove",function(n){e.style.left=`${n.clientX-25}px`,e.style.top=`${n.clientY}px`})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("btn-booster"),n=document.getElementById("score");e.addEventListener("mouseover",function(){n.textContent="BOOSTER"}),e.addEventListener("mouseout",function(){n.textContent="COOKIE: "+t})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("btn-multiplicator"),n=document.getElementById("score");e.addEventListener("mouseover",function(){n.textContent="MULTIPLICATOR"}),e.addEventListener("mouseout",function(){n.textContent="COOKIE: "+t})}),document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("btn-autoClicker"),n=document.getElementById("score");e.addEventListener("mouseover",function(){n.textContent="AUTOCLICKER"}),e.addEventListener("mouseout",function(){n.textContent="COOKIE: "+t})}),document.getElementById("btn-info").addEventListener("click",()=>{y.style.display="block",f.style.display="block"}),document.getElementById("btn-reset").addEventListener("click",()=>{L.style.display="block",y.style.display="block",document.getElementById("score-final").innerText=t,document.getElementById("temps-jeu").innerText=O(p),document.getElementById("autoClick-final").innerText=a,document.getElementById("multiplicator-final").innerText=d,document.getElementById("boost-final").innerText=o,clearInterval(g),g=null});function T(){p++}function O(e){const n=Math.floor(e/3600),m=Math.floor(e%3600/60),B=e%60;return n>0?heures+" heures "+m+" minutes "+B+" secondes":m>0?m+" minutes "+B+" secondes":B+" secondes"}document.getElementById("close-GameOver").addEventListener("click",()=>{L.style.display="none",y.style.display="none",t=0,a=0,o=0,d=0,i=50,c=10,s=50,p=0,r=!1,b(),z(),g||(g=setInterval(T,1e3)),document.getElementById("timer-booster").style.display="none",document.getElementById("score").innerHTML="COOKIE: "+t,document.getElementById("cost-autoClicker").innerHTML=s,document.getElementById("lvl-autoClicker").innerHTML=a,document.getElementById("cost-multiplicator").innerHTML=c,document.getElementById("lvl-multiplicator").innerHTML=d,document.getElementById("cost-booster").innerHTML=i,document.getElementById("lvl-booster").innerHTML=o,document.getElementById("name-option").innerHTML="NEW GAME",document.getElementById("timer-mobile").innerHTML="00:00",document.getElementById("cost-mobile").innerHTML="...",document.getElementById("lvl-mobile").innerHTML="..."});function E(e){t+=e,localStorage.setItem("score",t),document.getElementById("score").innerHTML="COOKIE: "+t}function I(e){t-=e,localStorage.setItem("score",t),document.getElementById("score").innerHTML="COOKIE: "+t}function h(){d+=1,c*=2,localStorage.setItem("multiplicator",d),localStorage.setItem("priceMultiplicator",c),document.getElementById("cost-multiplicator").innerHTML=c,document.getElementById("lvl-multiplicator").innerHTML=d}function A(){d+=1,c*=2,localStorage.setItem("multiplicator",d),localStorage.setItem("priceMultiplicator",c),document.getElementById("cost-mobile").innerHTML=c,document.getElementById("lvl-mobile").innerHTML=d,document.getElementById("name-option").innerHTML="MULTIPLICATOR",r?document.getElementById("timer-mobile").innerHTML="00:"+u:document.getElementById("timer-mobile").innerHTML="00:00"}function x(){o+=1,i*=2,localStorage.setItem("lvlBooster",o),localStorage.setItem("boostPrice",i),document.getElementById("cost-booster").innerHTML=i,document.getElementById("lvl-booster").innerHTML=o}function w(){o+=1,i*=2,localStorage.setItem("lvlBooster",o),localStorage.setItem("boostPrice",i),document.getElementById("cost-mobile").innerHTML=i,document.getElementById("lvl-mobile").innerHTML=o,document.getElementById("name-option").innerHTML="BOOSTER",document.getElementById("timer-mobile").innerHTML="00:"+u}function K(){a+=1,s*=2,localStorage.setItem("autoClicker",a),localStorage.setItem("priceAutoClicker",s),document.getElementById("cost-autoClicker").innerHTML=s,document.getElementById("lvl-autoClicker").innerHTML=a}function P(){a+=1,s*=2,localStorage.setItem("autoClicker",a),localStorage.setItem("priceAutoClicker",s),document.getElementById("cost-mobile").innerHTML=s,document.getElementById("lvl-mobile").innerHTML=a,document.getElementById("name-option").innerHTML="Auto Click",r?document.getElementById("timer-mobile").innerHTML="00:"+u:document.getElementById("timer-mobile").innerHTML="00:00"}function z(){localStorage.removeItem("score"),localStorage.removeItem("multiplicator"),localStorage.removeItem("priceMultiplicator"),localStorage.removeItem("lvlBooster"),localStorage.removeItem("boostPrice"),localStorage.removeItem("autoClicker"),localStorage.removeItem("priceAutoClicker")}})();
