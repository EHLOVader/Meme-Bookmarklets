const settings = {
    "images": [
        {
            "id": "travoltaWTF",
            "src": "https://i.imgur.com/Yc0G92s.gif",
            "position": "right",
            "alt": "WTF!",
            "style": {
                "position": "fixed",
                "right": "10%",
                "bottom": "0",
                "zIndex": "1000000"
            },
            "onerror": "alert('Failed to load the image. It might be blocked due to CORS policy.'); this.remove();"
        }
    ]
};

function createImageElement(settings) {
    const img = document.createElement('img');
    img.setAttribute('id', settings.id);
    img.src = settings.src;
    img.alt = settings.alt;
    Object.assign(img.style, settings.style);
    img.onerror = function() {
        alert('Failed to load the image. It might be blocked due to CORS policy.');
        this.remove();
    };
    return img;
}
function toggleImage(id) {
    const imgElement = document.getElementById(id);
    if (imgElement) {
        imgElement.remove();
    } else {
        const settings = settings.images.find(image => image.id === id);
        if (settings) {
            const img = createImageElement(settings);
            document.body.appendChild(img);
        }
    }
}

// Example usage
toggleImage('travoltaWTF');