const App = () => {

const PostFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted');
}
    return (
        <div>
            <form onSubmit={PostFormSubmit}>
                <input placeholder="name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;