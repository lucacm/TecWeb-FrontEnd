import React, { useState } from "react"
import axios from "axios"
import history from "../history";



export default function Subscribe(){
    const [usuario, setUsuario] = useState({user: '', senha: ''});

    function cadastrar() {
        if ((usuario.user.length === 0) || (usuario.senha.length === 0)){
            alert("Preencha todos os campos");
        } else {
            console.log(usuario)
            axios.post('http://localhost:3003/users/', usuario)
            .then(resp => {
                if(Math.floor(resp.status/100) === 2) {
                    history.push({
                        pathname: "../fixtures",
                        state: { id: resp.data._id }
                    })
                }
                return;
            })
            .catch(erro => console.log(erro))
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
            <ul>
                <li>
                    <label>Username</label>
                    <input id="user" value={usuario.user} name="user" onChange={handleChange}/>
                    <label>Senha</label>
                    <input id="senha" type="password" value={usuario.senha} name="senha" onChange={handleChangePassword}/>
                </li>
                <li>
                    <button onClick={cadastrar}>Cadastrar</button>
                </li>
            </ul>
        </div>

    ); 
}