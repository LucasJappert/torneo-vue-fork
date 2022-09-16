const axios = require("axios");
const router = require('../router/index');


const NoCompetitivoServices = () => {};

NoCompetitivoServices.GetAll = async() => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    return await axios
        .get(`${process.env.VUE_APP_URL_API}/no-competitivo/${año}/${categoria}`)
        .then(response => {
            if (response.status == 200)
                return response.data;
            else
                return null;
        })
        .catch(null);
}

NoCompetitivoServices.Update = async (partidos) => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    return await axios
        .patch(`${process.env.VUE_APP_URL_API}/no-competitivo/${año}/${categoria}`, { partidos })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return null;
        });
}


module.exports = NoCompetitivoServices;
