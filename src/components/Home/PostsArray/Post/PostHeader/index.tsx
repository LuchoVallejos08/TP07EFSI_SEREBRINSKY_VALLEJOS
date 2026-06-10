import { useEffect, useState } from "react";
import type { User } from "../../../../../types/User";
import type { ProfilePicture } from "../../../../../types/ProfilePicture";

import "./PostHeader.css";

const PostHeader = () => {

    const [user, setUser] = useState<User | null>(null);
    const [profilePicture, setProfilePicture] = useState<string>("");

    useEffect(() => {

        const fetchData = async () => {
            try {

                const [usersResponse, profileResponse] = await Promise.all([
                    fetch("https://dummyjson.com/users"),
                    fetch("https://api.thecatapi.com/v1/images/search", {
                        headers: {
                            "x-api-key": "live_D2QAMddCywb22GzCJdPxMeRTutHHBbKr6qMkDHZQt1lH1TmSd6Kc5ZQHNTz0MYDp"
                        }
                    })
                ]);

                const usersData = await usersResponse.json();
                const profileData: ProfilePicture[] = await profileResponse.json();

                // Elegimos un usuario random
                const randomUser =
                    usersData.users[
                        Math.floor(Math.random() * usersData.users.length)
                    ];

                setUser(randomUser);
                setProfilePicture(profileData[0].url);

            } catch (error) {
                console.log("Error al obtener los datos", error);
            }
        };

        fetchData();

    }, []);


    if (!user || !profilePicture) {
        return <p>Cargando...</p>;
    }


    return (
        <div className="PostHeader">

            <img
                src={profilePicture}
                alt="Foto de perfil"
                className="ProfileImage"
            />

            <div>
                <h4>{user.firstName}</h4>
                <p>@{user.username}</p>
            </div>

        </div>
    );
};

export default PostHeader;