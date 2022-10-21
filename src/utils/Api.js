import { options } from './constants';



export default class Api {

  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  #onResponse(res){
    if (res.ok) {
      return res.json();
    } return Promise.reject(`Ошибка: ${res.status}`);
  }

  getAllInfo() {
    return Promise.all([this.fetchUserInfo(), this.getInitialCards()])
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  removeCard(cardID) {
    return fetch (`${this._url}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  addNewCard(data) {
    return fetch (`${this._url}/cards`, {
      method: 'POST' ,
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  fetchUserInfo() {
    return fetch (`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  editUserInfo(data) {
    return fetch (`${this._url}/users/me`, {
      method: 'PATCH' ,
      headers: this._headers,

      body: JSON.stringify({
        name: data.name,
        about: data.about,
        avatar: data.avatar
      })
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  manageLike(cardID, isLiked) {
    return fetch(`${this._url}/cards/likes/${cardID}`, {
      method: isLiked ? 'DELETE' : 'PUT' ,
      headers: this._headers
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

  editAvatar(data) {
    return fetch (`${this._url}/users/me/avatar`, {
      method: 'PATCH' ,
      headers: this._headers,

      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((res) => {
      return this.#onResponse(res)
    })
  }

}


const api = new Api(options);

export { api };