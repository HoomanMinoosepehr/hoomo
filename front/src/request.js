const base_url = 'http://localhost:3030/api/v1/'

export async function get(path){
    const response = await fetch(base_url + path, {credentials: 'include'})
                            .then(data => data.json())
    return response
}

export async function get_pictures(path) {
    const response = await fetch(base_url + path, {credentials: 'included'})
    return response
}

export async function post(path, body, method) {
    const options = {
        method: method || "POST",
        credentials: 'include',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": 'application/json'
        }
    }

    const response = await fetch(base_url + path, options)
                            .then(data => data.json())
    
    return response
}

export async function post_pictures(path, body) {
    const options = {
        method: 'POST',
        credentials: 'include',
        body: body
    }

    const response = await fetch(base_url + path, options)
                            .then(data => data.json())
    
    return response
}