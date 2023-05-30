//Sidebar Imports
import {
  UilClinicMedical,
  UilShop,
  UilStoreSlash,
} from "@iconscout/react-unicons";
import {crearCliente} from "../../../Api/apiAddress";
import FormEliminar from "./FormEliminar/FormEliminar";
import FormagregarCliente from "./FormagregarCliente/FormagregarCliente";

const parametros = [
    { field: 'id', label: 'Id', type: 'number' },
    { field: 'negocio', label: 'Negocio', type: 'text' },
    /*{ field: 'duenio', label: 'Dueño', type: 'select', options: [
      { label: 'Masculino', value: 'masculino' },
      { label: 'Femenino', value: 'femenino' },
      { label: 'Otro', value: 'otro' },
    ] },*/
    { field: 'duenio', label: 'Dueño', type: 'text'},
    { field: 'direccion', label: 'Direccion', type: 'text'},
    { field: 'telefono', label: 'Telefono', type: 'number' },
    { field: 'barrio', label: 'Barrio', type: 'text' },
  ];

export const CardsData = [
  {
    title: "Agrega Clientes",

    color: {
      backGround: "rgb(252, 192, 67 )",
      boxShadow: "1px 3px 9px #330066",
    },
    png: UilClinicMedical,
    component: <FormagregarCliente parametros={parametros} crearCliente={crearCliente}  />,
  },
  {
    title: "Modificar Cliente",
    color: {
      backGround: "rgb(60, 236, 255)",
      boxShadow: "1px 3px 9px #993366",
    },
    png: UilShop,
    component: <FormagregarCliente parametros={parametros} crearCliente={crearCliente}  />,
   
  },
  {
    title: "Eliminar Cliente",
    color: {
      backGround: "rgb(252, 104, 92 )",
      boxShadow: "1px 3px 9px #663300",
    },
    png: UilStoreSlash,
    component: <FormEliminar />,
  },
];



