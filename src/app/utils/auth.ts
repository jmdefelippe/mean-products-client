function getToken(): string {
    return localStorage.getItem("ACCESS_TOKEN") ?? '';
}

function saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
}