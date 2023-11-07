import Axios from "./Axios";

// register new user API call
const registerService = async (user) => {
    const { data } = await Axios.post("/users", user);
    if(data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

// logout user Function
const logoutService = () => {
    localStorage.removeItem("userInfo");
    return null;
}

// login user API call
const loginService = async (user) => {
    const { data } = await Axios.post("/users/login", user);
    if(data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}

// update profile API call
const updateProfileService = async (user, token) => {
    const { data } = await Axios.put("/users", user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
}

// delete profile API call
const deleteProfileService = async (token) => {
    const { data } = await Axios.delete("/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if(data) {
        localStorage.removeItem("userInfo");
    }
    return data;
};

// change password API call
const changePasswordService = async (password, token) => {
    const { data } = await Axios.put("/users/password", password, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// get all favorite movies
const getFavoriteMoviesService = async (token) => {
    const { data } = await Axios.get("/users/favorites", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// delete all favorite movies
const deleteFavoriteMoviesService = async (token) => {
    const { data } = await Axios.delete("/users/favorites", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// admin get all users
const getAllUsersService = async (token) => {
    const { data } = await Axios.get("/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data; 
};

// admin get user
const deleteUserService = async (id, token) => {
    const { data } = await Axios.delete(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data; 
};

export { 
    registerService,
    loginService,
    logoutService,
    updateProfileService,
    deleteProfileService,
    changePasswordService, 
    getFavoriteMoviesService,
    deleteFavoriteMoviesService,
    getAllUsersService,
    deleteUserService,
};
