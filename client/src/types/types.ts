import React from "react";

export interface AuthInputProps {
  type: "text" | "password" | 'email';
  id: string;
  label: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthFormValues {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
