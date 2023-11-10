"use strict";(self.webpackChunkursa_react=self.webpackChunkursa_react||[]).push([[668],{"./src/components/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledModal=styled_components_browser_esm.ZP.div`
    overflow: auto;
    display: block;
    background: #FFF;
    padding: 1rem;
    border-radius: ${props=>props.theme.borderRadius};
    box-shadow: 0px 0px 0.03rem 0.12rem ${props=>props.theme.colors.primary};
    margin: 4rem auto;
    max-width: 80%;
`,StyledContainer=styled_components_browser_esm.ZP.div`
    height: 100%;
    left: 0;
    overflow: auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1050;
    background: #80808094;
`,Modal=_ref=>{let{id,modalTitle,children,visible,onClose}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:visible&&(0,jsx_runtime.jsx)(StyledContainer,{children:(0,jsx_runtime.jsxs)(StyledModal,{id,children:[modalTitle&&(0,jsx_runtime.jsx)(Typography.Z,{type:Typography.n.H4,content:modalTitle}),(0,jsx_runtime.jsx)(Button.z,{id:"close",type:"button",onClick:onClose,children:"Close"}),children]})})})};Modal.defaultProps={visible:!0};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},modalTitle:{defaultValue:null,description:"",name:"modalTitle",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"true"},description:"",name:"visible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}const Modal_stories={title:"Example/Modal",component:Modal,parameters:{layout:"centered"},tags:["autodocs"]},Main=()=>{const[isModalVisible,setIsModalVisible]=(0,react.useState)(!1),handleOpenModal=()=>{setIsModalVisible(!isModalVisible)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{onClick:handleOpenModal,children:"Open Modal"}),isModalVisible&&(0,jsx_runtime.jsx)(Modal,{modalTitle:"A Fancy Title",onClose:handleOpenModal,visible:isModalVisible,children:(0,jsx_runtime.jsx)("p",{children:"Modal content goes here"})})]})};Main.parameters={...Main.parameters,docs:{...Main.parameters?.docs,source:{originalSource:'() => {\n  const [isModalVisible, setIsModalVisible] = useState(false);\n  const handleOpenModal = () => {\n    setIsModalVisible(!isModalVisible);\n  };\n  return <>\n            <Button onClick={handleOpenModal}>Open Modal</Button>\n            {isModalVisible && <Modal modalTitle="A Fancy Title" onClose={handleOpenModal} visible={isModalVisible}>\n                    <p>Modal content goes here</p>\n                </Modal>}\n        </>;\n}',...Main.parameters?.docs?.source}}};const __namedExportsOrder=["Main"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`  
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
`,Button=_ref=>{let{id,autoFocus,className,children,disabled,type,onClick,onChange}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledButton,{autoFocus,className,id,type,onChange,onClick,disabled,children})};Button.displayName="Button",Button.defaultProps={};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"FormEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Typography,n:()=>HeadingType});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeadingType=function(HeadingType){return HeadingType.H1="h1",HeadingType.H2="h2",HeadingType.H3="h3",HeadingType.H4="h4",HeadingType.H5="h5",HeadingType.H6="h6",HeadingType.Paragraph="p",HeadingType}(HeadingType||{});const StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h1`  
    font-size: ${props=>props.theme.fonts.size.h1};
`,StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2`  
    font-size: ${props=>props.theme.fonts.size.h2};
`,StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h3`  
    font-size: ${props=>props.theme.fonts.size.h3};
`,StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h4`  
    font-size: ${props=>props.theme.fonts.size.h4};
`,StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h5`  
    font-size: ${props=>props.theme.fonts.size.h5};
`,StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h6`  
    font-size: ${props=>props.theme.fonts.size.h6};
`,StyledP=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p`  
    font-size: ${props=>props.theme.fonts.size.p};
`,Typography=_ref=>{let{type,content}=_ref;return((type,content)=>{switch(type){case HeadingType.H1:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH1,{children:content});case HeadingType.H2:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH2,{children:content});case HeadingType.H3:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH3,{children:content});case HeadingType.H4:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH4,{children:content});case HeadingType.H5:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH5,{children:content});case HeadingType.H6:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledH6,{children:content});case HeadingType.Paragraph:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledP,{children:content})}})(type,content)};Typography.defaultProps={};try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"p"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"src/components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Modal-Modal-stories.0aaca48c.iframe.bundle.js.map