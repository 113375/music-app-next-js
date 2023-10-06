import Link from 'next/link'
import React from 'react'
import LogButtons from './LogButtons'

const Header = () => {
    return (
        <div className='header rounded-3xl  my-4 px-7 py-4 flex text-xl justify-between'>
            <div>
                <Link href={"/"}>
                    Music-app
                </Link>
            </div>

            <LogButtons />
        </div>
    )
}

export default Header
