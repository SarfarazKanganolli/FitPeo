import Syringe from "@/assets/syringe.svg"
import Eye from "@/assets/eye.svg"
import Heart from "@/assets/heart.svg"
import Professor from "@/assets/professor.svg"


const DocAppoint = [
        {
            title: "Thursday",
            schedule: [{ appoint: "Health Checkup Complete", imgSrc: Syringe, time: "11:00 AM" },
            { appoint: "Opthalmologist", imgSrc: Eye, time: "14:00 PM" },
            ]
        },

        {
            title: "Saturday",
            schedule: [{ appoint: "Cardiologist", imgSrc: Heart, time: "12:00 PM" },
            { appoint: "Neurologist", imgSrc: Professor, time: "16:00 PM" },
            ]
        }
    ]


export default DocAppoint
