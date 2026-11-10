# Norte Digital — site institucional

Landing page institucional para uma empresa de serviços digitais voltada a micro e pequenas empresas de Roraima.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## WhatsApp

Copie `.env.example` para `.env.local` e preencha `NEXT_PUBLIC_WHATSAPP_NUMBER` com o telefone que receberá os contatos, em formato internacional e somente números: `55` + DDD + telefone (por exemplo, `5595999999999`).

Quando alguém envia o formulário do site, o navegador monta uma mensagem com os dados preenchidos e abre o WhatsApp nesse número. A pessoa confere a mensagem e toca em **Enviar**. Portanto, essa configuração usa um link `wa.me`: não conecta uma conta por QR code, não envia mensagens automaticamente e não precisa de token, webhook ou API do WhatsApp. A variável começa com `NEXT_PUBLIC_` porque o número é usado pelo código que roda no navegador; não coloque senhas ou tokens nela.

Depois de alterar `.env.local`, reinicie o servidor de desenvolvimento (`npm run dev`) para carregar a configuração. Se o número ficar vazio, o WhatsApp abre com a mensagem preparada e o visitante escolhe o destinatário.

## Build de produção

```bash
npm run build
npm start
```
