const axios = require('axios');
const baseUrl = 'https://api.rawg.io/api';
const key = '?key=d23b5f0a0e4f4a06bf9830393cd55aea';
const myKey = 'd23b5f0a0e4f4a06bf9830393cd55aea';

export const getAllGames = ( req, res ) => {
    console.log(req.query)
    const { page_size, page } = req.query
    axios.get(`${baseUrl}/games`, {
        params: {
          key: myKey,
          page_size: page_size,
          page: page
        }
    })
    .then(function (response) {
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    }); 
}

export const getGameDetails = ( req, res ) => {
    const { id } = req.query;
    axios.get(`${baseUrl}/games/${id}`, {
        params: {
          key: myKey
        }
    })
    .then(function (response) {
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

export const getGameScreenshots = ( req, res ) => {
    const { id } = req.query;
    console.log(id)
    axios.get(`${baseUrl}/games/${id}/screenshots`, {
        params: {
          key: myKey
        }
    })
    .then(function (response) {
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

export const getGameAchievements = ( req, res ) => {
    const { id } = req.query;
    console.log(id)
    axios.get(`${baseUrl}/games/${id}/achievements`, {
        params: {
          key: myKey
        }
    })
    .then(function (response) {
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

export const getGameTrailers = ( req, res ) => {
    const { id } = req.query;
    console.log(id)
    axios.get(`${baseUrl}/games/${id}/movies`, {
        params: {
          key: myKey
        }
    })
    .then(function (response) {
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}