// App.test.jsx
import { render, screen , fireEvent, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";

// test("renders an h1 tag", () => {
//     render(<App />);
//     const heading  = screen.getByRole("heading");
//     screen.debug();
//     expect(heading).toHaveTextContent("Super Duper Test");
// });

// test("The About Us section exists", () => {
//     render(<App />);
//     const about = screen.getByText("We Rock");
//     expect(about).toBeInTheDocument();
//   });

//   test("clicking the button displays the About Us section", () => {
//     render(<App />);
//     const button = screen.getByText("About Us");
  
//     let about = screen.queryByText("We Rock");
//     expect(about).toBeNull();
//     screen.debug()
//     fireEvent.click(button); //add this line
  
//     //lets observe the changes in App made after click by using screen.debug()
  
//     screen.debug()
  
//     about = screen.getByText("We Rock");
//     expect(about).toBeInTheDocument();
//   });
  

  test("clicking the button hides the About Us section", async() => {
     render(<App />);
  
    let aboutus = screen.queryByText("About Us");
    expect(aboutus).toBeInTheDocument();
    screen.debug()
    fireEvent.click(aboutus);
    const weRock = await screen.findByText("We Rock");
    screen.debug()
    await waitFor(()=>{
        expect(weRock).toBeInTheDocument();
    })

    const closebutton = screen.getByText("Close");
    fireEvent.click(closebutton); //add this line
  
    //lets observe the changes in App made after click by using screen.debug()

    await waitFor(()=>{
    
        expect(weRock).not.toBeInTheDocument();
    });  
   
    screen.debug()
  });