const meme =
{
    id: 'soyjak',
    elements: [
        {
            element: 'div',
            attributes: {
                id: 'soyjak',
                style: {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '1000000',
                    pointerEvents: 'none'
                }
            },
        },
        {
            element: 'img',
            attributes: {
                src: 'https://i.imgur.com/IKKabUR.png',
                alt: 'WTF!',
                style: {
                    position: 'fixed',
                    left: 0,
                    bottom: '0',
                    zIndex: '1000000',
                    maxHeight: '100%',
                    maxWidth: '40%',
                    pointerEvents: 'none'
                },
                onerror: function() {
                    alert('Failed to load the image. It might be blocked due to CORS policy.');
                    this.remove();
                }
            },
            parent: 'soyjak'
        },
        {
            element: 'img',
            attributes: {
                src: 'https://i.imgur.com/Njv3g2b.png',
                alt: 'WTF!',
                style: {
                    position: 'fixed',
                    right: '0',
                    bottom: '0',
                    zIndex: '1000000',
                    maxHeight: '100%',
                    maxWidth: '40%',
                    pointerEvents: 'none'
                },
                onerror: function() {
                    alert('Failed to load the image. It might be blocked due to CORS policy.');
                    this.remove();
                }
            },
            parent: 'soyjak'
        }
    ]
};

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
        if (element.parent) {
            const parent = document.getElementById(element.parent);
            parent.appendChild(el);
        } else {
            document.body.appendChild(el);
        }
    });
}


    let soyjak = document.getElementById('soyjak');
    if (soyjak) {
        soyjak.remove();
    } else {
        createMeme(meme);
    }
