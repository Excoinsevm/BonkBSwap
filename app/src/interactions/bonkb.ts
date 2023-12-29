import * as anchor from "@project-serum/anchor";
import { getTokenAccount } from "@project-serum/common";
import { u64 } from "@solana/spl-token";
import { PublicKey } from "@solana/web3.js";
import { accountExists, getATA } from "./common";

export const getMacroBalance = async (
  provider: anchor.Provider,
  user: PublicKey
): Promise<u64> => {
  const bonkbMint = new PublicKey(process.env.NEXT_PUBLIC_BONKB_MINT || "");
  const userBonkbAddr = await getATA(user, bonkbMint);
  let balance: u64;

  if(await accountExists(provider, userBonkbAddr)){
    const tokenAccount = await getTokenAccount(provider, userBonkbAddr);
    balance = tokenAccount.amount;
  }else{
    balance = new u64(0);
  }

  console.log("Bonkb balance: " + balance.toNumber());

  return balance;
};
