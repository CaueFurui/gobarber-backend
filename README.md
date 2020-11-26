# Recuperação de senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF (Requisitos Não Funcionais)**

- Utilizar Mailtrap para testar envios em ambiente de dev
- Utilizar o Amazon SES para envios em produção
- O envio de emails deve acontecer em segundo plano

**RN (Regras de Negócio)**

- O link enviado por e-mail para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar sua senha

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha

**RN**

- O usuário não pode alterar seu email para um email já utilizado por outro usuário
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache
- As notificações devem ser armazenadas no MongoDB
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre as 8h ás 18h (Primeiro ás 8h, último as 17h)
- O usuário não pode agendar em um horário já ocupado
- O usuário não pode agendar em um horário que já passou
- O usuário não pode agendar serviços consigo mesmo
