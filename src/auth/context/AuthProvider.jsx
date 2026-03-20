import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const user = {
        name: 'a',
        pass: 1234
    }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;