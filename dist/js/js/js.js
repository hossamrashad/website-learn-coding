"use strict";document.body.classList.add(localStorage.getItem("pageColor")||"gray");let elColorSwitcher=document.querySelectorAll(".color-switcher li"),classListColorSwitcher=[];for(let e=0;e<elColorSwitcher.length;e++)classListColorSwitcher.push(elColorSwitcher[e].getAttribute("data-color")),elColorSwitcher[e].addEventListener("click",function(){document.body.classList.remove(...classListColorSwitcher),document.body.classList.add(this.getAttribute("data-color")),localStorage.setItem("pageColor",this.getAttribute("data-color"))},!1);function capitalizeLetters(e){let t=e.split(" "),o=[];for(let e=0;e<t.length;e++)o.push(t[e].charAt(0).toUpperCase()+t[e].slice(1));return o.join(" ")}let text=capitalizeLetters("hossam rashad");function showTime(){let e=new Date;var t=e.getHours(),o=e.getMinutes(),l=e.getSeconds();document.getElementById("clock").textContent=t+":"+o+":"+l}window.onload=function(){setInterval(showTime,500)},$(document).ready(function(){$("body").on("click",".parent-code .copy",function(){$(this).select(),document.execCommand("copy")})});let elementTitle="Element Header",elementDesc="Element Description",elementDate="15 / 11",element=`
<div class='wrapper'>
  <h3 class='title'>${elementTitle}</h3>
  <p class='disc'>${elementDesc}</p>
  <span class='date'>${elementDate}</span>
  </div>`;document.write(element.repeat(4));
//# sourceMappingURL=js.js.map
