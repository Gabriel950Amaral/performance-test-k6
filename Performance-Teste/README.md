# Como Rodar os Testes


Para executar um teste, navegue até a pasta do projeto dentro do repositório git e utilize um dos comandos abaixo conforme seu ambiente:


### Windows (PowerShell)
```powershell
cd "\PERFORMANCE\performance-test-k6\Performance-Teste"
k6 run indexSmoke.js
```


### Linux
```sh
cd /performance-test-k6/Performance-Teste
k6 run indexSmoke.js
```


### Docker
```sh
docker run -v /performance-test-k6/Performance-Teste:/scripts -i grafana/k6 run /scripts/indexSmoke.js
```

### Rodando o cenário de validação
Para rodar o cenário de validação, defina a variável de ambiente VALIDACAO como true:

**Windows (PowerShell):**
```powershell
$env:VALIDACAO="true"; k6 run indexSmoke.js
```

**Linux:**
```sh
VALIDACAO=true k6 run indexSmoke.js
```


**Docker:**
```sh
docker run -e VALIDACAO=true -v /performance-test-k6/Performance-Teste:/scripts -i grafana/k6 run /scripts/indexSmoke.js
```

# Guia de Instalação do k6 e Dependências

## Instalação do k6

### Windows
1. Baixe o instalador do k6 em: https://github.com/grafana/k6/releases
2. Extraia o executável e adicione o diretório ao PATH do sistema.
3. Verifique a instalação executando no PowerShell:
   ```powershell
   k6 version
   ```

### Linux (Debian/Ubuntu)
```sh
sudo apt update
sudo apt install -y gnupg ca-certificates
curl -s https://dl.k6.io/key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/k6-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt update
sudo apt install k6
k6 version
```

### Docker
Se preferir, rode o k6 via Docker:
```sh
docker run -i grafana/k6 run - <script.js
```
Ou, para rodar um arquivo local:
```sh
docker run -v $(pwd):/scripts -i grafana/k6 run /scripts/seu_arquivo.js
```

## Dependências do Projeto

Este projeto utiliza apenas módulos nativos do k6 e bibliotecas JS importadas via URL (ex: httpx, papaparse). Não é necessário instalar dependências via npm ou yarn.


Se for usar recursos que dependem de arquivos locais (ex: massas de dados), garanta que o caminho dos arquivos está correto e, se usar Docker, monte o volume corretamente:
```sh
docker run -v /performance-test-k6/Performance-Teste:/scripts -i grafana/k6 run /scripts/indexSmoke.js
```

---

# Projeto de Testes de Performance com k6

Este projeto contém a estrutura e instruções para criação e execução de testes de performance utilizando apenas as APIs nativas do k6.


## Estrutura de Pastas

- `common`: Funções utilitárias e compartilhadas entre os scripts.
- `data`: Massas de dados utilizadas nos testes.
- `resources`: Fluxos e etapas de negócio, cada arquivo representa um recurso ou etapa do teste.
- `scenarios`: Arquivos de cenários, cada um representa um fluxo de teste.
- `userVariables.js`: Variáveis globais e headers padrão.


## Padrões de Código

- Seguir boas práticas de Clean Code e utilizar `camelCase` para variáveis e funções.
- Massas de dados usadas em mais de um resource devem ser inicializadas no cenário e passadas por parâmetro.


## Execução dos Testes

Para executar um teste, navegue até a pasta do projeto e utilize:

```sh
k6 run <arquivo_de_entrada.js>
```

O arquivo principal geralmente é o `indexSmoke.js` ou outro cenário desejado. Sempre revise o número de VUs e o tempo de execução para evitar impactos indesejados no ambiente.



