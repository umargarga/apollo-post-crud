import { config } from 'dotenv';

const { parsed } = config();

export const {
    PORT,
    MODE,
    IN_PROD = MODE !== 'prod',
    DB = "mongodb+srv://root:root@cluster0.w1j1d.mongodb.net/post-gql-app"
} = parsed