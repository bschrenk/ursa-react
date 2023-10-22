"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components_browser_esm.ZP.button`  
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
`,Button=_ref=>{let{id,autoFocus,className,children,disabled,type,onClick,onChange}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{autoFocus,className,id,type,onChange,onClick,disabled,children})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"FormEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Example/Button",component:Button,parameters:{layout:"centered"},tags:["autodocs"]},Main={args:{id:"sasdf",children:"Button Text"}};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:"{\n  args: {\n    id: 'sasdf',\n    children: 'Button Text'\n  }\n}",...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]}}]);
//# sourceMappingURL=components-Button-Button-stories.06f838b7.iframe.bundle.js.map