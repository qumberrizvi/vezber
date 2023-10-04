export type FetchRequest = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body: string;
    headers: {
        'Content-Type': 'application/json' | 'multipart/form-data';
    }
}
