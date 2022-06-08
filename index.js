(async () => {
    const db = require('./db')

    // CREATE USUÁRIO
    console.log('INSERT INTO cliente');
    const result = await db.insertcli({cli_nome: 'Rodrigo', cli_idade: 21, cli_uf: 'SP'});
    console.log(result);
    console.log('Inserido com sucesso! \n' )

    // UPDATE USUÁRIO
    console.log('UPDATE INTO cliente');
    const result2 = await db.updatecli(1, {cli_nome: 'Alice', cli_idade: 22, cli_uf: 'MG'}) 
    console.log(result2);
    console.log('Atualizado com sucesso! \n' )

    // READ USUÁRIO
    console.log('SELECT * FROM cliente');
    const usuario1 = await db.selectclis();
    console.log(usuario1);
    console.log('Consulta com sucesso! \n' )
    
    // DELETE USUÁRIO
    console.log('DELETE FROM cliente');
    const result3 = await db.deletecli(4) 
    console.log(result3);
    console.log('Deletado com sucesso! \n' )

    // READ USUÁRIO
    console.log('SELECT * FROM cliente');
    const usuario = await db.selectclis();
    console.log(usuario);
    console.log('Consulta com sucesso! \n' )

    // CREATE PEDIDO
    console.log('INSERT INTO pedido');
    const result4 = await db.insertRequest ({ped_nome: 'PC gamer', ped_preco: 1700.00, ped_categoria: 'Eletronicos'});
    console.log(result4);
    console.log('Inserido com sucesso! \n' )

    // UPDATE PEDIDO
    console.log('UPDATE INTO pedido');
    const result5 = await db.updateRequest(1, {ped_nome: 'Boneca', ped_preco: 150.00, ped_categoria: 'brinquedos'}) 
    console.log(result5);  
    console.log('Atualizado com sucesso! \n' ) 
    
    // READ PEDIDO
    console.log('SELECT * FROM pedido');
    const pedido = await db.selectRequests();
    console.log(pedido);
    console.log('Consulta com sucesso! \n' )

    // DELETE PEDIDO
    console.log('DELETE FROM pedido');
    const result6 = await db.deleteRequest(4) 
    console.log(result6);
    console.log('Deletado com sucesso! \n' )

}) ();
