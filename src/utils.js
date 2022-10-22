function getObjFromStorage(name) {
    return (
        JSON.parse(window.localStorage.getItem(name)) ||
        {}
    );
}

function setObjToStorage(name, obj) {
    window.localStorage.setItem(name, JSON.stringify(obj));
}

function updateObjInStroge(name, newObj) {
    let oldObj = getObjFromStorage(name);
    setObjToStorage(name, { ...oldObj, ...newObj });
}

export default {
    getObjFromStorage,
    setObjToStorage,
    updateObjInStroge,
}