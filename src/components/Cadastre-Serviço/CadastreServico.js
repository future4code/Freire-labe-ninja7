import React from "react";
import axios from "axios";
import './index.css';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Header from "../Home/header/index";
import Footer from "../Home/footer/index";
  const animatedComponents = makeAnimated();

const options = [
  { value: "cartão de débito", label: "cartão de débito"},
  { value: "cartão de crédito", label: "cartão de crédito"},
  { value: "paypal", label: "paypal"},
  { value: "boleto", label: "boleto"},
  { value: "pix", label: "pix"},
];

export default class CadastreServico extends React.Component {
  state = {
    titulo: "",
    Descricao: "",
    preco: "",
    pagamento: [],
    data: "",
  };

  onChangeTitulo = (event) => {
    this.setState({
      titulo: event.target.value,
    });
  };

  onChangeDescricao = (event) => {
    this.setState({
      Descricao: event.target.value,
    });
  };

  onChangePreco = (event) => {
    this.setState({
      preco: event.target.value,
    });
  };

  onChangePagamento = (event) => {
    const metodosPagamentos = event.map(metodo =>{
      return metodo.value
      
    })
    
     this.setState({
     pagamento: metodosPagamentos
      
     });
 
  };

  onChangeData = (event) => {
    this.setState({
      data: event.target.value,
    });
  };

  createAPIKey = () => {
    const url = " https://labeninjas.herokuapp.com/auth";

    const body = {
      name: "ninja-freire",
    };
    axios
      .post(url, {
        headers: {
          Authorization: "7d95ba58-9060-4f89-9805-67c14d11e93d",
        },
      })

      .then((resposta) => {
        alert("Serviço cadastrado(a) com sucesso");
        this.setState({
          titulo: "",
          Descricao: "",
          preco: "",
          pagamento: "",
          data: "",
        });
      })
     

      .catch((erro) => {
        alert(erro.response.data);
      });
  };

  createJob = () => {
    const url = "https://labeninjas.herokuapp.com/jobs";

    const body = {
      title: this.state.titulo,
      description: this.state.Descricao,
      price: +this.state.preco,
      paymentMethods: this.state.pagamento,
      dueDate: this.state.data,
    };
   
    axios
      .post(url, body, {
        headers: {
          Authorization: "7d95ba58-9060-4f89-9805-67c14d11e93d",
        },
      }).then((resposta) => {
        alert("Serviço cadastrado com sucesso");
        this.setState({
          titulo: "",
          Descricao: "",
          preco: "",
          pagamento: [],
          data: "",
        });
      })
      
      .catch((erro) => {
        console.log(erro.response);
      });
  };

  pagamento=(event)=>{
    const valor =[...this.state.paymentMethods.event.target.value]
    this.setState({
      paymentMethods:valor
    })
  }
  
   

  render() {
    console.log(this.state.pagamento);
    return (
      <div>
        <Header 
            irParaHome={this.props.irParaHome}
			      irParaContratarUmNinja={this.props.irParaContratarUmNinja}
			      irParaQueroSerUmNinja={this.props.irParaQueroSerUmNinja}
            irParaCarrinho={this.props.irParaCarrinho}/>
        <div className="container">

        <h1 className="titulo-cadastre"> Cadastre o seu serviço </h1>

        <input
          className="input-cadastre"
          value={this.state.titulo}
          onChange={this.onChangeTitulo}
          placeholder="título"
        />

        <input
          className="input-cadastre"
          value={this.state.Descricao}
          onChange={this.onChangeDescricao}
          placeholder="Descrição"
        />

        <input
          className="input-cadastre"
          value={this.state.preco}
          onChange={this.onChangePreco}
          placeholder="Preço"
          type="number"
        />
 
        <Select
        onChange={this.onChangePagamento }
        components={animatedComponents}
        className="select"
        isMulti
        options={options}
        closeMenuOnSelect={false}
        />
 
        <input
          className="input-cadastre"
          placeholder="Prazo de Serviço"
          type="date"
          value={this.state.data}
          onChange={this.onChangeData}
        />
        {/* Correção do botão */}
        <button onClick={()=>this.createJob()} className="button-finalizar-cadastro"> Cadastrar Serviço </button>

        </div>

        <Footer></Footer>
      </div>
    );
  }
}
