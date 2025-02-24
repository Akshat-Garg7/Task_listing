import { useRef,useImperativeHandle } from "react"
import {createPortal} from 'react-dom'
import Button from './Button'
export default function Modal({children,ref,buttonCaption})
{
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{
            open()
            {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} children="backdrop:bg-stone-900/90 shawdow-md  p-4 rounded-md">
            {children}
            <form className="mt-4 text-right" method="dialog">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}