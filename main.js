(()=>{"use strict";const e=e=>({projectName:e,tasks:[]}),t=(()=>{const t=[],n=[];return document.querySelectorAll("[data-project-name]").forEach((c=>{t.push(c.dataset.projectName);let l=e(c.dataset.projectName);n.push(l)})),console.log(n),{nameArray:t,projectArray:n}})();function n(e){e.forEach((e=>{let t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)}))}const c=(()=>{const c=()=>{let e=document.querySelectorAll(".directory");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("toggled")&&e.classList.remove("toggled")})),t.classList.add("toggled")}))}))};return{buttonChange:c,navToggle:()=>{const e=document.getElementsByClassName("toggle-button")[0],t=document.getElementById("nav"),n=document.getElementById("main");e.addEventListener("click",(()=>{t.classList.toggle("active"),n.classList.toggle("active")}))},activateModals:()=>{const e=document.querySelectorAll("[data-modal-target"),t=document.querySelectorAll("[data-close-button]"),n=document.getElementById("overlay");function c(e){null!=e&&(e.classList.remove("active"),n.classList.remove("active"))}e.forEach((e=>{e.addEventListener("click",(()=>{var t;null!=(t=document.querySelector(e.dataset.modalTarget))&&(t.classList.add("active"),n.classList.add("active"))}))})),n.addEventListener("click",(()=>{document.querySelectorAll(".modal-active").foreEach((e=>{c(e)}))})),t.forEach((e=>{e.addEventListener("click",(()=>{c(e.closest(".modal"))}))}))},addProject:()=>{document.getElementById("addProject").addEventListener("click",(l=>{l.preventDefault(),function(){const l=document.getElementById("name").value;document.getElementById("name").value="";let o=0,a=0;for(;o<t.nameArray.length;){if(t.nameArray[o]===l){a++;break}o++}if(0==a){let o=e(l);t.projectArray.push(o),console.log(t.projectArray);const a=document.getElementById("additionalProjects");t.nameArray.push(l);const r=function(e){const t=document.createElement("button");for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["hover:bg-[#cccccc]","rounded-md","w-full","py-2","flex","justify-between","items-center","h-12","px-1","directory"]),d=function(e){const t=new Image(20,20);t.src="/src/modules/project-image.png";for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["h-[1.3rem]","w-[1.3rem]","flex","justify-start","items-center","mx-4","box-content"]),s=function(e){const n=document.createElement("div");return n.textContent=e,n.dataset.projectName=e,n.dataset.id=t.nameArray.length-1,n}(l),i=function(e){const t=document.createElement("div");t.innerHTML="&times;";for(let n=0;n<e.length;n++)t.classList.add(e[n]);return t}(["ml-4","z-10","flex","justify-end","killbill"]);r.append(d),r.append(s),r.append(i),a.insertBefore(r,document.getElementById("addBefore")),n(document.querySelectorAll(".directory")),c(),n(document.querySelectorAll(".killbill")),document.querySelectorAll(".killbill").forEach((e=>{e.addEventListener("click",(()=>{let n=e.previousElementSibling.dataset.id;t.nameArray.splice(n,1),t.projectArray.splice(n,1),e.parentElement.remove()}))}))}}()}))}}})();console.log({testString:"This is working, along with Tailwind!"}),c.buttonChange(),c.navToggle(),c.activateModals(),c.addProject()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFLQSxFQUxrQkEsSUFFUCxDQUFDQSxjQUFhQyxNQURULEtDZ0JoQixFQWYyQixNQUV2QixNQUFNQyxFQUFZLEdBQ1pDLEVBQWUsR0FTckIsT0FQcUJDLFNBQVNDLGlCQUFpQix1QkFDbENDLFNBQVNDLElBQ2xCTCxFQUFVTSxLQUFLRCxFQUFRRSxRQUFRVCxhQUMvQixJQUFJVSxFQUFVLEVBQVNILEVBQVFFLFFBQVFULGFBQ3ZDRyxFQUFhSyxLQUFLRSxFQUFPLElBRTdCQyxRQUFRQyxJQUFJVCxHQUNMLENBQUNELFlBQVdDLGVBQ3RCLEVBYjBCLEdDRlosU0FBU1UsRUFBY0MsR0FDbENBLEVBQU9SLFNBQVNTLElBQ1osSUFBSUMsRUFBU0QsRUFBSUUsV0FBVSxHQUMzQkYsRUFBSUcsV0FBV0MsYUFBYUgsRUFBUUQsRUFBRyxHQUUvQyxDQ0NBLE1BbUpBLEVBbkplLE1BQ1gsTUFBTUssRUFBZSxLQUNqQixJQUFJQyxFQUFTakIsU0FBU0MsaUJBQWlCLGNBQ3ZDZ0IsRUFBT2YsU0FBU1MsSUFDWkEsRUFBSU8saUJBQWlCLFNBQVMsS0FDMUJELEVBQU9mLFNBQVVTLElBQ1RBLEVBQUlRLFVBQVVDLFNBQVMsWUFDdkJULEVBQUlRLFVBQVVFLE9BQU8sVUFDekIsSUFFSlYsRUFBSVEsVUFBVUcsSUFBSSxVQUFTLEdBQzlCLEdBQ0osRUErSEwsTUFBTyxDQUNITixlQUNBTyxVQTlIYyxLQUNkLE1BQU1DLEVBQWV4QixTQUFTeUIsdUJBQXVCLGlCQUFpQixHQUNoRUMsRUFBYTFCLFNBQVMyQixlQUFlLE9BQ3JDQyxFQUFPNUIsU0FBUzJCLGVBQWUsUUFDckNILEVBQWFOLGlCQUFpQixTQUFTLEtBQ25DUSxFQUFXUCxVQUFVVSxPQUFPLFVBQzVCRCxFQUFLVCxVQUFVVSxPQUFPLFNBQVEsR0FDakMsRUF3SERDLGVBckhtQixLQUNuQixNQUFNQyxFQUFtQi9CLFNBQVNDLGlCQUFpQixzQkFDN0MrQixFQUFvQmhDLFNBQVNDLGlCQUFpQix1QkFDOUNnQyxFQUFVakMsU0FBUzJCLGVBQWUsV0E2QnhDLFNBQVNPLEVBQVdDLEdBQ0gsTUFBVEEsSUFDSkEsRUFBTWhCLFVBQVVFLE9BQU8sVUFDdkJZLEVBQVFkLFVBQVVFLE9BQU8sVUFDN0IsQ0EvQkFVLEVBQWlCN0IsU0FBU1MsSUFDdEJBLEVBQUlPLGlCQUFpQixTQUFTLEtBb0JsQyxJQUFtQmlCLEVBQ0YsT0FERUEsRUFuQkduQyxTQUFTb0MsY0FBY3pCLEVBQUlOLFFBQVFnQyxnQkFxQnJERixFQUFNaEIsVUFBVUcsSUFBSSxVQUNwQlcsRUFBUWQsVUFBVUcsSUFBSSxVQXJCSCxHQUNsQixJQUdMVyxFQUFRZixpQkFBaUIsU0FBUyxLQUNmbEIsU0FBU0MsaUJBQWlCLGlCQUNsQ3FDLFVBQVVILElBQ2JELEVBQVdDLEVBQUssR0FDbkIsSUFHTEgsRUFBa0I5QixTQUFTUyxJQUN2QkEsRUFBSU8saUJBQWlCLFNBQVMsS0FFMUJnQixFQURjdkIsRUFBSTRCLFFBQVEsVUFDVixHQUNuQixHQWFMLEVBa0ZBQyxXQS9FZSxLQUNmeEMsU0FBUzJCLGVBQWUsY0FBY1QsaUJBQWlCLFNBQVV1QixJQUM3REEsRUFBTUMsaUJBSVYsV0FDSSxNQUFNOUMsRUFBY0ksU0FBUzJCLGVBQWUsUUFBUWdCLE1BQ3BEM0MsU0FBUzJCLGVBQWUsUUFBUWdCLE1BQVEsR0FDeEMsSUFBSUMsRUFBSSxFQUNKQyxFQUFHLEVBQ1AsS0FBT0QsRUFBSSxvQkFBcUMsQ0FDNUMsR0FBSSxZQUE2QkEsS0FBT2hELEVBQWEsQ0FDakRpRCxJQUNBLEtBQ0osQ0FDQUQsR0FDSixDQUVBLEdBQVMsR0FBTEMsRUFBUSxDQUNSLElBQUl2QyxFQUFVLEVBQVNWLEdBQ3ZCLG9CQUFxQ1UsR0FDckNDLFFBQVFDLElBQUksZ0JBQ1osTUFBTXNDLEVBQVE5QyxTQUFTMkIsZUFBZSxzQkFDdEMsaUJBQWtDL0IsR0FDbEMsTUFBTWUsRUFlZCxTQUFpQm9DLEdBQ2IsTUFBTXBDLEVBQU1YLFNBQVNnRCxjQUFjLFVBQ25DLElBQUssSUFBSUosRUFBSSxFQUFHQSxFQUFJRyxFQUFNRSxPQUFRTCxJQUM5QmpDLEVBQUlRLFVBQVVHLElBQUl5QixFQUFNSCxJQUU1QixPQUFPakMsQ0FDWCxDQXJCb0J1QyxDQUFRLENBQUMscUJBQXNCLGFBQWMsU0FBVSxPQUFRLE9BQVEsa0JBQW1CLGVBQWdCLE9BQVEsT0FBUSxjQUNoSUMsRUErQmQsU0FBaUJKLEdBQ2IsTUFBTUksRUFBTSxJQUFJQyxNQUFNLEdBQUcsSUFDekJELEVBQUlFLElBQU0saUNBQ1YsSUFBSyxJQUFJVCxFQUFJLEVBQUdBLEVBQUlHLEVBQU1FLE9BQVFMLElBQzlCTyxFQUFJaEMsVUFBVUcsSUFBSXlCLEVBQU1ILElBRTVCLE9BQU9PLENBQ1gsQ0F0Q29CRyxDQUFRLENBQUMsYUFBYyxhQUFjLE9BQVEsZ0JBQWlCLGVBQWdCLE9BQVEsZ0JBQzVGQyxFQXVDZCxTQUFpQjNELEdBQ2IsTUFBTTJELEVBQU12RCxTQUFTZ0QsY0FBYyxPQUluQyxPQUhBTyxFQUFJQyxZQUFjNUQsRUFDbEIyRCxFQUFJbEQsUUFBUVQsWUFBY0EsRUFDMUIyRCxFQUFJbEQsUUFBUW9ELEdBQUssbUJBQXNDLEVBQ2hERixDQUNYLENBN0NvQkcsQ0FBUTlELEdBQ2QrRCxFQW9CZCxTQUFlWixHQUNYLE1BQU1ZLEVBQUkzRCxTQUFTZ0QsY0FBYyxPQUNqQ1csRUFBRUMsVUFBWSxVQUNkLElBQUksSUFBSWhCLEVBQUcsRUFBR0EsRUFBSUcsRUFBTUUsT0FBUUwsSUFDNUJlLEVBQUV4QyxVQUFVRyxJQUFJeUIsRUFBTUgsSUFFMUIsT0FBT2UsQ0FDWCxDQTNCa0JFLENBQU0sQ0FBQyxPQUFPLE9BQU8sT0FBTyxjQUFlLGFBQ3JEbEQsRUFBSW1ELE9BQU9YLEdBQ1h4QyxFQUFJbUQsT0FBT1AsR0FDWDVDLEVBQUltRCxPQUFPSCxHQUNYYixFQUFNaUIsYUFBYXBELEVBQUtYLFNBQVMyQixlQUFlLGNBQ2hEbEIsRUFBY1QsU0FBU0MsaUJBQWlCLGVBQ3hDZSxJQ25HWlAsRUFEV1QsU0FBU0MsaUJBQWlCLGNBS3RCRCxTQUFTQyxpQkFBaUIsYUFDaENDLFNBQVNTLElBQ1ZBLEVBQUlPLGlCQUFpQixTQUFTLEtBQzFCLElBQ0l1QyxFQURPOUMsRUFBSXFELHVCQUNEM0QsUUFBUW9ELEdBQ3RCLG1CQUFvQ0EsRUFBSSxHQUN4QyxzQkFBdUNBLEVBQUksR0FDM0M5QyxFQUFJc0QsY0FBYzVDLFFBQU8sR0FDNUIsR0QwRkQsQ0FDSixDQW5DSTZDLEVBQWtCLEdBcUV0QixFQVNQLEVBakpjLEdFSGYzRCxRQUFRQyxJQUFJLENBQUMyRCxXQUFZLDBDQUd6QixpQkFFQSxjQUVBLG1CQUVBLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZm9ybWF0aW9uRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VwZGF0ZUJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdGhlLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdGhlLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9raWxsUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90aGUtZG8tbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaUZhY3RvcnkgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgdGFza3MgPSBbXVxuICAgIHJldHVybiB7cHJvamVjdE5hbWUsIHRhc2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpRmFjdG9yeSIsImltcG9ydCBpRmFjdG9yeSBmcm9tIFwiLi9pbmZvcm1hdGlvbkZhY3RvcnlcIjtcblxuY29uc3QgcHJvamVjdEluZm9ybWF0aW9uID0gKCgpID0+IHtcbiAgICAvLyB0aGlzIGlzIHRoZSBwcm9qZWN0IG5hbWUgaW5mb3JtYXRpb24gYXJyYXkgdGhhdCB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGFzayBpbmZvcm1hdGlvbiBvYmplY3QgYXJyYXlcbiAgICBjb25zdCBuYW1lQXJyYXkgPSBbXVxuICAgIGNvbnN0IHByb2plY3RBcnJheSA9IFtdXG4gICAgLy8gdGhlc2UgYXJlIHRoZSBiYXNlIHByb2plY3QgZmlsZXMgdGhhdCB3aWxsIGJlIHByZWxvYWRlZCBpbnRvIHRoZSBkb21cbiAgICBjb25zdCBiYXNlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9qZWN0LW5hbWVdJylcbiAgICBiYXNlUHJvamVjdHMuZm9yRWFjaCggcHJvamVjdCA9PiB7XG4gICAgICAgIG5hbWVBcnJheS5wdXNoKHByb2plY3QuZGF0YXNldC5wcm9qZWN0TmFtZSlcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBpRmFjdG9yeShwcm9qZWN0LmRhdGFzZXQucHJvamVjdE5hbWUpXG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKGVsZW1lbnQpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG4gICAgcmV0dXJuIHtuYW1lQXJyYXksIHByb2plY3RBcnJheX1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RJbmZvcm1hdGlvbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUJ1dHRvbnMoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmZvckVhY2goIGJ0biA9PiB7XG4gICAgICAgIGxldCBuZXdCdG4gPSBidG4uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBidG4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3QnRuLCBidG4pXG4gICAgfSlcbn0iLCJpbXBvcnQgcHJvamVjdEluZm9ybWF0aW9uIGZyb20gXCIuL3Byb2plY3RJbmZvcm1hdGlvblwiO1xuaW1wb3J0IHVwZGF0ZUJ1dHRvbnMgZnJvbSBcIi4vdXBkYXRlQnV0dG9uc1wiO1xuaW1wb3J0IGlGYWN0b3J5IGZyb20gXCIuL2luZm9ybWF0aW9uRmFjdG9yeVwiO1xuaW1wb3J0IGtpbGxQcm9qZWN0IGZyb20gXCIuL2tpbGxQcm9qZWN0XCI7XG5cblxuY29uc3QgZG9tTWFuID0gKCgpID0+IHtcbiAgICBjb25zdCBidXR0b25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxldCBkb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlyZWN0b3J5JylcbiAgICAgICAgZG9tQnRuLmZvckVhY2goIGJ0biA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9tQnRuLmZvckVhY2ggKCBidG4gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjb25zdCBuYXZUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZ2dsZS1idXR0b24nKVswXVxuICAgICAgICBjb25zdCBuYXZiYXJMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpXG4gICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG5hdmJhckxpbmsuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aXZhdGVNb2RhbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wZW5Nb2RhbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10YXJnZXQnKVxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKVxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuXG4gICAgICAgIG9wZW5Nb2RhbEJ1dHRvbnMuZm9yRWFjaCggYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuLmRhdGFzZXQubW9kYWxUYXJnZXQpXG4gICAgICAgICAgICAgICAgb3Blbk1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWFjdGl2ZScpXG4gICAgICAgICAgICBtb2RhbHMuZm9yZUVhY2goIG1vZGFsID0+IHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKG1vZGFsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICBjbG9zZU1vZGFsQnV0dG9ucy5mb3JFYWNoKCBidG4gPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gYnRuLmNsb3Nlc3QoJy5tb2RhbCcpXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbChtb2RhbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgICAgICBpZiAobW9kYWwgPT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICAgICAgaWYgKG1vZGFsID09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkaXRpb25hbFByb2plY3QoKVxuICAgICAgICB9KVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZGl0aW9uYWxQcm9qZWN0KCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlID0gJydcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgbGV0IGogPTBcbiAgICAgICAgICAgIHdoaWxlIChpIDwgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheVtpXSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaisrXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBpRmFjdG9yeShwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0SW5mb3JtYXRpb24ucHJvamVjdEFycmF5LnB1c2goZWxlbWVudClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0SW5mb3JtYXRpb24ucHJvamVjdEFycmF5KVxuICAgICAgICAgICAgICAgIGNvbnN0IGFkZE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZGl0aW9uYWxQcm9qZWN0cycpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5wdXNoKHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0biA9IG1ha2VCdG4oW1wiaG92ZXI6YmctWyNjY2NjY2NdXCIsIFwicm91bmRlZC1tZFwiLCBcInctZnVsbFwiLCBcInB5LTJcIiwgXCJmbGV4XCIsIFwianVzdGlmeS1iZXR3ZWVuXCIsIFwiaXRlbXMtY2VudGVyXCIsIFwiaC0xMlwiLCBcInB4LTFcIiwgJ2RpcmVjdG9yeSddKVxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IG1ha2VJbWcoW1wiaC1bMS4zcmVtXVwiLCBcInctWzEuM3JlbV1cIiwgXCJmbGV4XCIsIFwianVzdGlmeS1zdGFydFwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm14LTRcIiwgXCJib3gtY29udGVudFwiXSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBtYWtlRGl2KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBtYWtlWChbJ21sLTQnLCd6LTEwJywnZmxleCcsJ2p1c3RpZnktZW5kJywgJ2tpbGxiaWxsJ10pXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChpbWcpXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZChkaXYpXG4gICAgICAgICAgICAgICAgYnRuLmFwcGVuZCh4KVxuICAgICAgICAgICAgICAgIGFkZE9uLmluc2VydEJlZm9yZShidG4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCZWZvcmUnKSlcbiAgICAgICAgICAgICAgICB1cGRhdGVCdXR0b25zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kaXJlY3RvcnknKSlcbiAgICAgICAgICAgICAgICBidXR0b25DaGFuZ2UoKVxuICAgICAgICAgICAgICAgIGtpbGxQcm9qZWN0KClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VCdG4oYXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnRuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlWChhcnJheSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB4LmlubmVySFRNTCA9ICcmdGltZXM7J1xuICAgICAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geFxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbWFrZUltZyhhcnJheSkge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKDIwLDIwKVxuICAgICAgICAgICAgaW1nLnNyYyA9ICcvc3JjL21vZHVsZXMvcHJvamVjdC1pbWFnZS5wbmcnXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoYXJyYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW1nXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlRGl2KHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGl2LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGRpdi5kYXRhc2V0LnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcbiAgICAgICAgICAgIGRpdi5kYXRhc2V0LmlkID0gcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5sZW5ndGggLSAxXG4gICAgICAgICAgICByZXR1cm4gZGl2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBidXR0b25DaGFuZ2UsXG4gICAgICAgIG5hdlRvZ2dsZSxcbiAgICAgICAgYWN0aXZhdGVNb2RhbHMsXG4gICAgICAgIGFkZFByb2plY3QsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuOyIsImltcG9ydCB1cGRhdGVCdXR0b25zIGZyb20gXCIuL3VwZGF0ZUJ1dHRvbnNcIlxuaW1wb3J0IHByb2plY3RJbmZvcm1hdGlvbiBmcm9tIFwiLi9wcm9qZWN0SW5mb3JtYXRpb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBraWxsUHJvamVjdCgpIHtcbiAgICBsZXQga2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5raWxsYmlsbCcpXG4gICAgdXBkYXRlQnV0dG9ucyhraWxsKVxuICAgIGtpbGxCaWxsQ2hhbmdlKClcblxuICAgIGZ1bmN0aW9uIGtpbGxCaWxsQ2hhbmdlKCkge1xuICAgICAgICBsZXQga2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5raWxsYmlsbCcpXG4gICAgICAgIGtpbGwuZm9yRWFjaCggYnRuID0+IHtcbiAgICAgICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldiA9IGJ0bi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gcHJldi5kYXRhc2V0LmlkXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLm5hbWVBcnJheS5zcGxpY2UoaWQsIDEpXG4gICAgICAgICAgICAgICAgcHJvamVjdEluZm9ybWF0aW9uLnByb2plY3RBcnJheS5zcGxpY2UoaWQsIDEpXG4gICAgICAgICAgICAgICAgYnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufSIsImltcG9ydCBkb21NYW4gZnJvbSAnLi9tb2R1bGVzL2RvbU1hbmlwdWxhdGlvbidcbmltcG9ydCBwcm9qZWN0SW5mb3JtYXRpb24gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RJbmZvcm1hdGlvbidcbiBcbmNvbnNvbGUubG9nKHt0ZXN0U3RyaW5nOiAnVGhpcyBpcyB3b3JraW5nLCBhbG9uZyB3aXRoIFRhaWx3aW5kISd9KVxuXG4vLyB0aGlzIGNvbnRyb2xzIHRoZSBidXR0b25zIGNoYW5naW5nIGNvbG9yIHNvIHRoYXQgdGhleSBob2xkIHRoZWlyIGhvdmVyIGVmZmVjdCBmb3Igd2hlbiB0aGV5IGFyZSBjbGlja2VkIFxuZG9tTWFuLmJ1dHRvbkNoYW5nZSgpIFxuLy8gdGhpcyBpbnN1cmVzIHRoYXQgdGhlIG5hdiBiYXIgc2hvd3MgdXAgYW5kIHByb3Blcmx5IHdvcmtzIHdoZW4gY2xpY2tlZFxuZG9tTWFuLm5hdlRvZ2dsZSgpIFxuLy8gdGhpcyBhY3RpdmVzIHRoZSBwb3B1cHMgdGhhdCBjb21lIHVwIHdoZW4geW91IHByZXNzIGFkZCBwcm9qZWN0IGFuZCBhZGQgdGFza1xuZG9tTWFuLmFjdGl2YXRlTW9kYWxzKClcbi8vIHRoaXMgbWFrZXMgaXQgc28gdGhhdCBlYWNoIHRpbWUgeW91IHN1Ym1pdCBhIHByb2plY3QsIGl0IGFwcGVhcnMgb24gdGhlIGRvbSBcbmRvbU1hbi5hZGRQcm9qZWN0KCkiXSwibmFtZXMiOlsicHJvamVjdE5hbWUiLCJ0YXNrcyIsIm5hbWVBcnJheSIsInByb2plY3RBcnJheSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJwcm9qZWN0IiwicHVzaCIsImRhdGFzZXQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUJ1dHRvbnMiLCJidXR0b24iLCJidG4iLCJuZXdCdG4iLCJjbG9uZU5vZGUiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwiYnV0dG9uQ2hhbmdlIiwiZG9tQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwibmF2VG9nZ2xlIiwidG9nZ2xlQnV0dG9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm5hdmJhckxpbmsiLCJnZXRFbGVtZW50QnlJZCIsIm1haW4iLCJ0b2dnbGUiLCJhY3RpdmF0ZU1vZGFscyIsIm9wZW5Nb2RhbEJ1dHRvbnMiLCJjbG9zZU1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZU1vZGFsIiwibW9kYWwiLCJxdWVyeVNlbGVjdG9yIiwibW9kYWxUYXJnZXQiLCJmb3JlRWFjaCIsImNsb3Nlc3QiLCJhZGRQcm9qZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwiaSIsImoiLCJhZGRPbiIsImFycmF5IiwiY3JlYXRlRWxlbWVudCIsImxlbmd0aCIsIm1ha2VCdG4iLCJpbWciLCJJbWFnZSIsInNyYyIsIm1ha2VJbWciLCJkaXYiLCJ0ZXh0Q29udGVudCIsImlkIiwibWFrZURpdiIsIngiLCJpbm5lckhUTUwiLCJtYWtlWCIsImFwcGVuZCIsImluc2VydEJlZm9yZSIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJwYXJlbnRFbGVtZW50IiwiYWRkaXRpb25hbFByb2plY3QiLCJ0ZXN0U3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==