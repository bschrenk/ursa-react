"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[529],{"./src/components/Chip/Chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Chip_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledChip=styled_components_browser_esm.ZP.span`  
    border: .1rem solid ${props=>props.theme.colors.primary};
    background: ${props=>props.disabled?"#CECECE":"#FFFFFF"};
    display: flex;
    padding: .7rem 1.5rem;
    margin: .5rem;
    border-radius: 1.5rem;
    cursor: pointer;
    user-select: none;

    &:focus {
        outline: none;
    }
`,Chip=_ref=>{let{label,disabled,id,onClick}=_ref;return(0,jsx_runtime.jsx)(StyledChip,{onClick:event=>{!disabled&&onClick&&onClick(event)},"aria-disabled":disabled,id,disabled,children:label})};Chip.displayName="Chip",Chip.defaultProps={disabled:!1};try{Chip.displayName="Chip",Chip.__docgenInfo={description:"",displayName:"Chip",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}const Chip_stories={title:"Example/Chip",component:Chip,parameters:{layout:"centered"},tags:["autodocs"]},Main={args:{label:"Basic Chip",disabled:!1}};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Basic Chip',\n    disabled: false\n  }\n}",...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]}}]);
//# sourceMappingURL=components-Chip-Chip-stories.7098ae20.iframe.bundle.js.map