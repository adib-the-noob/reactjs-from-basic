import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    let { id, name } = useParams();
    return (
        <div>
            <Menu />
            <p>
                ID: {id}
                <br />
                Name: {name}
            </p>
            <h1>Profile Page</h1>
        </div>
    )
}

export default ProfilePage;