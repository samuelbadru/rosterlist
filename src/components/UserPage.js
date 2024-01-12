import { useParams } from "react-router-dom";

const UserPage = () => {

    const params = useParams();

    return (<h1>User {params.userID}</h1>)
}

export default UserPage;