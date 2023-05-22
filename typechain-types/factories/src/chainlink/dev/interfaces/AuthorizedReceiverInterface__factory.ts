/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AuthorizedReceiverInterface,
  AuthorizedReceiverInterfaceInterface,
} from "../../../../../src/chainlink/dev/interfaces/AuthorizedReceiverInterface";

const _abi = [
  {
    inputs: [],
    name: "getAuthorizedSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "isAuthorizedSender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "senders",
        type: "address[]",
      },
    ],
    name: "setAuthorizedSenders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class AuthorizedReceiverInterface__factory {
  static readonly abi = _abi;
  static createInterface(): AuthorizedReceiverInterfaceInterface {
    return new utils.Interface(_abi) as AuthorizedReceiverInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuthorizedReceiverInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AuthorizedReceiverInterface;
  }
}
