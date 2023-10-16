export const APIENDPOINT = "http://ec2-18-144-101-122.us-west-1.compute.amazonaws.com";
import { Storage } from '@ionic/storage';

const storage = new Storage();
storage.create();
const data = {};

async function createStorage() {
    storage.forEach((value, key, index) => {
        data[key] = value;
    }) 
    await storage.create();
 
    console.log(data);
}
createStorage();


// Set a cookie without expiration
export function setCookie(name, value) {
    console.log("Set " + name + " to " + value);
    storage.set(name, value);
    data[name] = value;
}

// Get a cookie
export function getCookie(name) {
    console.log("Get " + name);
    return data[name];
}