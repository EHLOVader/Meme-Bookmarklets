const memeSpec = {
    "id": "waitIsItAll",
    "elements": [
        {
            "element": "div",
            "attributes": {
                "id": "waitIsItAll",
                "style": {
                    "position": "fixed",
                    "right": "0",
                    "left": "0",
                    "top": "0",
                    "bottom": "0",
                    "zIndex": "1000000",
                    "pointerEvents": "none"
                }
            }
        },
        {
            "element": "img",
            "attributes": {
                "id": "waitIsItAllImg",
                "src": "https://i.imgur.com/zuy1yDW.png",
                "alt": "It always has been",
                "style": {
                    "position": "fixed",
                    "right": "0",
                    "bottom": "0",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                    "max-width": "100%",
                    "min-width": "460px"
                }
            },
            "parent": "waitIsItAll"
        },
        {
            "element": "h2",
            "attributes": {
                "id": "waitIsItAllText",
                "textContent": "Wait, is it all...",
                "style": {
                    "position": "fixed",
                    "right": "min(400px, 40vw)",
                    "bottom": "min(270px, 30vw)",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                    "color": "white",
                    "fontFamily": "Impact, Arial, sans-serif",
                    "fontSize": "2em",
                    "padding": "1em",
                    "white-space": "nowrap",
                    "-webkit-text-stroke": "2px #000",
                    "-webkit-text-fill-color": "#fff",
                    "letter-spacing": "0.02em",
                    "textShadow": "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }
            },
            "parent": "waitIsItAll"
        },
        {
            "element": "h2",
            "attributes": {
                "id": "waitIsItAllText2",
                "textContent": "Always has been",
                "style": {
                    "position": "fixed",
                    "right": "10px",
                    "bottom": "min(450px, 48vw)",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                    "color": "white",
                    "fontFamily": "Impact, Arial, sans-serif",
                    "fontSize": "2em",
                    "padding": "1em",
                    "white-space": "nowrap",
                    "-webkit-text-stroke": "2px #000",
                    "-webkit-text-fill-color": "#fff",
                    "letter-spacing": "0.02em",
                    "textShadow": "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }
            },
            "parent": "waitIsItAll"
        }
    ]
}