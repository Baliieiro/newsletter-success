import { createContext, useState } from "react";

export const NewsletterContext = createContext();

export function NewsletterContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const validateEmail = (email) => {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
      throw new Error("Valid email required");
      setEmail(email);
    }
  };

  const newsletter = { email, setEmail, errors, setErrors, validateEmail };
  return (
    <NewsletterContext.Provider value={newsletter}>
      {children}
    </NewsletterContext.Provider>
  );
}
