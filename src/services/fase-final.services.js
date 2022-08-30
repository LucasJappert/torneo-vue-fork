const axios = require("axios");
const router = require('../router/index');


const FaseFinal = () => {};

FaseFinal.GetAll = async() => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    return await axios
        .get(`${process.env.VUE_APP_URL_API}/fase-final/${año}/${categoria}`)
        .then(response => {
            if (response.status == 200)
                return response.data;
            else
                return null;
        })
        .catch(null);
}

FaseFinal.Update = async (data) => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    return await axios
        .patch(`${process.env.VUE_APP_URL_API}/fase-final/${año}/${categoria}`, { data })
        .then(response => response.data)
        .catch(error => {
            console.log(error);
            return null;
        });
}


module.exports = FaseFinal;
