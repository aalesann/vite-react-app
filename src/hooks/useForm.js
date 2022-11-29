import { useState } from "react"

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    const handleFormReset = () => setFormState(initialState);

    return { formState, handleInputChange, handleFormReset }

}