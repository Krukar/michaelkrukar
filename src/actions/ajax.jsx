'use strict';
/* ============
ajax.jsx
Ajax calls are done through here
============ */

// Third Party Libraries
import 'whatwg-fetch';

/* ============
The Ajax call to our API
Requires a url
============ */
export function get(url){
  return fetch(url).then(response => {
    if(!response.ok){
      throw response.statusText;
    }

    return response.json();
  }).then(response => response)
  .catch(error => {
    throw new Error(error);
  });
}
