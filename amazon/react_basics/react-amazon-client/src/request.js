const BASE_URL = "http://localhost:3000/api/v1";
export const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    current() {
        return fetch(`${BASE_URL}/users/current`, { credentials: "include" })
            .then(res => res.json())
    },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};
export const Product = {
    all() {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include"
        }).then(res => res.json());
    },
    one(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    update(id, params) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    delete(id) {
        return fetch(`${BASE_URL}/products/${id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
};
