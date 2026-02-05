import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <div>
                <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div>
            <button onClick={handleConfirm} ></button>
        </div>
        </div>
        
    );
}

export default LoginForm;