import React, { useContext } from "react";

const initialState = {};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
    return (
        <FilterContext.Provider value="filter context">
            {children}
        </FilterContext.Provider>
    );
};
// make sure use
export const useFilterContext = () => {
    return useContext(FilterContext);
};
