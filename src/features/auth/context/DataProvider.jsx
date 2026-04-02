import { use } from "react";
import DataContext from "./DataContext";

const booksPromise = fetch('/data/booksData.json').then(res => res.json());
const DataProvider = ({ children }) => {
    const books = use(booksPromise);
    return (
        <DataContext.Provider value={books}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;