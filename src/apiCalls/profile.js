import axios from "axios";

const editEducationCall = async (user, details, dispatch) => {
    try {
        dispatch({ type : "UPDATE_USER_START", payload : user });
        const res = await axios.put('/alumni/edit-profile/education', details);
        // console.log(res)
        dispatch({ type : "UPDATE_USER_SUCCESS", payload : res.data });
        alert("Education updated !");
    } catch (err) {
        dispatch({ type : "UPDATE_USER_FAILURE", payload : err });
        console.log(err)
    }
}

const editExperienceCall = async (user, details, dispatch) => {
    try {
        dispatch({ type : "UPDATE_USER_START", payload : user });
        const res = await axios.put('/alumni/edit-profile/experience', details);
        // console.log(res)
        dispatch({ type : "UPDATE_USER_SUCCESS", payload : res.data });
        alert("Experience updated !");
    } catch (err) {
        dispatch({ type : "UPDATE_USER_FAILURE", payload : err });
        console.log(err)
    }
}

const editBasicDetailsCall = async (user, details, dispatch) => {
    try {
        dispatch({ type : "UPDATE_USER_START", payload : user });
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await axios.put('/user/edit-profile/basic-details', details, config);
        // console.log(res)
        dispatch({ type : "UPDATE_USER_SUCCESS", payload : res.data });
        alert("Details updated !");
    } catch (err) {
        dispatch({ type : "UPDATE_USER_FAILURE", payload : err });
        console.log(err)
    }
}

const editContactDetailsCall = async (user, details, dispatch) => {
    try {
        dispatch({ type : "UPDATE_USER_START", payload : user });
        const res = await axios.put('/user/edit-profile/contact', details);
        // console.log(res)
        dispatch({ type : "UPDATE_USER_SUCCESS", payload : res.data });
        alert("Contact Details updated !");
    } catch (err) {
        dispatch({ type : "UPDATE_USER_FAILURE", payload : err });
        console.log(err)
    }
}

const editAchievements = async (user, details, dispatch) => {
    try {
        dispatch({ type : "UPDATE_USER_START", payload : user });
        const res = await axios.put('/alumni/edit-profile/achievements', details);
        // console.log(res)
        dispatch({ type : "UPDATE_USER_SUCCESS", payload : res.data });
        alert("Contact Details updated !");
    } catch (err) {
        dispatch({ type : "UPDATE_USER_FAILURE", payload : err });
        console.log(err)
    }
}

export { editEducationCall, editExperienceCall, editBasicDetailsCall, editContactDetailsCall, editAchievements };