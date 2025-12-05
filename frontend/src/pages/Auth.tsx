import { useState } from "react"
import styled from "styled-components"

import api from "../api"

import { colors, screen_width } from "../style"

const Container = styled.div`
    height: 100vh;
    max-width: ${screen_width.mobile};
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

const Tabs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Login = styled.p`
    color: ${colors.white};
    font-size: 20px;
    font-weight: 700;
`

const Input = styled.input`
    width: 100%;
    font-size: 18px;
    padding: 12px 20px;
    border-radius: 32px;
    background: ${colors.grey};
    outline: none;
    color: ${colors.white};
    
    &:hover {
        background: ${colors.dark};
    }
`

const Logon = styled.p`
    color: ${colors.white};
    font-size: 16px;
    font-weight: 100;
    text-align: center;

    span {
        text-decoration: underline;
        color: ${colors.blue};
        cursor: pointer;

        &:hover {
            color: ${colors.purple};
        }
    }
`

const Button = styled.button`
    width: 100%;
    font-size: 18px;
    padding: 12px 0;
    border-radius: 32px;
    background: ${colors.blue};
    outline: none;
    color: ${colors.black};
    cursor: pointer;
    margin-top: 32px;

    &:hover {
        background: ${colors.purple};
    }
`

const Auth = () => {
    const [login, setLogin] = useState(true)

    function formatCPF(value: string) {
        return value
            .replace(/\D/g, "")             // remove tudo que não for número
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1-$2")
            .slice(0, 14)                    // limita no tamanho correto
    }

     // states login
    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    // states cadastro
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // LOGIN
    async function handleLogin() {
        try {
            const response = await api.post("login/", {
                username: usernameLogin,
                password: passwordLogin
            })

            // salva token
            localStorage.setItem("access", response.data.access)

            alert("Login realizado!")
            window.location.href = "/"
        } catch (error) {
            console.log(error)
            alert("Usuário ou senha incorretos")
        }
    }

    // CADASTRO
    async function handleRegister() {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem.")
            return
        }

        try {
            await api.post("register/", {
                username,
                email,
                cpf,
                password
            })

            alert("Conta criada com sucesso!")
            setLogin(true)
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar (usuário já existe?)")
        }
    }

    return (
        <Container>
            { login &&
                <Tabs>
                    <Login>Entrar:</Login>
                    <Input placeholder="usuário/email" onChange={e => setUsernameLogin(e.target.value)} />
                    <Input placeholder="senha" onChange={e => setPasswordLogin(e.target.value)} />
                    <Logon>não possuí uma conta? <span onClick={() => setLogin(false)}>cadastrar</span></Logon>
                    <Button onClick={handleLogin} >Entrar</Button>
                </Tabs>
            }
            { !login &&
                <Tabs>
                    <Login>Cadastrar:</Login>
                    <Input placeholder="usuário" onChange={e => setUsername(e.target.value)} />
                    <Input placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="CPF" value={cpf} onChange={e => setCpf(formatCPF(e.target.value))} />
                    <Input placeholder="senha" type="password" onChange={e => setPassword(e.target.value)} />
                    <Input placeholder="confirmar senha" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                    <Logon>já possuí uma conta? <span onClick={() => setLogin(true)}>entrar</span></Logon>
                    <Button onClick={handleRegister}>Cadastrar</Button>
                </Tabs>
            }
        </Container>
    )
}
export default Auth