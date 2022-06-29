import React from "react";
import axios from "axios";
import './index.css';
import Header from "../Home/Header";
import Footer from "../Home/Footer";



export default class CadastreServico extends React.Component {
  state = {
    titulo: "",
    Descricao: "",
    preco: "",
    pagamento: "",
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
    this.setState({
      pagamento: event.target.value,
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
      price: this.state.preco,
      paymentMethods: this.state.pagamento,
      dueDate: this.state.data,
    };
    console.log(body);
    axios
      .post(url, body, {
        headers: {
          Authorizastion: "7d95ba58-9060-4f89-9805-67c14d11e93d",
        },
      })

      .then((resposta) => {
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
        alert(erro.response);
      });
  };
  pagamento = (event)=> {
    const valor =[...this.state.paymentMethods.event.target.value]
    this.setState({
      paymentMethods:valor
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
        <h1> Cadastre o seu serviço </h1>

        <br />

        <input
          value={this.state.titulo}
          onChange={this.onChangeTitulo}
          placeholder="título"
        />

        <input
          value={this.state.Descricao}
          onChange={this.onChangeDescricao}
          placeholder="Descrição"
        />

        <input
          value={this.state.preco}
          onChange={this.onChangePreco}
          placeholder="Preço"
          type="number"
        />

        <select
          
          value={this.state.pagamento}
          multiple
          onChange={this.onChangePagamento}
        >
           <option value="cartão de débito"> Cartão de Débito </option>
           <option value=" cartão de crédito"> Cartão de Crédito </option>
           <option value="paypal"> Paypal </option>
           <option value="boleto"> Boleto </option>
           <option value="pix"> Pix </option>
        </select>

        <input
          placeholder="Prazo de Serviço"
          type="date"
          value={this.state.data}
          onChange={this.onChangeData}
        />

        <button onClick={this.createJob}> Cadastrar Serviço </button>

        </div>

        <Footer></Footer>
      </div>
    );
  }
}
