# Portal Seguro – SESI Educação

Canal de denúncias de bullying para alunos, com painel administrativo para a coordenação.

## Como usar

```bash
npm install
npm start
```

## Acesso da coordenação

Navegue para a aba **Coordenação** e use a senha: `coord2026`

> ⚠️ Em produção, troque a senha e implemente autenticação no servidor (backend).

## Funcionalidades

- **Formulário de denúncia** com modo anônimo ou identificado
- **Persistência local** via localStorage
- **Protocolo único** gerado por denúncia
- **Painel da coordenação** com:
  - Dashboard de estatísticas
  - Filtros por status, categoria e busca textual
  - Gerenciamento de status (Pendente → Em Análise → Resolvido / Arquivado)
  - Anotações internas por caso
  - Exclusão de registros
- **Página de informações** sobre bullying e canais de ajuda
- Design inspirado no padrão visual SESI Educação

## Estrutura do projeto

```
src/
  Paginas/            # as 3 telas do app, cada uma na sua pasta
    Denuncia/
    Informacoes/
    Coordenacao/
  Componentes/         # componentes reutilizados entre páginas (Navbar, Hero, Toast)
    Icones/
  Hooks/               # lógica de estado/dados (useDenuncias, useToast, useCoordAuth)
  Constantes/          # dados institucionais (turmas, categorias, status, textos)
  Utilitarios/         # funções puras (formatarData, gerarProtocolo)
  Estilos/             # CSS dividido por seção, importado em index.css
  Assets/              # imagens e outros arquivos estáticos
```

Cada página vive na sua própria pasta em `Paginas/`, com seus subcomponentes e
utilitários específicos ao lado. Componentes e nomes de estado usam português
para manter consistência com o restante do projeto.

> Nota: nomes de arquivos/pastas de componentes React começam com letra
> maiúscula (`Denuncia.jsx`, `Coordenacao.jsx`) porque isso é exigido pelo
> JSX — um componente iniciado com letra minúscula é tratado como uma tag
> HTML nativa e o React não o reconhece como componente.
