import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import history from "../history";

export default function Login(){
    const [listaUser, setListaUser] = useState([]);
    const [usuario, setUsuario] = useState({user: '', senha: ''});
    let possuiCadastro = false;
    // const [possuiCadastro, setPossuiCadastro] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:3003/userlist")
        .then(resp => {
            if (Math.floor(resp.status / 100 === 2)) {
                setListaUser(resp.data)
                return;
            }
        })
        .catch(e => console.log(e))
    }, [])

    var listaUsuarios = listaUser.map((user, id) => {
        return(
        <li key={id}>{user.user}</li>
        )
    })


    function confirmSenha(user, password){
        axios.get("http://localhost:3003/userlist")
        .then(resp => {
            if (Math.floor(resp.status / 100 === 2)) {
                resp.data.map((person, id) => {
                    if (person.user === user){
                        possuiCadastro = true
                        if (person.senha === password){
                            history.push("../fixtures")
                        } else {
                            alert("Dados incorretos. Corriga e tente novamente")
                        }
                    }
                }) 
                if (!possuiCadastro) {
                    alert("Não encontramos seu usuário no sistema. Cadastre-se!")
                }
            }
        })
        .catch(e => console.log(e))
    }

    function entrar(){
        if ((usuario.user.length === 0) || (usuario.senha.length === 0)){
            alert("Preencha todos os campos");
        } else {
            confirmSenha(usuario.user, usuario.senha)           
        }
    } 

    function handleChange(e){
        var value = e.target.value;
        setUsuario({user: value, senha: usuario.senha})
    }
    
    function handleChangePassword(e){
        var value = e.target.value;
        setUsuario({user: usuario.user, senha: value})
    }


    return(
        <div>
            <ul> {listaUsuarios} </ul>
            <ul>
                <li>
                    <label>Username</label>
                    <input id="user" value={usuario.user} name="user" onChange={handleChange}/>
                    <label>Senha</label>
                    <input id="senha" type="password" value={usuario.senha} name="senha" onChange={handleChangePassword}/>
                </li>
                <li>
                    <button onClick={entrar}>Entrar</button>
                </li>
                <li>
                    <button onClick={() => history.push("./subscribe")}>Cadastre-se</button>
                </li>
            </ul>
        </div>

    ); 
}