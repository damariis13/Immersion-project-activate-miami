import React from 'react';
import { useEffect, useState } from "react";
import SelectWalletModal from "../../components/Modal/Modal";
import { useWeb3React } from "@web3-react/core";
import { networkParams } from "../../network/network";
import { connectors } from "../../components/Connectors/Connectors";
import { toHex, truncateAddress } from "../../utils/utils";
import './Connect.scss'
import Btn from '../../components/Button/button';
import robot from '../../assets/robot-moonmoon.png';

function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    active
  } = useWeb3React();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [network, setNetwork] = useState(undefined);
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const handleInput = (e) => {
    const msg = e.target.value;
    setMessage(msg);
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const signMessage = async () => {
    if (!library) return;
    try {
      const signature = await library.provider.request({
        method: "personal_sign",
        params: [message, account]
      });
      setSignedMessage(message);
      setSignature(signature);
    } catch (error) {
      setError(error);
    }
  };

  const verifyMessage = async () => {
    if (!library) return;
    try {
      const verify = await library.provider.request({
        method: "personal_ecRecover",
        params: [signedMessage, signature]
      });
      setVerified(verify === account.toLowerCase());
    } catch (error) {
      setError(error);
    }
  };

  const refreshState = () => {
    window.localStorage.setItem("provider", undefined);
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnect = () => {
    refreshState();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");
    if (provider) activate(connectors[provider]);
  }, []);

  return (
    <div className="display">
      <div className="navbar">
          <Btn text="Languages" />
          <Btn text="Live Chat" />
          <Btn text="MoonMoon" />
      </div>
      <div className='main'>
      <h1 className='main_text'>
          MoonMoon can walk you on your new wallet journey
      </h1>
      <div className='main_robot'>
          <img src={robot} alt="robot" />
      </div>
      </div>
      <div className='legal_btns'>
        <button className='legal_btn purple'>Create a new wallet</button>
        <button className='legal_btn white' onClick={onOpen}>I already have a wallet</button>
      </div>
      <SelectWalletModal isOpen={isOpen} closeModal={onClose} />
      
    </div>
    
  );
}

export default Navbar;
