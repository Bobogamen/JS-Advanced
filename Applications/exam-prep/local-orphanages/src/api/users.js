import { clearUserData, setUserData } from "../utils.js";
import { GET, POST } from "./api.js";

export async function login(email, password) {
      const result = await POST('/users/login', {email, password});

      const userData = {
            id: result._id,
            email: result.email,
            password: result.password,
            accessToken: result.accessToken
      };

      setUserData(userData);

      return result;
}

export async function register(email, password) {
      const result = await POST('/users/register', {email, password});

      const userData = {
            id: result._id,
            email: result.email,
            password: result.password,
            accessToken: result.accessToken
      }

      setUserData(userData);

      return result;
}

export async function logout() {
      GET('/users/logout');
      clearUserData();
}