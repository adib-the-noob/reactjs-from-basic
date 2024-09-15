const LoginStatusFunction = (status) => {
    if (status === true) {
        return (
            <div>
                <h1>Welcome User</h1>
                <button>Logout</button>
            </div>
        )
    }
    return (
        <div>
            <h1>Welcome Guest</h1>
            <button>Login</button>
        </div>
    )
}

function App() {
    return(<div>
        {LoginStatusFunction(true)}
    </div>)
}

export default App
1