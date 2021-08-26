/* 
===========================================================
  YOU DO NOT NEED TO MODIFY THIS FILE!!
=========================================================== 
*/

/* This imports the file we use for styling! */
import './styles.css';
/* This imports the file that implements our Gallery component! */
import { Gallery } from './Gallery';

/* This is our base component for the website! */
export default function App() {
  return (
    <div className="App">
      {/* 
        Note: [className="App"] gives the base page a name to 
        reference when styling --> See the file 'styles.css'. 
        
        <Gallery /> renders our Gallery component to show up 
        on the website!
      */}
      <Gallery />
    </div>
  );
}
