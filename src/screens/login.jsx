import React, { useState } from "react"
import axios from "axios"
import history from "../history";
import "../css/auth.css";


export default function Login(){
    const [usuario, setUsuario] = useState({user: '', senha: ''});
    let possuiCadastro = false;

    function confirmSenha(user, password){
        axios.get("http://localhost:3003/userlist")
        .then(resp => {
            if (Math.floor(resp.status / 100 === 2)) {
                resp.data.forEach((person, id) => {
                    if (person.user === user){
                        possuiCadastro = true
                        if (person.senha === password){
                            history.push({
                                pathname: "../fixtures",
                                state: { id: person._id }
                            })
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
        <div className="container">
            <div className="title1">
                <h2>Champions Hub</h2>
            </div>
                <hr color="#91433f" size="1.5" width="90%" />
            <div className="card">
                <p className="label">Entre na plataforma e acompanhe a Champions League!</p>
                <label className="label">usuário</label>
                <input className="input" id="user" value={usuario.user} name="user" onChange={handleChange}/>
                <label className="label">senha</label>
                <input className="input" id="senha" type="password" value={usuario.senha} name="senha" onChange={handleChangePassword}/>
                <button className="button" onClick={entrar}>Entrar</button>
            </div>
            <button className="button" onClick={() => history.push("./subscribe")}>Cadastre-se</button>
        </div>

    ); 
}