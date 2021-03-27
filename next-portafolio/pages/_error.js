import Layout from "../components/Layout";

const _error = ({statusCode}) => {

    return(
        <Layout>
            {
                statusCode ? <p className="text-center">No se pudo cargar la página: Código de estado {statusCode}</p>
                : <p className="text-center">No se pudo cargar la página</p>
            }
            
        </Layout>
    )
  
}

export default _error;
