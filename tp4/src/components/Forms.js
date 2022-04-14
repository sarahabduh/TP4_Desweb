import React from "react";
import ShowDataTable from "./ShowDataTable";

class Forms extends React.Component {

    constructor(){
        super();
        this.state={
            showComponent : false,
        };
    }

    buttonClick(e){
        e.preventDefault();
        this.setState({
            showComponent: true,
        })
    }

    render() {
        return(
            <div className="container">
                <div className="content">
                <h2>Biodata</h2>
                <form>
                    <label htmlFor="name">Nama Lengkap</label><br />
                    <input type="text" id="name" name="name" onChange={this.props.eventChangeName}/>
                    <br />

                    <label htmlFor="birthdate">Tanggal Lahir</label><br />
                    <input type="date" id="birthdate" name="birthdate" onChange={this.props.eventChangeBirthdate} />
                    <br />

                    <label htmlFor="gender">Jenis Kelamin</label><br />
                    <input type="radio" id="perempuan" name="gender" value="Perempuan" onChange={this.props.eventChangeGender} />
                    <label htmlFor="perempuan">Perempuan</label>
                    <input type="radio" id="laki-laki" name="gender" value="Laki-laki" onChange={this.props.eventChangeGender} />
                    <label htmlFor="laki-laki">Laki-laki</label>
                    <input type="radio" id="other" name="gender" value="Other" onChange={this.props.eventChangeGender} />
                    <label htmlFor="other">Other</label><br />

                    <label htmlFor="hobi">Hobi</label><br />
                    <input type="checkbox" id="hobi1" name="hobi" value="Membaca" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi1">Membaca</label>
                    <input type="checkbox" id="hobi2" name="hobi" value="Ngoding" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi2">Ngoding</label>
                    <input type="checkbox" id="hobi3" name="hobi" value="Main Game" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi3">Main Game</label>
                    <input type="checkbox" id="hobi4" name="hobi" value="Dengerin Lagu" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi4">Dengerin Lagu</label>
                    <input type="checkbox" id="hobi5" name="hobi" value="Nonton" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi5">Nonton</label>
                    <input type="checkbox" id="hobi6" name="hobi" value="Other" onChange={this.props.eventChangeHobi} />
                    <label htmlFor="hobi6">Other</label><br />

                    <label htmlFor="agama">Agama</label>
                    <select id="agama" name="agama" onChange={this.props.eventChangeAgama}>
                    <option value="Islam">Islam</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Protestan">Protestan</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Konghucu">Konghucu</option>
                    <option value="Other">Other</option>
                    </select><br />
                    
                    <label>Pesan</label>
                    <textarea id="pesan" onChange={this.props.eventChangePesan} /><br />

                    <button onClick={this.buttonClick.bind(this)}> Submit </button>
                </form>
                {this.state.showComponent && <ShowDataTable 
                dataName = {this.props.dataName}
                dataBirthdate = {this.props.dataBirthdate}
                dataGender = {this.props.dataGender}
                dataHobi = {this.props.dataHobi}
                dataAgama = {this.props.dataAgama}
                dataPesan = {this.props.dataPesan}/>}
                </div>
            </div>
        );
    }
}

export default Forms;