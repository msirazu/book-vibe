const getReadFromLocalStorage = () => {
    let cart = [];
    const storedReadData = localStorage.getItem('bookVibeRead');
    if (storedReadData) {
        return cart = JSON.parse(storedReadData);
    }
    return cart;
}

const saveReadDataToLocalStorage = (id) => {
    const storedRead = getReadFromLocalStorage();
    const bookId = Number(id);
    if (storedRead.includes(bookId)) {
        return false;
    }
    storedRead.push(bookId);
    const data = JSON.stringify(storedRead);
    localStorage.setItem('bookVibeRead', data);
    return true;
}

const getWishFromLocalStorage = () => {
    let cart = [];
    const storedReadData = localStorage.getItem('bookVibeWish');
    if (storedReadData) {
        return cart = JSON.parse(storedReadData);
    }
    return cart;
}

const saveWishDataToLocalStorage = (id) => {
    const storedWish = getWishFromLocalStorage();
    const bookId = Number(id);
    if (storedWish.includes(bookId)) {
        return false;
    }
    storedWish.push(bookId);
    const data = JSON.stringify(storedWish);
    localStorage.setItem('bookVibeWish', data);
    return true;
}

const removeReadDataFromLocalStorage = (id) => {
    const storedRead = getReadFromLocalStorage();
    const filterRead = storedRead.filter(book => book !== id);
    const data = JSON.stringify(filterRead);
    localStorage.setItem('bookVibeRead', data);
    return true;
}

const removeWishDataFromLocalStorage = (id) => {
    const storedWish = getWishFromLocalStorage();
    const filterWish = storedWish.filter(book => book !== id);
    const data = JSON.stringify(filterWish);
    localStorage.setItem('bookVibeWish', data);
    return true;
}

export {getReadFromLocalStorage, saveReadDataToLocalStorage, saveWishDataToLocalStorage, getWishFromLocalStorage, removeReadDataFromLocalStorage, removeWishDataFromLocalStorage};