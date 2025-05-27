
import Teeth from "@/assets/teeth.svg"
import Muscle from "@/assets/muscle.svg"




const apointDates = [{
        title: "Mon",
        date: 25,
        time: ["10:00", "11:00", "12:00"]
    }, {
        title: "Tues",
        date: 26,
        time: ["08:00", "09:00", "10:00"]
    },
    {
        title: "Wed",
        date: 27,
        time: ["12:00", "-", "13:00"]
    },
    {
        title: "Thurs",
        date: 28,
        time: ["10:00", "11:00", "12:00"]
    },
    {
        title: "Fri",
        date: 29,
        time: ["-", "11:00", "12:00"]
    },
    {
        title: "Sat",
        date: 30,
        time: ["13:00", "14:00", "16:00"]
    },
    {
        title: "Sun",
        date: 31,
        time: ["10:00", "11:00", "12:00"]
    }

    ]

    const doctor = [{
        title: "Dentist",
        time: "09:00 - 11:00",
        doctors: "Dr.Cameroon Williamson",
        color : "fitblue",
        imgSrc : Teeth
    },
    
    {
        title: "Physiotherapist Consultant",
        time: "11:00 - 12:00",
        doctors: "Dr.Kevin DJones",
        color : "fitgray",
        imgSrc : Muscle
    }
]


export {doctor , apointDates}