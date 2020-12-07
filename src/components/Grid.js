import React from 'react';

import Data from "../assets/json/data.json";
import {
    PieChart, Pie, Cell, Tooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#e5d8', '#ffe280'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    {`${(percent * 100).toFixed(0)}%`}
    </text>
);
};

class TablaNueva extends React.Component {
    
    passElement = (dato) => {
        this.props.pasame(dato);
    }

    sumarElementos(acumulador, valorActual) {
        return acumulador + valorActual;
    }

    render() {
        let totalTotal = 0, totalUnoCuatro = 0, totalCinco = 0, totalSeis = 0, totalSiete = 0, totalOcho = 0, totalNueve = 0;
        let nuevosDatos = this.props.nuevoDato;
        if (nuevosDatos.length === 0) {
            nuevosDatos = new Array();
        }
        return (
            <div>
                <table>
                {/* <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Municipio</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 - 4 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
                    </tr>
                </thead> */}
                <tbody>
                    {
                        nuevosDatos.map((dato, index) => {
                            let colorNuevo = (index % 2) ? "bg-green-300" : "bg-red-300";
                            let sumaUnoCuatro = dato.un_integrante + dato.dos_integrantes + dato.tres_integrantes + dato.cuatro_integrantes;
                            totalTotal += dato.total;
                            totalUnoCuatro += sumaUnoCuatro;
                            totalCinco += dato.cinco_integrantes;
                            totalSeis += dato.seis_integrantes;
                            totalSiete += dato.siete_integrantes;
                            totalOcho += dato.ocho_integrantes;
                            totalNueve += dato.nueveymas_integrantes;

                            const dataPastel = [
                                { name: '1-4 integrantes', value: totalUnoCuatro},
                                { name: '5 integrantes', value: totalCinco},
                                { name: '6 integrantes', value: totalSeis},
                                { name: '7 integrantes', value: totalSiete},
                                { name: '8 integrantes', value: totalOcho},
                                { name: '9 integrantes', value: totalNueve},
                            ];

                            const dataBarras = [
                            {
                                name: '1-4 integrantes', total: totalUnoCuatro
                            },
                            {
                                name: '5 integrantes', total: totalCinco
                            },
                            {
                                name: '6 integrantes', total: totalSeis
                            },
                            {
                                name: '7 integrantes', total: totalSiete
                            },
                            {
                                name: '8 integrantes',total: totalOcho
                            },
                            {
                                name: '9 integrantes', total: totalNueve
                            },
                            ];

                            return (
                                <div>
                                    <tr>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Municipio</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 - 4 integrantes</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
                                    </tr>
                                    <tr onClick={() => this.passElement(dato)} className={colorNuevo + " lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 cursor-pointer"} key={dato.id}>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.id}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.total}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nom_mun}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{sumaUnoCuatro}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cinco_integrantes}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.seis_integrantes}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.siete_integrantes}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.ocho_integrantes}</td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nueveymas_integrantes}</td>
                                    </tr>
                                    
                                    <div className="flex items-center justify-between">
                                        <PieChart width={400} height={400}>
                                            <Pie
                                            data={dataPastel}
                                            cx={200}
                                            cy={200}
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={150}
                                            fill="#8884d8"
                                            dataKey="value"
                                            >
                                            {
                                                dataPastel.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                            }
                                            </Pie>
                                            <Tooltip />
                                        </PieChart>
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={dataBarras}
                                            margin={{
                                            top: 5, right: 30, left: 20, bottom: 5,
                                            }}
                                            barSize={20}
                                            >
                                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                                            <YAxis /> 
                                            <Tooltip />
                                            <Legend />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Bar dataKey="total" fill="#0088FE" background={{ fill: '#eee' }} />
                                        </BarChart>
                                    </div>
                                </div>
                            );
                        })
                    }
                </tbody>
            </table>
            <tfoot>
            <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 - 4 integrantes</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
            </tr>
            <tr className="bg-green-500 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">Totales</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalTotal === 0 ? "" : totalTotal}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalUnoCuatro === 0 ? "" : totalUnoCuatro}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalCinco === 0 ? "" : totalCinco}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalSeis === 0 ? "" : totalSeis}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalSiete === 0 ? "" : totalSiete}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalOcho === 0 ? "" : totalOcho}</td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{totalNueve === 0 ? "" : totalNueve}</td>
            </tr>
        </tfoot>
        </div>
        );
    }
}

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tablaDatos: Array().fill(null),
            bandera: true,
        }
    }

    deleteElement = (dato) => {
        let borrarElemento = this.state.tablaDatos;
        let indice = borrarElemento.findIndex(id => id.id === dato.id);
        borrarElemento.splice(indice, 1);
        this.setState({
            tablaDatos: borrarElemento
        });
    }

    handleClick(dato, i) {
        let historia = this.state.tablaDatos.slice();
        if (!historia.length) {
            this.setState({
                tablaDatos: [
                    ...this.state.tablaDatos,
                    dato
                ],
            });
        }
        else {
            let comprueba = historia.find(id => id.id === i);
            if (comprueba !== undefined && comprueba.id === i) {
                return;
            }
            else {
                this.setState({
                    tablaDatos: [
                        ...this.state.tablaDatos,
                        dato
                    ]
                });
            }
        }
    }

    render() {
        return (
            <div className="grid grid-cols-12  bg-grisClaro">
                <div className="col-span-12 overflow-x-auto p-7 bg-guinda">
                    <table>
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">ID</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Clave entidad</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Entidad</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Clave municipio</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Municipio</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Total</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">1 integrante</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">2 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">3 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">4 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">5 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">6 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">7 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">8 integrantes</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">9 o más integrantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Data.map((dato, index) => {
                                    let i = dato.id;
                                    let color = (index % 2) ? "bg-green-50" : "bg-white";
                                    return (
                                        <tr onClick={() => this.handleClick(dato, i)} className={color + " lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 cursor-pointer"} key={dato.id}>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.id}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cve_ent}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nom_ent}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cve_mun}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nom_mun}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.total}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.un_integrante}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.dos_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.tres_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cuatro_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.cinco_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.seis_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.siete_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.ocho_integrantes}</td>
                                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{dato.nueveymas_integrantes}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-span-12 bg-dorado overflow-x-auto p-7">
                    <TablaNueva nuevoDato={this.state.tablaDatos} pasame={this.deleteElement} />
                </div>
            </div>
        );
    }
}

export default Grid;