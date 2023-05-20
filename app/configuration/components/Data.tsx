import axios from 'axios'

const Data = async () => {

    const { data } = await axios.get('http://localhost:3000/api/profile');

    return (
        <div>
            <h1>Nombre: {(data.name)}</h1>
            <h1>Edad: {(data.age)}</h1>
        </div>
    )
}

export default Data