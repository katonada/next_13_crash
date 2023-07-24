import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Wellcome to 600Code</h1>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/about/team'>Team</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
