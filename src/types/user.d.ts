export interface LoginBody {
    email: string;
    password: string;
}
export interface LoginResponse {
    message: string;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      role: string;
    };
  }
  