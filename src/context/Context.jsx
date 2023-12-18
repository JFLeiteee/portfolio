import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleModal() {
        setIsModalOpen(!isModalOpen)
    }

    return(
        <Context.Provider 
            value={{
                isModalOpen,
                handleModal
            }}
        >
            {children}
        </Context.Provider>
    )
}