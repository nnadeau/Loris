!function(e){function t(s){if(a[s])return a[s].exports;var i=a[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),r=function(e){function t(e){a(this,t);var i=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={Data:{},formData:{},uploadResult:null,errorMessage:null,isLoaded:!1,loadedData:0,uploadProgress:-1},i.getValidFileName=i.getValidFileName.bind(i),i.handleSubmit=i.handleSubmit.bind(i),i.isValidFileName=i.isValidFileName.bind(i),i.isValidForm=i.isValidForm.bind(i),i.setFormData=i.setFormData.bind(i),i}return i(t,e),n(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax(this.props.DataURL,{dataType:"json",success:function(t){e.setState({Data:t,isLoaded:!0})},error:function(t,a,s){console.error(t,a,s),e.setState({error:"An error occurred when loading the form!"})}})}},{key:"render",value:function(){if(void 0!==this.state.error)return React.createElement("div",{className:"alert alert-danger text-center"},React.createElement("strong",null,this.state.error));if(!this.state.isLoaded)return React.createElement("button",{className:"btn-info has-spinner"},"Loading",React.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}));var e=React.createElement("span",null,"File name should begin with ",React.createElement("b",null,"[PSCID]_[Visit Label]_[Instrument]"),React.createElement("br",null),"For example, for candidate ",React.createElement("i",null,"ABC123"),", visit ",React.createElement("i",null,"V1")," for",React.createElement("i",null,"Body Mass Index")," the file name should be prefixed by:",React.createElement("b",null,"ABC123_V1_Body_Mass_Index"));return React.createElement("div",null,React.createElement(FormElement,{name:"mediaUpload",fileUpload:!0,onSubmit:this.handleSubmit,ref:"form"},React.createElement("h3",null,"Upload a media file"),React.createElement("br",null),React.createElement(StaticElement,{label:"Note",text:e}),React.createElement(SelectElement,{name:"pscid",label:"PSCID",options:this.state.Data.candidates,onUserInput:this.setFormData,ref:"pscid",hasError:!1,required:!0,value:this.state.formData.pscid}),React.createElement(SelectElement,{name:"visitLabel",label:"Visit Label",options:this.state.Data.visits,onUserInput:this.setFormData,ref:"visitLabel",required:!0,value:this.state.formData.visitLabel}),React.createElement(SelectElement,{name:"forSite",label:"Site",options:this.state.Data.sites,onUserInput:this.setFormData,ref:"forSite",required:!0,value:this.state.formData.forSite}),React.createElement(SelectElement,{name:"instrument",label:"Instrument",options:this.state.Data.instruments,onUserInput:this.setFormData,ref:"instrument",value:this.state.formData.instrument}),React.createElement(DateElement,{name:"dateTaken",label:"Date of Administration",minYear:"2000",maxYear:"2017",onUserInput:this.setFormData,ref:"dateTaken",value:this.state.formData.dateTaken}),React.createElement(TextareaElement,{name:"comments",label:"Comments",onUserInput:this.setFormData,ref:"comments",value:this.state.formData.comments}),React.createElement(FileElement,{name:"file",id:"mediaUploadEl",onUserInput:this.setFormData,ref:"file",label:"File to upload",required:!0,value:this.state.formData.file}),React.createElement(ButtonElement,{label:"Upload File"}),React.createElement("div",{className:"row"},React.createElement("div",{className:"col-sm-9 col-sm-offset-3"},React.createElement(ProgressBar,{value:this.state.uploadProgress})))))}},{key:"getValidFileName",value:function(e,t,a){var s=e+"_"+t;return a&&(s+="_"+a),s}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.formData,a=this.refs,s=this.state.Data.mediaFiles?this.state.Data.mediaFiles:[];if(this.isValidForm(a,t)){var i=t.instrument?t.instrument:null,n=t.file?t.file.name:null,r=this.getValidFileName(t.pscid,t.visitLabel,i);if(!this.isValidFileName(r,n))return void swal("Invalid file name!","File name should begin with: "+r,"error");var l=s.indexOf(t.file.name);if(l>=0){var o=confirm("A file with this name already exists!\nWould you like to override existing file?");if(!o)return}var c=this,u=new FormData;for(var m in t)""!==t[m]&&u.append(m,t[m]);$.ajax({type:"POST",url:c.props.action,data:u,cache:!1,contentType:!1,processData:!1,xhr:function(){var e=new window.XMLHttpRequest;return e.upload.addEventListener("progress",function(e){if(e.lengthComputable){var t=Math.round(e.loaded/e.total*100);this.setState({uploadProgress:t})}}.bind(this),!1),e}.bind(this),success:function(){var e=JSON.parse(JSON.stringify(this.state.Data.mediaFiles));e.push(t.file.name);var a=new CustomEvent("update-datatable");window.dispatchEvent(a),this.setState({mediaFiles:e,formData:{},uploadProgress:-1}),swal("Upload Successful!","","success")}.bind(this),error:function(e){console.error(e);var t=e.responseJSON?e.responseJSON.message:"Upload error!";this.setState({errorMessage:t}),swal(t,"","success")}.bind(this)})}}},{key:"isValidFileName",value:function(e,t){return null!==t&&null!==e&&0===t.indexOf(e)}},{key:"isValidForm",value:function e(t,a){var e=!0,s={pscid:null,visitLabel:null,file:null};return Object.keys(s).map(function(i){a[i]?s[i]=a[i]:t[i]&&(t[i].props.hasError=!0,e=!1)}),this.forceUpdate(),e}},{key:"setFormData",value:function(e,t){var a=this.state.formData.visitLabel,s=this.state.formData.pscid;"pscid"===e&&""!==t&&(this.state.Data.visits=this.state.Data.sessionData[t].visits,this.state.Data.sites=this.state.Data.sessionData[t].sites,a?this.state.Data.instruments=this.state.Data.sessionData[t].instruments[a]:this.state.Data.instruments=this.state.Data.sessionData[t].instruments.all),"visitLabel"===e&&""!==t&&s&&(this.state.Data.instruments=this.state.Data.sessionData[s].instruments[t]);var i=this.state.formData;i[e]=t,this.setState({formData:i})}}]),t}(React.Component);r.propTypes={DataURL:React.PropTypes.string.isRequired,action:React.PropTypes.string.isRequired};var l=React.createFactory(r);window.MediaUploadForm=r,window.RMediaUploadForm=l,t.default=r}]);