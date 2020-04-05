const Hello = (() => {
    const helloText = (name) => {
        return `hello, ${(name)}`
    }

    const renderImage = (url) => {
        const img = new Image()
        img.src = url
        document.body.appendChild(img)
    }

    return { helloText, renderImage, }
}) (); 


export { Hello };
