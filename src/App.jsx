import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
    return (
        <div className="min-h-screen bg-discord-bg text-discord-text">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;