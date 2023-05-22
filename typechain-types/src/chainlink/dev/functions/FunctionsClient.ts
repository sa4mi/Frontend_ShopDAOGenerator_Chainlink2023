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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace Functions {
  export type RequestStruct = {
    codeLocation: PromiseOrValue<BigNumberish>;
    secretsLocation: PromiseOrValue<BigNumberish>;
    language: PromiseOrValue<BigNumberish>;
    source: PromiseOrValue<string>;
    secrets: PromiseOrValue<BytesLike>;
    args: PromiseOrValue<string>[];
  };

  export type RequestStructOutput = [
    number,
    number,
    number,
    string,
    string,
    string[]
  ] & {
    codeLocation: number;
    secretsLocation: number;
    language: number;
    source: string;
    secrets: string;
    args: string[];
  };
}

export interface FunctionsClientInterface extends utils.Interface {
  functions: {
    "estimateCost((uint8,uint8,uint8,string,bytes,string[]),uint64,uint32,uint256)": FunctionFragment;
    "getDONPublicKey()": FunctionFragment;
    "handleOracleFulfillment(bytes32,bytes,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "estimateCost"
      | "getDONPublicKey"
      | "handleOracleFulfillment"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateCost",
    values: [
      Functions.RequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDONPublicKey",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handleOracleFulfillment",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDONPublicKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleOracleFulfillment",
    data: BytesLike
  ): Result;

  events: {
    "RequestFulfilled(bytes32)": EventFragment;
    "RequestSent(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RequestFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSent"): EventFragment;
}

export interface RequestFulfilledEventObject {
  id: string;
}
export type RequestFulfilledEvent = TypedEvent<
  [string],
  RequestFulfilledEventObject
>;

export type RequestFulfilledEventFilter =
  TypedEventFilter<RequestFulfilledEvent>;

export interface RequestSentEventObject {
  id: string;
}
export type RequestSentEvent = TypedEvent<[string], RequestSentEventObject>;

export type RequestSentEventFilter = TypedEventFilter<RequestSentEvent>;

export interface FunctionsClient extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FunctionsClientInterface;

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
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDONPublicKey(overrides?: CallOverrides): Promise<[string]>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  estimateCost(
    req: Functions.RequestStruct,
    subscriptionId: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    gasPrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDONPublicKey(overrides?: CallOverrides): Promise<string>;

  handleOracleFulfillment(
    requestId: PromiseOrValue<BytesLike>,
    response: PromiseOrValue<BytesLike>,
    err: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDONPublicKey(overrides?: CallOverrides): Promise<string>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "RequestFulfilled(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;
    RequestFulfilled(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;

    "RequestSent(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestSentEventFilter;
    RequestSent(id?: PromiseOrValue<BytesLike> | null): RequestSentEventFilter;
  };

  estimateGas: {
    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDONPublicKey(overrides?: CallOverrides): Promise<BigNumber>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    estimateCost(
      req: Functions.RequestStruct,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      gasPrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDONPublicKey(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
