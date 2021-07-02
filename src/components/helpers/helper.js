import axios from "axios";

// ? Axios Client
export const axiosClient = axios.create({
    baseURL: "http://localhost:5000"
});

export const dateNow = new Date();

export const prepareUserCreationData = (data, role) => {
    // *** Prepare Role Wise User Data To Enter Into Database ***
    console.log(data);
    const userData = {
        ...data,
        role_value: role
    }

    const temp = {
        email: data?.val,
        first_name: data?.val,
        last_name: data?.val,
        mobile: data?.val,
        secondary_contact: data?.val,
        role_id: data?.val,
        class: data?.val,
        year_of_adm: data?.val,
        created_at: data?.val,
        photo: data?.val,
        password: data?.val,
        designation: data?.val,
        email_sent: data?.val
    };

    switch(userData.role_value){
        case "principle":
            // ? Principle role data
            let principleData = {
                ...userData,
                role_id: null,
                class: data.class,
                year_of_adm: null,
                created_at: `${dateNow.getFullYear()}/${dateNow.getMonth()}/${dateNow.getDate()}`,
                photo: null,
                designation: "Principle",
                email_sent: null
            }
            return principleData;
        case "admin":
            // ? Admin Role Data
            let adminData = {
                ...userData,
                role_id: null,
                class: null,
                year_of_adm: null,
                created_at: `${dateNow.getFullYear()}/${dateNow.getMonth()}/${dateNow.getDate()}`,
                photo: null,
                designation: "Admin",
                email_sent: null
            }
            return adminData;
        case "faculty":
            // ? faculty Role Data
            let facultyData = {
                ...userData,
                role_id: null,
                class: null,
                year_of_adm: null,
                created_at: `${dateNow.getFullYear()}/${dateNow.getMonth()}/${dateNow.getDate()}`,
                photo: null,
                email_sent: null
            }
            return facultyData;
            return;
        case "student":
            // ? Student Role Data
            let studentData = {
                ...userData,
                role_id: null,
                created_at: `${dateNow.getFullYear()}/${dateNow.getMonth()}/${dateNow.getDate()}`,
                photo: null,
                designation: null,
                email_sent: null,
                year_of_adm: `${dateNow.getFullYear()}/${dateNow.getMonth()}/${dateNow.getDate()}`
            }
            return studentData;
    }
}

export const updateUserExpiry = (token, expiryDate) => {
    if(token) {
        let isValidExpiryDate = new Date(expiryDate);
        let currentDate = new Date();
        if(isValidExpiryDate > currentDate) {
            let remainingTime = isValidExpiryDate.getTime() - currentDate.getTime();
            if(remainingTime > 0) {
                return {
                    token,
                    remainingTime
                };
            }
            else if(remainingTime <= 0) {
                return null;
            }
        }
        else {
            return null;
        }
    }
};