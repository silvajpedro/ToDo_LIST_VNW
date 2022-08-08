import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import addImage from "./assets/add.png"
import removeImage from "./assets/remove.png";
import teclado from "./assets/teclado.png";
import removeTudo from "./assets/removetudo.png";

const FatherBox = styled.section`
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction:column;
    width: 100%;
    height: 100vh;
    background-color:#2B2E43;
    color: white;
    `
const MiddleBox = styled.div`
position: absolute;
top: 4vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 85%;
height:45vh;
h1{
  font-size: 35px;
  text-align: center;
  animation: shine 1.2s ease-in-out infinite alternate;
  -webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  transition: ease-in-out 0.5s;
  &:hover, :hover + span{
    transform: scale(108%);
  }
  &:hover + span{
    transform: scale(112%);
  }
@keyframes shine {
  from {
    text-shadow: 0 0 2px white, 0 0 4px gray, 0 0 6px white, 0 0 8px gray, 0 0 10px white, 0 0 12px gray, 0 0 14px white;
  }
  
  to {
    text-shadow: 0 0 4px white, 0 0 8px gray, 0 0 12px white, 0 0 16px gray, 0 0 20px white, 0 0 24px gray, 0 0 28px white;
  }
}
}
span{
    position: relative;
    top: -3vh;
    background-color:#4EB879;
    width: 16%;
    height:3px;
    transition: ease-in-out 0.5s;
}
`
const InputBox = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
width: 55%;
height: 18vh;
form{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 550px;
    height: 100vh;
}
`
const BotaoVerde = styled.button`
    font-size:18px;
    background-attachment: fixed;
    background-color: #4EB879;
    border-radius:6px;
    width: 75%;
    height: 42px;
    box-shadow: 2px 2px;
    cursor: pointer;
    &:hover{
        transform: scale(107%);
        
    }
`
const TypeBox = styled.input`
width: 97%;
height: 7.5vh;
border-radius: 10px;
padding-left: 10px;
background-color: #272627;
color: white;
font-size: 20px;
transition: ease-in-out 0.7s;
border:solid 1px transparent;
&:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
    transform: scale(104%);
    border: solid  #4EB879;
    .PdeTroca{
        color: red;
    }
}
::placeholder {
color: white;
}
`
const ListBox = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:13px;
padding-top: 10px;
position: absolute;
top: 50.5vh;
border-radius:10px;
width: 50%;

h2{
animation: gronwAlert 3s linear 0s infinite normal none;
font-family: "Roboto",sans-serif;
font-size: 0px;
@keyframes gronwAlert{
    0%{
        transform: scale(100%);
    }
    50%{
        transform: scale(110%);
    }
}
}
`
const TasksBox = styled.div`
display: flex;
align-items: center;
background-color: #272627;
border-radius: 5px;
width: 95%;
padding-left: 10px;
-webkit-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
transition: ease-in-out 0.6s;

&:hover{
    background-color: #414041;
}

div{
    display: flex;
    position: absolute;
    justify-content: space-evenly;
    width: 20%;
    left: 38vw;
    img{
        position: relative;
        top: 0vh;
        height: 7vh;
        cursor: pointer;
        transition: ease-in-out 0.6s;
        &:hover{
            top: -0.6vh;
            transform: scale(108%);
        }
    }
    
}
p{  
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    font-size: 26px;
}
`
const Teclado = styled.img`
position: absolute;
top:25vh;
right:71vw ;
height: 12vh;
transition: ease-in-out 1s;
cursor: pointer;
&:hover{
    animation: rotate 0.5s linear 0s infinite normal none;
   @keyframes rotate {
    0%{
        transform: rotate(0deg);
        top:25vh
    }
    25%{
        transform: rotate(5deg);
        top:24.4vh
    }
    50%{
        transform: rotate(-5deg);
    }
   }
}
`
export default class Main extends Component {
    state = {
        tarefas: "",
        ListaDeTarefas: [],
        Empty: "",
        Chave: 0,
        PlaceMsg: "Digite sua tarefa",
        LetraMaiscula: 0,
        agudo: 0,
        circunflexo: 0,
        til: 0
    };
    handleChange = (event) => {
        this.setState({
            tarefas: event.target.value
        })
    }
    handleClick = () => {
        if (this.state.PlaceMsg !== "Digite sua tarefa" && this.state.PlaceMsg !== "") {
            this.setState({
                ListaDeTarefas: this.state.ListaDeTarefas.concat({
                    PlaceMsg: this.state.PlaceMsg,
                    id: Date.now()
                }),
                PlaceMsg: "",
                tarefas: ""
            })
        } else if (this.state.tarefas === "") {
            const H2 = document.querySelector('h2')
            H2.style.fontSize = "26px";
            this.setState({
                Empty: "Sua lista não pode ficar vazia"
            })
            setTimeout(() => {
                const H2 = document.querySelector('h2').style.fontSize = "0px";
                H2.style.fontSize = "0px";
                this.setState({
                    Empty: ""
                })
            }, 5000)
        } else if (this.state.tarefas !== "") {
            this.setState({
                ListaDeTarefas: this.state.ListaDeTarefas.concat({
                    tarefas: this.state.tarefas,
                    id: Date.now()
                }),
                Empty: "",
                tarefas: "",
            })
        }
    }
    remove = (id) => {
        this.setState({
            ListaDeTarefas: this.state.ListaDeTarefas.filter((item) => {
                return item.id !== id
            })
        })
    }
    line = (id, index) => {
        this.state.ListaDeTarefas.forEach((item) => {
            const linha = document.getElementById(item.id)
            const linha2 = document.getElementById(index)
            if (item.id === id) {
                linha.style.textDecoration = "line-through red 3px"
                linha2.style.textDecoration = "line-through red 3px"
            }
        })
    }

    keyboard = () => {
        if (this.state.Chave % 2 === 0) {
            this.setState({
                PlaceMsg: "",
                tarefas: ""
            })
            const Suma = document.querySelector('.PdeTroca')
            Suma.style.display = "initial"
            const teclado = document.querySelector('.Buttons')
            teclado.classList.add('grown')
            teclado.classList.remove('decrease')
        } else if (this.state.Chave % 2 === 1) {
            const Suma = document.querySelector('.PdeTroca')
            Suma.style.display = "none"
            const teclado = document.querySelector('.Buttons')
            teclado.classList.add('decrease')
            this.setState({
                PlaceMsg: "Digite sua tarefa"
            })
        }
        this.setState({
            Chave: this.state.Chave + 1
        })
    }

    some = () => {
        const Suma = document.querySelector('.PdeTroca')
        const SumaTec = document.querySelector('.Buttons')
        SumaTec.classList.add('decrease')
        Suma.style.display = "none"
        this.setState({
            Chave: this.state.Chave + 1,
            tarefas: ""
        })
    }

    A = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 0 && this.state.til === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "a",
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 1 && this.state.circunflexo === 0 && this.state.til === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "á",
                agudo: this.state.agudo - 1,

            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 1 && this.state.til === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "â",
                circunflexo: this.state.circunflexo - 1,
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 0 && this.state.til === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "ã",
                til: this.state.til - 1
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "A"
            })
        }
    }
    B = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "b",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "B",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    C = () => {
        const Suma = document.querySelector('.PdeTroca')

        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "c",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "C",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    D = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "d",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "D",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    E = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "e",
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 1 && this.state.circunflexo === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "é",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "ê",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "E",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    F = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "f",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "F",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    G = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "g",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "G",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    H = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "h",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "H",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    I = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0 && this.state.agudo === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "i",
                agudo:0,
                circunflexo:0,
                til:0
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "í",
                agudo: this.state.crase - 1,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "I",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    J = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "j",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "J",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }

    K = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "k",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "K",
                agudo: 0,
                circunflexo: 0,
                til: 0

            })
        }
    }
    L = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "l",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "L",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    cedilha = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "ç",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "Ç",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    M = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "m",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "M",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    N = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "n",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "N",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    O = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.circunflexo === 0 && this.state.til === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "o",
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 1 && this.state.til === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "ó",
                agudo: this.state.agudo - 1,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 0 && this.state.til === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "õ",
                til: this.state.til - 1,
                agudo: 0,
                circunflexo: 0,
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "O",
            })
        }
    }
    P = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "p",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "P",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    Q = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "q",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "Q",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    R = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "r",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "R",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    S = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "s",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "S",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    T = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "t",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "T",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    U = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0 && this.state.agudo === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "u",

            })
        } else if (this.state.LetraMaiscula === 0 && this.state.agudo === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "ú",
                agudo: this.state.agudo - 1,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "U",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    V = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "v",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "V",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    W = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "w",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "W",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    X = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "x",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "X",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    Y = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "y",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "Y",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    Z = () => {
        const Suma = document.querySelector('.PdeTroca')
        if (this.state.LetraMaiscula === 0) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "z",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        } else if (this.state.LetraMaiscula === 1) {
            Suma.style.display = "none"
            this.setState({
                PlaceMsg: this.state.PlaceMsg + "Z",
                agudo: 0,
                circunflexo: 0,
                til: 0
            })
        }
    }
    espaço = () => {
        const Suma = document.querySelector('.PdeTroca')
        Suma.style.display = "none"
        this.setState({
            PlaceMsg: this.state.PlaceMsg + " "
        })
    }
    virgula = () => {
        const Suma = document.querySelector('.PdeTroca')
        Suma.style.display = "none"
        this.setState({
            PlaceMsg: this.state.PlaceMsg + ","
        })
    }
    pontoFinal = () => {
        const Suma = document.querySelector('.PdeTroca')
        Suma.style.display = "none"
        this.setState({
            PlaceMsg: this.state.PlaceMsg + "."
        })
    }
    aspas = () => {
        const Suma = document.querySelector('.PdeTroca')
        Suma.style.display = "none"
        this.setState({
            PlaceMsg: this.state.PlaceMsg + '"'
        })
    }
    agudo = () => {
        this.setState({
            agudo: this.state.agudo + 1
        })
    }
    circunflexo = () => {
        this.setState({
            circunflexo: this.state.circunflexo + 1
        })
    }
    til = () => {
        this.setState({
            til: this.state.til + 1
        })
    }
    crescerLetra = () => {
        if (this.state.LetraMaiscula === 0) {
            const a = document.getElementsByTagName('button')[1]
            a.innerHTML = "A"
            const b = document.getElementsByTagName('button')[2]
            b.innerHTML = "B"
            const c = document.getElementsByTagName('button')[3]
            c.innerHTML = "C"
            const d = document.getElementsByTagName('button')[4]
            d.innerHTML = "D"
            const e = document.getElementsByTagName('button')[5]
            e.innerHTML = "E"
            const f = document.getElementsByTagName('button')[6]
            f.innerHTML = "F"
            const g = document.getElementsByTagName('button')[7]
            g.innerHTML = "G"
            const h = document.getElementsByTagName('button')[8]
            h.innerHTML = "H"
            const i = document.getElementsByTagName('button')[9]
            i.innerHTML = "I"
            const j = document.getElementsByTagName('button')[10]
            j.innerHTML = "J"
            const k = document.getElementsByTagName('button')[11]
            k.innerHTML = "K"
            const l = document.getElementsByTagName('button')[12]
            l.innerHTML = "L"
            const ç = document.getElementsByTagName('button')[13]
            ç.innerHTML = "Ç"
            const m = document.getElementsByTagName('button')[14]
            m.innerHTML = "M"
            const n = document.getElementsByTagName('button')[15]
            n.innerHTML = "N"
            const o = document.getElementsByTagName('button')[16]
            o.innerHTML = "O"
            const p = document.getElementsByTagName('button')[17]
            p.innerHTML = "P"
            const q = document.getElementsByTagName('button')[18]
            q.innerHTML = "Q"
            const r = document.getElementsByTagName('button')[19]
            r.innerHTML = "R"
            const s = document.getElementsByTagName('button')[20]
            s.innerHTML = "S"
            const t = document.getElementsByTagName('button')[21]
            t.innerHTML = "T"
            const u = document.getElementsByTagName('button')[22]
            u.innerHTML = "U"
            const v = document.getElementsByTagName('button')[23]
            v.innerHTML = "V"
            const w = document.getElementsByTagName('button')[24]
            w.innerHTML = "W"
            const x = document.getElementsByTagName('button')[25]
            x.innerHTML = "X"
            const y = document.getElementsByTagName('button')[26]
            y.innerHTML = "Y"
            const z = document.getElementsByTagName('button')[27]
            z.innerHTML = "Z"
            this.setState({
                LetraMaiscula: this.state.LetraMaiscula + 1
            })
        } else if (this.state.LetraMaiscula === 1) {
            const a = document.getElementsByTagName('button')[1]
            a.innerHTML = "a"
            const b = document.getElementsByTagName('button')[2]
            b.innerHTML = "b"
            const c = document.getElementsByTagName('button')[3]
            c.innerHTML = "c"
            const d = document.getElementsByTagName('button')[4]
            d.innerHTML = "d"
            const e = document.getElementsByTagName('button')[5]
            e.innerHTML = "e"
            const f = document.getElementsByTagName('button')[6]
            f.innerHTML = "f"
            const g = document.getElementsByTagName('button')[7]
            g.innerHTML = "g"
            const h = document.getElementsByTagName('button')[8]
            h.innerHTML = "h"
            const i = document.getElementsByTagName('button')[9]
            i.innerHTML = "i"
            const j = document.getElementsByTagName('button')[10]
            j.innerHTML = "j"
            const k = document.getElementsByTagName('button')[11]
            k.innerHTML = "k"
            const l = document.getElementsByTagName('button')[12]
            l.innerHTML = "l"
            const ç = document.getElementsByTagName('button')[13]
            ç.innerHTML = "ç"
            const m = document.getElementsByTagName('button')[14]
            m.innerHTML = "m"
            const n = document.getElementsByTagName('button')[15]
            n.innerHTML = "n"
            const o = document.getElementsByTagName('button')[16]
            o.innerHTML = "o"
            const p = document.getElementsByTagName('button')[17]
            p.innerHTML = "p"
            const q = document.getElementsByTagName('button')[18]
            q.innerHTML = "q"
            const r = document.getElementsByTagName('button')[19]
            r.innerHTML = "r"
            const s = document.getElementsByTagName('button')[20]
            s.innerHTML = "s"
            const t = document.getElementsByTagName('button')[21]
            t.innerHTML = "t"
            const u = document.getElementsByTagName('button')[22]
            u.innerHTML = "u"
            const v = document.getElementsByTagName('button')[23]
            v.innerHTML = "v"
            const w = document.getElementsByTagName('button')[24]
            w.innerHTML = "w"
            const x = document.getElementsByTagName('button')[25]
            x.innerHTML = "x"
            const y = document.getElementsByTagName('button')[26]
            y.innerHTML = "y"
            const z = document.getElementsByTagName('button')[27]
            z.innerHTML = "z"
            this.setState({
                LetraMaiscula: this.state.LetraMaiscula - 1
            })
        }
    }
    ApagarLetra = () => {
        this.setState({
            PlaceMsg: this.state.PlaceMsg.slice(0, -1),
            agudo: 0,
            circunflexo: 0,
            til: 0
        })
    }

    removerTudo = () => {
        this.setState({
            ListaDeTarefas: this.state.ListaDeTarefas.filter((item) => item.ListaDeTarefas)
        })
        let limpaLista = document.querySelector(".removeEverything")
        limpaLista.classList.remove("grownImage")
    }
    diminuiRemover = () => {
        let limpaLista = document.querySelector(".removeEverything")
        if (this.state.ListaDeTarefas.length > 1) {
            limpaLista.classList.add("grownImage")
        } else {
            limpaLista.classList.remove("grownImage")
        }
    }
    render() {
        return (
            <FatherBox onMouseOver={this.diminuiRemover}>
                < p className="PdeTroca">Digite sua tarefa</p>
                <MiddleBox>
                    <h1>ToDo List</h1>
                    <span></span>
                    <InputBox>
                        <form onSubmit={(e) => { e.preventDefault() }}>
                            <TypeBox onClick={this.some} onChange={this.handleChange} value={this.state.tarefas} placeholder={this.state.PlaceMsg} />
                            <BotaoVerde onClick={this.handleClick} >Adicionar Tarefa</BotaoVerde>
                        </form>
                    </InputBox>
                </MiddleBox>
                <ListBox>
                    {this.state.ListaDeTarefas.map((item, index) => (
                        <TasksBox key={index}>
                            <p id={index}>{item.tarefas}</p>
                            <p id={item.id}>{item.PlaceMsg}</p>
                            <div>
                                <img onClick={() => { this.line(item.id, index) }} src={addImage} alt="Imagem de check de tarefa" />
                                <img onClick={() => { this.remove(item.id) }} src={removeImage} alt="Imagem de remover tarefa" />
                            </div>
                        </TasksBox>
                    ))}
                    <h2><i>{this.state.Empty}</i></h2>
                </ListBox>
                <img className="removeEverything" onClick={this.removerTudo} src={removeTudo} alt="Icone para remover todas as informações" />
                <Teclado onClick={this.keyboard} src={teclado} />
                <section className="Buttons">
                    <button onClick={this.A}>a</button>
                    <button onClick={this.B}>b</button>
                    <button onClick={this.C}>c</button>
                    <button onClick={this.D}>d</button>
                    <button onClick={this.E}>e</button>
                    <button onClick={this.F}>f</button>
                    <button onClick={this.G}>g</button>
                    <button onClick={this.H}>h</button>
                    <button onClick={this.I}>i</button>
                    <button onClick={this.J}>j</button>
                    <button onClick={this.K}>k</button>
                    <button onClick={this.L}>l</button>
                    <button onClick={this.cedilha}>ç</button>
                    <button onClick={this.M}>m</button>
                    <button onClick={this.N}>n</button>
                    <button onClick={this.O}>o</button>
                    <button onClick={this.P}>p</button>
                    <button onClick={this.Q}>q</button>
                    <button onClick={this.R}>r</button>
                    <button onClick={this.S}>s</button>
                    <button onClick={this.T}>t</button>
                    <button onClick={this.U}>u</button>
                    <button onClick={this.V}>v</button>
                    <button onClick={this.W}>w</button>
                    <button onClick={this.X}>x</button>
                    <button onClick={this.Y}>y</button>
                    <button onClick={this.Z}>z</button>
                    <button onClick={this.espaço}>esp</button>
                    <button className="capslock" onClick={this.crescerLetra}>⇧</button>
                    <button onClick={this.virgula}>,</button>
                    <button onClick={this.pontoFinal}>.</button>
                    <button onClick={this.aspas}>"</button>
                    <button onClick={this.agudo}>´</button>
                    <button onClick={this.circunflexo}>^</button>
                    <button onClick={this.til}>~</button>
                    <button className="erase" onClick={this.ApagarLetra}>⌫</button>
                </section>
            </FatherBox>
        )
    }
}