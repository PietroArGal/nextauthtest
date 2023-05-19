import axios from 'axios'
import { AuthRequiredError } from './lib/exceptions';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const session = null;

const Data = async () => {

    await wait(4000);

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // if (!session) throw new AuthRequiredError()

    return (
        <div>
            <h1>Nombre: {JSON.stringify(data)}</h1>
        </div>
    );
};

export default Data


