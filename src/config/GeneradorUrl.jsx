const GeneradorUrl = (texto) => {
    return decodeURIComponent(texto).toLowerCase()
};

export default GeneradorUrl;