import { useContext } from "react"

import { AccountFormContext } from "@/context/accountFormContext"

export function useAccountForm() {
    const context = useContext(AccountFormContext).accountFormData
    return context
}