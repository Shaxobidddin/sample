import './Modal.scss'
/* const [open, setOpen]=useState(false)
const handleClick = () =>{
  setOpen(x=>!x)}
  <button onClick={handleClick}>Open modal</button> */

function Modal(isOpen, setIsOpen){
    const modalClickHandler=()=>{setIsOpen(false)}
     return <div onClick={modalClickHandler} className={`modal ${isOpen ? 'modal--open' : ''}`}>
       <div className='modal__content'>Modal content!</div>
     </div>
   }


   export default Modal