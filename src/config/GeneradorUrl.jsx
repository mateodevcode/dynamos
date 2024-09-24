const GeneradorUrl = (texto) => {
    return decodeURIComponent(texto).toLowerCase().replace(/\s/g, '-');
};

export default GeneradorUrl;