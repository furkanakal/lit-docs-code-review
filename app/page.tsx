'use client';
import { LitLogo } from '@/components/LitLogo'
import { useState } from 'react';

import { LitNodeClient } from '@lit-protocol/lit-node-client';
import * as LitJsSdk from '@lit-protocol/lit-node-client';

import { ethers } from 'ethers';
import { ethConnect } from '@lit-protocol/auth-browser';
import { LitActionResource } from '@lit-protocol/auth-helpers';

declare var window: any

export default function Home() {
  const [status, setStatus] = useState('');

  async function go() {
    setStatus('Creating a LitNodeClient instance...');

    const litNodeClient = new LitNodeClient({
      litNetwork: 'cayenne',
      debug: true,
    })

    await litNodeClient.connect();

    // -----------------------------------------------------------

    // // checkAndSignAuthMessage()

    // setStatus('Getting authSig...');

    // const nonce_ = litNodeClient.getLatestBlockhash()!;

    // const authSig = await LitJsSdk.checkAndSignAuthMessage({
    //   chain: "ethereum",
    //   nonce: nonce_
    // });

    // console.log(authSig);

    // -----------------------------------------------------------

    // // signAndSaveAuthMessage()

    // const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = web3Provider.getSigner();
    // const walletAddress = await signer.getAddress();

    // const nonce_ = litNodeClient.getLatestBlockhash()!;
    // const uri_ = "http://localhost:3000/";

    // setStatus('Getting authSig...');

    // const authSig = await ethConnect.signAndSaveAuthMessage({
    //   web3: web3Provider,
    //   account: walletAddress,
    //   chainId: 1,
    //   resources: new LitActionResource('*'),
    //   expiration: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    //   uri: uri_,
    //   nonce: nonce_
    // });

    // console.log(authSig);

    // -----------------------------------------------------------

    // // getSessionSigs()

    


  }

  return (
    <main>
      <div className="flex justify-center mt-10">
        <LitLogo />
      </div>

      <div className="flex justify-center mt-10">
        <h1 className="text-5xl font-bold">
          Lit Protocol
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        <button onClick={go} className="lit-button">Go</button>
      </div>

      <div className="flex justify-center mt-10 text-white">
        <p>{status}</p>
      </div>

    </main>
  )
}
