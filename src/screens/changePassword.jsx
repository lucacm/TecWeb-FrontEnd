import React, { useState, useEffect } from "react";
import axios from "axios";
import history from "../history";
import { useLocation } from "react-router-dom";
import "../css/auth.css";

export default function ChangePassword(props) {
  const [usuario, setUsuario] = useState({ user: "", senha: "" });
  const [newPassword, setNewPassword] = useState({ senha: "" });
  const [id, setId] = useState("");
  const [antiga, setAntiga] = useState("");
  const [canConfirm, setCanConfirm] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setId(props.location.state.id_);
  }, [location]);

  useEffect(() => {
    if (id !== "") {
      setCanConfirm(true);
      axios
        .get("https://tecweb-back-champions.herokuapp.com/userlist" + id)
        .then((resp) => {
          if (Math.floor(resp.status / 100 === 2)) {
            setAntiga(resp.data[0]["senha"]);
          }
        });
    }
  }, [id]);

  function handleChangePassword(e) {
    var value = e.target.value;
    setUsuario({ user: usuario.user, senha: value });
  }

  function handleNewPassword(e) {
    var value = e.target.value;
    setNewPassword({ senha: value });
  }

  function checkSend() {
    if (usuario.senha !== "" || newPassword.senha !== "") {
      if (usuario.senha === newPassword.senha) {
        alert("Senhas equivalentes. Altere");
      } else {
        if (usuario.senha === antiga) {
          axios
            .put(
              "https://tecweb-back-champions.herokuapp.com/userlist" + id,
              newPassword
            )
            .then((resp) => {
              if (Math.floor(resp.status / 100) === 2) {
                history.push({
                  pathname: "../fixtures",
                  state: { id: id },
                });
              }
              return;
            })
            .catch((erro) => console.log(erro));
        } else {
          alert("senha incorreta!");
        }
      }
    } else {
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <p className="label">Altere sua senha</p>
        <label className="label">senha antiga</label>
        <input
          className="input"
          id="senha"
          type="password"
          value={usuario.senha}
          name="senha"
          onChange={handleChangePassword}
        />
        <label className="label">senha nova</label>
        <input
          className="input"
          id="newSenha"
          type="password"
          value={newPassword.senha}
          name="senha"
          onChange={handleNewPassword}
        />
        {canConfirm && (
          <button className="button" onClick={checkSend}>
            alterar
          </button>
        )}
      </div>
    </div>
  );
}
