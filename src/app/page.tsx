'use client'
import Presentation from '@/components/presentation'
import Search from '@/components/Search'
import { useState } from 'react'

export default function Home() {
    const [selectionData, setSelectionData] = useState()
    return (
        <div className='flex justify-center items-center w-screen flex-col'>
            <Search setValue={setSelectionData} />
            { selectionData && <Presentation selectionData={selectionData} />}
        </div>
    )
}
