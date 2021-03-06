class Cliente {
    constructor(id, {nombre, apellido, empresa, email}){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.empresa = empresa;
    }
}

const clientesDB = {}

// resolvers bring the result of querys, matations, etc.
const resolvers = {
    getCliente : ({id}) => {
        return new Cliente(id, clientesDB[id]);
    },
    crearCliente : ({input}) => {
        const id = require('crypto').randomBytes(10).toString('hex');
        clientesDB[id] = input;
        return new Cliente(id, input);
    }
};

export default resolvers;