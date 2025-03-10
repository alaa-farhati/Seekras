import { LoginBody, LoginResponse } from "../types/user";

export const baseUrl:string="http://192.168.122.1:3000"

export const login = async (body: LoginBody): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: LoginResponse = await response.json();      
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw new Error(error instanceof Error ? error.message : "Login failed");
    }
  };