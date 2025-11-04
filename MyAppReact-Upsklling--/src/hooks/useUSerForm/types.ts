import type { UserFormData } from "../../types/user";

export interface UseUserFormReturn{
    formData: Omit<UserFormData,'id'>;
    errors: Record<string, string>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

}
