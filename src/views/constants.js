export const APIENDPOINT = "http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com"; // localhost

// Set a cookie without expiration
export function setCookie(name, value) {
    localStorage.setItem(name, value);
}

// Get a cookie
export function getCookie(name) {
    return localStorage.getItem(name);
}