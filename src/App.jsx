
function App() {
    const user_status = false;
    return (
        <div>
            {(()=>{
                if(user_status){
                    return (
                        <div>
                            <h1>Welcome User</h1>
                            <button>Logout</button>
                        </div>
                    )
                }else{
                    return (
                        <div>
                            <h1>Welcome Guest</h1>
                            <button>Login</button>
                        </div>
                    )
                }
            })()}
        </div>
    )
}

export default App
1