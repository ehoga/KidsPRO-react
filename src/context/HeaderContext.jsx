import React, { createContext, useState} from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [isNavListVis, setIsNavListVis] = useState(true);
    const [isCarrinhoComprasVis, setIsCarrinhoComprasVis] = useState(false);

    return (
        <HeaderContext.Provider value={{
            isNavListVis,
            setIsNavListVis,
            isCarrinhoComprasVis,
            setIsCarrinhoComprasVis
        }}>
            {children}
        </HeaderContext.Provider>
    );
};