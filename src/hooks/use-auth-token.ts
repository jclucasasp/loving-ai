export function getAuthToken() {
        return localStorage.getItem('ACCESS_TOKEN');
}

export function setAuthToken(accessToken: string) {
    if (accessToken) localStorage.setItem('ACCESS_TOKEN', accessToken);
    else localStorage.removeItem('ACCESS_TOKEN');
}