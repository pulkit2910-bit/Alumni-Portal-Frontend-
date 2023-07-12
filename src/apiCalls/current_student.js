import axios from "axios"

const updateProject = async (projectDetails) => {
    try {
        await axios.put(`/current_student/project/edit`, projectDetails);
        // console.log(res)
    } catch (err) {
        console.log(err);
    }
}

const updateCurricularActivities = async (activityDetails) => {
    try {
        await axios.put(`/current_student/activity/edit`, activityDetails);
        // console.log(res)
    } catch (err) {
        console.log(err);
    }
}

const updateAchievements = async (achievementDetails) => {
    try {
        await axios.put(`/current_student/achievement/edit`, achievementDetails);
        // console.log(res)
    } catch (err) {
        console.log(err);
    }
}

const updateBasicDetails = async (basicDetails) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        await axios.put(`/user/edit-profile/basic-details`, basicDetails, config);
        // console.log(res)
    } catch (err) {
        console.log(err);
    }
}

const updateContactDetails = async (contactDetails) => {
    try {
        await axios.put('/user/edit-profile/contact', contactDetails);
        // console.log(res)
    } catch (err) {
        console.log(err)
    }
}

export { updateProject, updateCurricularActivities, updateAchievements, updateBasicDetails, updateContactDetails }