
import { Httpx } from "https://jslib.k6.io/httpx/0.0.6/index.js";
import { verifyResponse } from "../common/utils.js";
import { saveRequestlog } from "../common/log.js";

// Função de login usando API pública do k6 (httpbin)
export function loginPublicApi(username, password) {
    const url = 'https://httpbin.org/post';
    const payload = JSON.stringify({
        username: username,
        password: password
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'k6-load-test',
        }
    };
    let response = new Httpx().post(url, payload, params);

    saveRequestlog(response, username, '', '', '', 'publicApiTest');
    verifyResponse({ response: response, expectedStatus: [200], failOnError: true, printOnError: true });

    return response.json();
}

// Função de teste GET público
export function getPublicApi() {
    const url = 'https://httpbin.org/get';
    const params = {
        headers: {
            'User-Agent': 'k6-load-test',
        }
    };
    let response = new Httpx().get(url, params);
    saveRequestlog(response, '', '', '', '', 'publicApiTestGET');
    verifyResponse({ response: response, expectedStatus: [200], failOnError: true, printOnError: true });
    return response.json();
}


export function putPublicApi(data) {
    const url = 'https://httpbin.org/put';
    const payload = JSON.stringify(data);
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'k6-load-test',
        }
    };
    let response = new Httpx().put(url, payload, params);
    saveRequestlog(response, '', '', '', '', 'publicApiTestPUT');
    verifyResponse({ response: response, expectedStatus: [200], failOnError: true, printOnError: true });
    return response.json();
}

export function deletePublicApi() {
    const url = 'https://httpbin.org/delete';
    const params = {
        headers: {
            'User-Agent': 'k6-load-test',
        }
    };
    let response = new Httpx().delete(url, params);
    saveRequestlog(response, '', '', '', '', 'publicApiTestDELETE');
    verifyResponse({ response: response, expectedStatus: [200], failOnError: true, printOnError: true });
    return response.json();
}


