import 'dotenv/config';
import {get} from 'env-var';

export const Envs = {
    PORT: get('PORT').required().asPortNumber(),
    DISCORD_WEBHOOK: get('DISCORD_WEBHOOK').required().asString(),
}