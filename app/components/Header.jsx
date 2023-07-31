import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href="/">600Code</Link>
                </div>
            </div>
            <div className="links">
                <Link href="/about">About</Link>
                <Link href="/about/team">About Team</Link>
                <Link href="/code/repos">Code</Link>
            </div>
        </header>
    );
};

export default Header;
