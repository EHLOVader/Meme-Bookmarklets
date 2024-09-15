const settings = {
  "images": [
    {
      "id": "soyjakLeft",
      "src": "https://i.imgur.com/IKKabUR.png",
      "position": "left",
      "alt": "WTF!",
      "style": {
        "position": "fixed",
        "left": "0",
        "bottom": "0",
        "zIndex": "1000000",
        "maxHeight": "100%",
        "maxWidth": "40%"
      }
    },
    {
      "id": "soyjakRight",
      "src": "https://i.imgur.com/Njv3g2b.png",
      "position": "right",
      "alt": "WTF!",
      "style": {
        "position": "fixed",
        "right": "0",
        "bottom": "0",
        "zIndex": "1000000",
        "maxHeight": "100%",
        "maxWidth": "40%"
      }
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
toggleImage('soyjakLeft');
toggleImage('soyjakRight');