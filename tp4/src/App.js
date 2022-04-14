import React from "react";
import Forms from "./components/Forms";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthdate: '',
      gender: '',
      hobi: '',
      agama: 'Islam',
      pesan: '',
    }

    this.changeNameValue = this.changeNameValue.bind(this);
    this.changeBirthdateValue = this.changeBirthdateValue.bind(this);
    this.changeGenderValue = this.changeGenderValue.bind(this);
    this.changeHobiValue = this.changeHobiValue.bind(this);
    this.changeAgamaValue = this.changeAgamaValue.bind(this);
    this.changePesanValue = this.changePesanValue.bind(this);
  }

  changeNameValue(e) {
    this.setState((state, props) => ({
      name: e.target.value,
    }))
  }

  changeBirthdateValue(e) {
    this.setState((state, props) => ({
      birthdate: e.target.value,
    }))
  }

  changeGenderValue(e) {
    this.setState((state, props) => ({
      gender: e.target.value,
    }))
  }

  changeHobiValue(e) {
    this.setState((state, props) => ({
      hobi: e.target.value,
    }))
  }

  changeAgamaValue(e) {
    this.setState((state, props) => ({
      agama: e.target.value,
    }))
  }

  changePesanValue(e) {
    this.setState((state, props) => ({
      pesan: e.target.value,
    }))
  }

  render() {
    return(
      <div>
        <Forms 
          dataName = {this.state.name}
          dataBirthdate = {this.state.birthdate}
          dataGender = {this.state.gender}
          dataHobi = {this.state.hobi}
          dataAgama = {this.state.agama}
          dataPesan = {this.state.pesan}
          eventChangeName = {this.changeNameValue}
          eventChangeBirthdate = {this.changeBirthdateValue}  
          eventChangeGender = {this.changeGenderValue}  
          eventChangeHobi = {this.changeHobiValue}  
          eventChangeAgama = {this.changeAgamaValue}  
          eventChangePesan = {this.changePesanValue}
        />
      </div>
    )
  }
}

export default App;
