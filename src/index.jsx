import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'
import { useLocation } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'))

const portrait = window.innerHeight > window.innerWidth
const portraitMultiplier = portrait ? 2 : 1

const Home = () => {
    const location = useLocation();
    const isSpecificRoute = location.pathname === '/';
    console.log(isSpecificRoute);
    if (isSpecificRoute) {
        // Get the root div and add CSS classes or styles
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
          // Add your CSS classes or styles here
          rootDiv.classList.add('homeroot');
        }
      }
    return (
    <>
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 1000,
                position: [ 6 * portraitMultiplier, 8 * portraitMultiplier, 12 * portraitMultiplier ]
            } }
        >
            <Experience />
        </Canvas>
        
        <div className="leva-container">
            <Leva collapsed />
        </div>

    </>
);
}

export default Home;