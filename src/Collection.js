import React, {useState, useEffect, useRef} from 'react';
import CloseIcon from '@material-ui/icons/Close';


import Modal from './Modal'

const Collection = () => {
  let [heads, setHeads] = useState([]);
  const [headName, setHeadName] = useState("");

  let close = useRef(null);
  let modalRef = useRef(null);

  const showModal = (x) =>{
    setHeadName(x)
    modalRef.current.style.display = "flex";
    close.current.style.display = "flex"
  }

  const closeModal = () =>{
    modalRef.current.style.display = "none";
    close.current.style.display = "none"
  }

  let getData = async () =>{
    let res = await fetch('http://localhost:4000');
    let data =  await res.json();
    setHeads(data);
    console.log(data);
  }

  useEffect(() =>{
    getData();
  })

 
  getData();
  return(
      <>
      <div className='collectionMain'>
      <div className='CollectionHeads'>
    
        {
          heads.map((head) =>{ 
            return(
              <>
               <div className='head' onClick={() => showModal(head)}>
                 <strong>{head}</strong>
               </div>
              
              </>
            )
          })
          }
          
          <div className='modal' ref= {close}>
          <span className='closeBtn' onClick={closeModal}>
            <CloseIcon/>
          </span>
          <Modal headName={headName} ref={modalRef}/>
          </div>
      </div>
        </div>

      </>
  );
};

export default Collection;
