import React, { createContext, ReactNode, useState } from "react";
import axios from "axios";

export type AccountProps = {
  username?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  language?: string;
  streetAddress?: string;
  postalCode?: string;
  streetNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  neighborhood?: string;
  phoneNumber?: string;
};

type AccountFormContextDataProps = {
  accountFormData: AccountProps;
  updateFormData: (value: AccountProps) => void;
  submitFormData: () => Promise<void>;
};

type AccountFormContextProviderProps = {
  children: ReactNode;
};

const AccountFormContext = createContext<AccountFormContextDataProps>(
  {} as AccountFormContextDataProps
);

function AccountProvider({ children }: AccountFormContextProviderProps) {
  const [accountFormData, setAccountFormData] = useState<AccountProps>(
    {} as AccountProps
  );

  function updateFormData(data: AccountProps) {
    setAccountFormData((prevState) => ({ ...prevState, ...data }));
  }

  async function submitFormData() {
    try {
      console.log("Enviando dados ao backend:", accountFormData);
      const response = await axios.post(
        "http://localhost:3000/usuarios",
        accountFormData
      );
      console.log("Dados enviados com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  }

  return (
    <AccountFormContext.Provider
      value={{ accountFormData, updateFormData, submitFormData }}
    >
      {children}
    </AccountFormContext.Provider>
  );
}

export { AccountProvider, AccountFormContext };