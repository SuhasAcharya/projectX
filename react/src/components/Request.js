import axios from 'axios';


let requestLib = {};

requestLib.axiosRequests = async (url) => {
    await axios.get(url).then(res => {
        return res;
    })
}

requestLib.userLogin = async (url, userName, googleId) => {
    let newUrl = `${url}/${userName}/${googleId}`
    return await requestLib.axiosRequests(newUrl);
};
module.exports = requestLib;