!function(){"use strict";var t=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(t).forEach(function(e){e.addEventListener("submit",function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")},!1)})}();var toastTrigger=document.getElementById("liveToastBtn"),toastLiveExample=document.getElementById("liveToast");toastTrigger&&toastTrigger.addEventListener("click",function(){new bootstrap.Toast(toastLiveExample).show()});var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(t){return new bootstrap.Tooltip(t)});
//# sourceMappingURL=bootstrap-tool.js.map