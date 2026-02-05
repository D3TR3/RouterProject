import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <div>
                <input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}} type="email" />
                <input placeholder="Password" type="password" />
            </div>
        </div>
    );
}

export default LoginForm;