 interface LoginBody {
    email: string;
    password: string;
}
 interface LoginResponse {
    message: string;
    user: {
      email: string;
      firstName: string;
      lastName: string;
      role: string;
    };
  }
  