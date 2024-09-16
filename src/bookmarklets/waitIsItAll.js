const memeSpec = {
    id: "waitIsItAll",
    elements: [
        {
          element: "div",
            attributes: {
                "id": "waitIsItAll",
                "style": {
                    "position": "fixed",
                    "right": "0",
                    "bottom": "0",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                }
            }
        },
        {
            element: "img",
            attributes: {
                "id": "waitIsItAllImg",
                "src": "https://i.imgur.com/OXK2HVT.png",
                "alt": "It always has been",
                "style": {
                    "position": "fixed",
                    "right": "0",
                    "bottom": "0",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                },
            },
            parent: "waitIsItAll"
        },
        {
            element: "h2",
            attributes: {
                "id": "waitIsItAllText",
                "textContent": "Wait, is it all...",
                "style": {
                    "position": "fixed",
                    "right": "400px",
                    "bottom": "270px",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                    "color": "white",
                    "fontFamily": "Arial",
                    "fontSize": "2em",
                    "padding": "1em",
                    "textShadow": "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }
            },
            parent: "waitIsItAll"
        },
        {
            element: "h2",
            attributes: {
                "id": "waitIsItAllText2",
                "textContent": "Always has been",
                "style": {
                    "position": "fixed",
                    "right": "10px",
                    "bottom": "430px",
                    "zIndex": "1000000",
                    "pointerEvents": "none",
                    "color": "white",
                    "fontFamily": "Arial",
                    "fontSize": "2em",
                    "padding": "1em",
                    "textShadow": "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }
            },
            parent: "waitIsItAll"
        }
    ]
}