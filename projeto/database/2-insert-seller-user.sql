-- Inserir dados na tabela User
INSERT INTO public."User" (email, password, cellphone, cuid, "isNewUser")
VALUES
  ('davi@email.com', '123456', '(41) 66666-6666', uuid_generate_v4(), true),
  ('bernardo@email.com', '123456', '(41) 77777-7777', uuid_generate_v4(), true),
  ('math@email.com', '1234563', '(41) 88888-8888', uuid_generate_v4(), true),
  ('naty@email.com', '123456', '(41) 99999-9999', uuid_generate_v4(), true),
  ('thiago@email.com', '123456', '(41) 10101-0101', uuid_generate_v4(), true);

-- Inserir dados na tabela Address (Endereços)
INSERT INTO public."Address" ("idUser", cep, logradouro, uf, numero, complemento)
VALUES
  (6, '11111-111', 'Rua A', 'SP', '123', ''),
  (7, '22222-222', 'Rua B', 'RJ', '456', 'Casa Azul'),
  (8, '33333-333', 'Rua C', 'SC', '789', 'Sobrado B'),
  (9, '44444-444', 'Rua D', 'MG', '567', '4º Andar'),
  (10, '55555-555', 'Rua E', 'BA', '678', 'Casa dos Sonhos');

-- Inserir dados na tabela Seller
INSERT INTO public."Seller" ("idUser", "idCarDealerShip", "sellerName", "cpfSeller")
VALUES
  (6, 1, 'Davi Seller', '111.111.111-11'),
  (7, 2, 'Bernardo Seller', '222.222.222-22'),
  (8, 3, 'Math Seller', '333.333.333-33'),
  (9, 4, 'Naty Seller', '444.444.444-44'),
  (10, 5, 'Thiago Seller', '555.555.555-55');
