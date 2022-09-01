function getToken(): string | null {
    return localStorage.getItem("ACCESS_TOKEN") ?? null;
}

function saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
}

function removeToken() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
}

function isLogged() : boolean {
  return getToken() ? true : false;
}

export {
    getToken,
    saveToken,
    removeToken,
    isLogged
}
