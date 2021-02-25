// package: model
// file: model/transaction.proto

import * as jspb from "google-protobuf";
import * as model_proofOfOwnership_pb from "../model/proofOfOwnership_pb";
import * as model_pagination_pb from "../model/pagination_pb";
import * as model_receipt_pb from "../model/receipt_pb";
import * as model_nodeRegistration_pb from "../model/nodeRegistration_pb";
import * as model_escrow_pb from "../model/escrow_pb";
import * as model_multiSignature_pb from "../model/multiSignature_pb";
import * as model_feeVote_pb from "../model/feeVote_pb";

export class Transaction extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getId(): string;
  setId(value: string): void;

  getBlockid(): string;
  setBlockid(value: string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getSenderaccountaddress(): Uint8Array | string;
  getSenderaccountaddress_asU8(): Uint8Array;
  getSenderaccountaddress_asB64(): string;
  setSenderaccountaddress(value: Uint8Array | string): void;

  getRecipientaccountaddress(): Uint8Array | string;
  getRecipientaccountaddress_asU8(): Uint8Array;
  getRecipientaccountaddress_asB64(): string;
  setRecipientaccountaddress(value: Uint8Array | string): void;

  getTransactiontype(): number;
  setTransactiontype(value: number): void;

  getFee(): string;
  setFee(value: string): void;

  getTimestamp(): string;
  setTimestamp(value: string): void;

  getTransactionhash(): Uint8Array | string;
  getTransactionhash_asU8(): Uint8Array;
  getTransactionhash_asB64(): string;
  setTransactionhash(value: Uint8Array | string): void;

  getTransactionbodylength(): number;
  setTransactionbodylength(value: number): void;

  getTransactionbodybytes(): Uint8Array | string;
  getTransactionbodybytes_asU8(): Uint8Array;
  getTransactionbodybytes_asB64(): string;
  setTransactionbodybytes(value: Uint8Array | string): void;

  getTransactionindex(): number;
  setTransactionindex(value: number): void;

  getMultisigchild(): boolean;
  setMultisigchild(value: boolean): void;

  hasEmptytransactionbody(): boolean;
  clearEmptytransactionbody(): void;
  getEmptytransactionbody(): EmptyTransactionBody | undefined;
  setEmptytransactionbody(value?: EmptyTransactionBody): void;

  hasSendzbctransactionbody(): boolean;
  clearSendzbctransactionbody(): void;
  getSendzbctransactionbody(): SendZBCTransactionBody | undefined;
  setSendzbctransactionbody(value?: SendZBCTransactionBody): void;

  hasNoderegistrationtransactionbody(): boolean;
  clearNoderegistrationtransactionbody(): void;
  getNoderegistrationtransactionbody(): NodeRegistrationTransactionBody | undefined;
  setNoderegistrationtransactionbody(value?: NodeRegistrationTransactionBody): void;

  hasUpdatenoderegistrationtransactionbody(): boolean;
  clearUpdatenoderegistrationtransactionbody(): void;
  getUpdatenoderegistrationtransactionbody(): UpdateNodeRegistrationTransactionBody | undefined;
  setUpdatenoderegistrationtransactionbody(value?: UpdateNodeRegistrationTransactionBody): void;

  hasRemovenoderegistrationtransactionbody(): boolean;
  clearRemovenoderegistrationtransactionbody(): void;
  getRemovenoderegistrationtransactionbody(): RemoveNodeRegistrationTransactionBody | undefined;
  setRemovenoderegistrationtransactionbody(value?: RemoveNodeRegistrationTransactionBody): void;

  hasClaimnoderegistrationtransactionbody(): boolean;
  clearClaimnoderegistrationtransactionbody(): void;
  getClaimnoderegistrationtransactionbody(): ClaimNodeRegistrationTransactionBody | undefined;
  setClaimnoderegistrationtransactionbody(value?: ClaimNodeRegistrationTransactionBody): void;

  hasSetupaccountdatasettransactionbody(): boolean;
  clearSetupaccountdatasettransactionbody(): void;
  getSetupaccountdatasettransactionbody(): SetupAccountDatasetTransactionBody | undefined;
  setSetupaccountdatasettransactionbody(value?: SetupAccountDatasetTransactionBody): void;

  hasRemoveaccountdatasettransactionbody(): boolean;
  clearRemoveaccountdatasettransactionbody(): void;
  getRemoveaccountdatasettransactionbody(): RemoveAccountDatasetTransactionBody | undefined;
  setRemoveaccountdatasettransactionbody(value?: RemoveAccountDatasetTransactionBody): void;

  hasApprovalescrowtransactionbody(): boolean;
  clearApprovalescrowtransactionbody(): void;
  getApprovalescrowtransactionbody(): ApprovalEscrowTransactionBody | undefined;
  setApprovalescrowtransactionbody(value?: ApprovalEscrowTransactionBody): void;

  hasMultisignaturetransactionbody(): boolean;
  clearMultisignaturetransactionbody(): void;
  getMultisignaturetransactionbody(): MultiSignatureTransactionBody | undefined;
  setMultisignaturetransactionbody(value?: MultiSignatureTransactionBody): void;

  hasFeevotecommittransactionbody(): boolean;
  clearFeevotecommittransactionbody(): void;
  getFeevotecommittransactionbody(): FeeVoteCommitTransactionBody | undefined;
  setFeevotecommittransactionbody(value?: FeeVoteCommitTransactionBody): void;

  hasFeevoterevealtransactionbody(): boolean;
  clearFeevoterevealtransactionbody(): void;
  getFeevoterevealtransactionbody(): FeeVoteRevealTransactionBody | undefined;
  setFeevoterevealtransactionbody(value?: FeeVoteRevealTransactionBody): void;

  hasLiquidpaymenttransactionbody(): boolean;
  clearLiquidpaymenttransactionbody(): void;
  getLiquidpaymenttransactionbody(): LiquidPaymentTransactionBody | undefined;
  setLiquidpaymenttransactionbody(value?: LiquidPaymentTransactionBody): void;

  hasLiquidpaymentstoptransactionbody(): boolean;
  clearLiquidpaymentstoptransactionbody(): void;
  getLiquidpaymentstoptransactionbody(): LiquidPaymentStopTransactionBody | undefined;
  setLiquidpaymentstoptransactionbody(value?: LiquidPaymentStopTransactionBody): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  hasEscrow(): boolean;
  clearEscrow(): void;
  getEscrow(): model_escrow_pb.Escrow | undefined;
  setEscrow(value?: model_escrow_pb.Escrow): void;

  getMessage(): Uint8Array | string;
  getMessage_asU8(): Uint8Array;
  getMessage_asB64(): string;
  setMessage(value: Uint8Array | string): void;

  getTransactionbodyCase(): Transaction.TransactionbodyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    version: number,
    id: string,
    blockid: string,
    height: number,
    senderaccountaddress: Uint8Array | string,
    recipientaccountaddress: Uint8Array | string,
    transactiontype: number,
    fee: string,
    timestamp: string,
    transactionhash: Uint8Array | string,
    transactionbodylength: number,
    transactionbodybytes: Uint8Array | string,
    transactionindex: number,
    multisigchild: boolean,
    emptytransactionbody?: EmptyTransactionBody.AsObject,
    sendzbctransactionbody?: SendZBCTransactionBody.AsObject,
    noderegistrationtransactionbody?: NodeRegistrationTransactionBody.AsObject,
    updatenoderegistrationtransactionbody?: UpdateNodeRegistrationTransactionBody.AsObject,
    removenoderegistrationtransactionbody?: RemoveNodeRegistrationTransactionBody.AsObject,
    claimnoderegistrationtransactionbody?: ClaimNodeRegistrationTransactionBody.AsObject,
    setupaccountdatasettransactionbody?: SetupAccountDatasetTransactionBody.AsObject,
    removeaccountdatasettransactionbody?: RemoveAccountDatasetTransactionBody.AsObject,
    approvalescrowtransactionbody?: ApprovalEscrowTransactionBody.AsObject,
    multisignaturetransactionbody?: MultiSignatureTransactionBody.AsObject,
    feevotecommittransactionbody?: FeeVoteCommitTransactionBody.AsObject,
    feevoterevealtransactionbody?: FeeVoteRevealTransactionBody.AsObject,
    liquidpaymenttransactionbody?: LiquidPaymentTransactionBody.AsObject,
    liquidpaymentstoptransactionbody?: LiquidPaymentStopTransactionBody.AsObject,
    signature: Uint8Array | string,
    escrow?: model_escrow_pb.Escrow.AsObject,
    message: Uint8Array | string,
  }

  export enum TransactionbodyCase {
    TRANSACTIONBODY_NOT_SET = 0,
    EMPTYTRANSACTIONBODY = 17,
    SENDZBCTRANSACTIONBODY = 18,
    NODEREGISTRATIONTRANSACTIONBODY = 19,
    UPDATENODEREGISTRATIONTRANSACTIONBODY = 20,
    REMOVENODEREGISTRATIONTRANSACTIONBODY = 21,
    CLAIMNODEREGISTRATIONTRANSACTIONBODY = 22,
    SETUPACCOUNTDATASETTRANSACTIONBODY = 23,
    REMOVEACCOUNTDATASETTRANSACTIONBODY = 24,
    APPROVALESCROWTRANSACTIONBODY = 25,
    MULTISIGNATURETRANSACTIONBODY = 26,
    FEEVOTECOMMITTRANSACTIONBODY = 27,
    FEEVOTEREVEALTRANSACTIONBODY = 28,
    LIQUIDPAYMENTTRANSACTIONBODY = 29,
    LIQUIDPAYMENTSTOPTRANSACTIONBODY = 30,
  }
}

export class EmptyTransactionBody extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyTransactionBody): EmptyTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyTransactionBody;
  static deserializeBinaryFromReader(message: EmptyTransactionBody, reader: jspb.BinaryReader): EmptyTransactionBody;
}

export namespace EmptyTransactionBody {
  export type AsObject = {
  }
}

export class SendZBCTransactionBody extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendZBCTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: SendZBCTransactionBody): SendZBCTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendZBCTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendZBCTransactionBody;
  static deserializeBinaryFromReader(message: SendZBCTransactionBody, reader: jspb.BinaryReader): SendZBCTransactionBody;
}

export namespace SendZBCTransactionBody {
  export type AsObject = {
    amount: string,
  }
}

export class NodeRegistrationTransactionBody extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getLockedbalance(): string;
  setLockedbalance(value: string): void;

  hasPoown(): boolean;
  clearPoown(): void;
  getPoown(): model_proofOfOwnership_pb.ProofOfOwnership | undefined;
  setPoown(value?: model_proofOfOwnership_pb.ProofOfOwnership): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeRegistrationTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: NodeRegistrationTransactionBody): NodeRegistrationTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeRegistrationTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeRegistrationTransactionBody;
  static deserializeBinaryFromReader(message: NodeRegistrationTransactionBody, reader: jspb.BinaryReader): NodeRegistrationTransactionBody;
}

export namespace NodeRegistrationTransactionBody {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
    accountaddress: Uint8Array | string,
    lockedbalance: string,
    poown?: model_proofOfOwnership_pb.ProofOfOwnership.AsObject,
  }
}

export class UpdateNodeRegistrationTransactionBody extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  getLockedbalance(): string;
  setLockedbalance(value: string): void;

  hasPoown(): boolean;
  clearPoown(): void;
  getPoown(): model_proofOfOwnership_pb.ProofOfOwnership | undefined;
  setPoown(value?: model_proofOfOwnership_pb.ProofOfOwnership): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNodeRegistrationTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNodeRegistrationTransactionBody): UpdateNodeRegistrationTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNodeRegistrationTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNodeRegistrationTransactionBody;
  static deserializeBinaryFromReader(message: UpdateNodeRegistrationTransactionBody, reader: jspb.BinaryReader): UpdateNodeRegistrationTransactionBody;
}

export namespace UpdateNodeRegistrationTransactionBody {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
    lockedbalance: string,
    poown?: model_proofOfOwnership_pb.ProofOfOwnership.AsObject,
  }
}

export class RemoveNodeRegistrationTransactionBody extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveNodeRegistrationTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveNodeRegistrationTransactionBody): RemoveNodeRegistrationTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveNodeRegistrationTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveNodeRegistrationTransactionBody;
  static deserializeBinaryFromReader(message: RemoveNodeRegistrationTransactionBody, reader: jspb.BinaryReader): RemoveNodeRegistrationTransactionBody;
}

export namespace RemoveNodeRegistrationTransactionBody {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
  }
}

export class ClaimNodeRegistrationTransactionBody extends jspb.Message {
  getNodepublickey(): Uint8Array | string;
  getNodepublickey_asU8(): Uint8Array;
  getNodepublickey_asB64(): string;
  setNodepublickey(value: Uint8Array | string): void;

  hasPoown(): boolean;
  clearPoown(): void;
  getPoown(): model_proofOfOwnership_pb.ProofOfOwnership | undefined;
  setPoown(value?: model_proofOfOwnership_pb.ProofOfOwnership): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimNodeRegistrationTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimNodeRegistrationTransactionBody): ClaimNodeRegistrationTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimNodeRegistrationTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimNodeRegistrationTransactionBody;
  static deserializeBinaryFromReader(message: ClaimNodeRegistrationTransactionBody, reader: jspb.BinaryReader): ClaimNodeRegistrationTransactionBody;
}

export namespace ClaimNodeRegistrationTransactionBody {
  export type AsObject = {
    nodepublickey: Uint8Array | string,
    poown?: model_proofOfOwnership_pb.ProofOfOwnership.AsObject,
  }
}

export class SetupAccountDatasetTransactionBody extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupAccountDatasetTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: SetupAccountDatasetTransactionBody): SetupAccountDatasetTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetupAccountDatasetTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupAccountDatasetTransactionBody;
  static deserializeBinaryFromReader(message: SetupAccountDatasetTransactionBody, reader: jspb.BinaryReader): SetupAccountDatasetTransactionBody;
}

export namespace SetupAccountDatasetTransactionBody {
  export type AsObject = {
    property: string,
    value: string,
  }
}

export class RemoveAccountDatasetTransactionBody extends jspb.Message {
  getProperty(): string;
  setProperty(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveAccountDatasetTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveAccountDatasetTransactionBody): RemoveAccountDatasetTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveAccountDatasetTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveAccountDatasetTransactionBody;
  static deserializeBinaryFromReader(message: RemoveAccountDatasetTransactionBody, reader: jspb.BinaryReader): RemoveAccountDatasetTransactionBody;
}

export namespace RemoveAccountDatasetTransactionBody {
  export type AsObject = {
    property: string,
    value: string,
  }
}

export class ApprovalEscrowTransactionBody extends jspb.Message {
  getApproval(): model_escrow_pb.EscrowApprovalMap[keyof model_escrow_pb.EscrowApprovalMap];
  setApproval(value: model_escrow_pb.EscrowApprovalMap[keyof model_escrow_pb.EscrowApprovalMap]): void;

  getTransactionid(): string;
  setTransactionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalEscrowTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalEscrowTransactionBody): ApprovalEscrowTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovalEscrowTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalEscrowTransactionBody;
  static deserializeBinaryFromReader(message: ApprovalEscrowTransactionBody, reader: jspb.BinaryReader): ApprovalEscrowTransactionBody;
}

export namespace ApprovalEscrowTransactionBody {
  export type AsObject = {
    approval: model_escrow_pb.EscrowApprovalMap[keyof model_escrow_pb.EscrowApprovalMap],
    transactionid: string,
  }
}

export class MultiSignatureTransactionBody extends jspb.Message {
  hasMultisignatureinfo(): boolean;
  clearMultisignatureinfo(): void;
  getMultisignatureinfo(): model_multiSignature_pb.MultiSignatureInfo | undefined;
  setMultisignatureinfo(value?: model_multiSignature_pb.MultiSignatureInfo): void;

  getUnsignedtransactionbytes(): Uint8Array | string;
  getUnsignedtransactionbytes_asU8(): Uint8Array;
  getUnsignedtransactionbytes_asB64(): string;
  setUnsignedtransactionbytes(value: Uint8Array | string): void;

  hasSignatureinfo(): boolean;
  clearSignatureinfo(): void;
  getSignatureinfo(): model_multiSignature_pb.SignatureInfo | undefined;
  setSignatureinfo(value?: model_multiSignature_pb.SignatureInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiSignatureTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: MultiSignatureTransactionBody): MultiSignatureTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiSignatureTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiSignatureTransactionBody;
  static deserializeBinaryFromReader(message: MultiSignatureTransactionBody, reader: jspb.BinaryReader): MultiSignatureTransactionBody;
}

export namespace MultiSignatureTransactionBody {
  export type AsObject = {
    multisignatureinfo?: model_multiSignature_pb.MultiSignatureInfo.AsObject,
    unsignedtransactionbytes: Uint8Array | string,
    signatureinfo?: model_multiSignature_pb.SignatureInfo.AsObject,
  }
}

export class FeeVoteCommitTransactionBody extends jspb.Message {
  getVotehash(): Uint8Array | string;
  getVotehash_asU8(): Uint8Array;
  getVotehash_asB64(): string;
  setVotehash(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeVoteCommitTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FeeVoteCommitTransactionBody): FeeVoteCommitTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeVoteCommitTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeVoteCommitTransactionBody;
  static deserializeBinaryFromReader(message: FeeVoteCommitTransactionBody, reader: jspb.BinaryReader): FeeVoteCommitTransactionBody;
}

export namespace FeeVoteCommitTransactionBody {
  export type AsObject = {
    votehash: Uint8Array | string,
  }
}

export class FeeVoteRevealTransactionBody extends jspb.Message {
  hasFeevoteinfo(): boolean;
  clearFeevoteinfo(): void;
  getFeevoteinfo(): model_feeVote_pb.FeeVoteInfo | undefined;
  setFeevoteinfo(value?: model_feeVote_pb.FeeVoteInfo): void;

  getVotersignature(): Uint8Array | string;
  getVotersignature_asU8(): Uint8Array;
  getVotersignature_asB64(): string;
  setVotersignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeeVoteRevealTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: FeeVoteRevealTransactionBody): FeeVoteRevealTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeeVoteRevealTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeeVoteRevealTransactionBody;
  static deserializeBinaryFromReader(message: FeeVoteRevealTransactionBody, reader: jspb.BinaryReader): FeeVoteRevealTransactionBody;
}

export namespace FeeVoteRevealTransactionBody {
  export type AsObject = {
    feevoteinfo?: model_feeVote_pb.FeeVoteInfo.AsObject,
    votersignature: Uint8Array | string,
  }
}

export class LiquidPaymentTransactionBody extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  getCompleteminutes(): string;
  setCompleteminutes(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidPaymentTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidPaymentTransactionBody): LiquidPaymentTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidPaymentTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidPaymentTransactionBody;
  static deserializeBinaryFromReader(message: LiquidPaymentTransactionBody, reader: jspb.BinaryReader): LiquidPaymentTransactionBody;
}

export namespace LiquidPaymentTransactionBody {
  export type AsObject = {
    amount: string,
    completeminutes: string,
  }
}

export class LiquidPaymentStopTransactionBody extends jspb.Message {
  getTransactionid(): string;
  setTransactionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LiquidPaymentStopTransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: LiquidPaymentStopTransactionBody): LiquidPaymentStopTransactionBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LiquidPaymentStopTransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LiquidPaymentStopTransactionBody;
  static deserializeBinaryFromReader(message: LiquidPaymentStopTransactionBody, reader: jspb.BinaryReader): LiquidPaymentStopTransactionBody;
}

export namespace LiquidPaymentStopTransactionBody {
  export type AsObject = {
    transactionid: string,
  }
}

export class GetTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetTransactionsRequest extends jspb.Message {
  getAccountaddress(): Uint8Array | string;
  getAccountaddress_asU8(): Uint8Array;
  getAccountaddress_asB64(): string;
  setAccountaddress(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getTimestampstart(): string;
  setTimestampstart(value: string): void;

  getTimestampend(): string;
  setTimestampend(value: string): void;

  getTransactiontype(): number;
  setTransactiontype(value: number): void;

  hasPagination(): boolean;
  clearPagination(): void;
  getPagination(): model_pagination_pb.Pagination | undefined;
  setPagination(value?: model_pagination_pb.Pagination): void;

  getFromblock(): number;
  setFromblock(value: number): void;

  getToblock(): number;
  setToblock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsRequest): GetTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsRequest;
  static deserializeBinaryFromReader(message: GetTransactionsRequest, reader: jspb.BinaryReader): GetTransactionsRequest;
}

export namespace GetTransactionsRequest {
  export type AsObject = {
    accountaddress: Uint8Array | string,
    height: number,
    timestampstart: string,
    timestampend: string,
    transactiontype: number,
    pagination?: model_pagination_pb.Pagination.AsObject,
    fromblock: number,
    toblock: number,
  }
}

export class GetTransactionsResponse extends jspb.Message {
  getTotal(): string;
  setTotal(value: string): void;

  clearTransactionsList(): void;
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): void;
  addTransactions(value?: Transaction, index?: number): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionsResponse): GetTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionsResponse;
  static deserializeBinaryFromReader(message: GetTransactionsResponse, reader: jspb.BinaryReader): GetTransactionsResponse;
}

export namespace GetTransactionsResponse {
  export type AsObject = {
    total: string,
    transactionsList: Array<Transaction.AsObject>,
  }
}

export class PostTransactionRequest extends jspb.Message {
  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostTransactionRequest): PostTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTransactionRequest;
  static deserializeBinaryFromReader(message: PostTransactionRequest, reader: jspb.BinaryReader): PostTransactionRequest;
}

export namespace PostTransactionRequest {
  export type AsObject = {
    transactionbytes: Uint8Array | string,
  }
}

export class PostTransactionResponse extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostTransactionResponse): PostTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostTransactionResponse;
  static deserializeBinaryFromReader(message: PostTransactionResponse, reader: jspb.BinaryReader): PostTransactionResponse;
}

export namespace PostTransactionResponse {
  export type AsObject = {
    transaction?: Transaction.AsObject,
  }
}

export class SendTransactionRequest extends jspb.Message {
  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  getChaintype(): number;
  setChaintype(value: number): void;

  getSenderpublickey(): Uint8Array | string;
  getSenderpublickey_asU8(): Uint8Array;
  getSenderpublickey_asB64(): string;
  setSenderpublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendTransactionRequest): SendTransactionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendTransactionRequest;
  static deserializeBinaryFromReader(message: SendTransactionRequest, reader: jspb.BinaryReader): SendTransactionRequest;
}

export namespace SendTransactionRequest {
  export type AsObject = {
    transactionbytes: Uint8Array | string,
    chaintype: number,
    senderpublickey: Uint8Array | string,
  }
}

export class SendTransactionResponse extends jspb.Message {
  hasReceipt(): boolean;
  clearReceipt(): void;
  getReceipt(): model_receipt_pb.Receipt | undefined;
  setReceipt(value?: model_receipt_pb.Receipt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendTransactionResponse): SendTransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendTransactionResponse;
  static deserializeBinaryFromReader(message: SendTransactionResponse, reader: jspb.BinaryReader): SendTransactionResponse;
}

export namespace SendTransactionResponse {
  export type AsObject = {
    receipt?: model_receipt_pb.Receipt.AsObject,
  }
}

export class RequestBlockTransactionsRequest extends jspb.Message {
  clearTransactionidsList(): void;
  getTransactionidsList(): Array<number>;
  setTransactionidsList(value: Array<number>): void;
  addTransactionids(value: number, index?: number): number;

  getChaintype(): number;
  setChaintype(value: number): void;

  getBlockid(): string;
  setBlockid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestBlockTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestBlockTransactionsRequest): RequestBlockTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestBlockTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestBlockTransactionsRequest;
  static deserializeBinaryFromReader(message: RequestBlockTransactionsRequest, reader: jspb.BinaryReader): RequestBlockTransactionsRequest;
}

export namespace RequestBlockTransactionsRequest {
  export type AsObject = {
    transactionidsList: Array<number>,
    chaintype: number,
    blockid: string,
  }
}

export class SendBlockTransactionsRequest extends jspb.Message {
  getChaintype(): number;
  setChaintype(value: number): void;

  clearTransactionsbytesList(): void;
  getTransactionsbytesList(): Array<Uint8Array | string>;
  getTransactionsbytesList_asU8(): Array<Uint8Array>;
  getTransactionsbytesList_asB64(): Array<string>;
  setTransactionsbytesList(value: Array<Uint8Array | string>): void;
  addTransactionsbytes(value: Uint8Array | string, index?: number): Uint8Array | string;

  getSenderpublickey(): Uint8Array | string;
  getSenderpublickey_asU8(): Uint8Array;
  getSenderpublickey_asB64(): string;
  setSenderpublickey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBlockTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendBlockTransactionsRequest): SendBlockTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendBlockTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBlockTransactionsRequest;
  static deserializeBinaryFromReader(message: SendBlockTransactionsRequest, reader: jspb.BinaryReader): SendBlockTransactionsRequest;
}

export namespace SendBlockTransactionsRequest {
  export type AsObject = {
    chaintype: number,
    transactionsbytesList: Array<Uint8Array | string>,
    senderpublickey: Uint8Array | string,
  }
}

export class SendBlockTransactionsResponse extends jspb.Message {
  clearReceiptsList(): void;
  getReceiptsList(): Array<model_receipt_pb.Receipt>;
  setReceiptsList(value: Array<model_receipt_pb.Receipt>): void;
  addReceipts(value?: model_receipt_pb.Receipt, index?: number): model_receipt_pb.Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendBlockTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendBlockTransactionsResponse): SendBlockTransactionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendBlockTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendBlockTransactionsResponse;
  static deserializeBinaryFromReader(message: SendBlockTransactionsResponse, reader: jspb.BinaryReader): SendBlockTransactionsResponse;
}

export namespace SendBlockTransactionsResponse {
  export type AsObject = {
    receiptsList: Array<model_receipt_pb.Receipt.AsObject>,
  }
}

export class GetTransactionMinimumFeeRequest extends jspb.Message {
  getTransactionbytes(): Uint8Array | string;
  getTransactionbytes_asU8(): Uint8Array;
  getTransactionbytes_asB64(): string;
  setTransactionbytes(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionMinimumFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionMinimumFeeRequest): GetTransactionMinimumFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionMinimumFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionMinimumFeeRequest;
  static deserializeBinaryFromReader(message: GetTransactionMinimumFeeRequest, reader: jspb.BinaryReader): GetTransactionMinimumFeeRequest;
}

export namespace GetTransactionMinimumFeeRequest {
  export type AsObject = {
    transactionbytes: Uint8Array | string,
  }
}

export class GetTransactionMinimumFeeResponse extends jspb.Message {
  getFee(): string;
  setFee(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionMinimumFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionMinimumFeeResponse): GetTransactionMinimumFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionMinimumFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionMinimumFeeResponse;
  static deserializeBinaryFromReader(message: GetTransactionMinimumFeeResponse, reader: jspb.BinaryReader): GetTransactionMinimumFeeResponse;
}

export namespace GetTransactionMinimumFeeResponse {
  export type AsObject = {
    fee: string,
  }
}

export interface TransactionTypeMap {
  EMPTYTRANSACTION: 0;
  SENDZBCTRANSACTION: 1;
  NODEREGISTRATIONTRANSACTION: 2;
  UPDATENODEREGISTRATIONTRANSACTION: 258;
  REMOVENODEREGISTRATIONTRANSACTION: 514;
  CLAIMNODEREGISTRATIONTRANSACTION: 770;
  SETUPACCOUNTDATASETTRANSACTION: 3;
  REMOVEACCOUNTDATASETTRANSACTION: 259;
  APPROVALESCROWTRANSACTION: 4;
  MULTISIGNATURETRANSACTION: 5;
  LIQUIDPAYMENTTRANSACTION: 6;
  LIQUIDPAYMENTSTOPTRANSACTION: 262;
  FEEVOTECOMMITMENTVOTETRANSACTION: 7;
  FEEVOTEREVEALVOTETRANSACTION: 263;
}

export const TransactionType: TransactionTypeMap;

