'use strict';
/* ============
utilities.jsx
Site wide actions
============ */
/* ============
Debounce
============ */
export function debounce(fn, wait){
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), (wait || 1));
  }
}
