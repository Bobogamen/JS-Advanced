import { clearUserData, getUserData } from "../utils.js";


const host = 'http://localhost:3030';

async function request(url, method, data) {
      const options = {
            method,
            headers: {}
      }

      if(data != undefined) {
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
      }

      const userData = getUserData();

      if (userData) {
            options.headers['X-Authorization'] = userData.accessToken;
      }

      try {
            const response = await fetch(host + url, options);

            if (response.ok == false) {
                  if (response.status == 403) {
                        clearUserData();
                  }

                  const error = await response.json();
                  throw new Error(error.message);
            }

            if (response.ok == 204) {
                  return response;
            } else {
                  return response.json();
            }
      } catch (error) {
            alert(error.message);
            throw error;
      }
}

export async function GET(url) {
      return request(url, 'GET')
}

export async function POST(url, data) {
      return request(url, 'POST', data)
}

export async function PUT(url, data) {
      return request(url, 'PUT', data)
}

export async function DEL(url) {
      return request(url, 'DELETE')
}