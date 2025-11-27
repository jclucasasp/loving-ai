export function getAuthToken() {
        return localStorage.getItem('accessToken');
}

export function setAuthToken(accessToken: string) {
    if (accessToken) localStorage.setItem('accessToken', accessToken);
    else localStorage.removeItem('accessToken');
}