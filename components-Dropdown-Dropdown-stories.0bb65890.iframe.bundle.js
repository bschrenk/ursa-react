"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[451],{"./src/components/Dropdown/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dropdown_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Input=__webpack_require__("./src/components/Input/Input.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DropdownContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  display: inline-block;
`,DropdownList=styled_components_browser_esm.ZP.ul`
  position: absolute;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-top: 0.3rem;
  display: ${_ref=>{let{isOpen}=_ref;return isOpen?"block":"none"}};
`,ListItem=styled_components_browser_esm.ZP.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }
`,Dropdown=_ref2=>{let{options,inputTitle,buttonText,inputPlaceholder}=_ref2;const[isOpen,setIsOpen]=(0,react.useState)(!1),[selectedValue,setSelectedValue]=(0,react.useState)("");return(0,jsx_runtime.jsxs)(DropdownContainer,{children:[(0,jsx_runtime.jsx)(Input.I,{placeholder:inputPlaceholder,title:inputTitle,value:selectedValue,onClick:()=>{setIsOpen(!isOpen)},button:buttonText}),(0,jsx_runtime.jsx)(DropdownList,{isOpen,children:options.map((option=>(0,jsx_runtime.jsx)(ListItem,{onClick:()=>{return value=option.value,setSelectedValue(value),void setIsOpen(!1);var value},children:option.label},option.value)))})]})};Dropdown.displayName="Dropdown";try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"",displayName:"Dropdown",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},inputTitle:{defaultValue:null,description:"",name:"inputTitle",required:!0,type:{name:"string"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string"}},inputPlaceholder:{defaultValue:null,description:"",name:"inputPlaceholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}const Dropdown_stories={title:"Example/Dropdown",component:Dropdown,parameters:{layout:"centered"},tags:["autodocs"]},Main={args:{options:[{label:"Eugenia",value:"Eugenia"},{label:"Bryan",value:"Bryan"},{label:"Linda",value:"Linda"},{label:"Nancy",value:"Nancy"},{label:"Lloyd",value:"Lloyd"},{label:"Alice",value:"Alice"},{label:"Julia",value:"Julia"},{label:"Albert",value:"Albert"}],inputTitle:"Name Picker",buttonText:"Clear",inputPlaceholder:"Pick a Name"}};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:"{\n  args: {\n    options: [{\n      label: 'Eugenia',\n      value: 'Eugenia'\n    }, {\n      label: 'Bryan',\n      value: 'Bryan'\n    }, {\n      label: 'Linda',\n      value: 'Linda'\n    }, {\n      label: 'Nancy',\n      value: 'Nancy'\n    }, {\n      label: 'Lloyd',\n      value: 'Lloyd'\n    }, {\n      label: 'Alice',\n      value: 'Alice'\n    }, {\n      label: 'Julia',\n      value: 'Julia'\n    }, {\n      label: 'Albert',\n      value: 'Albert'\n    }],\n    inputTitle: \"Name Picker\",\n    buttonText: 'Clear',\n    inputPlaceholder: 'Pick a Name'\n  }\n}",...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]},"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledInputContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  position: relative;
`,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input`
    display: inline-flex;
    padding: 0.7rem;
    width: 100%;
    border: .12rem solid ${props=>props.theme.fonts.color};
    border-radius: ${props=>props.hasButton?`${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`:props.theme.borderRadius};
    box-sizing: border-box;
    
    &:focus-visible {
        outline: .2rem solid ${props=>props.theme.colors.primary};
    }
    &:disabled {
      background-color: #CECECE;
      color:  ${props=>props.theme.fonts.color};
      cursor: default;
    }
`,StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), ${props=>props.theme.colors.primary};
  position: absolute;
  padding: 0.7rem;
  border: .12rem solid ${props=>props.theme.fonts.color};
  border-left: none;
  cursor: pointer;
  color: #FFFFFF;
  transition: background 1s;
  border-radius: 0 ${props=>props.theme.borderRadius} ${props=>props.theme.borderRadius} 0;

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
`,Input=_ref=>{let{title,alt,autoComplete,autoFocus,disabled,id,name,onChange,onClick,placeholder,readOnly,required,type,value,button}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StyledInputContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledInput,{title,alt,autoComplete,autoFocus,disabled,id,name,onChange,onClick,placeholder,readOnly,required,type,value,hasButton:!!button}),button&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{children:button})]})};Input.displayName="Input",Input.defaultProps={type:"text",disabled:!1};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Dropdown-Dropdown-stories.0bb65890.iframe.bundle.js.map