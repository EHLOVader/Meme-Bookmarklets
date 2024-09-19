import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { minify } from 'terser'
import {createBookmarklet} from "@/lib/maker.js";

export const BookmarkletButton = ({ name, src }) => {
    const [bookmarkletCode, setBookmarkletCode] = useState('')

    useEffect(() => {
        const loadBookmarklet = async () => {
            try {
                const minified = await minify(src)
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
            // copy to clipboard
            navigator.clipboard.writeText(bookmarkletCode);
            alert('Bookmarklet is loaded. Drag the button to your bookmarks bar to use it. Or a copy of the bookmarklet code is in your clipboard to save on mobile')
        } else {
            alert('Bookmarklet is not loaded yet. Please try again in a moment.')
        }
    }


    return (
        <a
            onClick={handleClick}
            href={bookmarkletCode}
            className="bg-blue-500 text-white m-4 inline-block px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-move"
        >
            {name}
        </a>
    )
}