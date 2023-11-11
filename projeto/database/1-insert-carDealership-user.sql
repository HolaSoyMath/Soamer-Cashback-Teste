INSERT INTO public."User" (email, password, cellphone, cuid)
VALUES
  ('user1@fantasialoja1.com', '123456', '(41) 11111-1111', uuid_generate_v4()),
  ('user2@fantasialoja2.com', '123456', '(41) 22222-2222', uuid_generate_v4()),
  ('user3@fantasialoja3.com', '123456', '(41) 33333-3333', uuid_generate_v4()),
  ('user4@fantasialoja4.com', '123456', '(41) 44444-4444', uuid_generate_v4()),
  ('user5@fantasialoja5.com', '123456', '(41) 55555-5555', uuid_generate_v4());

INSERT INTO public."Address" ("idUser", cep, logradouro, uf, numero, complemento)
VALUES
  (1, '12345-678', 'Rua das Flores', 'SP', '123', ''),
  (2, '23456-789', 'Avenida dos Pássaros', 'RJ', '456', 'Casa Azul'),
  (3, '34567-890', 'Travessa da Praia', 'SC', '789', 'Sobrado B'),
  (4, '45678-901', 'Alameda das Árvores', 'MG', '567', '4º Andar'),
  (5, '56789-012', 'Praça Central', 'BA', '678', 'Casa dos Sonhos');

INSERT INTO public."CarDealerShip" ("idUser", cnpj, "razaoSocial", "nomeFantasia")
VALUES
  (1, '12.345.678/0001-00', 'AutoTopia Veículos', 'AutoTopia Veículos'),
  (2, '12.345.678/0001-01', 'Rodas & Motores', 'Rodas & Motores'),
  (3, '12.345.678/0001-02', 'CarroShow Center', 'CarroShow Center'),
  (4, '12.345.678/0001-03', 'Garagem dos Sonhos', 'Garagem dos Sonhos'),
  (5, '12.345.678/0001-04', 'Estrada dos Automóveis', 'Estrada dos Automóveis');


