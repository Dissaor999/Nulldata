import React {Component} from 'react';
import ReactDOM from 'react-dom';

class Tabla extends component {
  constructor() {
    super();
    //Initialize the state in the constructor
    this.state = {
        empleados: [],
      }
  }

  componentDidMount() {
  /* fetch API in action */
  fetch('/empleados')
      .then(response => {
          return response.json();
      })
      .then(empleados => {
          //Fetched product is stored in the state
          this.setState({ empleados });
      });
  }

  renderEmpleados() {
    return this.state.empleados.map(empleado => {
        return (
            <tr>
              <td>{empleado.name}</td>
              <td>{empleado.email}</td>
              <td>{empleado.charge}</td>
              <td>{empleado.direccion}</td>
              <td>.</td>
            </tr>
        );
    })
  }

  render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Tabla de empleados</div>

                            <div className="card-body">
                              <table>
                                <thead>
                                  <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Puesto</th>
                                    <th>Direccion</th>
                                    <th>Skills</th>
                                  </tr>
                                </thead>
                              </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

  }

}
// function Tabla() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Tabla de empleados</div>
//
//                         <div className="card-body">
//                           <table>
//                             <thead>
//                               <tr>
//                                 <th>Nombre</th>
//                                 <th>Email</th>
//                                 <th>Puesto</th>
//                                 <th>Direccion</th>
//                                 <th>Skills</th>
//                               </tr>
//                             </thead>
//                           </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

export default Tabla;

if (document.getElementById('tabla')) {
    ReactDOM.render(<Tabla />, document.getElementById('tabla'));
}
