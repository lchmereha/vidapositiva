# Doc. Produto — Vida Positiva

> App de produtividade + desenvolvimento pessoal que combina agenda diária, gratidão, foco positivo e reflexão.

**Autor original do conceito:** Leandro — ZZTech, Apucarana-PR
**Data:** Setembro 2026
**Versão do documento:** 1.0

---

## 1. Visão do Produto

### O que é?

Vida Positiva é um app mobile (iOS e Android) que une organização prática do dia a dia com um sistema de mentalidade positiva. A ideia é simples: a pessoa agenda suas tarefas, mas também é lembrada de agradecer, registrar o que deseja alcançar e refletir sobre o dia — tudo no mesmo lugar.

### Problema que resolve

No Brasil, o mercado de apps de produtividade é dominado por ferramentas que tratam o usuário como um executor de tarefas. Separadamente, existem apps de gratidão e de journaling, mas exigem que o usuário abra dois ou três apps diferentes para manter uma rotina completa de organização + bem-estar. Isso cria fricção e faz com que a maioria abandone as boas intenções em menos de 2 semanas.

Vida Positiva elimina essa fricção ao colocar tudo num único fluxo diário:

1. **Manhã:** Gratidão + registro do foco do dia
2. **Durante o dia:** Agenda, tarefas e lembretes
3. **Noite:** Resumo + reflexão do dia

### Proposta de valor

> "Organize seu dia e treine sua mente para enxergar o que está dando certo — não só o que falta."

### Missão

Democratizar o acesso a uma rotina de produtividade consciente para o brasileiro comum: não precisa de mindfulness complicado, não precisa de coaching caro. Precisa de um app leve que lembra a pessoa do que importa.

### Visão de longo prazo

Ser o app de "rotina diária" do brasileiro — o que a pessoa abre logo ao acordar e antes de dormir. O equivalente à agenda física + diário de gratidão, mas no celular.

---

## 2. Persona / Público-Alvo

### Persona principal: **"Ana"**

| Campo | Detalhe |
|-------|---------|
| **Idade** | 28-40 anos |
| **Gênero** | Predominantemente feminino (60-70% do público esperado), mas app é gender-neutral |
| **Localização** | Capitais e cidades médias do Brasil (SP, PR, SC, MG, BA) |
| **Ocupação** | Empreendedora individual, profissional CLT que quer crescer, ou freelancer |
| **Perfil digital** | Usa Instagram, TikTok; conhece o universo de coaching/personal branding |
| **Dor principal** | "Sei que deveria ser mais organizada e positiva, mas não consigo manter o hábito. Os apps são muito frios ou muito coach." |
| **Comportamento** | Compra assinaturas simbólicas (R$9,90–29,90/mês) sem pensar muito. Abandona apps que pedem mais de 3 minutos de uso diário. |
| **Motivação** | Crescer pessoal e profissionalmente. Sentir que está evoluindo, mesmo que um pouco por dia. |

### Persona secundária: **"Carlos"**

| Campo | Detalhe |
|-------|---------|
| **Idade** | 22-35 anos |
| **Ocupação** | Empreendedor iniciante, dev, concurseiro |
| **Dor** | Quer ser produtivo mas procrastina. Já tentou Todoist e Notion e largou. |
| **Gatilho** | Gamificação leve e lembretes que não são chatos. |

### Persona terciária: **"Dona Márcia"**

| Campo | Detalhe |
|-------|---------|
| **Idade** | 45-60 anos |
| **Ocupação** | Dona de casa, servidora pública |
| **Dor** | Quer organizar a vida e parar de esquecer compromissos, mas nunca usou app de produtividade de verdade |
| **Gatilho** | Interface simples, linguagem acessível, sem jargão de tech |

### Público-alvo resumido

- **Primário:** Mulheres 25-40, urbanas, que consomem conteúdo de desenvolvimento pessoal mas não encontraram um app que combine organização + mindset de forma prática.
- **Secundário:** Homens 22-35, empreendedores e estudantes que buscam disciplina.
- **Terciário:** Público 45+ que quer uma agenda digital simples com toque de bem-estar.

---

## 3. Funcionalidades MVP

### 3.1 Cadastro e Onboarding

- Cadastro via e-mail, Google ou Apple ID
- Onboarding em 3 passos: nome → fuso horário → "Qual o principal foco da sua semana?" (opções livres)
- Primeira tela: explicação visual do fluxo diário (manhã → dia → noite)

### 3.2 Fluxo Matinal — Gratidão

- **Prompt da manhã:** notificação push às 7h (horário configurável): "Bom dia! Antes de começar, anote 3 coisas pelas quais você é grata(o) hoje."
- Tela simples com 3 campos de texto (máx. 280 caracteres cada)
- Opção de pular (sem culpa) — mas o app conta quantos dias seguidos a pessoa anotou
- Histórico de gratidão acessível via timeline

### 3.3 Fluxo Matinal — Foco no Desejo

- Logo após a gratidão: "E o que você quer realizar hoje? Coloque no ponto."
- Campo único: "Hoje eu estou focado(a) em..."
- O app usa linguagem positiva: "atrair", "realizar", "construir" — nunca "evitar", "parar de"
- O foco do dia aparece como banner fixo na tela principal durante o dia

### 3.4 Agenda / Tarefas Diárias

- Lista de tarefas do dia com checkbox
- Campos: título, hora (opcional), lembrete (sim/não), prioridade (baixa/média/alta)
- Tarefa recorrente (diária, semanal)
- Concluídas ficam riscadas mas visíveis
- Drag-and-drop para reordenar

### 3.5 Fluxo Noturno — Resumo do Dia

- Notificação push às 21h (configurável): "Hora de olhar o dia. O que você conquistou?"
- Tela com:
  - Quantas tarefas foram concluídas (vs. planejadas)
  - Possibilidade de adicionar conquistas extras não planejadas
  - Campo livre: "Reflexão do dia" (opcional, 500 caracteres)
  - Emoji de humor: 😄 😊 😐 😔 😢 (opcional)
- Resumo salvo e acessível na timeline

### 3.6 Mensagens de Área (Foco Diário)

- Uma frase motivacional/notificação por dia, temática (foco, gratidão, abundância, ação)
- Frases deバイク:	selected from curated bank, tagged por tema
- Horário: ao meio-dia (configurável)
- Linguagem: positiva, direta, sem clichê. Tom de amigo que lembra, não coach impositivo.

### 3.7 Timeline / Diário

- Visualização cronológica de todos os registros (gratidão + foco + tarefas + reflexão)
- Filtro por mês/semana
- Estatísticas básicas: streak de gratidão, % de tarefas concluídas, humor médio

### 3.8 Configurações

- Horários de notificação (manhã, meio-dia, noite)
- Tema claro/escuro
- Idioma: PT-BR (padrão), EN (futuro)
- Exportar dados (LGPD compliance)

### 3.9 Requisitos técnicos MVP

- **Plataforma:** React Native (ou Flutter) para iOS + Android simultâneo
- **Backend:** Firebase (Auth, Firestore, Cloud Messaging)
- **Notificações:** Firebase Cloud Messaging (push)
- **Offline:** Dados locais com sync (Firestore offline persistence)
- **Armazenamento:** Firebase Firestore (dados do usuário, criptografia em trânsito)
- **Deploy:** App Store + Google Play

---

## 4. Funcionalidades Futuras (pós-MVP)

### Fase 2 (3-6 meses após lançamento)

| Funcionalidade | Descrição |
|---------------|-----------|
| **Streaks e conquistas** | Sistema de sequências: "7 dias de gratidão seguidos", "5 dias seguidos cumprindo tarefas". Badges visuais. |
| **Widget** | Widget de tela inicial com foco do dia + gratidão rápida |
| **Categorias de tarefas** | Personal (pessoal), Work (trabalho), Health (saúde), Finance (finanças) |
| **Gráficos mensais** | Dashboard com % de produtividade, frequência de gratidão, humor ao longo do mês |
| **Backup/Restore** | Backup para Google Drive ou iCloud |

### Fase 3 (6-12 meses)

| Funcionalidade | Descrição |
|---------------|-----------|
| **Integração com calendário** | Sync com Google Calendar / Apple Calendar |
| **Modo Groups** | Compartilhar gratidão e focos com parceiro ou grupo de amigos (accountability) |
| **Sugestões IA** | Sugestões personalizadas de focos e reflexões baseadas no histórico do usuário |
| **Rituais temáticos** | Programas de 21/30 dias: "21 dias de gratidão", "30 dias de foco financeiro" |
| **Versão web** | Acesso via navegador para quem quer usar no PC |

### Fase 4 (12+ meses)

| Funcionalidade | Descrição |
|---------------|-----------|
| **Marketplace de coaches** | Profissionais podem vender micro-cursos e sessões dentro do app |
| **Comunidade** | Feed social leve com posts anônimos de gratidão e conquistas |
| **Integração com saúde** | Dados de sono/exercício do Google Fit/Apple Health como contexto para reflexões |
| **Gamificação avançada** | Níveis, XP, ranking entre amigos |
| **B2B / Corporativo** | Versão para times:_Manager vê (opt-in) que o time está praticando gratidão/foco |

---

## 5. Monetização

### Modelo principal: Freemium com assinatura

| Plano | Preço | O que inclui |
|-------|-------|-------------|
| **Gratuito** | R$ 0 | Agenda básica (até 5 tarefas/dia), gratidão ilimitada, 1 mensagem de área/dia, histórico 7 dias |
| Vida Positiva Pro | R$ 14,90/mês ou R$ 99,90/ano | Tarefas ilimitadas, histórico ilimitado, widget, streaks, gráficos, backup, temas premium, sem anúncios |

### Alternativas de monetização

| Fonte | Detalhe |
|-------|---------|
| **Compra única "Vitalício"** | R$ 199,90 — acesso para sempre ao Pro. Bom para early adopters e engajamento. |
| **Temas premium** | R$ 9,90 cada — pacotes visuais (natureza, minimalista, aquarela) |
| **Rituais pagos** | Programas de 21/30 dias por R$ 19,90-29,90 cada |
| **Anúncios (futuro)** | Banner discreto no plano gratuito — só após validar retenção orgânica |

### Justificativa de preço para o Brasil

- R$ 14,90/mês está abaixo de Netflix (R$ 39,90), Spotify (R$ 21,90) e Duolingo Plus (R$ 47,90)
-对标: apps como Strava (R$ 32,90), Headspace (R$ 29,90)
- Assinatura anual com desconto (~R$ 8,33/mês) incentiva fidelização
- O público-alvo (pessoas que consomem coaching/autodesenvolvimento) já paga por cursos e mentorias de R$ 500-5.000. R$ 14,90/mês é acessível.

### Projeções conservadoras (primeiro ano)

| Métrica | Meta |
|---------|------|
| Downloads (12 meses) | 10.000-30.000 |
| Conversão free→pago | 3-5% |
| Usuários pagantes | 300-1.500 |
| MRR no mês 12 | R$ 4.500-R$ 22.500 |
| Churn mensal esperado | 8-12% (indústria de apps de hábitos) |

---

## 6. Roadmap

### Pré-lançamento (Meses -3 a 0)

- [ ] Definição final do nome e identidade visual
- [ ] Wireframes e protótipo no Figma
- [ ] Desenvolvimento MVP (React Native + Firebase)
- [ ] Testes internos (equipe + 10 beta testers)
- [ ] Criação de landing page
- [ ] Cadastro nas lojas (App Store + Google Play)
- [ ] Preparação de ASO (App Store Optimization)
- [ ] Perfil no Instagram/TikTok para marketing orgânico

### Fase 1 — Lançamento (Meses 1-3)

- [ ] **Mês 1:** Soft launch no Google Play (beta aberta)
- [ ] **Mês 1:** Coleta de feedback, correção de bugs críticos
- [ ] **Mês 2:** Launch oficial nas duas lojas
- [ ] **Mês 2-3:** Campanha orgânica (Instagram Reels, TikTok, parcerias com micro-influencers de desenvolvimento pessoal)
- [ ] **Mês 3:** Primeiro ciclo de dados — análise de retenção D1/D7/D30

### Fase 2 — Consolidação (Meses 4-6)

- [ ] Lançar streaks e gamificação leve
- [ ] Lançar widget de tela inicial
- [ ] Introduzir plano anual (R$ 99,90)
- [ ] Primeiras parcerias com creators de conteúdo
- [ ] Meta: 5.000 downloads, 150-300 pagantes

### Fase 3 — Crescimento (Meses 7-12)

- [ ] Integração com calendário
- [ ] Modo Groups (accountability)
- [ ] Sugestões com IA básica
- [ ] Programas temáticos pagos
- [ ] Expansão de marketing: Google Ads (CPI target < R$ 2,50), Facebook/Instagram Ads
- [ ] Meta: 20.000+ downloads, 1.000+ pagantes

### Fase 4 — Escala (Ano 2+)

- [ ] Versão web
- [ ] Comunidade social
- [ ] Expansão para Portugal (PT-PT)
- [ ] Funcionalidades B2B
- [ ] Explorar raise ou bootstrapping sustentável

---

## 7. Análise Competitiva

### Mapa de concorrentes

| App | Foco principal | Gratidão | Agenda | Foco/Manifestação | Reflexão | Preço (Brasil) |
|-----|---------------|----------|--------|-------------------|----------|-----------------|
| **Todoist** | Gerenciamento de tarefas | ❌ | ✅ Forte | ❌ | ❌ | R$ 24,90/mês |
| **Habitica** | Gamificação de hábitos | ❌ | ✅ Médio | ❌ | ❌ | Grátis + R$ 17,90/mês |
| **Day One** | Diário/journaling | ✅ (manual) | ❌ | ❌ | ✅ Forte | R$ 39,90/ano |
| **Grateful** | Gratidão | ✅ Forte | ❌ | ❌ | ✅ Básico | R$ 44,90/ano |
| **Headspace** | Meditação | ❌ | ❌ | ✅ (meditação) | ✅ | R$ 29,90/mês |
| **Notion** | Produtividade total | ❌ | ✅ (configurável) | ❌ | ❌ | Grátis + R$ 39,90/mês |
| **Stoic** | Journaling + hábitos | ✅ | ✅ Básico | ✅ Básico | ✅ | Grátis + R$ 34,90/mês |
| **Flo** | Saúde feminina | ✅ | ❌ | ✅ | ✅ | R$ 39,90/mês |
| Vida Positiva | ✅ Combinado | ✅ | ✅ | ✅ | ✅ | R$ 14,90/mês |

### Análise detalhada por concorrente

#### Todoist
- **Força:** Melhor app de tarefas do mercado. Integrações enormes (Google Calendar, Slack, Zapier). Natural language processing para criar tarefas.
- **Fraqueza:** Zero dimensão emocional/positiva. É uma ferramenta fria de execução. O usuário produtivo mas emocionalmente desmotivado larga porque não se sente "visto".
- **Nossa vantagem:** Vida Positiva faz o que o Todoist faz (tarefas básicas) + adiciona a camada de mindset que o Todoist não oferece.

#### Habitica
- **Força:** Gamificação viciante (RPG). Comunidade ativa.
- **Fraqueza:** Visual poluído. Curva de aprendizado alta. A gamificação pode parecer infantil para o público de 30+. Não tem gratitude journal nem reflexão.
- **Nossa vantagem:** Interface limpa e adulta. Gratidão e reflexão integradas. Mais acessível para quem não curte RPG.

#### Day One
- **Força:** Diário premium, suporte a mídia, timeline bonita. Marca forte no mercado de journaling.
- **Fraqueza:** Não é de tarefas. Preço alto para o brasileiro (apesar de ser barato em USD). Foco em "memórias" não em "futuro/desejo".
- **Nossa vantagem:** App mais leve, com agenda integrada, foco positivo (atrair vs. registrar), e preço acessível.

#### Grateful
- **Força:** App dedicado a gratidão. Simples. Funciona bem para quem quer só isso.
- **Fraqueza:** *Só* gratidão. Para quem quer agenda + mindset, precisa de outro app. Preço caro (USD) para o que entrega.
- **Nossa vantagem:** Gratidão + agenda + foco + reflexão num único app. Metade do preço.

#### Headspace
- **Força:** Líder em meditação guiada. Conteúdo de áudio de alta qualidade.
- **Fraqueza:** Foco em meditação, não em organização. Não resolve o problema de "o que fazer hoje". Preço alto.
- **Nossa vantagem:** Não compete direto — Headspace é meditação, Foco é organização + mindset. Usuários podem usar os dois, mas Foco é o que abre primeiro no dia.

#### Notion
- **Força:** Flexibilidade total. Comunidade enormous de templates.
- **Fraqueza:** Complexo demais para o público-alvo (Ana não quer configurar database). Exige muito para manter uma rotina diária simples.
- **Nossa vantagem:** Zero configuração. App feito para usar, não para montar. O público de desenvolvimento pessoal não quer Notion — quer algo que funcione sem setup.

### Resumo competitivo

Nenhum concorrente oferece as 4 dimensões (agenda + gratidão + foco/manifestação + reflexão) num único app com interface simples e preço acessível para o Brasil. O mercado é fragmentado — o usuário precisa de 2-3 apps para ter a rotina completa. **Foco é o primeiro a unificar tudo.**

---

## 8. Diferencial Competitivo

### Por que Foco e não os outros?

#### 1. Unificação: 1 app em vez de 3

O usuário típico do nosso mercado precisaria hoje de:
- Todoist ou Google Tasks (tarefas) — R$ 24,90/mês
- Grateful ou类似的 (gratidão) — R$ 44,90/ano
- Um caderno ou Day One (reflexão) — R$ 39,90/ano

**Total: R$ 40-80/mês + 3 apps diferentes.**

**Foco: R$ 14,90/mês + 1 app.** Economia de 70%+ e redução de fricção.

#### 2. Linguagem positiva intencional

Enquanto outros apps falam em "tarefas pendentes", "deadlines", "erros", "hábitos a quebrar" — Foco fala em:
- "**Foco**" em vez de "tarefa" (quando possível)
- "**Atrair**" em vez de "meta" quando se trata de desejo
- "**Conquista**" em vez de "completada"
- "**Reflexão**" em vez de "autoavaliação"

A linguagem não é gimmick — é design de produto baseado em psicologia positiva (Seligman, 2011).

#### 3. Ritual diário completo

A maioria dos apps de hábito permite criar hábitos avulsos. Foco oferece um **ritual estruturado** com começo, meio e fim:

```
☀️ Manhã  → Gratidão (3 itens) + Foco do dia (1 frase)
🌤️ Dia    → Tarefas + Mensagem de área
🌙 Noite  → Resumo + Reflexão
```

Esse ritual é o produto. Não são funcionalidades isoladas — é uma experiência coesa.

#### 4. Preço acessível para o Brasil

- R$ 14,90/mês é menos que um delivery de almoço
- R$ 99,90/ano (R$ 8,33/mês) é menos que 2 cafés da Starbucks
- Vitalício R$ 199,90 é o preço de 2-3 refeições em restaurante
- O público-alco (Ana, 28-40, consome conteúdo de desenvolvimento pessoal) já gasta R$ 200-500/mês em cursos, livros e mentorias

#### 5. Leveza: 3 minutos por dia

- Manhã: ~2 min (3 gratidões + 1 foco = preenchimento rápido)
- Noite: ~1 min (resumo + reflexão)
- **Total: 3 minutos para uma rotina completa de mindset + organização**

Apps como Notion podem tomar 30 minutos para configurar. Foco é "abre e usa".

#### 6. Offline-first

Muito do público brasileiro não tem internet 100% do tempo (transporte público, interior). Foco funciona offline e sincroniza quando voltar online. Dados nunca perdem.

#### 7. Feito para o brasileiro

- Interface 100% em PT-BR desde o dia 1
- Frases de área com autores brasileiros ereferências culturais locais
- Preços em R$ (não conversão de USD)
- Marketing com creators brasileiros
- Sensibilidade cultural: gratidão não é "coisa de coach" — é prática comum que o brasileiro reconhece

#### 8. LGPD-ready desde o dia 1

- Dados mínimos (nome, e-mail)
- Criptografia em trânsito e repouso
- Exportação de dados fácil
- Deletar conta em 2 cliques
- Sem compartilhamento com terceiros para ads

---

## Apêndice A: Glossário

| Termo | Significado |
|-------|------------|
| **Foco** | Nome provisório do app |
| **Streak** | Sequência de dias consecutivos realizando uma ação |
| **MRR** | Monthly Recurring Revenue (receita recorrente mensal) |
| **ASO** | App Store Optimization (otimização para lojas de apps) |
| **CPI** | Cost Per Install (custo por instalação) |
| **Churn** | Taxa de cancelamento de assinatura |
| **LGPD** | Lei Geral de Proteção de Dados (Brasil) |
| **MVP** | Minimum Viable Product (produto mínimo viável) |

## Apêndice B: Referências

- Seligman, M. (2011). *Flourish*. Free Press.
- Emmons, R. & McCullough, M. (2003). "Counting blessings versus burdens." *Journal of Personality and Social Psychology*, 84(2), 377-389.
- Duhigg, C. (2012). *The Power of Habit*. Random House.
- App Annie / data.ai — dados de mercado de apps de produtividade no Brasil (2024-2025).
- ANATEL — penetração de smartphones no Brasil (2025): ~85% da população.

---

*Documento elaborado para o projeto Foco — Conceito de Leandro (ZZTech, Apucarana-PR).*
*Para dúvidas ou contribuições, entrar em contato com a equipe do projeto.*
