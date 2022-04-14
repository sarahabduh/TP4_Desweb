import React from "react";

class ShowDataTable extends React.Component {
    render() {
        return(
            <div class="m-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th width="300px">Label</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nama</td>
                            <td>{ this.props.dataName }</td>
                        </tr>
                         <tr>
                            <td>Tanggal Lahir</td>
                            <td>{ this.props.dataBirthdate }</td>
                        </tr>
                        <tr>
                            <td>Jenis Kelamin</td>
                            <td>{ this.props.dataGender }</td>
                        </tr>
                        <tr>
                            <td>Hobi</td>
                            <td>{ this.props.dataHobi }</td>
                        </tr>
                        <tr>
                            <td>Agama</td>
                            <td>{ this.props.dataAgama }</td>
                        </tr>
                        <tr>
                            <td>Pesan</td>
                            <td>{ this.props.dataPesan }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ShowDataTable;