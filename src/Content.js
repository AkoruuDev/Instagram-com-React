import Stories from './Stories';
import Posts from './Posts';
import Sidebar from './Sidebar';

function Content() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}

export default Content;