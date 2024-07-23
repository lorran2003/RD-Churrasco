import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export function LoadingImage() {
    return (
        <div className='w-full h-screen m-auto bg-zinc-800 animate-pulse flex justify-center items-center'>

            <div className='bg-zinc-100 rounded-md flex items-center p-3'>
                <FontAwesomeIcon icon={faSpinner} className='animate-spin text-zinc-800 size-10' />
            </div>

        </div>
    )
}