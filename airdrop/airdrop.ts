import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"

//it is necessary to run the keygen.ts to generate a new private secret key
import wallet from "./dev-wallet.json"

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
    try {
        // We are going to claim 2 devnet SOL tokens
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
        console.log(`Success! Check out your TX here:
            https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
        } catch(e) {
            console.error(`Oops, something went wrong: ${e}`)
        }
    })();
