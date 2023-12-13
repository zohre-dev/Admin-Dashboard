"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState();
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    console.log("zohreData", data);
    data?.error && setError(data.error);
  };
  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {error && error}
    </form>
  );
};

export default LoginForm;
