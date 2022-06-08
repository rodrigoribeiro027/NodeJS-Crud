const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !== 'desconectado') 
        return global.connection;
    

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'senha',
        database: 'crud'
    });

    console.log('Banco de Dados Conectado!');;
    global.connection = connection;
    return global.connection;
}

// CREATE USUÁRIO
async function insertcli(cli) {
    const conn = await connect();
    const sql = 'INSERT INTO cliente (cli_nome, cli_idade, cli_uf) VALUES (?, ?, ?);';
    const values = [cli.cli_nome, cli.cli_idade, cli.cli_uf];
    return await conn.query(sql, values);
}

// READ USUÁRIO
async function selectclis() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM cliente;');
    return rows;
};

// UPDATE USUÁRIO
async function updatecli(id, cli) {
    const conn = await connect();
    const sql = 'UPDATE cliente SET cli_nome = ?, cli_idade = ?, cli_uf = ? WHERE cli_id = ?;';
    const values = [cli.cli_nome, cli.cli_idade, cli.cli_uf, id];
    return await conn.query(sql, values);
};

// DELETE USUÁRIO
async function deletecli(id) {
    const conn = await connect();
    const sql = 'DELETE FROM cliente WHERE cli_id = ?;';
    return await conn.query(sql, [id]);
}; 


// CREATE PEDIDO
async function insertRequest(req) {
    const conn = await connect();
    const sql = 'INSERT INTO pedido (ped_nome, ped_preco, ped_categoria) VALUES (?, ?, ?);';
    const values = [req.ped_nome, req.ped_preco, req.ped_categoria];
    return await conn.query(sql, values);
}

// READ PEDIDO
async function selectRequests() {
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM pedido;');
    return rows;
};

// UPDATE PEDIDO
async function updateRequest(id, req) {
    const conn = await connect();  
    const sql = 'UPDATE pedido SET ped_nome = ?, ped_preco = ?, ped_categoria = ? WHERE ped_id = ?;';
    const values = [req.ped_nome, req.ped_preco, req.ped_categoria, id];
    return await conn.query(sql, values);
};

// DELETE PEDIDO
async function deleteRequest(id) {
    const conn = await connect();
    const sql = 'DELETE FROM pedido WHERE ped_id = ?;';
    return await conn.query(sql, [id]);
}; 

module.exports = { selectclis, insertcli, updatecli, deletecli, insertRequest, selectRequests, updateRequest, deleteRequest }