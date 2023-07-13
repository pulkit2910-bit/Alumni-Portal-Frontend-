import axios from "axios";

const registerCall = async (userCredentials, dispatch) => {
    dispatch({ type : "REGISTER_START" });
    try {
        const res = await axios.post("/auth/register", userCredentials);
        dispatch({ type : "REGISTER_SUCCESS", payload : res.data.user });
        alert("User register successful");
    } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload : err });
        console.log(err);
    }
}

const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post("/auth/login", userCredentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
        alert("Login Success");
        return res.data.user;
    } catch(err) {
        dispatch({ type: "LOGIN_FAILURE", payload : err });
        console.log(err);
        return err;
    }
}

export { registerCall, loginCall }