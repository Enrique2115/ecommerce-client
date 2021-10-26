import { TOKEN } from "../utils/constants";

//funcion que guardara el token en el localStorage
export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

//funcion que retornara el token almacenado en el localStorage
export function getToken() {
  return localStorage.getItem(TOKEN);
}
