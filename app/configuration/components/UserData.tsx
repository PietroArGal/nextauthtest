import axios from 'axios'

const UserData = async () => {

    const { data } = await axios.get('http://localhost:3000/api/profile');

    return (data)
}

export default UserData