/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, ReactNode, useState } from "react";

export type AccountProps = {
    username?: string,
    email?: string,
    confirmEmail?: string,
    password?: string,
    firstName?: string,
    lastName?: string,
    dateOfBirth?: string,
    gender?: string,
    language?: string,
    occupation?: string,
    streetAddress?: string,
    postalCode?: string,
    streetNumber?: string,
    country?: string,
    state?: string,
    city?: string,
    neighborhood?: string,
    phoneNumber?: string,
}

type AccountFormContextDataProps = {
    accountFormData: AccountProps;
    updateFormData: (value: AccountProps) => void;
}

type AccountFormContextProviderProps = {
    children: ReactNode;
}

const AccountFormContext = createContext<AccountFormContextDataProps>({} as AccountFormContextDataProps);

function AccountProvider({ children }: AccountFormContextProviderProps) {
    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps);

    function updateFormData(data: AccountProps) {
        setAccountFormData((prevState) => ({...prevState, ...data}))
    }

    return (
        <AccountFormContext.Provider value={{ accountFormData, updateFormData }}>
            {children}
        </AccountFormContext.Provider>
    );
}

export { AccountProvider, AccountFormContext };