# PetCare

[English](#english) | [Português](#portugues)

[Live Demo](https://fsgui89.github.io/petcare/) · [Repository](https://github.com/fsgui89/petcare)

<a id="english"></a>

## English

A browser-based pet care scheduling prototype with booking confirmation and an appointment dashboard.

### Overview

PetCare organizes a local appointment workflow for pet services. Visitors enter booking details, review the latest appointment and manage appointment status from a shared dashboard.

### Tech Stack

Next.js • React • TypeScript • CSS Modules • localStorage

### Features

- Choose a service, date and time slot, then enter tutor, pet and phone details.
- Required form fields and a date input that restricts selection to today or later.
- Confirmation page displaying the latest appointment.
- Dashboard with total, pending-review, confirmed and cancelled appointment counts.
- Confirm, cancel or remove appointments.
- Persist appointments in localStorage and adapt the interface to smaller screens.

### Technical Highlights

- AppointmentProvider and useAppointments share booking state between routes.
- Appointment and AppointmentStatus types define the stored data and allowed statuses.
- A hydration flag coordinates the initial storage read with later persistence.
- useMemo derives dashboard counts from the appointment list.
- App Router separates home, confirmation and dashboard; CSS Modules scope form, layout and dashboard styles.

### Getting Started

Prerequisites: Git, Node.js 22.12 or later compatible with the dependencies, and npm.

```bash
git clone https://github.com/fsgui89/petcare.git
cd petcare
npm ci
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) (or the port reported by Next.js).

Available commands:

```bash
npm run build
npm run lint
```

The build exports a static site to `out/`, as configured by `output: 'export'`. The existing workflow publishes that directory to GitHub Pages. Although a `start` script exists, this project uses static export; preview its build with a static file server serving `out/`.

### Project Structure

- `src/app/`: home, confirmation and dashboard routes.
- `src/components/`: booking form, appointment cards and summary cards.
- `src/hooks/useAppointments.tsx`: shared state and status management.
- `src/data/services.ts`: services and predefined time slots.
- `src/lib/storage.ts`: types and local persistence.
- `src/styles/`: CSS Modules and global styles.

### Implementation Scope

Appointments are stored only in the current browser and origin. The dashboard has no access control, and time slots are predefined without availability or collision checks. This prototype does not connect to a clinic, send notifications or synchronize with a server.

### Preview

Existing project preview maintained in the portfolio repository.

![PetCare preview](https://raw.githubusercontent.com/fsgui89/portfolio-guilherme-ferreira/main/public/images/projects/petcare.png)

### Author

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

---

<a id="portugues"></a>

## Português

Protótipo de agendamento de cuidados pet no navegador, com confirmação e painel de atendimentos.

### Visão geral

O PetCare organiza um fluxo local de agendamentos para serviços pet. O visitante informa os dados, consulta o último agendamento e gerencia os status em uma agenda compartilhada dentro da aplicação.

### Tecnologias

Next.js • React • TypeScript • CSS Modules • localStorage

### Funcionalidades

- Selecionar serviço, data e horário e informar tutor, pet e telefone.
- Campos obrigatórios e seleção de data limitada ao dia atual ou posterior.
- Página de confirmação com os dados do último agendamento.
- Painel com totais de agendamentos em análise, confirmados e cancelados.
- Confirmar, cancelar ou remover agendamentos.
- Persistir agendamentos no localStorage e adaptar a interface a telas menores.

### Destaques técnicos

- AppointmentProvider e useAppointments compartilham o estado entre as rotas.
- Appointment e AppointmentStatus definem os dados armazenados e os status permitidos.
- O controle de hidratação coordena a leitura inicial do armazenamento com a persistência posterior.
- useMemo calcula os indicadores a partir da lista de agendamentos.
- O App Router separa início, confirmação e agenda; CSS Modules isolam os estilos de formulário, layout e painel.

### Como executar

Pré-requisitos: Git, Node.js 22.12 ou superior compatível com as dependências, e npm.

```bash
git clone https://github.com/fsgui89/petcare.git
cd petcare
npm ci
npm run dev
```

Abra [http://localhost:3000/](http://localhost:3000/) (ou a porta indicada pelo Next.js).

Comandos disponíveis:

```bash
npm run build
npm run lint
```

O build gera o site estático em `out/`, conforme `output: 'export'`. O workflow existente publica essa pasta no GitHub Pages. Apesar de existir um script `start`, este projeto usa exportação estática; para visualizar o resultado do build, utilize um servidor de arquivos estáticos em `out/`.

### Estrutura do projeto

- `src/app/`: rotas de início, confirmação e agenda.
- `src/components/`: formulário, cards de agendamento e indicadores.
- `src/hooks/useAppointments.tsx`: estado compartilhado e gerenciamento de status.
- `src/data/services.ts`: serviços e horários predefinidos.
- `src/lib/storage.ts`: tipos e persistência local.
- `src/styles/`: CSS Modules e estilos globais.

### Escopo da implementação

Os agendamentos ficam apenas no navegador e na origem atuais. A agenda não possui controle de acesso, e os horários são predefinidos, sem verificação de disponibilidade ou conflitos. O protótipo não se conecta a uma clínica, não envia notificações e não sincroniza com um servidor.

### Prévia

A imagem existente na seção Preview acima é mantida no repositório do portfólio. A versão interativa está no link Live Demo no início deste README.

### Autor

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

