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
    const isRead = storedRead.find(book => book.bookId === id.bookId);
    if (isRead) {
        return false;
    }
    storedRead.push(id);
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
    const isWish = storedWish.find(book => book.bookId === id.bookId);
    if (isWish) {
        return false;
    }
    storedWish.push(id);
    const data = JSON.stringify(storedWish);
    localStorage.setItem('bookVibeWish', data);
    return true;
}

const removeReadDataFromLocalStorage = (book) => {
    const data = JSON.stringify(book);
    localStorage.setItem('bookVibeRead', data);
    return true;
}

const removeWishDataFromLocalStorage = (book) => {
    const data = JSON.stringify(book);
    localStorage.setItem('bookVibeWish', data);
    return true;
}

export {getReadFromLocalStorage, saveReadDataToLocalStorage, saveWishDataToLocalStorage, getWishFromLocalStorage, removeReadDataFromLocalStorage, removeWishDataFromLocalStorage};