# Domínios da Aplicação de Fast Food

Essa documentação apresenta uma visão geral dos diferentes domínios que compõem a aplicação de fast food. Cada domínio representa uma área específica de responsabilidade dentro do sistema, permitindo uma arquitetura clara e modular para a aplicação.

## Domínios Core (Núcleo)

### Domínio: Pedido (Order)

O domínio de Pedido é responsável por gerenciar o processo de criação, modificação e acompanhamento dos pedidos dos clientes.

#### Pedido (Order)

Representa um pedido feito pelo cliente, contendo informações como identificador, lista de itens, status e informações de entrega.

#### ItemPedido (OrderItem)

Representa um item específico incluído no pedido, contendo informações sobre o produto, quantidade e preço.

#### Cliente (Customer)

 Representa o cliente que fez o pedido, com informações como nome, endereço de entrega e detalhes de contato.

### Domínio: Cardápio (Menu)

O domínio de Cardápio é responsável por disponibilizar as opções de alimentos e bebidas oferecidas pela aplicação.

#### Produto (Product)

Representa um item disponível no cardápio, como alimentos e bebidas, com informações sobre o nome, descrição e preço.

#### Categoria (Category)

Representa as categorias de produtos no cardápio, como "Hambúrgueres", "Bebidas", "Sobremesas", etc.

### Domínio: Entrega (Delivery)

O domínio de Entrega cuida da logística da entrega dos pedidos aos clientes.

#### Entregador (Delivery Driver)

Representa o entregador responsável pela entrega dos pedidos, com informações como nome, identificador e status de disponibilidade.

#### RotaEntrega (Delivery Rotue)

Representa a rota de entrega planejada, com informações sobre os pedidos a serem entregues, endereço de entrega e horários estimados.

## Domínios de Suporte

### Domínio: Inventário (Inventory)

O domínio de Inventário é responsável por gerenciar o estoque da aplicação, garantindo que os ingredientes e produtos estejam disponíveis.

#### ItemEstoque (InventoryItem)

Representa um item específico no estoque, contendo informações sobre a quantidade disponível, fornecedor, data de validade, etc.

#### MovimentacaoEstoque (InventoryMovimentation)

 Representa uma movimentação no estoque, seja entrada ou saída de itens, com informações sobre a quantidade, data e motivo.

### Domínio: Fornecedor (Supplier)

O domínio de Fornecedor gerencia informações dos fornecedores, como contato, prazos de entrega e produtos fornecidos.

#### Fornecedor (Supplier)

Representa um fornecedor que fornece produtos para a aplicação, com informações como nome, contato, lista de produtos fornecidos, etc.

### Domínio: Pagamento (Payment)

O domínio de Pagamento trata das transações financeiras e métodos de pagamento aceitos na aplicação.

#### Pagamento (Payment)

Representa um registro de pagamento realizado pelo cliente em um determinado pedido, contendo informações sobre o valor, método de pagamento, data, etc.

## Domínios Genéricos

### Domínio: Usuário (User)

O domínio de Usuário lida com a autenticação, autorização e gerenciamento de dados dos usuários da aplicação.

#### Usuário (User)

Representa um usuário do sistema, podendo ser cliente, entregador ou funcionário, com informações como nome, endereço de entrega, login, etc.

#### Permissão (Permission)

Representa as permissões associadas a um usuário para acessar diferentes funcionalidades da aplicação.

### Domínio: Comunicação (Comunication)

O domínio de Comunicação é responsável por lidar com notificações, e-mails e outras formas de comunicação com os clientes.

#### Notificação (Notification)

Representa uma notificação enviada para um usuário, contendo informações sobre o conteúdo, data de envio e status de leitura.

#### E-mail(Email)

Representa um e-mail enviado para um usuário, contendo informações sobre o assunto, conteúdo, destinatário, etc.

### Avaliação (Review)

O domínio de Avaliação gerencia as avaliações e feedbacks dos clientes sobre a experiência e os produtos.

#### Avaliação

Representa uma avaliação ou feedback fornecido pelo cliente sobre um pedido, contendo informações sobre a nota, comentários e data da avaliação.

#### RespostaAvaliação

Representa uma resposta ou comentário da empresa em resposta a uma avaliação específica do cliente.
