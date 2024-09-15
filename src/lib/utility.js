
function createMeme(meme) {
    const elements = meme.elements;
    elements.forEach(element => {
        const el = document.createElement(element.element);
        const attributes = element.attributes;
        Object.keys(attributes).forEach(key => {
            if (key === 'style') {
                Object.assign(el.style, attributes[key]);
            } else {
                el[key] = attributes[key];
            }
        });
        if(element.element === 'img') {
            el.onerror = function() {
                alert('Failed to load the image. It might be blocked due to CORS policy.');
                el.remove();
            };
        }
        if (element.parent) {
            const parent = document.getElementById(element.parent);
            parent.appendChild(el);
        } else {
            document.body.appendChild(el);
        }
    });
}


let meme = document.getElementById(memeSpec.id);
if (meme) {
    meme.remove();
} else {
    createMeme(memeSpec);
}
