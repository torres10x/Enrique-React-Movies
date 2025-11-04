import React, { useState } from "react";
import type { UseUserFormReturn } from "./types";
import type { UserFormData } from "../../types/user";
import { validate_email, validate_username } from "../../utils/formValidation/formValidation";
import { useNavigate } from "react-router-dom";


function useUserForm( initialState: Omit<UserFormData,'id'>): UseUserFormReturn{
    const [formData, setFormData]=useState<Omit<UserFormData,'id'>>(initialState);

    const [errors, setErrors] = useState<Record<string,string>> ({});
    const navigate =useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {name,value} =e.target;
       setFormData(prev =>({...prev,[name]:value}))
    }

    const validateForm = () => {
       const newErrors: Record<string,string> ={};
       const nameError = validate_username(formData.username);
       const emailError = validate_email(formData.email); 

       if(nameError) newErrors.username=nameError;
       if(emailError) newErrors.email = emailError;

       return newErrors;
       }
    
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       const validationError = validateForm();
       if (Object.keys(validationError).length>0) {
        setErrors(validationError);
    return;
       }
       setErrors({});
       console.log(formData);
       navigate("/", {replace:true});// que hace esto(lo de replace?
    }

    return {formData, errors,  handleChange, handleSubmit}
}
export default useUserForm