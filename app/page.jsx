import Link from 'next/link';
import Courses from './components/Courses';

const HomePage = () => {
    return (
        <div>
            <h1>Wellcome to 600Code</h1>
            <Courses></Courses>
            {/* <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/about/team'>Team</Link></li>
            </ul> */}
        </div>
    );
};

export default HomePage;
