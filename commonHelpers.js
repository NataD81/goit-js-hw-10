import"./assets/timer-c354f9ff.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";const e=document.querySelector("button[data-start]");e.addEventListener("click",q);const n={days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),calendar:document.querySelector("#datetime-picker")};let d=Date.now();e.disabled=!0;let y=Date.now(),s=null;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<y?(h.error({message:"Please choose a date in the future"}),e.disabled=!0):(e.disabled=!1,d=t[0].getTime())}};f('input[type="text"]',p);function S(t){const c=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:l,seconds:m}}function o(t){return String(t).padStart(2,"0")}function b({days:t,hours:r,minutes:a,seconds:u}){n.days.textContent=o(t),n.hours.textContent=o(r),n.minutes.textContent=o(a),n.seconds.textContent=o(u)}function q(){s=setInterval(()=>{const t=d-Date.now();if(t<0){clearInterval(s),e.disabled=!0;return}e.disabled=!0,n.calendar.disabled=!0,b(S(t))},1e3)}
//# sourceMappingURL=commonHelpers.js.map
