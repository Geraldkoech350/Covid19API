import Axios from "../Utils/Axios";

export default DashBoardService = async () => {

    return await axios.get("https://covid-193.p.rapidapi.com/statistics",
        {
            headers: {
                'X-RapidAPI-Key': '97e6270a2amshe5ee0eaffc04770p1f0943jsned57e2e5e9fb',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        }
    )
        .then((res) => {

            return res.data.response;
        })

        .catch(function (error) {
            console.log(error);
            return [];
        })

}
