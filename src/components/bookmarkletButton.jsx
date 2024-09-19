import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { minify } from 'terser'
import {createBookmarklet} from "@/lib/maker.js";

export const BookmarkletButton = ({ name, src }) => {
    const [bookmarkletCode, setBookmarkletCode] = useState('')

    useEffect(() => {
        const loadBookmarklet = async () => {
            try {
                const utilityResponse = await fetch('/src/lib/utility.js')
                const utilityContent = await utilityResponse.text()
                const combinedContent = `${src}\n${utilityContent}`
                const minified = await minify(combinedContent)
                setBookmarkletCode(createBookmarklet(minified.code))
            } catch (error) {
                console.error('Error loading bookmarklet:', error)
            }
        }

        loadBookmarklet()
    }, [src])

    const handleClick = (e) => {
        e.preventDefault()
        if (bookmarkletCode) {
            alert('Bookmarklet is loaded. Drag the button to your bookmarks bar to use it.')
        } else {
            alert('Bookmarklet is not loaded yet. Please try again in a moment.')
        }
    }


    return (
        <a
            onClick={handleClick}
            draggable
            href={bookmarkletCode}
            className="bg-blue-500 text-white m-4 inline-block px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-move"
        >
            {name}
        </a>
    )
}