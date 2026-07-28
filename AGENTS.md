# Instruções para agentes de IA

## Contexto do projeto

- Este repositório é um projeto NestJS com TypeScript.
- O ponto de entrada já habilita um ValidationPipe global em [src/main.ts](src/main.ts).
- Os endpoints de recados estão concentrados em [src/recados/recados.controller.ts](src/recados/recados.controller.ts) e a lógica de negócio em [src/recados/recados.service.ts](src/recados/recados.service.ts).

## Validação e transformação de dados

- Sempre que uma rota receber dados no body, prefira criar ou atualizar DTOs em [src/recados/dtos](src/recados/dtos).
- Use decorators de class-validator para validar entrada, como @IsString, @IsNotEmpty, @IsNumber e semelhantes.
- Use class-transformer para transformar objetos planos em instâncias de classes quando houver necessidade de serialização ou tratamento mais seguro dos dados.
- Para novas rotas, mantenha a validação próxima do contrato da API e evite confiar diretamente em objetos brutos.

## Ambiente Node

- Mantenha o ambiente Node em uma versão recente e estável, preferencialmente LTS.
- A workspace atual está rodando Node 22.12.0, que é uma boa base para este projeto.
- Após alterar dependências, rode npm install para sincronizar o lockfile e as bibliotecas.

## Comandos úteis

- npm run build
- npm run test
- npm run test:e2e

## Padrões recomendados

- Preserve o estilo existente do projeto e prefira alterações pequenas e explícitas.
- Se for adicionar validação, atualize os DTOs correspondentes e confirme que o controller está recebendo o tipo esperado.
