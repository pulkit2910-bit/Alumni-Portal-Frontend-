import axios from "axios";

const registerCall = async (userCredentials) => {
    try {
        await axios.post("/auth/register", userCredentials);
        alert("User register successful");
    } catch (err) {
        console.log(err);
    }
}

const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("/auth/login", userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
    } catch(err) {
        dispatch({ type: "LOGIN_FAILURE", payload : err });
        console.log(err);
    }
}

export { registerCall, loginCall }