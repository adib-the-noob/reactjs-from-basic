import Hero from "./components/Hero"

const App = () => {
    
const BtnClick = () => {
    // give alert when button is clicked
    alert("Button Clicked");
    
}

    return (
        <div>
            <Hero ButtonClick={BtnClick}/>
        </div>
    )
}

export default App;
1