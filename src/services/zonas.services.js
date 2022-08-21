const axios = require("axios");
const router = require('../router/index');


const Zonas = () => {};

Zonas.GetAll = async() => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    return await axios
        .get(`${process.env.VUE_APP_URL_API}/fase-grupos/${año}/${categoria}`)
        .then(response => {
            if (response.status == 200)
                return response.data;
            else
                return null;
        })
        .catch(null);
}

Zonas.Update = async (index, zona) => {
    const año = new Date().getFullYear();
    const categoria = router.default.currentRoute.params.id;
    console.log({ index, zona });
    return await axios
        .patch(`${process.env.VUE_APP_URL_API}/fase-grupos/${año}/${categoria}`, { index, zona })
        .then(true)
        .catch(error => {
            console.log(error);
            return false;
        });
}
module.exports = Cache;
module.exports = Zonas;
