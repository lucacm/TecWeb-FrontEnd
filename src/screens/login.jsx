import React, { useEffect, useState } from "react"
import axios from "axios"
import history from "../history";
import "../css/auth.css";


export default function Login(){
    const [listaUser, setListaUser] = useState([]);
    const [usuario, setUsuario] = useState({user: '', senha: ''});
    let possuiCadastro = false;

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


    function confirmSenha(user, password){
        axios.get("http://localhost:3003/userlist")
        .then(resp => {
            if (Math.floor(resp.status / 100 === 2)) {
                resp.data.map((person, id) => {
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
                <h2>Seja bem-vindo ao Champions Hub!</h2>
            </div>
                <hr color="#91433f" size="1.5" width="90%" />
            <div className="titles">
                <p>Aqui, você tem a Champions League na palma das mãos.</p>
            </div>
            <div className="card">
            <label>usuário</label>
            <input id="user" value={usuario.user} name="user" onChange={handleChange}/>
            <label>senha</label>
            <input id="senha" type="password" value={usuario.senha} name="senha" onChange={handleChangePassword}/>

            <button onClick={entrar}>Entrar</button>
            </div>
            <button onClick={() => history.push("./subscribe")}>Cadastre-se</button>
        </div>

    ); 
}