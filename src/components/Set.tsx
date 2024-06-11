import React from 'react';
import { useSetStore } from '../store/setsStore';

interface SetProps {
    set: number[];
    index: number;
}

const Set: React.FC<SetProps> = ({ set, index }) => {
    const { deleteSet } = useSetStore();

    return (
        <>
            <h2>Conjunto {index + 1}:</h2>
            <div className='relative bg-blackCustom-400 py-2 my-1 px-2 shadow-sm shadow-greenCustom'>
                <p> [{set.join(', ')}]</p>
                <button onClick={() => deleteSet(index)} className='hover:scale-105 hover:text-aquamarine duration-300 absolute bottom-0 right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default Set;
