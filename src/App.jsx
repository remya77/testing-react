import { useState } from "react"; //import useState

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false); 
  const [hideAboutUs, setHideAboutUs] = useState(false); 

  const handleShowAboutUs = () => {
    //callback for when the user clicks on the button
    setShowAboutUs(true); //set state var to true for use in DOM
  };

  const handleHideAboutUs = () => {
    //callback for when the user clicks on the button
    setShowAboutUs(false); //set state var to true for use in DOM
  };

  return (
    <>
      <h1>Super Duper Company</h1>
      <button onClick={handleShowAboutUs}>About Us</button> 
      {/*set up click handler*/}
      {showAboutUs ? 
      <>
       <main>We Rock</main>        
       <button onClick={handleHideAboutUs}>Close</button></>
      : null}
     
    </>
  );
}

export default App;
