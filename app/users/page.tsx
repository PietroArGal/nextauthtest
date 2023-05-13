import { UserProfile } from './components/UserProfile';
import { LogOutButton } from './components/LogOutButton';

const People = () => {

    return (
        <div className="lg:block lg:pl-80 h-full">
            <p>Welcome</p>
            <div>
                <UserProfile />
                <LogOutButton />
            </div>
        </div>
    );
};

export default People;