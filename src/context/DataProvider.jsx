const { createContext,useState } = require("react");

export const DataContext =  createContext(null)

const DataProvider = ({children}) => {
    const [account, setAccount] = useState({
        email:'',
        username:''

    })
    return(
        <DataContext.Provider value={{
            account,
            setAccount
        }} >
        
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider