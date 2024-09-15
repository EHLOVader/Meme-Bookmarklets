import React, { useState, useEffect } from 'react';
import { createBookmarklet } from '../lib/maker.js';

const Bookmarklet = ({ src }) => {
    const [href, setHref] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        const loadBookmarklet = async () => {
            const module = await import('../bookmarklets/' + src + '.js');
            const { source, title } = module;
            setHref(createBookmarklet(source()));
            setTitle(title());
        };

        loadBookmarklet();
    }, [src]);

    return (
        <a href={href} key={src}>
            {title}
        </a>
    );
};

export default Bookmarklet;