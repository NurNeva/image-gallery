
import './styles/style.css';

import './helper/data.js'

import images from './helper/data.js';

function App() {
  return (

    
    <div className="App">
      <div>
      <h1>Image Gallery</h1>
      </div>
    
    <div className='image-container'>
    {images.map(image=>(
      <div>
      <div className='internal-container'>
      <img src= {image.src.large} alt={image.alt}></img>
      </div>
      <p>{image.photographer}</p>
      </div>
     ))}
      
    </div>
  
    
    </div>


  );
}

export default App;
