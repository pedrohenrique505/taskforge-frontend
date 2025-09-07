# TaskForge ⚡

Um aplicativo moderno de gerenciamento de tarefas construído com Next.js 15, React 19 e TypeScript. Interface limpa, responsiva e com suporte a temas claro/escuro.

![TaskForge Preview](https://i.ibb.co/Wv112gTf/Captura-de-tela-2025-09-06-233705.png)

## ✨ Funcionalidades

- ✅ **Gerenciamento de Tarefas**: Adicione, marque como concluída e remova tarefas
- 🔍 **Filtros Inteligentes**: Visualize todas as tarefas, apenas pendentes ou concluídas
- 🌓 **Temas**: Alterne entre modo claro e escuro
- 📱 **Design Responsivo**: Interface adaptável para todos os dispositivos
- ⚡ **Performance**: Otimizado com Next.js 15 e Turbopack
- 🎨 **Animações Suaves**: Transições CSS customizadas

## 🚀 Stack Tecnológica

### Frontend Framework
- **Next.js 15.5.2** - Framework React com App Router
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript

### Estilização
- **Tailwind CSS 4** - Framework CSS utilitário
- **PostCSS** - Processador CSS
- **CSS Custom Properties** - Variáveis para sistema de temas

### Arquitetura
- **App Router** - Sistema de roteamento do Next.js 13+
- **Custom Hooks** - Lógica reutilizável (useTasks)
- **Context API** - Gerenciamento de estado global (ThemeContext)
- **Client Components** - Componentes que rodam no cliente

### Ferramentas de Desenvolvimento
- **ESLint 9** - Linter para qualidade de código
- **Turbopack** - Bundler de alta performance

## 🏗️ Estrutura do Projeto

```
taskforge/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── useTasks.ts
│   └── types/
│       └── Task.ts
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/taskforge.git

# Entre no diretório
cd taskforge

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Executando o projeto

```bash
# Modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para produção

```bash
# Gerar build otimizado
npm run build
npm start

# ou
yarn build
yarn start
```

## 📋 Como usar

1. **Adicionar tarefa**: Digite no campo de entrada e pressione Enter ou clique no botão "+"
2. **Marcar como concluída**: Clique no checkbox ao lado da tarefa
3. **Remover tarefa**: Clique no ícone de lixeira
4. **Filtrar tarefas**: Use os botões na sidebar (Todas, Pendentes, Concluídas)
5. **Trocar tema**: Clique no ícone de sol/lua na sidebar

## 🚧 Roadmap

- [ ] **Sistema de Categorias**: Organizar tarefas por tipo (Casa, Trabalho, Estudos, etc.)
- [ ] **Drag & Drop**: Interface estilo Kanban para reorganizar tarefas
- [ ] **Persistência**: Salvar dados localmente (LocalStorage/IndexedDB)
- [ ] **Data e Hora**: Adicionar datas de vencimento às tarefas
- [ ] **Prioridades**: Sistema de priorização (Alta, Média, Baixa)
- [ ] **Busca**: Campo de pesquisa para encontrar tarefas específicas
- [ ] **Estatísticas**: Dashboard com métricas de produtividade

## 🎨 Sistema de Temas

O TaskForge possui um sistema completo de temas com:
- Alternância suave entre modo claro e escuro
- Variáveis CSS customizadas para fácil manutenção
- Persistência da preferência do usuário
- Adaptação automática baseada na preferência do sistema

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ por Pedro Henrique

- LinkedIn: [Pedro Henrique](https://linkedin.com/in/pedrohenrique1705)
- GitHub: [@pedrohenrique505]([https://github.com/seu-usuario](https://github.com/pedrohenrique505))
- Email: seu.email@exemplo.com

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React incrível
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
