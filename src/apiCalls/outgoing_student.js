import axios from "axios"

const updateJobOffers = async (jobOffersDetails) => {
    try {
        await axios.put("/outgoing_student/job-offers/edit", jobOffersDetails);
    } catch (err) {
        console.log(err)
    }
}

const updateJobExperiences = async (jobExperiencesDetails) => {
    try {
        await axios.put("/outgoing_student/job-experiences/edit", jobExperiencesDetails);
    } catch (err) {
        console.log(err)
    }
}

const updateCompetitiveExams = async (examsDetails) => {
    try {
        await axios.put("/outgoing_student/competitive-exams/edit", examsDetails);
    } catch (err) {
        console.log(err)
    }
}

const updateHigherStudies = async (higherStudiesDetails) => {
    try {
        await axios.put("/outgoing_student/higher-studies/edit", higherStudiesDetails);
    } catch (err) {
        console.log(err)
    }
}

export { updateJobOffers, updateJobExperiences, updateCompetitiveExams, updateHigherStudies };