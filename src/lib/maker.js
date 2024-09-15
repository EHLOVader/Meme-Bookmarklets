// src/lib/maker.js

/**
 * Wrap the script in an Immediately Invoked Function Expression (IIFE)
 * @param {string} script - The script to wrap
 * @returns {string} - The wrapped script as a string
 */
function wrapInIIFE(script) {
  return `(function() { ${script} })();`;
}

/**
 * Take pure bookmarklet script and wrap it in an IIFE and prepare it for use as a bookmarklet
 * @param {string} script - The script to convert
 * @returns {string} - The bookmarklet URL as a string
 */
function createBookmarklet(script) {
  const wrappedScript = wrapInIIFE(script);
  return `javascript:${encodeURIComponent(wrappedScript)}`;
}

/**
 * Create an image element with specified properties as a string
 * @param {string} id - The id of the image element
 * @param {string} src - The source URL of the image
 * @param {string} position - The position of the image ('left' or 'right')
 * @returns {string} - The created image element as a string
 */
function createImageElementString(id, src, position) {
  return `
    const img = document.createElement('img');
    img.setAttribute('id', '${id}');
    img.src = '${src}';
    img.alt = 'WTF!';
    img.style.position = 'fixed';
    img.style.bottom = '0';
    img.style.zIndex = '2147483647'; // Maximum z-index value
    img.style.maxHeight = '100%';
    img.style.maxWidth = '40%';
    img.style.${position} = '10%';
    img.onerror = function() {
      alert('Failed to load the image. It might be blocked due to CORS policy.');
      img.remove();
    };
    return img;
  `;
}

/**
 * Toggle the image on the page as a string
 * @param {string} id - The id of the image element
 * @param {string} src - The source URL of the image
 * @param {string} position - The position of the image ('left' or 'right')
 * @returns {string} - The toggle image function as a string
 */
function toggleImageString(id, src, position) {
  return `
    let imgElement = document.getElementById('${id}');
    if (imgElement) {
      imgElement.remove();
    } else {
      ${createImageElementString(id, src, position)}
      document.body.appendChild(imgElement);
    }
  `;
}

// Export the functions
export {createBookmarklet}