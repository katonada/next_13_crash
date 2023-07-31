import Link from 'next/link';
import Repo from '@/app/components/Repo';

const RepoPage = ({params: {name}}) => {
    return (
        <div className="card">
            <Link href="/code/repos" className='btn btn-back'>Back to repositories</Link>
            <Repo name={name}></Repo>
        </div>
    );
};

export default RepoPage;
