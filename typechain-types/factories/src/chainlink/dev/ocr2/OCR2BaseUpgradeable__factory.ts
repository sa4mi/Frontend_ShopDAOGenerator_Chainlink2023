/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OCR2BaseUpgradeable,
  OCR2BaseUpgradeableInterface,
} from "../../../../../src/chainlink/dev/ocr2/OCR2BaseUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "CannotSelfTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyCallableByOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerMustBeSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ReportInvalid",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousConfigBlockNumber",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "configDigest",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "configCount",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "signers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "transmitters",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "f",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "onchainConfig",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "offchainConfigVersion",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "offchainConfig",
        type: "bytes",
      },
    ],
    name: "ConfigSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "configDigest",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "epoch",
        type: "uint32",
      },
    ],
    name: "Transmitted",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestConfigDetails",
    outputs: [
      {
        internalType: "uint32",
        name: "configCount",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "configDigest",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestConfigDigestAndEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "scanLogs",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "configDigest",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "epoch",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_signers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_transmitters",
        type: "address[]",
      },
      {
        internalType: "uint8",
        name: "_f",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "_onchainConfig",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "_offchainConfigVersion",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "_offchainConfig",
        type: "bytes",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[3]",
        name: "reportContext",
        type: "bytes32[3]",
      },
      {
        internalType: "bytes",
        name: "report",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "rs",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32[]",
        name: "ss",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "rawVs",
        type: "bytes32",
      },
    ],
    name: "transmit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "transmitters",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "typeAndVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class OCR2BaseUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): OCR2BaseUpgradeableInterface {
    return new utils.Interface(_abi) as OCR2BaseUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OCR2BaseUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as OCR2BaseUpgradeable;
  }
}
