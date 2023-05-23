/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace FunctionsBillingRegistryInterface {
  export type RequestBillingStruct = {
    subscriptionId: PromiseOrValue<BigNumberish>;
    client: PromiseOrValue<string>;
    gasLimit: PromiseOrValue<BigNumberish>;
    gasPrice: PromiseOrValue<BigNumberish>;
  };

  export type RequestBillingStructOutput = [
    BigNumber,
    string,
    number,
    BigNumber
  ] & {
    subscriptionId: BigNumber;
    client: string;
    gasLimit: number;
    gasPrice: BigNumber;
  };
}

export interface FunctionsBillingRegistryInterfaceInterface
  extends utils.Interface {
  functions: {
    "estimateCost(uint32,uint256,uint96,uint96)": FunctionFragment;
    "fulfillAndBill(bytes32,bytes,bytes,address,address[31],uint8,uint256,uint256)": FunctionFragment;
    "getRequestConfig()": FunctionFragment;
    "getRequiredFee(bytes,(uint64,address,uint32,uint256))": FunctionFragment;
    "getSubscriptionOwner(uint64)": FunctionFragment;
    "startBilling(bytes,(uint64,address,uint32,uint256))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "estimateCost"
      | "fulfillAndBill"
      | "getRequestConfig"
      | "getRequiredFee"
      | "getSubscriptionOwner"
      | "startBilling"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateCost",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillAndBill",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequiredFee",
    values: [
      PromiseOrValue<BytesLike>,
      FunctionsBillingRegistryInterface.RequestBillingStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptionOwner",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startBilling",
    values: [
      PromiseOrValue<BytesLike>,
      FunctionsBillingRegistryInterface.RequestBillingStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillAndBill",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequiredFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptionOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startBilling",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FunctionsBillingRegistryInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FunctionsBillingRegistryInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    estimateCost(
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      donFee: PromiseOrValue<BigNumberish>,
      registryFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fulfillAndBill(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      transmitter: PromiseOrValue<string>,
      signers: PromiseOrValue<string>[],
      signerCount: PromiseOrValue<BigNumberish>,
      reportValidationGas: PromiseOrValue<BigNumberish>,
      initialGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRequestConfig(overrides?: CallOverrides): Promise<[number, string[]]>;

    getRequiredFee(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSubscriptionOwner(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    startBilling(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  estimateCost(
    gasLimit: PromiseOrValue<BigNumberish>,
    gasPrice: PromiseOrValue<BigNumberish>,
    donFee: PromiseOrValue<BigNumberish>,
    registryFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fulfillAndBill(
    requestId: PromiseOrValue<BytesLike>,
    response: PromiseOrValue<BytesLike>,
    err: PromiseOrValue<BytesLike>,
    transmitter: PromiseOrValue<string>,
    signers: PromiseOrValue<string>[],
    signerCount: PromiseOrValue<BigNumberish>,
    reportValidationGas: PromiseOrValue<BigNumberish>,
    initialGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRequestConfig(overrides?: CallOverrides): Promise<[number, string[]]>;

  getRequiredFee(
    data: PromiseOrValue<BytesLike>,
    billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSubscriptionOwner(
    subscriptionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  startBilling(
    data: PromiseOrValue<BytesLike>,
    billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateCost(
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      donFee: PromiseOrValue<BigNumberish>,
      registryFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fulfillAndBill(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      transmitter: PromiseOrValue<string>,
      signers: PromiseOrValue<string>[],
      signerCount: PromiseOrValue<BigNumberish>,
      reportValidationGas: PromiseOrValue<BigNumberish>,
      initialGas: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getRequestConfig(overrides?: CallOverrides): Promise<[number, string[]]>;

    getRequiredFee(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriptionOwner(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    startBilling(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    estimateCost(
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      donFee: PromiseOrValue<BigNumberish>,
      registryFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fulfillAndBill(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      transmitter: PromiseOrValue<string>,
      signers: PromiseOrValue<string>[],
      signerCount: PromiseOrValue<BigNumberish>,
      reportValidationGas: PromiseOrValue<BigNumberish>,
      initialGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRequestConfig(overrides?: CallOverrides): Promise<BigNumber>;

    getRequiredFee(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriptionOwner(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startBilling(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateCost(
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      donFee: PromiseOrValue<BigNumberish>,
      registryFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fulfillAndBill(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      transmitter: PromiseOrValue<string>,
      signers: PromiseOrValue<string>[],
      signerCount: PromiseOrValue<BigNumberish>,
      reportValidationGas: PromiseOrValue<BigNumberish>,
      initialGas: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRequestConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequiredFee(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubscriptionOwner(
      subscriptionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startBilling(
      data: PromiseOrValue<BytesLike>,
      billing: FunctionsBillingRegistryInterface.RequestBillingStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
