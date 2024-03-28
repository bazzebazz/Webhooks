import express from 'express';
import { Envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubService } from './presentation/services/github.service';
import { DiscordService } from './presentation/services/discord.service';

(() => {
    main();
})();

function main() {
    const app = express();

    const githubService = new GithubService();
    const discordService = new DiscordService();
    const controller = new GithubController(githubService, discordService);

    app.use(express.json());

    app.post('/api/github', controller.webhookHandler);

    app.listen(Envs.PORT, () => {
        console.log(`App running on port ${Envs.PORT}`);
    });
}