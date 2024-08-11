import * as dotenv from "dotenv";
dotenv.config();

export const ENV_VARIABLES: any = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/task-management",
    MONGODB_OPTIONS: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    SERVER: process.env.SERVER || `http://localhost:3020`,
    JWT_SECRET: process.env.JWT_SECRET || "ManVsWildIsAwsomeShow",
    NODE_ENV: process.env.NODE_ENV,
    COINGECKO_BASE_URL: process.env.COINGECKO_BASE_URL,
    INFURA_API_KEY: process.env.INFURA_API_KEY,
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NFT_STORAGE_API_KEY: process.env.NFT_STORAGE_API_KEY,
    DEPLOYER_PRIVATE_KEY: process.env.DEPLOYER_PRIVATE_KEY,
    ETHEREUM_EXPLORER_API_KEY: process.env.ETHEREUM_EXPLORER_API_KEY,
    ARBITRUM_EXPLORER_API_KEY: process.env.ARBITRUM_EXPLORER_API_KEY,
    OPTIMISM_EXPLORER_API_KEY: process.env.OPTIMISM_EXPLORER_API_KEY,
    POLYGON_EXPLORER_API_KEY: process.env.POLYGON_EXPLORER_API_KEY,
    NEXT_PUBLIC_DEPLOYER_PRIVATE_KEY: process.env.NEXT_PUBLIC_DEPLOYER_PRIVATE_KEY,
    NEXT_PUBLIC_ALCHEMY_KEY: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
    NEXT_PUBLIC_INFURA_API_KEY: process.env.NEXT_PUBLIC_INFURA_API_KEY,
    NEXT_PUBLIC_NFT_STORAGE_API_KEY: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY,
    DCOMMA_API_KEY: process.env.DCOMMA_API_KEY,
    INCH_API_KEY: process.env.INCH_API_KEY,
    BLOCK_PI_POLYGON_RPC_KEY: process.env.BLOCK_PI_POLYGON_RPC_KEY,
    BLOCK_PI_ETHEREUM_RPC_KEY: process.env.BLOCK_PI_ETHEREUM_RPC_KEY,
    BLOCK_PI_KLAYTN_RPC_KEY: process.env.BLOCK_PI_KLAYTN_RPC_KEY,
    BLOCK_PI_BSC_RPC_KEY: process.env.BLOCK_PI_BSC_RPC_KEY,
    BLOCK_PI_ARBITRUM_RPC_KEY: process.env.BLOCK_PI_ARBITRUM_RPC_KEY,
    BLOCK_PI_OPTIMISM_RPC_KEY: process.env.BLOCK_PI_OPTIMISM_RPC_KEY,
    BLOCK_PI_SCROLL_RPC_KEY: process.env.BLOCK_PI_SCROLL_RPC_KEY,
    BLOCK_PI_GNOSIS_RPC_KEY: process.env.BLOCK_PI_GNOSIS_RPC_KEY,
    BLOCK_PI_AVALANCHE_RPC_KEY: process.env.BLOCK_PI_AVALANCHE_RPC_KEY,
    BLOCK_PI_FANTOM_RPC_KEY: process.env.BLOCK_PI_FANTOM_RPC_KEY,
    BLOCK_PI_CRONOS_RPC_KEY: process.env.BLOCK_PI_CRONOS_RPC_KEY,
    BLOCK_PI_OASYS_RPC_KEY: process.env.BLOCK_PI_OASYS_RPC_KEY,
    BLOCK_PI_METER_RPC_KEY: process.env.BLOCK_PI_METER_RPC_KEY,
    BLOCK_PI_BASE_RPC_KEY: process.env.BLOCK_PI_BASE_RPC_KEY,
    BLOCK_PI_LINEA_RPC_KEY: process.env.BLOCK_PI_LINEA_RPC_KEY,
    NEXT_PUBLIC_COVALENT_KEY: process.env.NEXT_PUBLIC_COVALENT_KEY,
    COVALENT_API_KEY: process.env.COVALENT_API_KEY,
    X_CMC_PRO_API_KEY: process.env.X_CMC_PRO_API_KEY,
    ENSO_API_KEY: process.env.ENSO_API_KEY,
    UNSTOPPABLE_TOKEN: process.env.UNSTOPPABLE_TOKEN
}