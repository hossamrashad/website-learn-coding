"use strict";document.body.classList.add(localStorage.getItem("pageColor")||"gray");let elColorSwitcher=document.querySelectorAll(".color-switcher li"),classListColorSwitcher=[];for(let t=0;t<elColorSwitcher.length;t++)classListColorSwitcher.push(elColorSwitcher[t].getAttribute("data-color")),elColorSwitcher[t].addEventListener("click",function(){document.body.classList.remove(...classListColorSwitcher),document.body.classList.add(this.getAttribute("data-color")),localStorage.setItem("pageColor",this.getAttribute("data-color"))},!1);function capitalizeLetters(t){let e=t.split(" "),o=[];for(let t=0;t<e.length;t++)o.push(e[t].charAt(0).toUpperCase()+e[t].slice(1));return o.join(" ")}let text=capitalizeLetters("hossam rashad");function showTime(){let t=new Date;var e=t.getHours(),o=t.getMinutes(),l=t.getSeconds();document.getElementById("clock").textContent=e+":"+o+":"+l}window.onload=function(){setInterval(showTime,500)},$(document).ready(function(){$("body").on("click",".parent-code .copy",function(){$(this).select(),document.execCommand("copy")})});let calculator=function(t,e){return t+e};function sayHello(){console.log("Hello Osama")}console.log(calculator(10,20)),document.getElementById("show").onclick=sayHello,setTimeout(function(){console.log("Good")},2e3);
//# sourceMappingURL=js.js.map
