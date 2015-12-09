var api = {

  fetchFeed(id) {
    var url = `http://localhost:1337/api/users/${id}/feed`
    return fetch(url).then( (res) => res.json())
  }

}

module.exports = api;