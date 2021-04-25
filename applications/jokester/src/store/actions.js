// https://official-joke-api.appspot.com/jokes/ten
// https://official-joke-api.appspot.com/jokes/random

import * as types from './mutation-types';

export const initJokes =(context)=> {
  fetch("https://official-joke-api.appspot.com/jokes/ten", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem("jokes",JSON.stringify(data));
    context.commit(types.INIT_JOKES,data);
  })
  .catch(error => console.log(error))
}

export const addJoke =({ commit })=> {
  fetch("https://official-joke-api.appspot.com/jokes/random", {
    method: "GET"
  })
  .then(response => response.json())
  .then(data => {
    let jokesData = JSON.parse(localStorage.getItem("jokes"));
    if(jokesData && jokesData.length>0) {
      jokesData.push(data);
    } else {
      jokesData = data;
    }
    localStorage.setItem("jokes", JSON.stringify(jokesData));
    commit(types.ADD_JOKE,data);
  })
  .catch(error => console.log(error))
}

export const removeJoke =({ commit },index)=> {
  let jokesData = JSON.parse(localStorage.getItem("jokes"));
  if(jokesData && jokesData.length > 0) {
    jokesData.splice(index,1);
    localStorage.setItem("jokes", JSON.stringify(jokesData));
  }
  commit(types.REMOVE_JOKE, index);
}
