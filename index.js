import React from 'react';
import ReactDOM from 'react-dom';
import orc from './img/orc.png';
import goblin from './img/goblin.png';
import feiticeira from './img/feiticeira.png';
import soco from './img/soco.png';
import arco from './img/arco.png';
import espada from './img/espada.png';
import './index.css';


class Personagem extends React.Component{
  render() {
    let classecss = 'personagens';
    if(this.props.estaSelecionado) {
      classecss = 'personagens selecionado' 
    
  }
      return(
          <div className={classecss} id={this.props.nome} onClick={() => this.props.executarClique(this.props.nome)}>
              <img src={this.props.img} width='140px'/>
              <p>{this.props.nome}</p>
          </div>
  )
  }
}

class Arma extends React.Component{
  render(){
    let classecss = 'armas';
    if(this.props.estaSelecionado){
      classecss = 'arma selecionado'
    }

    return(
      <div className={classecss} id={this.props.nome} onClick={() => this.props.executarClique(this.props.nome)}>
          <img src={this.props.imagem} width='140px' />
          <p>{this.props.nome}</p>
        </div>

    )
  }
} 

function Personagens(props) {
  return (
    <div className="monstro">

      <div className="personagens" id={props.nome}>
        <Personagem img={orc} nome='Orc' estaSelecionado={true} />
        <Personagem img={goblin} nome='Goblin'/>
        <Personagem img={feiticeira} nome='Feiticeira'/>
      </div>

    </div>

  )
}

function Armas(props){
  return(
    <div className="armas">

      <div className='item-arma' id={props.nome}>
        <Arma imagem={soco} nome='Soco'/>
        <Arma imagem={arco} nome='Arco'/>
        <Arma imagem={espada} nome='Espada'/>
      </div>

    </div>
  )
}

function Botao(props){
  return(
    <button className='calcular' >
      {props.valor}
    </button>
  )
}


class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  clicarPersonagem(personagemSelecionado) {
    this.setState({
      personagem: personagemSelecionado
    })  
  }

  clicarArma(armaSelecionada){
    this.setState({
      arma: armaSelecionada
    })
  }

  calcularDano(){
    let personagem = this.state.personagem;
    let arma = this.state.arma;
      if (personagem && arma){
        let vida = 0;
        let dano = 0;
        if ( personagem === 'Goblin'){
          vida = 30;
        }else if (personagem === 'Orc'){
          vida = 50;
        }else{
          vida = 60;
        }

        if (arma === 'Soco'){
          dano = 10;
        }else if(arma === "Arco"){
          dano = 20;
        }else{
          dano = 40;
        }

        let resultado = vida - dano;
        let resposta = '';
        if (resultado > 0){
          resposta = "Você derrotou o personagem"
        } else{
          resposta = "Você perdeu"
        }

        this.setState({
          resposta: resposta
        })

      }
  }



render() { 
   
  return (
    <div id="principal">
      <div id="titulo">
          <h1>Calculadora de Dano</h1>
      </div>

      <div id="selecione">
          <strong><p>Selecione o personagem</p></strong>
      </div>

      <div id="elemento-personagem">
        
        <Personagem img={orc} nome='Orc' estaSelecionado={this.state.personagem === 'Orc'} executarClique={(monstro) => this.clicarPersonagem(monstro)}/>
        <Personagem img={goblin} nome='Goblin' estaSelecionado={this.state.personagem === 'Goblin'} executarClique={(monstro) => this.clicarPersonagem(monstro)}/>
        <Personagem img={feiticeira} nome='Feiticeira' estaSelecionado={this.state.personagem === 'Feiticeira'} executarClique={(monstro) => this.clicarPersonagem(monstro)}/>
           
      </div>

      <div id="selecao-de-arma">
          <strong><p>Selecione uma arma</p></strong>
      </div>

      <div id="armas">
          
        <Arma imagem={soco} nome='Soco' estaSelecionado={this.state.arma === 'Soco'} executarClique={(armas) => this.clicarArma(armas)}/>
        <Arma imagem={arco} nome='Arco' estaSelecionado={this.state.arma === 'Arco'} executarClique={(armas) => this.clicarArma(armas)}/>
        <Arma imagem={espada} nome='Espada' estaSelecionado={this.state.arma === 'Espada'} executarClique={(armas) => this.clicarArma(armas)}/>
     
      </div>

      <div>
          <button onClick={ () => this.calcularDano()} id="botao" type="button" value="calcularDano" className="button">Calcular dano</button>
          <h3>{this.state.resposta}</h3>
      </div>

    </div>

)

};

}



ReactDOM.render(
  <Calculadora />,  document.getElementById('root')
);