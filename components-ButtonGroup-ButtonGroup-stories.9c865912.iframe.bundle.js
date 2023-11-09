"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[212],{"./src/components/ButtonGroup/ButtonGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonGroup_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButtonGroup=styled_components_browser_esm.ZP.div`
  display: inline-flex;

  > :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  > :not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`,ButtonGroup=_ref=>{let{id,children}=_ref;return(0,jsx_runtime.jsx)(StyledButtonGroup,{id,children})};ButtonGroup.displayName="ButtonGroup",ButtonGroup.defaultProps={};try{ButtonGroup.displayName="ButtonGroup",ButtonGroup.__docgenInfo={description:"",displayName:"ButtonGroup",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:ButtonGroup.__docgenInfo,name:"ButtonGroup",path:"src/components/ButtonGroup/ButtonGroup.tsx#ButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const ButtonGroup_stories={title:"Example/ButtonGroup",component:ButtonGroup,parameters:{layout:"centered"},tags:["autodocs"]},Main={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:e=>{console.log(e)},id:"left",children:"Left"}),(0,jsx_runtime.jsx)(Button.z,{onClick:e=>{console.log(e)},id:"middle",children:"Middle"}),(0,jsx_runtime.jsx)(Button.z,{onClick:e=>{console.log(e)},id:"right",children:"Right"})]})}};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <Button onClick={e => {\n        console.log(e);\n      }} id='left'>Left</Button>\n        <Button onClick={e => {\n        console.log(e);\n      }} id='middle'>Middle</Button>\n        <Button onClick={e => {\n        console.log(e);\n      }} id='right'>Right</Button>\n      </>\n  }\n}",...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`  
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
//# sourceMappingURL=components-ButtonGroup-ButtonGroup-stories.9c865912.iframe.bundle.js.map