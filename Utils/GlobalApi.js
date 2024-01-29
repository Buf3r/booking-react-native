import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-us-west-2.hygraph.com/v2/clrdeb2py298j01wamnvy55dq/master"

const getSliders=async()=>{

    const query = gql`
    query getSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `
  const result = await request(MASTER_URL, query);
    return result;
  }

const getCate=async()=>{
    const query = gql`
    query getCategorias {
        categorias {
          id
          name
          image {
            url
          }
        }
      }
  `
  const result = await request(MASTER_URL, query);
    return result;
  } 

const getServlistado=async()=>{
    const query = gql`
    query getServiciosLista {
      servicios {
        id
        name
        descripcion
        precio
        sede
        image {
          url
        }
        categorias {
          name
        }
      }
    }  
  `
  const result = await request(MASTER_URL, query);
    return result;
} 

const getServiciosCategoria=async(categorias)=>{
    const query = gql`
    query cate {
          servicios(where: {categorias_some: {name_contains:"`+categorias+`"}}) {
            id
    name
    sede
    precio
    descripcion
    categorias {
      name
    }
    image {
      url
    }
  }
}     
  `
  const result = await request(MASTER_URL, query);
    return result;
}

//al fin era ServicioId
const createAgenda = async (data) => {
  const mutacionquery = gql`
    mutation MyMutation {
      createAgenda(
        data: {
          agendarStatus: en_progreso,
          servicio: { connect: { id: "${data.ServiciosId}" } }, 
          hora: "${data.hora}",
          fecha: "${data.fecha}",
          usuario: "${data.usuario}",
          usuarioEmail: "${data.usuarioEmail}",
          

        }
      ) {
        id
      }
      publishManyAgendas(to: PUBLISHED) {
        count
      }
    }
  `;

  const result = await request(MASTER_URL, mutacionquery).catch((error) => {
    console.error("Error al crear la agenda:", error.response?.errors);
    throw error; // Vuelve a lanzar el error para que sea manejado en el nivel superior
  });
  
  return result;
};

const getUser = async (usuarioEmail) => {
  const mutacionquery = gql`
  query GetUser {
    agendas(orderBy: updatedAt_DESC, where: {usuarioEmail: "${usuarioEmail}"}) {
      fecha
      usuarioEmail
      usuario
      agendarStatus
      hora
      id
      servicio {
        id
        image {
          url
        }
        name
        sede
        precio
        descripcion
      }
    }
  }
  `;

  const result = await request(MASTER_URL, mutacionquery);
  return result;
};
const deleteAgenda = async (agendaId) => {
  const mutacionquery = gql`
  mutation DeleteAgenda {
    deleteAgenda(where: { id: "${agendaId}" }) {
      id
    }
    publishManyAgendas(to: PUBLISHED) {
      count
    }
  }
`;

  const result = await request(MASTER_URL, mutacionquery);
  return result;
};



 
export default {
    getSliders,
   getCate,
   getServlistado,
   getServiciosCategoria,
   createAgenda,
   getUser,
   deleteAgenda,
  
   
}

//<Header /> 