# Etapa 1: build da imagem base
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos necessários para instalar dependências
COPY package.json package-lock.json* ./

# Instala globalmente o Quasar CLI
RUN npm install -g @quasar/cli

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Expõe a porta usada pelo quasar dev
EXPOSE 8081

# Comando para iniciar o servidor de desenvolvimento
CMD ["quasar", "dev", "--port", "8081"]
