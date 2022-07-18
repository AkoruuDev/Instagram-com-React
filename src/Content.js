import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Content() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}

export default Content;