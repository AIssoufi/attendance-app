
const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const handleResponse = async response => {
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  } else {
    return response.json();
  }
};
const handleError = (error) => {
  throw error.message && typeof (error.message) === 'string' ? error.message : `Erreur inconnu`;
}

const get = ({ url, headers = { 'Accept': 'application/json' } }) => fetch(url, {
  headers: headers,
  method: "GET"
}).then(handleResponse)
  .catch(handleError);

const post = ({ url, body = {}, headers = defaultHeaders }) => fetch(url, {
  headers: headers,
  method: "POST",
  body: JSON.stringify(body)
}).then(handleResponse).catch(handleError);

const put = ({ url, body = {}, headers = defaultHeaders }) => fetch(url, {
  headers: headers,
  method: "PUT",
  body: JSON.stringify(body)
}).then(handleResponse)
  .catch(handleError);

const del = ({ url, headers = { 'Accept': 'application/json' } }) => fetch(url, {
  headers: headers,
  method: "DELETE",
}).then(handleResponse)
  .catch(handleError);


export {
  post,
  put,
  get,
  del
}