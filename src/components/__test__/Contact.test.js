import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


test("Contact page", ()=>{
    render(<ContactUs />)
    
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Check Button load",()=>{

    render(<ContactUs />);

    // const buttonLoad = screen.getByRole("button");
    const buttonText = screen.getByText("Submit");
    expect(buttonText).toBeInTheDocument();

})

test("Input box count should be 2",()=>{

    render(<ContactUs />);

    const inputLenght = screen.getAllByRole("textbox");


    expect(inputLenght.length).toBe(2);
    // expect(inputLenght.length).toBe(4);
    // expect(inputLenght.length).not.toBe(2);
    
})

// describe("We can group test cases",()=>{

//     test("Button count should be 1",()=>{
//         render(<ContactUs />);
//         const inputLenght = screen.getByRole("button")
//         expect(inputLenght.length).toBeGreaterThan(0);      
        
//     })
//     it("We can use it in place of test as well",()=>{
//          render(<ContactUs />);
//         const inputLenght = screen.getByRole("button")
//         console.log('Here',inputLenght);
//         expect(inputLenght.length).toBeGreaterThan(0);      
        
//     })
//     describe("We an use nested Describe box if needed",()=>{
        
//     })

// })