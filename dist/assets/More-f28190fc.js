import{u as c,j as e,a,N as r,l as t}from"./index-eeda9e21.js";function d(){const i=c(),l=[{name:"Apply Default Routines",icon:a.calender,callback:()=>{i("/applyRoutine")},rightArrow:!0},{name:"Reset everything",icon:a.shield,callback:()=>{window.confirm("Are you sure you want to reset everything?")&&(t.clear(),i("/"))},rightArrow:!0}];return e.jsxs("div",{children:[e.jsxs("header",{className:"px-5 py-3 fixed top-0 bg-main max-h-[120px] overflow-hidden w-full z-20",children:[e.jsxs("div",{className:"heading flex flex-row justify-between items-center gap-2 pb-1",children:[e.jsx("p",{className:"text-xl font-bold ",children:"More options"}),e.jsxs("div",{className:"notification tap",onClick:()=>i("/notifications"),children:[e.jsx("div",{className:"dot absolute h-2 w-2 bg-accent mt-2 ml-7 rounded-full"}),e.jsx("img",{src:a.notification,className:"w-10 p-3 rounded-md opacity-80"})]})]}),e.jsx("input",{type:"search",placeholder:"Search more options & settings",className:"search-full"})]}),e.jsx("section",{className:"p-[1.2rem] pt-[125px] pb-[100px]",children:e.jsx("div",{className:"settings w-full flex flex-col gap-3",children:l.map((s,n)=>e.jsxs("div",{onClick:s.callback,className:"setting flex justify-between items-center p-5 py-3 pr-4 rounded-xl tap99",children:[e.jsxs("div",{className:"nameIconContainer flex gap-4",children:[e.jsx("div",{className:"left",children:e.jsx("img",{src:s.icon,className:"w-5 opacity-70"})}),e.jsx("div",{className:"right",children:e.jsx("p",{className:"font-normal",children:s.name})})]}),s.rightArrow&&e.jsx("div",{className:"arrowContainer opacity-70",children:e.jsx("img",{src:a.right_arrow_next,className:"w-5 opacity-70"})})]},n))})}),e.jsx(r,{active:3})]})}export{d as default};
