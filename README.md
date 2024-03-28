1. Instalar las dependencias con `npm install`
2. Correr la aplicacion con `npm run dev`
3. Para poder usar los webhooks y testearlos es necesario tener instalado `ngrok`
4. Levantar el servidor de ngrok con `ngrok http 3000` o el puerto que desees
5. Si deseas mandar los mensajes a tu canal de discord tendras que hacer o usar un canal para crear un webhook desde Discord
6. Al crear el webhook copia el link del mismo y pegalo en las variables de entorno `WEBHOOK_DISCORD`.
7. Copia y reemplaza el archivo ".env.template" con el ".env" o renombralo si gustas.
8. Usa tus variables de entorno segun estipulado si las modificas, el proyecto no funcionara a menos que modifiques la config