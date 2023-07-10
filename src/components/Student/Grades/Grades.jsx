import React from 'react'
import './Grades.css'

const Grades = () => {
    const gpaData = [{
        "rollNumber": "BTECH/10001/01",
        "GPA":"8.2",
        "semesters": [
        {
            "semester": "1",
            "gpa": 0,
            "backlogs": [
            "Chemistry",
            "Mathematics",
            "Chemistry",
            "Mathematics"
            ]
        },
        {
            "semester": "2",
            "gpa": 7,
            "backlogs": [
            "Mathematics",
            "Chemistry",
            "Mathematics"
            ]
        },
        {
            "semester": "3",
            "gpa": 2,
            "backlogs": [
            "Physics",
            "Mathematics"
            ]
        },
        {
            "semester": "4",
            "gpa": 8,
            "backlogs": [
            "Computer Science",
            "Mathematics",
            "Mathematics",
            "English",
            "Mathematics"
            ]
        },
        {
            "semester": "5",
            "gpa": 2,
            "backlogs": [
            "Mathematics",
            "Mathematics",
            "Computer Science",
            "English"
            ]
        },
        {
            "semester": "6",
            "gpa": 3,
            "backlogs": [
            "Mathematics",
            "Physics",
            "Mathematics"
            ]
        },
        {
            "semester": "7",
            "gpa": 2,
            "backlogs": [
            "Mathematics",
            "Computer Science"
            ]
        },
        {
            "semester": "8",
            "gpa": 6,
            "backlogs": [
            "Computer Science",
            "Mathematics",
            "Computer Science",
            "Chemistry"
            ]
        }
        ]
    },]

    return (
        <div className='grades'>
        <h3>Grades</h3>
        {gpaData.map((entry, index) => (
            <div key={index}>
                <h4>GPA:{entry.GPA} </h4>
            <table className='gradestable'>
                <thead>
                <tr>
                    <th>Semester</th>
                    <th>SGPA</th>
                    <th>Backlogs</th>
                </tr>
                </thead>
                <tbody>
                {entry.semesters.map((semester, semesterIndex) => (
                    <tr key={semesterIndex}>
                    <td>{semester.semester}</td>
                    <td>{semester.gpa}</td>
                    <td>{semester.backlogs.join(', ')}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        ))}
        </div>
    );
}

export default Grades