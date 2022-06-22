1. npm i tailwindcss postcss autoprefixer -D
2. npx tailwindcss init -p
3. dentro de tailwind.config.js -> './src/**/*.tsx' arquivos que terão estilização do tailwind
4. definir styles/global.css @tailwind base; @tailwind components @tailwind utilities;
5. instalar extensões graphQL, Tailwind CSS, PostCSS
6. Clonar graphcms com os atributos ja criados https://rseat.in/lab-graphcms
7. npm i @apollo/client graphql
8. add extend custom colors tailwind.config.js
9. add fontFamily extend Roboto em tailwind.config.js e index.html
10. npm i phosphor-react
11. npm i date-fns

// CMS = Content Management System
// Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)
// Headless CMS (GraphCMS): Painle de ADMIN (Dados fornecidos através de uma API REST ou GraphQL)
// React que consome essa api do CMS