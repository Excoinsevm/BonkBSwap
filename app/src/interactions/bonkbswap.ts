import { Provider, web3 } from "@project-serum/anchor";
import { NATIVE_MINT, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SystemProgram, Transaction } from "@solana/web3.js";
import { toBN } from "../utils";
import { getProgram } from "../web3";
import { accountExists, createATA, getATA, getBasicAccounts } from "./common";
import { unwrapTx, wrapTx } from "./sol";

export const getRate = async (provider: Provider): Promise<number> => {
  const { bonkbswapAccount } = getBasicAccounts();
  const program = getProgram(provider);
  const data = await program.account.bonkbSwapAccount.fetch(bonkbswapAccount);
  const rate = data.rate.toNumber();
  return rate;
};

export const buyTokenTx = async (
  provider: Provider,
  value: number,
  amount: number
): Promise<Transaction> => {
  const { wallet } = provider;
  const { bonkbMint, poolBonkb, poolWsol, poolOwner, bonkbswapAccount } =
    getBasicAccounts();

  const program = getProgram(provider);
  const userWsol = await getATA(wallet.publicKey, NATIVE_MINT);
  const userBonkb = await getATA(wallet.publicKey, bonkbMint);

  const tx = new web3.Transaction();

  if (!(await accountExists(provider, userBonkb))) {
    tx.add(await createATA(wallet.publicKey, bonkbMint));
  }

  tx.add(await wrapTx(provider, wallet.publicKey, value * 10 ** 9));

  tx.add(
    program.instruction.buyToken(toBN(amount, 9), {
      accounts: {
        user: wallet.publicKey,
        userWsol,
        userBonkb,
        poolWsol,
        poolBonkb,
        poolOwner,
        bonkbswapAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
    })
  );

  tx.add(await unwrapTx(wallet.publicKey));

  return tx;
};

export const sellTokenTx = async (
  provider: Provider,
  amount: number
): Promise<Transaction> => {
  const { wallet } = provider;
  const { bonkbMint, poolBonkb, poolWsol, poolOwner, bonkbswapAccount } =
    getBasicAccounts();

  const program = getProgram(provider);
  const userWsol = await getATA(wallet.publicKey, NATIVE_MINT);
  const userBonkb = await getATA(wallet.publicKey, bonkbMint);

  const tx = new web3.Transaction();

  if (!(await accountExists(provider, userWsol))) {
    tx.add(await createATA(wallet.publicKey, NATIVE_MINT));
  }

  tx.add(
    program.instruction.sellToken(toBN(amount, 9), {
      accounts: {
        user: wallet.publicKey,
        userWsol,
        userBonkb,
        poolWsol,
        poolBonkb,
        poolOwner,
        bonkbswapAccount,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
    })
  );

  tx.add(await unwrapTx(wallet.publicKey));

  return tx;
};
