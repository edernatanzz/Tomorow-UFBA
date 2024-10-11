import React from 'react';

export default function Login() {
    return (
        <>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Entrar</button>
        </>
    );
}
