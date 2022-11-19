import axios from "axios";

const instance = axios.create({

    baseURL: "https://covid-193.p.rapidapi.com/",
    timeout: 1000,
    headers: {
        "X-RapidAPI-Key": "97e6270a2amshe5ee0eaffc04770p1f0943jsned57e2e5e9fb",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
    }
});

export default instance;