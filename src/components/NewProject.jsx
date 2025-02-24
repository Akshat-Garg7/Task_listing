import Modal from './Modal.jsx'
import Input from './Input.jsx'
import {useRef} from 'react'
export default function NewProject({onSave,onCancel})
{
    const modal=useRef();
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();

    function handleSave()
    {
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const entereddueDate=dueDate.current.value;

        const projectData={
            title:enteredTitle,
            description:enteredDescription,
            dueDate:entereddueDate,
        }
        if(enteredTitle.trim()==='' || enteredDescription.trim()==='' || entereddueDate.trim()==='')
        {
            modal.current.open();
            return;
        }
        onSave(projectData);
    }
    return (
        <> 
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4 '>Invalid Input</h2>
            <p className='text-stone-600 mb-4 '>Oops ... looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4 '>Please Make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 md:'>
            <li><button onClick={onCancel} className='text-tone-600 hover:text-tone-950'>Cancel</button></li>
            <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
            </menu>
            <div>
                <Input ref={title} type='text' label="Title" />
                <Input ref={description} label="Description" textarea/>
                <Input ref={dueDate} type='date' label="Due Date"/>
            </div>
        </div>
        </>
    )
}