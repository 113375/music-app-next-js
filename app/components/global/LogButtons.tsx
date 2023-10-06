import Link from 'next/link'
import React from 'react'

const LogButtons = () => {
    return (
        <div className='header-buttons flex justify-between w-auto'>
            <div className='mx-8'>
                <Link href={"/login"}>Войти</Link>
            </div>
            <div>
               <div>Гость</div>
            </div>
        </div>
    )
}

export default LogButtons
