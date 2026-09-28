# PautaViva — Documento de Especificação de Software

**Universidade São Judas Tadeu**
Curso de Bacharelado em Engenharia da Computação

Documento de especificação de software apresentado como modelo didático para a
disciplina de Engenharia da Computação, com a finalidade de exemplificar a
estrutura, o conteúdo e a formatação de uma documentação técnica de projeto de
software conduzido sob metodologia ágil.

**Orientador(a):** Prof(a). Nelson Oliveira Aguiar
São Paulo, 2026

**Equipe de Desenvolvimento**

- Gabriel Xavier Antunes
- Guilherme Amaral da Silva
- Guilherme Previati Oliveira
- João Pedro de Carvalho Gomes
- João Victor dos Santos Silva
- Matheus Saporito Nastari

---

## Resumo

A participação da comunidade em decisões sobre questões locais costuma ocorrer
por meio de canais dispersos, como redes sociais, grupos de mensagens e
reuniões presenciais, dificultando a organização das propostas, os registros
das discussões e a apuração confiável dos resultados. Por conta dessas
questões e levantamentos, foi desenvolvido PautaViva, uma plataforma digital
de participação comunitária para a proposição, discussão, moderação e votação
de pautas locais. O objetivo da plataforma é permitir que usuários cadastrem,
visualizem e discutam pautas relacionadas à sua comunidade, registrando seus
votos de forma autenticada. Tudo isso, ocorrendo de forma segura e organizada.
O sistema também possui um moderador automático, que realiza o bloqueio de
conteúdos impróprios nos comentários antes de sua publicação, para que seja um
ambiente leve e respeitoso. A atualização dos resultados de votação ocorre em
tempo real por meio de WebSocket, garantindo que todos os participantes
conectados visualizem as mudanças de forma instantânea, sem a necessidade de
atualização manual da página. Ao término de cada votação, os resultados são
apresentados em gráficos e disponibilizados para exportação, possibilitando
posterior análise e divulgação. Toda a construção e desenvolvimento do
projeto foi conduzido sob metodologia ágil Scrum. Foram feitos todos os
levantamentos de requisitos funcionais e não funcionais, modelagem do sistema
por meio de diagramas UML e a construção da arquitetura de software. É
desejado que o PautaViva facilite e contribua para toda sociedade, ampliando
a participação cidadã em processos de tomada de decisão local, reduzindo as
barreiras de tempo e mobilidade presentes nos modelos tradicionais de
participação.

**Palavras-chave:** Participação Cidadã. Consulta Pública Digital. Votação em
Tempo Real. WebSocket. Moderação de conteúdo.

## Abstract

Community participation in local decision-making often occurs through
dispersed channels, such as social networks, messaging groups, and in-person
meetings, which complicates the organization of proposals, the recording of
discussions, and the reliable tallying of results. In response to these
challenges, PautaViva was developed—a digital community participation
platform for proposing, discussing, moderating, and voting on local agendas.
The platform's objective is to enable users to register, view, and discuss
topics related to their community, casting their votes in an authenticated
manner within a secure and organized environment. The system also features an
automated moderator that blocks inappropriate content in comments prior to
publication, ensuring a positive and respectful atmosphere. Voting results
are updated in real-time via WebSocket, guaranteeing that all connected
participants see the changes instantly without needing to manually refresh
the page. At the conclusion of each voting period, results are displayed in
charts and made available for export, facilitating subsequent analysis and
disclosure. The entire construction and development of the project were
guided by the Scrum agile methodology. A comprehensive gathering of
functional and non-functional requirements was conducted, alongside system
modeling through UML diagrams and software architecture design. Ultimately,
PautaViva aims to support and benefit society by expanding citizen engagement
in local decision-making processes, effectively reducing the time and
mobility barriers found in traditional participation models.

**Keywords:** Civic Participation. Digital Public Consultation. Real-Time
Voting. WebSocket. Content Moderation.

---

## Sumário

1. [Introdução](#1-introdução)
2. [Requisitos do sistema](#2-requisitos-do-sistema)
3. [Metodologia ágil e gestão do projeto](#3-metodologia-ágil-e-gestão-do-projeto)
4. [Modelagem do sistema](#4-modelagem-do-sistema)
5. [Arquitetura do sistema](#5-arquitetura-do-sistema)
6. [Considerações finais](#6-considerações-finais)
7. [Referências](#referências)

---

## 1 Introdução

### 1.1 Contextualização

A participação da comunidade em decisões sobre questões locais é importante
para que diferentes pessoas possam apresentar suas opiniões e discutir
problemas que afetam o seu dia a dia. Porém, na maioria das vezes as
discussões acontecem por diferentes meios, como redes sociais, grupos de
mensagens ou reuniões presenciais, dificultando a organização das propostas,
das discussões e das votações.

Pensando nisso, este documento descreve a especificação do PautaViva, uma
plataforma digital responsável por centralizar a criação, discussão e votação
de pautas relacionadas à comunidade. O sistema irá permitir que os usuários
criem e visualizem pautas, participem das discussões e registrem seus votos.
Além disso, o sistema contará com um moderador automático para o
gerenciamento dos conteúdos publicados. O sistema também utilizará WebSocket
para permitir a atualização dos resultados das votações em tempo real,
disponibilizando a visualização dos dados em gráficos, possibilitando a
exportação desses resultados.

### 1.2 Justificativa

O desenvolvimento da plataforma se justifica pela possibilidade de unificar
em um único ambiente, de forma organizada e segura, as diferentes etapas do
processo de participação comunitária, desde a criação da pauta até a sua
discussão e votação. O objetivo é facilitar a organização das informações e
permitir que os participantes acompanhem os resultados das votações de
maneira simples e rápida.

Do ponto de vista acadêmico, o desenvolvimento deste projeto também permite
aplicar na prática conhecimentos adquiridos ao longo do curso, como
modelagem orientada a objetos, arquitetura de software, desenvolvimento web,
banco de dados, comunicação em tempo real e gestão ágil de projetos. Além
disso, o projeto permite reunir esses conhecimentos no desenvolvimento de uma
aplicação completa, desde o planejamento e definição dos requisitos até a
implementação e os testes do sistema.

### 1.3 Objetivos

#### 1.3.1 Objetivo geral

Desenvolver o PautaViva, uma plataforma digital de participação comunitária
que permite aos usuários criar, discutir e votar em pautas relacionadas à sua
comunidade, com atualização dos resultados em tempo real e a possibilidade de
visualização e exportação dos resultados.

#### 1.3.2 Objetivos específicos

- Definir os requisitos funcionais e não funcionais necessários para o
  funcionamento do sistema;
- Representar, por meio de diagrama de casos de uso, as interações entre os
  atores e o sistema;
- Desenvolver o cadastro e a autenticação dos usuários, com verificação de
  identidade por CPF ou e-mail;
- Permitir a criação, visualização e discussão de pautas, com moderação
  automática dos comentários publicados;
- Desenvolver e implementar o sistema de votação das pautas, com atualização
  dos resultados em tempo real por meio de WebSocket;
- Organizar o desenvolvimento em um product backlog de histórias de usuário,
  priorizado e distribuído em sprints com datas de entrega definidas;
- Modelar a estrutura estática do sistema por meio de diagrama de classes;
- Modelar o comportamento dinâmico de um dos principais fluxos do sistema
  por meio de diagrama de sequência;
- Definir a arquitetura de software do sistema e as tecnologias associadas a
  cada camada;
- Apresentar os resultados das votações por meio de gráficos e permitir sua
  exportação em CSV e PDF;
- Testar as principais funcionalidades desenvolvidas na plataforma.

---

## 2 Requisitos do sistema

Este capítulo apresenta o levantamento de requisitos do PautaViva, iniciando
pela identificação dos atores e casos de uso do sistema (Seção 2.1), seguida
da listagem dos requisitos funcionais (Seção 2.2), do detalhamento do fluxo
principal, dos fluxos alternativos e das exceções de cada caso de uso (Seção
2.3) e, por fim, dos requisitos não funcionais (Seção 2.4).

### 2.1 Diagrama de casos de uso

A Figura 1 apresenta o diagrama de casos de uso do sistema, elaborado
segundo a notação UML (Unified Modeling Language). Foram identificados três
atores primários — Cidadão, Gestor Público e Moderador — e dois atores
secundários: o Sistema de Moderação Automática, responsável pela triagem de
conteúdo impróprio antes da publicação de comentários, e o Temporizador do
Sistema, responsável por disparar o encerramento automático das votações na
data/hora definida.

> **Figura 1 – Diagrama de casos de uso do PautaViva**
> *(inserir imagem do diagrama)*
> Fonte: elaborado pelos autores (2026)

O caso de uso UC01 (Realizar login) é incluído (`<<include>>`) pelos casos
de uso que exigem autenticação prévia, como votar, comentar, cadastrar pauta
e moderar comentários. O caso de uso UC05 (Comentar pauta) estende sua
execução (`<<extend>>`) ao ator secundário Sistema de Moderação Automática,
que realiza a triagem do conteúdo antes de o comentário chegar à fila de
moderação humana. O encerramento automático da votação (RF07) é uma regra de
negócio disparada pelo Temporizador do Sistema, sem intervenção humana, e por
isso não é representado como um caso de uso próprio, sendo tratado como
requisito funcional e nas seções de arquitetura.

#### 2.1.1 Descrição resumida dos atores

| Ator | Descrição |
| --- | --- |
| Cidadão | Usuário cadastrado que consulta pautas, vota, comenta e pode denunciar comentários impróprios. |
| Gestor Público | Responsável pelo cadastro de pautas e pela exportação dos resultados finais das votações. |
| Moderador | Responsável por aprovar, rejeitar ou remover comentários da fila de moderação, incluindo os denunciados por cidadãos. |
| Sistema de Moderação Automática (secundário) | Realiza a triagem automática de comentários, bloqueando conteúdo impróprio antes da publicação. |
| Temporizador do Sistema (secundário) | Dispara o encerramento automático da votação na data/hora definida. |

### 2.2 Requisitos funcionais

Os requisitos funcionais (RF) descrevem as funcionalidades que o sistema
deve disponibilizar aos usuários. A coluna "Prioridade" segue a
classificação MoSCoW (Essencial, Importante, Desejável), utilizada para
orientar o planejamento das sprints.

| ID | Descrição | Prioridade |
| --- | --- | --- |
| RF01 | O sistema deve permitir que o cidadão se autocadastre, informando e-mail e CPF, com confirmação por e-mail antes da liberação do acesso. | Essencial |
| RF02 | O sistema deve permitir que cidadãos, gestores públicos e moderadores realizem login mediante credenciais e identidade verificada. | Essencial |
| RF03 | O sistema deve permitir que o gestor público cadastre pauta com título, descrição, categoria, data de início e data de término da votação. | Essencial |
| RF04 | O sistema deve permitir que o cidadão consulte e visualize as pautas disponíveis, filtrando por categoria e status (aberta/encerrada). | Essencial |
| RF05 | O sistema deve permitir que o cidadão vote (a favor, contra ou abstenção) em uma pauta uma única vez, mediante identidade verificada. | Essencial |
| RF06 | O sistema deve permitir que o cidadão comente uma pauta, enviando o comentário à triagem automática de conteúdo e, em seguida, à fila de moderação antes da publicação. | Importante |
| RF07 | O sistema deve permitir que o moderador aprove, rejeite ou remova comentários da fila de moderação, avaliando também aqueles denunciados pelos cidadãos. | Importante |
| RF08 | O sistema deve permitir que o cidadão denuncie um comentário publicado, enviando-o para reavaliação do moderador. | Desejável |
| RF09 | O sistema deve exibir painel de resultados com o percentual de votos por opção e o total de participantes, atualizado em tempo real por meio de WebSocket. | Essencial |
| RF10 | O sistema deve encerrar automaticamente a votação na data/hora definida, bloqueando novos votos. | Essencial |
| RF11 | O sistema deve permitir a exportação dos resultados finais de uma pauta encerrada, nos formatos CSV e PDF. | Importante |

### 2.3 Detalhamento dos fluxos dos casos de uso

Esta seção detalha, para cada caso de uso apresentado na Figura 1, o fluxo
principal (sequência de passos executada na ausência de desvios), os fluxos
alternativos (variações válidas do fluxo principal, identificadas pelo código
"FA"), os sub-fluxos (trechos reutilizados por mais de um caso de uso por
meio da relação `<<include>>`, identificados pelo código "SF") e as exceções
(situações de erro que interrompem ou desviam o fluxo, identificadas pelo
código "E"). Essa notação segue a prática usual de especificação de casos de
uso da Engenharia de Software (ex.: COCKBURN, 2000) e complementa os
requisitos funcionais listados na Seção 2.2, detalhando o comportamento
esperado do sistema passo a passo.

#### 2.3.1 UC01 – Cadastrar-se

**Ator(es) principal(is):** Cidadão
**Pré-condições:** O cidadão não possui cadastro ativo no sistema.
**Pós-condições:** Conta criada com situação "Pendente de confirmação" até a
verificação do e-mail.

**Fluxo principal**

1. O cidadão acessa a tela de cadastro.
2. O sistema solicita nome completo, CPF, e-mail e senha.
3. O cidadão preenche os dados e confirma.
4. O sistema valida o formato do CPF e do e-mail informados.
5. O sistema verifica se já existe cadastro ativo com o mesmo CPF ou e-mail.
6. O sistema registra a conta com situação "Pendente de confirmação" e envia
   e-mail de confirmação com link de verificação.
7. O sistema exibe mensagem informando que o cadastro será concluído após a
   confirmação do e-mail.

**Fluxos alternativos**

FA01 – Confirmação do e-mail (fluxo complementar, disparado pelo link
recebido)

1. O cidadão acessa o link de confirmação recebido por e-mail.
2. O sistema valida o token de confirmação.
3. O sistema altera a situação da conta para "Ativa".
4. O sistema redireciona o cidadão para a tela de login.

**Exceções**

- **E01 – CPF ou e-mail já cadastrado** (passo 5): o sistema exibe "CPF ou
  e-mail já cadastrado" e retorna ao passo 3.
- **E02 – Token de confirmação expirado** (FA01, passo 2): o sistema exibe
  "Link de confirmação expirado" e oferece o reenvio de um novo e-mail.
- **E03 – Excesso de tentativas de cadastro a partir do mesmo IP** (passo
  6): o sistema aplica limitação de requisições (rate limiting, RNF03) e
  bloqueia temporariamente novos cadastros a partir do IP de origem.

#### 2.3.2 UC02 – Realizar login

**Ator(es) principal(is):** Cidadão, Gestor Público ou Moderador
**Pré-condições:** O ator deve possuir cadastro com situação "Ativa".
**Pós-condições:** O ator autenticado tem acesso às funcionalidades
compatíveis com o seu perfil.

**Fluxo principal**

1. O ator acessa a tela de login.
2. O sistema solicita e-mail e senha.
3. O ator informa as credenciais e confirma.
4. O sistema valida as credenciais na base de dados.
5. O sistema identifica o perfil do ator (cidadão, gestor público ou
   moderador).
6. O sistema redireciona o ator para a tela inicial correspondente ao seu
   perfil.

**Fluxos alternativos**

FA01 – Recuperação de senha (a partir do passo 3)

- 3.1 O ator seleciona "Esqueci minha senha".
- 3.2 O sistema solicita o e-mail cadastrado.
- 3.3 O sistema envia link de redefinição de senha ao e-mail informado.
- 3.4 Após a redefinição, o fluxo retorna ao passo 1.

**Sub-fluxos**

- **SF01 – Autenticação** – Corresponde aos passos 2 a 5 deste fluxo
  principal. É reutilizado, por relação `<<include>>`, pelos casos de uso
  UC03, UC05, UC06, UC07, UC08, UC09 e UC10, sempre que estes exigirem que o
  ator esteja autenticado antes de prosseguir.

**Exceções**

- **E01 – Credenciais inválidas** (passo 4): o sistema exibe "E-mail ou
  senha inválidos" e retorna ao passo 3.
- **E02 – Conta bloqueada** (passo 4): após 5 tentativas inválidas
  consecutivas, o sistema bloqueia temporariamente a conta por 15 minutos.
- **E03 – Conta pendente de confirmação** (passo 4): o sistema exibe
  "Confirme seu cadastro pelo e-mail enviado antes de acessar" e impede o
  acesso.

#### 2.3.3 UC03 – Cadastrar pauta

**Ator(es) principal(is):** Gestor Público
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Pré-condições:** Gestor público autenticado no sistema.
**Pós-condições:** Pauta registrada com situação "Agendada" ou "Aberta",
conforme a data de início definida.

**Fluxo principal**

1. O gestor público acessa "Cadastrar pauta".
2. O sistema exibe o formulário (título, descrição, categoria, data de
   início e data de término da votação).
3. O gestor público preenche os dados e confirma.
4. O sistema valida a obrigatoriedade dos campos e a consistência entre as
   datas (término posterior ao início).
5. O sistema registra a pauta com situação "Agendada" (data de início
   futura) ou "Aberta" (data de início igual à atual).
6. O sistema exibe mensagem de confirmação do cadastro.

**Fluxos alternativos**

FA01 – Edição de pauta ainda não iniciada (fluxo complementar)

1. O gestor público seleciona uma pauta com situação "Agendada".
2. O sistema permite a edição dos campos, exceto o título após a primeira
   publicação.
3. O fluxo retoma no passo 4 do fluxo principal.

**Exceções**

- **E01 – Datas inconsistentes** (passo 4): o sistema exibe "A data de
  término deve ser posterior à data de início" e retorna ao passo 3.
- **E02 – Campos obrigatórios não preenchidos** (passo 4): o sistema destaca
  os campos pendentes e retorna ao passo 3.

#### 2.3.4 UC04 – Consultar pautas

**Ator(es) principal(is):** Cidadão
**Pré-condições:** Nenhuma — a consulta às pautas é pública, sem exigência
de autenticação.
**Pós-condições:** A lista de pautas correspondente ao filtro informado é
exibida ao cidadão.

**Fluxo principal**

1. O cidadão acessa a área de pautas.
2. O sistema exibe os filtros disponíveis (categoria, status: agendada,
   aberta, encerrada).
3. O cidadão informa os filtros desejados (opcional) e confirma.
4. O sistema consulta a base de dados.
5. O sistema exibe a lista de pautas correspondente, indicando título,
   categoria, status e prazo de votação.
6. O cidadão seleciona uma pauta para visualizar os detalhes.
7. O sistema exibe os detalhes da pauta (descrição completa, período de
   votação, resultado parcial se aberta, e comentários publicados).

**Fluxos alternativos**

FA01 – Consulta sem filtros (a partir do passo 3)

- 3.1 O cidadão avança sem informar filtros.
- 3.2 O sistema exibe todas as pautas, ordenadas pelas mais recentes.
- 3.3 O fluxo retoma no passo 4.

**Exceções**

- **E01 – Nenhum resultado encontrado** (passo 4): o sistema exibe "Nenhuma
  pauta encontrada para os critérios informados" e retorna ao passo 2.

#### 2.3.5 UC05 – Votar em pauta

**Ator(es) principal(is):** Cidadão
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Pré-condições:** Cidadão autenticado; pauta com situação "Aberta"; cidadão
ainda não votou nesta pauta.
**Pós-condições:** Voto registrado, vinculado à pauta e à identidade do
cidadão, sem exposição pública do voto individual; total de votos e
percentuais atualizados.

**Fluxo principal**

1. O cidadão acessa uma pauta com situação "Aberta".
2. O sistema exibe as opções de voto (a favor, contra, abstenção).
3. O cidadão seleciona uma opção e confirma.
4. O sistema executa o sub-fluxo SF01 – Autenticação (UC02), caso a sessão
   não esteja mais válida.
5. O sistema verifica se o cidadão já votou nesta pauta.
6. O sistema registra o voto, associando-o à pauta e à identidade
   verificada do cidadão, sem expor o voto individual publicamente (RNF04).
7. O sistema recalcula os percentuais e o total de participantes e propaga
   a atualização em tempo real, via WebSocket, a todos os clientes
   conectados (RF09, RNF02).
8. O sistema exibe mensagem de confirmação do voto.

**Fluxos alternativos**

— Nenhum fluxo alternativo relevante identificado para este caso de uso.

**Sub-fluxos**

- **SF01 (UC02)** – Autenticação, executada no passo 4 quando a sessão do
  cidadão não está mais válida.

**Exceções**

- **E01 – Voto duplicado** (passo 5): o sistema exibe "Você já votou nesta
  pauta" e cancela a operação (RNF01).
- **E02 – Pauta não está aberta para votação** (passo 1): o sistema exibe
  "Esta pauta não está disponível para votação no momento" e impede o
  acesso à ação.
- **E03 – Falha na propagação em tempo real** (passo 7): o sistema registra
  o voto normalmente e reenvia a atualização aos clientes conectados na
  próxima sincronização, sem bloquear a confirmação ao cidadão.

#### 2.3.6 UC06 – Comentar pauta

**Ator(es) principal(is):** Cidadão
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Ator(es) secundário(s):** Sistema de Moderação Automática
**Pré-condições:** Cidadão autenticado; pauta com situação "Aberta".
**Pós-condições:** Comentário registrado com situação "Em análise" ou
"Publicado", conforme o resultado da triagem automática.

**Fluxo principal**

1. O cidadão acessa uma pauta e seleciona a opção de comentar.
2. O sistema exibe o campo de texto do comentário.
3. O cidadão redige o comentário e confirma o envio.
4. O sistema aciona o ator secundário Sistema de Moderação Automática, por
   meio da relação `<<extend>>`, para triagem do conteúdo (palavras
   impróprias, discurso de ódio, spam).
5. O sistema registra o comentário com situação "Em análise" e o encaminha
   à fila de moderação humana (UC07).
6. O sistema exibe mensagem informando que o comentário será publicado após
   aprovação do moderador.

**Fluxos alternativos**

— Nenhum fluxo alternativo relevante identificado para este caso de uso.

**Sub-fluxos**

- **SF01 (UC02)** – Autenticação, executada como pré-requisito deste caso
  de uso.

**Exceções**

- **E01 – Conteúdo bloqueado automaticamente** (passo 4): o sistema de
  moderação automática identifica conteúdo claramente impróprio, impede o
  envio e exibe "Seu comentário contém conteúdo impróprio e não pôde ser
  enviado".
- **E02 – Pauta não está aberta para comentários** (passo 1): o sistema
  exibe "Esta pauta não está disponível para comentários no momento" e
  impede o acesso à ação.

#### 2.3.7 UC07 – Moderar comentários

**Ator(es) principal(is):** Moderador
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Pré-condições:** Moderador autenticado; existência de comentários com
situação "Em análise" ou denunciados.
**Pós-condições:** Comentário com situação "Publicado", "Rejeitado" ou
"Removido".

**Fluxo principal**

1. O moderador acessa a fila de moderação.
2. O sistema exibe os comentários com situação "Em análise", em ordem
   cronológica.
3. O moderador seleciona um comentário e analisa o conteúdo.
4. O moderador aprova ou rejeita o comentário.
5. O sistema altera a situação do comentário para "Publicado" (aprovado) ou
   "Rejeitado" (rejeitado, não exibido publicamente).
6. O sistema exibe a fila atualizada ao moderador.

**Fluxos alternativos**

FA01 – Tratamento de comentário denunciado (a partir do passo 2)

- 2.1 O moderador acessa a fila de comentários denunciados (originada pelo
  UC08).
- 2.2 O moderador analisa o comentário publicado e a(s) denúncia(s)
  recebida(s).
- 2.3 O moderador decide por manter ou remover o comentário.
- 2.4 O sistema altera a situação para "Removido", caso a decisão seja pela
  remoção, deixando de exibi-lo publicamente.
- 2.5 O fluxo retoma no passo 6 do fluxo principal.

**Exceções**

- **E01 – Comentário já tratado por outro moderador** (passo 3): o sistema
  exibe "Este comentário já foi tratado" e atualiza a fila automaticamente.

#### 2.3.8 UC08 – Denunciar comentário

**Ator(es) principal(is):** Cidadão
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Pré-condições:** Cidadão autenticado; comentário com situação
"Publicado".
**Pós-condições:** Denúncia registrada e comentário encaminhado à fila de
denúncias do moderador (UC07 – FA01).

**Fluxo principal**

1. O cidadão acessa um comentário publicado e seleciona "Denunciar".
2. O sistema exibe os motivos de denúncia disponíveis (conteúdo ofensivo,
   spam, discurso de ódio, outro).
3. O cidadão seleciona o motivo e confirma.
4. O sistema registra a denúncia, associando-a ao comentário e ao cidadão
   denunciante.
5. O sistema encaminha o comentário à fila de denúncias do moderador, caso
   ainda não esteja nela.
6. O sistema exibe mensagem de confirmação do envio da denúncia.

**Fluxos alternativos**

— Nenhum fluxo alternativo relevante identificado para este caso de uso.

**Exceções**

- **E01 – Denúncia duplicada** (passo 4): o sistema exibe "Você já
  denunciou este comentário" e cancela a operação.

#### 2.3.9 UC09 – Acompanhar resultados em tempo real

**Ator(es) principal(is):** Cidadão
**Pré-condições:** Pauta com situação "Aberta" ou "Encerrada".
**Pós-condições:** Cidadão visualiza o percentual de votos por opção e o
total de participantes, atualizados sem necessidade de atualização manual
da página.

**Fluxo principal**

1. O cidadão acessa os detalhes de uma pauta.
2. O sistema estabelece uma conexão WebSocket com o cliente do cidadão.
3. O sistema exibe o painel de resultados com o percentual de votos por
   opção e o total de participantes no momento do acesso.
4. A cada novo voto registrado (UC05) ou ao encerramento da votação (UC11),
   o sistema propaga a atualização a todos os clientes conectados à pauta,
   em até 5 segundos (RNF02).
5. O cidadão visualiza o painel atualizado automaticamente.

**Fluxos alternativos**

FA01 – Perda de conexão em tempo real (a partir do passo 2)

- 2.1 O sistema identifica falha ou indisponibilidade da conexão WebSocket.
- 2.2 O sistema aplica reconexão automática ou, como contingência, consulta
  periódica (polling).
- 2.3 O fluxo retoma no passo 3.

**Exceções**

- **E01 – Pauta ainda não iniciada** (passo 1): o sistema exibe "Esta pauta
  ainda não está aberta para votação" e não exibe o painel de resultados.

#### 2.3.10 UC10 – Exportar resultados

**Ator(es) principal(is):** Gestor Público
**Casos de uso incluídos:** UC02 (SF01 – Autenticação)
**Pré-condições:** Gestor público autenticado; pauta com situação
"Encerrada".
**Pós-condições:** Arquivo com os resultados finais gerado e disponibilizado
para download.

**Fluxo principal**

1. O gestor público acessa uma pauta com situação "Encerrada".
2. O sistema exibe a opção "Exportar resultados".
3. O gestor público seleciona o formato desejado (CSV ou PDF).
4. O sistema consolida os dados finais (percentuais por opção, total de
   participantes e comentários publicados).
5. O sistema gera o arquivo no formato selecionado.
6. O sistema disponibiliza o arquivo para download.

**Fluxos alternativos**

— Nenhum fluxo alternativo relevante identificado para este caso de uso.

**Exceções**

- **E01 – Pauta ainda não encerrada** (passo 1): o sistema exibe "A
  exportação só está disponível após o encerramento da votação" e impede o
  acesso.
- **E02 – Falha na geração do arquivo** (passo 5): o sistema exibe mensagem
  de erro e permite nova tentativa.

#### 2.3.11 UC11 – Encerrar votação automaticamente

**Ator(es) principal(is):** Sistema (processo automático)
**Ator(es) secundário(s):** Temporizador do Sistema
**Pré-condições:** Existência de pauta com situação "Aberta" e data/hora de
término alcançada.
**Pós-condições:** Situação da pauta alterada para "Encerrada"; novos votos
bloqueados; resultados finais consolidados.

**Fluxo principal**

1. O sistema executa, em rotina automática, a verificação periódica das
   pautas com situação "Aberta".
2. O sistema identifica as pautas cuja data/hora de término é igual ou
   anterior à data/hora atual.
3. O sistema altera a situação da pauta para "Encerrada" e bloqueia o
   registro de novos votos.
4. O sistema consolida os resultados finais (percentuais por opção e total
   de participantes).
5. O sistema propaga a atualização final do painel de resultados a todos os
   clientes conectados, via WebSocket (UC09).
6. O sistema disponibiliza a pauta encerrada para exportação de resultados
   (UC10).

**Fluxos alternativos**

— Nenhum fluxo alternativo relevante identificado para este caso de uso.

**Exceções**

- **E01 – Falha na rotina de encerramento** (passo 1): o sistema registra a
  falha em log técnico e reprocessa a verificação na execução seguinte,
  evitando que uma pauta permaneça aberta além do prazo definido.

### 2.4 Requisitos não funcionais

Os requisitos não funcionais (RNF) descrevem restrições e atributos de
qualidade do sistema, organizados de acordo com as características de
qualidade previstas na norma ISO/IEC 25010.

| ID | Categoria | Descrição |
| --- | --- | --- |
| RNF01 | Desempenho | A atualização do painel de resultados em tempo real não deve apresentar atraso superior a 5 segundos após o registro de um novo voto, propagado via WebSocket. |
| RNF02 | Segurança | O sistema deve impedir voto duplicado por identidade verificada, mesmo em múltiplas sessões ou dispositivos. |
| RNF03 | Segurança | As senhas dos usuários devem ser armazenadas utilizando algoritmo de hash com salt (ex.: bcrypt). |
| RNF04 | Segurança | O fluxo de verificação de identidade deve impedir o cadastro de contas falsas em massa, por meio de confirmação de e-mail único e limitação de requisições por IP (rate limiting). |
| RNF05 | Segurança | Os dados pessoais dos votantes devem ser armazenados de forma que o voto individual não seja exposto publicamente, sendo disponibilizados apenas resultados agregados. |
| RNF06 | Confiabilidade | O sistema deve estar disponível 99% do tempo, apurado mensalmente, inclusive durante picos de votação em pautas de grande interesse. |
| RNF07 | Usabilidade | A interface deve seguir as diretrizes de acessibilidade WCAG 2.1, nível AA. |
| RNF08 | Portabilidade | O sistema deve ser acessível pelos navegadores Chrome, Firefox e Edge, nas duas últimas versões estáveis de cada um. |
| RNF09 | Escalabilidade | O sistema deve suportar, no mínimo, 500 usuários simultâneos votando em uma pauta de grande interesse, sem indisponibilidade. |
| RNF10 | Confiabilidade | O sistema deve realizar backup diário automático da base de dados, com retenção mínima de 30 dias. |
| RNF11 | Compatibilidade | A interface deve ser responsiva, adaptando-se a resoluções de desktop, tablet e smartphone. |

---

## 3 Metodologia ágil e gestão do projeto

O desenvolvimento do PautaViva adota a metodologia ágil Scrum, com sprints de
duas semanas, papéis de Product Owner, Scrum Master e Equipe de
Desenvolvimento, e cerimônias de planejamento, revisão e retrospectiva ao
final de cada sprint. Este capítulo apresenta o backlog do produto,
organizado em histórias de usuário, e a sua distribuição ao longo das
sprints planejadas.

### 3.1 Product backlog e histórias de usuário

As histórias de usuário (HU) seguem o formato "Como \<papel\>, quero
\<ação\>, para \<benefício\>" e foram estimadas em pontos de história,
segundo a sequência de Fibonacci (1, 2, 3, 5, 8, 13), com base na
complexidade relativa percebida pela equipe.

| ID | História de usuário | RF relacionado | Pontos |
| --- | --- | --- | --- |
| HU01 | Como cidadão, quero me cadastrar informando e-mail e CPF, para acessar a plataforma e participar das votações. | RF01 | 3 |
| HU02 | Como cidadão, gestor público ou moderador, quero realizar login na plataforma, para acessar as funcionalidades do meu perfil. | RF02 | 3 |
| HU03 | Como gestor público, quero cadastrar uma pauta com título, descrição, categoria e período de votação, para disponibilizá-la à comunidade. | RF03 | 5 |
| HU04 | Como cidadão, quero consultar e visualizar as pautas disponíveis, para acompanhar os temas em discussão na minha comunidade. | RF04 | 3 |
| HU05 | Como cidadão, quero votar em uma pauta (a favor, contra ou abstenção), para expressar minha opinião sobre o tema. | RF05 | 8 |
| HU06 | Como cidadão, quero comentar uma pauta, para contribuir com a discussão do tema. | RF06 | 5 |
| HU07 | Como moderador, quero aprovar, rejeitar ou remover comentários da fila de moderação, para manter a qualidade das discussões. | RF07 | 5 |
| HU08 | Como cidadão, quero denunciar um comentário impróprio, para solicitar sua reavaliação pelo moderador. | RF08 | 3 |
| HU09 | Como cidadão, quero acompanhar o resultado da votação em tempo real, para ver a opinião da comunidade se formando. | RF09 | 8 |
| HU10 | Como gestor público, quero que a votação seja encerrada automaticamente na data definida, para garantir a integridade do prazo estabelecido. | RF10 | 5 |
| HU11 | Como gestor público, quero exportar os resultados finais de uma pauta encerrada em CSV e PDF, para analisar e divulgar os resultados. | RF11 | 3 |

Cada história de usuário do backlog possui critérios de aceite associados,
utilizados na cerimônia de Sprint Review para validar se o incremento
entregue atende ao comportamento esperado. A título de exemplo, o Quadro 1
detalha os critérios de aceite da história HU05 (Votar em pauta).

**Quadro 1 — Critério de aceite: HU05 (Votar em pauta)**

1. O sistema só deve permitir voto em pautas cujo status seja "Aberta".
2. O cidadão só pode votar uma única vez por pauta, mesmo em sessões ou
   dispositivos diferentes.
3. Ao confirmar o voto, o total de participantes e os percentuais por opção
   devem ser recalculados e propagados em tempo real via WebSocket, em até
   5 segundos.
4. O sistema deve exibir mensagem de erro caso o cidadão já tenha votado
   nesta pauta.

### 3.2 Divisão em sprints e cronograma de entregas

O backlog foi distribuído em cinco sprints de duas semanas cada, totalizando
dez semanas de desenvolvimento. O Quadro 2 apresenta o período, o objetivo
(sprint goal), as histórias planejadas e a data de entrega de cada sprint.

**Quadro 2 — Cronograma de sprints**

| Sprint | Período | Objetivo (Sprint Goal) | Histórias planejadas | Entrega |
| --- | --- | --- | --- | --- |
| Sprint 1 | 16/08/2026 a 06/09/2026 | Disponibilizar cadastro, autenticação e o cadastro/consulta de pautas. | HU01, HU02, HU03, HU04 | 06/09/2026 |
| Sprint 2 | 07/09/2026 a 20/09/2026 | Viabilizar o ciclo de votação com atualização de resultados em tempo real. | HU05, HU09 | 20/09/2026 |
| Sprint 3 | 21/09/2026 a 04/10/2026 | Implementar comentários, moderação e denúncia de conteúdo. | HU06, HU07, HU08 | 04/10/2026 |
| Sprint 4 | 05/10/2026 a 18/10/2026 | Implementar o encerramento automático da votação e a exportação de resultados. | HU10, HU11 | 18/10/2026 |
| Sprint 5 | 19/10/2026 a 01/11/2026 | Realizar testes de aceitação, homologação e ajustes finais. | Testes de aceitação e ajustes finais | 02/11/2026 |

A entrega da Sprint 5, em 02/11/2026, corresponde ao release do Produto
Mínimo Viável (MVP) do PautaViva, contemplando todas as histórias essenciais
e importantes do backlog. Ajustes evolutivos e as histórias de menor
prioridade remanescentes podem compor sprints subsequentes, em um novo ciclo
de planejamento.

---

## 4 Modelagem do sistema

Este capítulo apresenta a modelagem orientada a objetos do PautaViva,
contemplando a estrutura estática do sistema, por meio do diagrama de
classes, e o comportamento dinâmico de um dos fluxos principais, por meio do
diagrama de sequência.

### 4.1 Diagrama de classes

> *Conteúdo pendente — o diagrama de classes do domínio do PautaViva (ex.:
> Usuário, Pauta, Voto, Comentário, Denúncia) ainda precisa ser elaborado e
> inserido aqui.*

### 4.2 Diagrama de sequência

> *Conteúdo pendente — o diagrama de sequência de um dos fluxos principais
> do PautaViva (ex.: UC05 – Votar em pauta) ainda precisa ser elaborado e
> inserido aqui.*

---

## 5 Arquitetura do sistema

O PautaViva adota uma arquitetura em camadas (layered architecture),
combinada com uma API RESTful para comunicação entre o front-end e o
back-end, favorecendo a separação de responsabilidades, a testabilidade e a
possibilidade de evolução independente entre camadas.

### 5.1 Visão geral da arquitetura

A Figura 4 apresenta a organização do sistema em quatro camadas —
Apresentação, Aplicação/Negócio, Persistência e Serviços Externos —,
evidenciando os principais componentes de cada uma e os protocolos de
comunicação entre elas.

> **Figura 4 – Arquitetura em camadas do PautaViva**
> *(inserir imagem do diagrama)*
> Fonte: elaborado pelos autores (2026)

- **Camada de apresentação:** aplicação web (SPA), responsável pela
  interface com o usuário e consumo da API REST;
- **Camada de aplicação e negócio:** API REST e serviços especializados
  (Usuários, Pautas, Votação, Moderação e Notificações), responsáveis pelas
  regras de negócio do sistema;
- **Camada de persistência:** banco de dados relacional para armazenamento
  transacional;
- **Serviços externos:** integração com provedor de e-mail para envio de
  notificações automáticas (ex.: confirmação de cadastro).

### 5.2 Tecnologias adotadas

O Quadro 3 resume as tecnologias sugeridas para cada camada da arquitetura,
bem como a justificativa de escolha. Trata-se de uma stack de referência,
que pode ser substituída por outras tecnologias equivalentes conforme o
conhecimento técnico da equipe.

**Quadro 3 — Tecnologias por camada**

| Camada | Tecnologia sugerida | Justificativa |
| --- | --- | --- |
| Apresentação (web) | React.js | Componentização da interface, ampla comunidade e curva de aprendizado adequada ao contexto acadêmico. |
| Aplicação/Negócio | API REST (Node.js/Fastify) | Padrão amplamente adotado no mercado, com farta documentação e fácil integração via JSON. |
| Persistência | PostgreSQL | Banco de dados relacional robusto, com suporte a transações ACID, essencial para o controle consistente de votos. |
| Comunicação em tempo real | Socket.io (WebSocket) | Propagação dos resultados de votação em tempo real a todos os clientes conectados. |
| Notificações | SMTP | Envio de e-mails de confirmação de cadastro e recuperação de senha. |
| Infraestrutura | Docker / Docker Compose | Padronização de ambientes de desenvolvimento, teste e produção. |
| Controle de versão e CI | Git/GitHub + pipeline de integração contínua | Rastreabilidade de mudanças e execução automatizada de testes a cada entrega. |

### 5.3 Padrões e boas práticas

- Aplicação de padrão MVC (Model-View-Controller) na camada de aplicação,
  mantendo a separação entre controle, regras de negócio e persistência;
- Uso de padrão Repository para abstrair o acesso a dados e facilitar a
  substituição do mecanismo de persistência em testes automatizados;
- Autenticação e autorização baseadas em tokens (JWT), com controle de
  acesso por perfil (cidadão, gestor público, moderador);
- Versionamento da API REST (ex.: `/api/v1/`) para permitir evolução do
  contrato sem quebrar clientes já integrados.

---

## 6 Considerações finais

Este documento apresentou a especificação de software do PautaViva,
estruturada em conformidade com práticas amplamente adotadas na disciplina
de Engenharia de Software, contemplando a definição do problema e dos
objetivos, o levantamento de requisitos funcionais e não funcionais, a
modelagem comportamental e estrutural do sistema por meio de diagramas UML,
a organização do desenvolvimento sob a metodologia ágil Scrum e a definição
da arquitetura de software.

Como trabalhos futuros, recomenda-se complementar este documento com os
artefatos de acompanhamento de sprint (quadro Kanban, gráfico de burndown e
registro de impedimentos), com os diagramas de classes e de sequência ainda
pendentes (Seções 4.1 e 4.2), bem como com o plano de testes e os resultados
da homologação, de modo a manter a documentação viva e alinhada ao andamento
real do projeto.

## Referências

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 14724**: informação e
documentação: trabalhos acadêmicos: apresentação. Rio de Janeiro: ABNT,
2024.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6023**: informação e
documentação: referências: elaboração. Rio de Janeiro: ABNT, 2018.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 6024**: informação e
documentação: numeração progressiva das seções de um documento:
apresentação. Rio de Janeiro: ABNT, 2012.

ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS. **NBR 10520**: informação e
documentação: citações em documentos: apresentação. Rio de Janeiro: ABNT,
2023.

COCKBURN, Alistair. **Writing effective use cases**. Boston:
Addison-Wesley, 2000.

INTERNATIONAL ORGANIZATION FOR STANDARDIZATION. **ISO/IEC 25010**: systems
and software engineering — systems and software quality requirements and
evaluation (SQuaRE) — system and software quality models. Geneva: ISO,
2011.

OBJECT MANAGEMENT GROUP. **OMG Unified Modeling Language (UML)**, version
2.5.1. [S. l.]: OMG, 2017. Disponível em: https://www.omg.org/spec/UML.
Acesso em: 28 ago. 2026.

PRESSMAN, Roger S.; MAXIM, Bruce R. **Engenharia de software**: uma
abordagem profissional. 8. ed. Porto Alegre: AMGH, 2016.

SCHWABER, Ken; SUTHERLAND, Jeff. **The Scrum Guide**: o guia definitivo do
Scrum: as regras do jogo. [S. l.]: Scrum.org, 2020. Disponível em:
https://scrumguides.org. Acesso em: 28 ago. 2026.

SOMMERVILLE, Ian. **Engenharia de software**. 10. ed. São Paulo: Pearson
Education do Brasil, 2019.
