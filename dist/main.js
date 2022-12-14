(()=>{"use strict";const e=e=>({projectName:e,tasks:[]}),t=(()=>{const t=[],n=[];return document.querySelectorAll("[data-project-name]").forEach((c=>{t.push(c.dataset.projectName);let a=e(c.dataset.projectName);n.push(a)})),{nameArray:t,projectArray:n}})();function n(e){e.forEach((e=>{let t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}))}const c=(()=>{const c=()=>{let e=document.querySelectorAll(".directory");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("toggled")&&e.classList.remove("toggled")})),t.classList.add("toggled")}))}))};return{buttonChange:c,navToggle:()=>{const e=document.getElementsByClassName("toggle-button")[0],t=document.getElementById("nav"),n=document.getElementById("main");e.addEventListener("click",(()=>{t.classList.toggle("active"),n.classList.toggle("active")}))},activateModals:()=>{const e=document.querySelectorAll("[data-modal-target"),t=document.querySelectorAll("[data-close-button]"),n=document.getElementById("overlay");function c(e){null!=e&&(e.classList.remove("active"),n.classList.remove("active"))}e.forEach((e=>{e.addEventListener("click",(()=>{var t;null!=(t=document.querySelector(e.dataset.modalTarget))&&(t.classList.add("active"),n.classList.add("active"))}))})),n.addEventListener("click",(()=>{document.querySelectorAll(".modal-active").foreEach((e=>{c(e)}))})),t.forEach((e=>{e.addEventListener("click",(()=>{c(e.closest(".modal"))}))}))},addProject:()=>{document.getElementById("addProject").addEventListener("click",(a=>{a.preventDefault(),function(){const a=document.getElementById("name").value;document.getElementById("name").value="";let l=0,o=0;for(;l<t.nameArray.length;){if(t.nameArray[l]===a){o++;break}l++}if(0==o){let l=e(a);t.projectArray.push(l),console.log(t.projectArray);const o=document.getElementById("additionalProjects");t.nameArray.push(a);const r=function(e){const t=document.createElement("button");for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["hover:bg-[#cccccc]","rounded-md","w-full","py-2","flex","justify-between","items-center","h-12","px-1","directory"]),d=function(e){const t=new Image(20,20);t.src="/src/modules/project-image.png";for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["h-[1.3rem]","w-[1.3rem]","flex","justify-start","items-center","mx-4","box-content"]),s=function(e){const n=document.createElement("div");return n.textContent=e,n.dataset.projectName=e,n.dataset.id=t.nameArray.length-1,n}(a),i=function(e){const t=document.createElement("div");t.innerHTML="&times;";for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["ml-4","z-10","flex","justify-end","killbill"]);r.append(d),r.append(s),r.append(i),o.insertBefore(r,document.getElementById("addBefore")),n(document.querySelectorAll(".directory")),c(),n(document.querySelectorAll(".killbill")),document.querySelectorAll(".killbill").forEach((e=>{e.addEventListener("click",(()=>{let n=e.previousElementSibling.dataset.id;t.nameArray.splice(n,1),t.projectArray.splice(n,1),e.parentElement.remove()}))}))}}()}))},addTask:()=>{document.getElementById("addTask").addEventListener("click",(e=>{e.preventDefault(),function(){let e=function(e){let n=0;for(let c=0;c<t.nameArray.length;c++)return t.nameArray[c]===e.textContent&&(n=c),n}(document.getElementById("title")),n=document.getElementById("objective").value,c=document.getElementById("description").value,a=document.getElementById("priority").value,l=document.getElementById("date").value;t.projectArray[e].tasks.push(((e,t,n,c)=>({objective:e,desc:t,priority:n,date:c}))(n,c,a,l)),console.log(t.projectArray[e].tasks),document.getElementById("objective").value="",document.getElementById("description").value="",document.getElementById("priority").value="0",document.getElementById("date").value=""}()}))}}})();console.log({testString:"This is working, along with Tailwind!"}),c.buttonChange(),c.navToggle(),c.activateModals(),c.addProject(),c.addTask()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSwwQ0FHekIsaUJBRUEsY0FFQSxtQkFFQSxlQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZm9ybWF0aW9uRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VwZGF0ZUJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdGhlLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9tYWtlVGFzay5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2tpbGxQcm9qZWN0LmpzIiwid2VicGFjazovL3RoZS1kby1saXN0Ly4vc3JjL21vZHVsZXMvZ2V0SWQuanMiLCJ3ZWJwYWNrOi8vdGhlLWRvLWxpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlGYWN0b3J5ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IHRhc2tzID0gW11cbiAgICByZXR1cm4ge3Byb2plY3ROYW1lLCB0YXNrc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgaUZhY3RvcnkiLCJpbXBvcnQgaUZhY3RvcnkgZnJvbSBcIi4vaW5mb3JtYXRpb25GYWN0b3J5XCI7XG5cbmNvbnN0IHByb2plY3RJbmZvcm1hdGlvbiA9ICgoKSA9PiB7XG4gICAgLy8gdGhpcyBpcyB0aGUgcHJvamVjdCBuYW1lIGluZm9ybWF0aW9uIGFycmF5IHRoYXQgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIHRhc2sgaW5mb3JtYXRpb24gb2JqZWN0IGFycmF5XG4gICAgY29uc3QgbmFtZUFycmF5ID0gW11cbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXVxuICAgIC8vIHRoZXNlIGFyZSB0aGUgYmFzZSBwcm9qZWN0IGZpbGVzIHRoYXQgd2lsbCBiZSBwcmVsb2FkZWQgaW50byB0aGUgZG9tXG4gICAgY29uc3QgYmFzZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcHJvamVjdC1uYW1lXScpXG4gICAgYmFzZVByb2plY3RzLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgICBuYW1lQXJyYXkucHVzaChwcm9qZWN0LmRhdGFzZXQucHJvamVjdE5hbWUpXG4gICAgICAgIGxldCBlbGVtZW50ID0gaUZhY3RvcnkocHJvamVjdC5kYXRhc2V0LnByb2plY3ROYW1lKVxuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaChlbGVtZW50KVxuICAgIH0pXG4gICAgcmV0dXJuIHtuYW1lQXJyYXksIHByb2plY3RBcnJheX1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RJbmZvcm1hdGlvbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmZvckVhY2goIGJ0biA9PiB7XG4gICAgICAgIGxldCBuZXdCdG4gPSBidG4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBidG4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3QnRuLCBidG4pXG4gICAgfSlcbn0iLCJjb25zdCBtYWtlVGFzayA9IChvYmplY3RpdmUsIGRlc2MsIHByaW9yaXR5LCBkYXRlKSA9PiB7XG4gICAgcmV0dXJuIHtvYmplY3RpdmUsIGRlc2MsIHByaW9yaXR5LCBkYXRlfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlVGFzayIsImltcG9ydCBwcm9qZWN0SW5mb3JtYXRpb24gZnJvbSBcIi4vcHJvamVjdEluZm9ybWF0aW9uXCI7XG5pbXBvcnQgdXBkYXRlQnV0dG9ucyBmcm9tIFwiLi91cGRhdGVCdXR0b25zXCI7XG5pbXBvcnQgaUZhY3RvcnkgZnJvbSBcIi4vaW5mb3JtYXRpb25GYWN0b3J5XCI7XG5pbXBvcnQga2lsbFByb2plY3QgZnJvbSBcIi4va2lsbFByb2plY3RcIjtcbmltcG9ydCBnZXRJZCBmcm9tIFwiLi9nZXRJZFwiO1xuaW1wb3J0IG1ha2VUYXNrIGZyb20gXCIuL21ha2VUYXNrXCI7XG5cblxuY29uc3QgZG9tTWFuID0gKCgpID0+IHtcbiAgICBjb25zdCBidXR0b25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlyZWN0b3J5JylcbiAgICAgICAgZG9tQnRuLmZvckVhY2goIGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9tQnRuLmZvckVhY2ggKCBidG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBuYXZUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKVswXVxuICAgICAgICBjb25zdCBuYXZiYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5hdmJhckxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aXZhdGVNb2RhbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXQnKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaCggYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuLmRhdGFzZXQubW9kYWxUYXJnZXQpXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWFjdGl2ZScpXG4gICAgICAgICAgICBtb2RhbHMuZm9yZUVhY2goIG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKCBidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkaXRpb25hbFByb2plY3QoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZGl0aW9uYWxQcm9qZWN0KCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlID0gJydcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgbGV0IGogPTBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheVtpXSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBpRmFjdG9yeShwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5mb3JtYXRpb24ucHJvamVjdEFycmF5LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5mb3JtYXRpb24ucHJvamVjdEFycmF5KVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWxQcm9qZWN0cycpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5wdXNoKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IG1ha2VCdG4oW1wiaG92ZXI6YmctWyNjY2NjY2NdXCIsIFwicm91bmRlZC1tZFwiLCBcInctZnVsbFwiLCBcInB5LTJcIiwgXCJmbGV4XCIsIFwianVzdGlmeS1iZXR3ZWVuXCIsIFwiaXRlbXMtY2VudGVyXCIsIFwiaC0xMlwiLCBcInB4LTFcIiwgJ2RpcmVjdG9yeSddKVxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG1ha2VJbWcoW1wiaC1bMS4zcmVtXVwiLCBcInctWzEuM3JlbV1cIiwgXCJmbGV4XCIsIFwianVzdGlmeS1zdGFydFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm14LTRcIiwgXCJib3gtY29udGVudFwiXSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBtYWtlRGl2KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBtYWtlWChbJ21sLTQnLCd6LTEwJywnZmxleCcsJ2p1c3RpZnktZW5kJywgJ2tpbGxiaWxsJ10pXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChpbWcpXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChkaXYpXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZCh4KVxuICAgICAgICAgICAgICAgIGFkZE9uLmluc2VydEJlZm9yZShidG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCZWZvcmUnKSlcbiAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b25zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXJlY3RvcnknKSlcbiAgICAgICAgICAgICAgICBidXR0b25DaGFuZ2UoKVxuICAgICAgICAgICAgICAgIGtpbGxQcm9qZWN0KClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VCdG4oYXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnRuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlWChhcnJheSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB4LmlubmVySFRNTCA9ICcmdGltZXM7J1xuICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZUltZyhhcnJheSkge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKDIwLDIwKVxuICAgICAgICAgICAgaW1nLnNyYyA9ICcvc3JjL21vZHVsZXMvcHJvamVjdC1pbWFnZS5wbmcnXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW1nXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlRGl2KHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGRpdi5kYXRhc2V0LnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGRpdi5kYXRhc2V0LmlkID0gcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5sZW5ndGggLSAxXG4gICAgICAgICAgICByZXR1cm4gZGl2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkaXRpb25hbFRhc2soKVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRpdGlvbmFsVGFzaygpIHtcbiAgICAgICAgLy8gdGhpcyBjaGVja3Mgd2hlcmUgdGhlIHRhc2sgaXMgYmVpbmcgcGxhY2VkIGluXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0SWQodGl0bGUpXG4gICAgICAgIGxldCBvYmplY3RpdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0aXZlJykudmFsdWVcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlXG4gICAgICAgIHByb2plY3RJbmZvcm1hdGlvbi5wcm9qZWN0QXJyYXlbaW5kZXhdLnRhc2tzLnB1c2gobWFrZVRhc2sob2JqZWN0aXZlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpKVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5mb3JtYXRpb24ucHJvamVjdEFycmF5W2luZGV4XS50YXNrcylcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iamVjdGl2ZScpLnZhbHVlID0gJydcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSAnJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSA9ICcwJ1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlID0gJydcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidXR0b25DaGFuZ2UsXG4gICAgICAgIG5hdlRvZ2dsZSxcbiAgICAgICAgYWN0aXZhdGVNb2RhbHMsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuOyIsImltcG9ydCB1cGRhdGVCdXR0b25zIGZyb20gXCIuL3VwZGF0ZUJ1dHRvbnNcIlxuaW1wb3J0IHByb2plY3RJbmZvcm1hdGlvbiBmcm9tIFwiLi9wcm9qZWN0SW5mb3JtYXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBraWxsUHJvamVjdCgpIHtcbiAgICBsZXQga2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5raWxsYmlsbCcpXG4gICAgdXBkYXRlQnV0dG9ucyhraWxsKVxuICAgIGtpbGxCaWxsQ2hhbmdlKClcblxuICAgIGZ1bmN0aW9uIGtpbGxCaWxsQ2hhbmdlKCkge1xuICAgICAgICBsZXQga2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5raWxsYmlsbCcpXG4gICAgICAgIGtpbGwuZm9yRWFjaCggYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldiA9IGJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcHJldi5kYXRhc2V0LmlkXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5zcGxpY2UoaWQsIDEpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLnByb2plY3RBcnJheS5zcGxpY2UoaWQsIDEpXG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBwcm9qZWN0SW5mb3JtYXRpb24gZnJvbSBcIi4vcHJvamVjdEluZm9ybWF0aW9uXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SWQodGl0bGUpIHtcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SW5mb3JtYXRpb24ubmFtZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0SW5mb3JtYXRpb24ubmFtZUFycmF5W2ldID09PSB0aXRsZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgfVxufSIsImltcG9ydCBkb21NYW4gZnJvbSAnLi9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbidcbmltcG9ydCBwcm9qZWN0SW5mb3JtYXRpb24gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RJbmZvcm1hdGlvbidcbiBcbmNvbnNvbGUubG9nKHt0ZXN0U3RyaW5nOiAnVGhpcyBpcyB3b3JraW5nLCBhbG9uZyB3aXRoIFRhaWx3aW5kISd9KVxuXG4vLyB0aGlzIGNvbnRyb2xzIHRoZSBidXR0b25zIGNoYW5naW5nIGNvbG9yIHNvIHRoYXQgdGhleSBob2xkIHRoZWlyIGhvdmVyIGVmZmVjdCBmb3Igd2hlbiB0aGV5IGFyZSBjbGlja2VkIFxuZG9tTWFuLmJ1dHRvbkNoYW5nZSgpIFxuLy8gdGhpcyBpbnN1cmVzIHRoYXQgdGhlIG5hdiBiYXIgc2hvd3MgdXAgYW5kIHByb3Blcmx5IHdvcmtzIHdoZW4gY2xpY2tlZFxuZG9tTWFuLm5hdlRvZ2dsZSgpIFxuLy8gdGhpcyBhY3RpdmVzIHRoZSBwb3B1cHMgdGhhdCBjb21lIHVwIHdoZW4geW91IHByZXNzIGFkZCBwcm9qZWN0IGFuZCBhZGQgdGFza1xuZG9tTWFuLmFjdGl2YXRlTW9kYWxzKClcbi8vIHRoaXMgbWFrZXMgaXQgc28gdGhhdCBlYWNoIHRpbWUgeW91IHN1Ym1pdCBhIHByb2plY3QsIGl0IGFwcGVhcnMgb24gdGhlIGRvbSBcbmRvbU1hbi5hZGRQcm9qZWN0KClcbi8vIHRoaXMgbWFrZXMgaXQgc28gdGhhdCBlYWNoIHRpbWUgeW91IHN1Ym1pdCBhIHRhc2ssIGl0IGdvZXMgaW50byB0aGUgcmVzcGVjdGl2ZSBvYmplY3RcbmRvbU1hbi5hZGRUYXNrKCkiXSwibmFtZXMiOlsicHJvamVjdE5hbWUiLCJ0YXNrcyIsIm5hbWVBcnJheSIsInByb2plY3RBcnJheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwcm9qZWN0IiwicHVzaCIsImRhdGFzZXQiLCJlbGVtZW50IiwidXBkYXRlQnV0dG9ucyIsImJ1dHRvbiIsImJ0biIsIm5ld0J0biIsImNsb25lTm9kZSIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJidXR0b25DaGFuZ2UiLCJkb21CdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJuYXZUb2dnbGUiLCJ0b2dnbGVCdXR0b24iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibmF2YmFyTGluayIsImdldEVsZW1lbnRCeUlkIiwibWFpbiIsInRvZ2dsZSIsImFjdGl2YXRlTW9kYWxzIiwib3Blbk1vZGFsQnV0dG9ucyIsImNsb3NlTW9kYWxCdXR0b25zIiwib3ZlcmxheSIsImNsb3NlTW9kYWwiLCJtb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbFRhcmdldCIsImZvcmVFYWNoIiwiY2xvc2VzdCIsImFkZFByb2plY3QiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJpIiwiaiIsImNvbnNvbGUiLCJsb2ciLCJhZGRPbiIsImFycmF5IiwiY3JlYXRlRWxlbWVudCIsImxlbmd0aCIsIm1ha2VCdG4iLCJpbWciLCJJbWFnZSIsInNyYyIsIm1ha2VJbWciLCJkaXYiLCJ0ZXh0Q29udGVudCIsImlkIiwibWFrZURpdiIsIngiLCJpbm5lckhUTUwiLCJtYWtlWCIsImFwcGVuZCIsImluc2VydEJlZm9yZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwYXJlbnRFbGVtZW50IiwiYWRkaXRpb25hbFByb2plY3QiLCJhZGRUYXNrIiwiaW5kZXgiLCJ0aXRsZSIsImdldElkIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsImRhdGUiLCJkZXNjIiwiYWRkaXRpb25hbFRhc2siLCJ0ZXN0U3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==