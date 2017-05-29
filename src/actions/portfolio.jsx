'use strict';
/* ============
portfolio.jsx
Actions dealing with the portfolio go here
============ */
// React
import React, { Component } from 'react';

// Actions
import * as ajax from 'actions/ajax.jsx';

// Components
import Item from 'components/Item.jsx';

/* ============
Get the portfolio
============ */
export function get(){
  return ajax.get('/portfolio.json').then(function(response){
    if(Object.keys(response).length === 0 && response.constructor === Object){
      throw new Error('Error with the JSON file');
    }

    return response;
  });
}

/* ============
Generate markup for entire grid
============ */
export function generate(data){
  if(!data){
    return null;
  }

  let grid = [];
  let array = convert(data);

  for (let i = 0; i < array.length; i+=10){
    let chunk = process(array.slice(i, i+10));
    grid.push(chunk);
  }

  return grid;
}

/* ============
Convert a json object of objects in to an array sorted by their order: VALUE
============ */
export function convert(data){
  return Object.values(data).sort((a,b)=>{
    return a.order - b.order;
  });
}

/* ============
Process 10 items at a time
============ */
export function process(chunk){
  return (
    <div  className="chunk" key={chunk[0].title}>
      <div className="container">
        <Item data={chunk[0]}></Item>
        <Item data={chunk[1]}></Item>
      </div>
      <div className="container">
        <div className="container column">
          <div className="container">
            <div className="container column">
              <Item data={chunk[5]}></Item>
              <Item data={chunk[6]}></Item>
            </div>
            <Item data={chunk[3]}></Item>
          </div>
          <div className="container">
            <Item data={chunk[4]}></Item>
          </div>
        </div>
        <div className="container">
          <Item data={chunk[2]}></Item>
        </div>
      </div>
      <div className="container">
        <Item data={chunk[7]}></Item>
        <Item data={chunk[8]}></Item>
        <Item data={chunk[9]}></Item>
      </div>
    </div>
  )
}
