import React, { useState, forwardRef, useRef } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({headName}, ref) => {
 const [name, setName] = useState("");
 const [securedChecked, setSecuredChecked] = useState(false);
 const [revProxy, setRevProxy] = useState(false);

 const [proxyPut, setProxyPut] = useState("");
 const [proxyPost, setProxyPost] = useState("");
 const [proxyDlt, setProxyDlt] = useState("");


 const [validations, setValidations] = useState("")
 const [transformationIn, setTransformationIn] = useState("")
 const [transformationOut, setTransformationOut] = useState("")

 const submit = (e) =>{
     e.preventDefault();
     console.log(name, securedChecked, revProxy)
 }

//  let close = useRef(null);
//  const closeModal = () =>{
//      close.current.style.display = "none"
//  }
  return(
      <>
          <div className='ModalMain' ref = {ref}>
          
          <form>
              <div className='headName'>
              <input type="text"
              name = "headname"
              value = {headName}
              />
              </div>


              <div className='checkBoxes'>

              <div className='checkbox'>
              
              <input type = "checkbox"
              name = "secured"
              value = "Secured"
              id = "secured"
              checked = {securedChecked}
              onChange={() =>setSecuredChecked(!securedChecked)}
              /> 
              <label for = "secured">Secured</label>
              </div>

              <div className='checkbox'>
             
              <input type = "checkbox"
              name = "revProxy"
              value = "Reverse Proxy"
              id= "revProxy"
              checked = {revProxy}
              onChange={() =>setRevProxy(!revProxy)}
              />
               <label for = "revProxy">Reverse Proxy</label>
              </div>


              </div>
              <div className='proxiesNurls'>
              { !revProxy ? null :
              <div className='proxies' id = "proxies">
              <label for = "proxies" id = "proxiesLabel">Proxies</label>
              <div className='proxyField'>
              <label htmlFor = "ProxyPut">Put</label>
                  <input
                  type = "text"
                  name = "ProxyPut"
                  id = "ProxyPut"
                  value = {proxyPut}
                  placeholder='Put'
                  onChange={(e) =>setProxyPut(e.target.value)}
                  />
                   </div>
                   <div className='proxyField'>
                   <label htmlFor='ProxyPost'>Post</label>
                  <input
                  type = "text"
                  name = "ProxyPost"
                  id = "ProxyPost"
                  value = {proxyPost}
                  placeholder='Post'
                  onChange={(e) => setProxyPost(e.target.value)}
                  />
                  </div>
                  <div className='proxyField'>
                  <label htmlFor='Proxydlt'>Delete</label>
                   <input
                  type = "text"
                  name = "Proxydlt"
                  id = "Proxydlt"
                  value = {proxyDlt}
                  placeholder='Delete'
                  onChange={(e) => setProxyDlt(e.target.value)}
                  />
                  </div>
                 
              </div>
              }
              <div className='urls' id = "urls">
              
              <div className='urlsfield'>
              <label htmlFor = "validations">Validations</label>
              <input
                  type = "text"
                  name = "validations"
                  id = "validations"
                  value = {validations}
                  placeholder='Validations'
                  onChange={(e) =>setValidations(e.target.value)}
                  />
                  </div>
                  <div className='urlsfield'>
                  <label htmlFor = "transformationIn">Transformation In</label>
                   <input
                  type = "text"
                  name = "transformationIn"
                  id ="transformationIn"
                  value = {transformationIn}
                  placeholder = "Transformation In"
                  onChange={(e) => setTransformationIn(e.target.value)}
                  />
                  </div>
                  <div className='urlsfield'>
                  <label htmlFor='transformationOut'>Transformation Out</label>
                   <input
                  type = "text"
                  name = "transformationOut"
                  id = "transformationOut"
                  value = {transformationOut}
                  placeholder='Transformation Out'
                  onChange={(e) => setTransformationOut(e.target.value)}
                  />
                  </div>
              </div>
              </div>
              <button onClick={submit}>Submit</button>
              </form>
          </div>
          
      </>
  );
};

export default forwardRef(Modal);
