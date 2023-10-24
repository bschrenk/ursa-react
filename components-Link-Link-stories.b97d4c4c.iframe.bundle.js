"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[106],{"./src/components/Link/Link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Link_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LinkType=function(LinkType){return LinkType.Regular="a",LinkType.Button="button",LinkType}(LinkType||{});const StyledRegularLink=styled_components_browser_esm.ZP.a`
  color: ${props=>props.theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
`,Link=_ref=>{let{type,href,content}=_ref;return((type,href,content)=>{switch(type){case LinkType.Regular:return(0,jsx_runtime.jsx)(StyledRegularLink,{href,children:content});case LinkType.Button:return(0,jsx_runtime.jsx)(StyledRegularLink,{href,children:(0,jsx_runtime.jsx)(Button.z,{children:content})})}})(type,href,content)};Link.defaultProps={};try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"a"'},{value:'"button"'}]}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}const Link_stories={title:"Example/Link",component:Link,parameters:{layout:"centered"},tags:["autodocs"]},Main={args:{type:LinkType.Regular,href:"/fancy/example",content:"Text that will be shown"}};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:'{\n  args: {\n    type: LinkType.Regular,\n    href: "/fancy/example",\n    content: "Text that will be shown"\n  }\n}',...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`  
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${props=>props.theme.colors.primary};
  border: none;
  border-radius: ${props=>props.theme.borderRadius};
  color: #FFFFFF;
  padding: .7rem 1.5rem;
  cursor: pointer;
  transition: background 1s;

  &:focus-visible {
      outline: 2px solid #101820;
  }

  &:disabled {
      background-color: gray;
      color: #FFFFFF;
      border-color: gray;
  }

  &:hover:enabled {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), ${props=>props.theme.colors.primary};
  }
`,Button=_ref=>{let{id,autoFocus,className,children,disabled,type,onClick,onChange}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{autoFocus,className,id,type,onChange,onClick,disabled,children})};Button.displayName="Button",Button.defaultProps={};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Link-Link-stories.b97d4c4c.iframe.bundle.js.map