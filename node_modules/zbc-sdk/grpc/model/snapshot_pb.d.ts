// package: model
// file: model/snapshot.proto

import * as jspb from "google-protobuf";
import * as model_spineBlockManifest_pb from "../model/spineBlockManifest_pb";
import * as model_accountBalance_pb from "../model/accountBalance_pb";
import * as model_nodeRegistration_pb from "../model/nodeRegistration_pb";
import * as model_accountDataset_pb from "../model/accountDataset_pb";
import * as model_participationScore_pb from "../model/participationScore_pb";
import * as model_publishedReceipt_pb from "../model/publishedReceipt_pb";
import * as model_escrow_pb from "../model/escrow_pb";
import * as model_multiSignature_pb from "../model/multiSignature_pb";
import * as model_block_pb from "../model/block_pb";
import * as model_skippedBlocksmith_pb from "../model/skippedBlocksmith_pb";
import * as model_feeScale_pb from "../model/feeScale_pb";
import * as model_feeVote_pb from "../model/feeVote_pb";
import * as model_liquidPayment_pb from "../model/liquidPayment_pb";

export class SnapshotFileInfo extends jspb.Message {
  getSnapshotfilehash(): Uint8Array | string;
  getSnapshotfilehash_asU8(): Uint8Array;
  getSnapshotfilehash_asB64(): string;
  setSnapshotfilehash(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  getProcessexpirationtimestamp(): number;
  setProcessexpirationtimestamp(value: number): void;

  getChaintype(): number;
  setChaintype(value: number): void;

  getSpineblockmanifesttype(): model_spineBlockManifest_pb.SpineBlockManifestTypeMap[keyof model_spineBlockManifest_pb.SpineBlockManifestTypeMap];
  setSpineblockmanifesttype(value: model_spineBlockManifest_pb.SpineBlockManifestTypeMap[keyof model_spineBlockManifest_pb.SpineBlockManifestTypeMap]): void;

  clearFilechunkshashesList(): void;
  getFilechunkshashesList(): Array<Uint8Array | string>;
  getFilechunkshashesList_asU8(): Array<Uint8Array>;
  getFilechunkshashesList_asB64(): Array<string>;
  setFilechunkshashesList(value: Array<Uint8Array | string>): void;
  addFilechunkshashes(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotFileInfo): SnapshotFileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotFileInfo;
  static deserializeBinaryFromReader(message: SnapshotFileInfo, reader: jspb.BinaryReader): SnapshotFileInfo;
}

export namespace SnapshotFileInfo {
  export type AsObject = {
    snapshotfilehash: Uint8Array | string,
    height: number,
    processexpirationtimestamp: number,
    chaintype: number,
    spineblockmanifesttype: model_spineBlockManifest_pb.SpineBlockManifestTypeMap[keyof model_spineBlockManifest_pb.SpineBlockManifestTypeMap],
    filechunkshashesList: Array<Uint8Array | string>,
  }
}

export class SnapshotPayload extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<model_block_pb.Block>;
  setBlocksList(value: Array<model_block_pb.Block>): void;
  addBlocks(value?: model_block_pb.Block, index?: number): model_block_pb.Block;

  clearAccountbalancesList(): void;
  getAccountbalancesList(): Array<model_accountBalance_pb.AccountBalance>;
  setAccountbalancesList(value: Array<model_accountBalance_pb.AccountBalance>): void;
  addAccountbalances(value?: model_accountBalance_pb.AccountBalance, index?: number): model_accountBalance_pb.AccountBalance;

  clearNoderegistrationsList(): void;
  getNoderegistrationsList(): Array<model_nodeRegistration_pb.NodeRegistration>;
  setNoderegistrationsList(value: Array<model_nodeRegistration_pb.NodeRegistration>): void;
  addNoderegistrations(value?: model_nodeRegistration_pb.NodeRegistration, index?: number): model_nodeRegistration_pb.NodeRegistration;

  clearAccountdatasetsList(): void;
  getAccountdatasetsList(): Array<model_accountDataset_pb.AccountDataset>;
  setAccountdatasetsList(value: Array<model_accountDataset_pb.AccountDataset>): void;
  addAccountdatasets(value?: model_accountDataset_pb.AccountDataset, index?: number): model_accountDataset_pb.AccountDataset;

  clearParticipationscoresList(): void;
  getParticipationscoresList(): Array<model_participationScore_pb.ParticipationScore>;
  setParticipationscoresList(value: Array<model_participationScore_pb.ParticipationScore>): void;
  addParticipationscores(value?: model_participationScore_pb.ParticipationScore, index?: number): model_participationScore_pb.ParticipationScore;

  clearPublishedreceiptsList(): void;
  getPublishedreceiptsList(): Array<model_publishedReceipt_pb.PublishedReceipt>;
  setPublishedreceiptsList(value: Array<model_publishedReceipt_pb.PublishedReceipt>): void;
  addPublishedreceipts(value?: model_publishedReceipt_pb.PublishedReceipt, index?: number): model_publishedReceipt_pb.PublishedReceipt;

  clearEscrowtransactionsList(): void;
  getEscrowtransactionsList(): Array<model_escrow_pb.Escrow>;
  setEscrowtransactionsList(value: Array<model_escrow_pb.Escrow>): void;
  addEscrowtransactions(value?: model_escrow_pb.Escrow, index?: number): model_escrow_pb.Escrow;

  clearPendingtransactionsList(): void;
  getPendingtransactionsList(): Array<model_multiSignature_pb.PendingTransaction>;
  setPendingtransactionsList(value: Array<model_multiSignature_pb.PendingTransaction>): void;
  addPendingtransactions(value?: model_multiSignature_pb.PendingTransaction, index?: number): model_multiSignature_pb.PendingTransaction;

  clearPendingsignaturesList(): void;
  getPendingsignaturesList(): Array<model_multiSignature_pb.PendingSignature>;
  setPendingsignaturesList(value: Array<model_multiSignature_pb.PendingSignature>): void;
  addPendingsignatures(value?: model_multiSignature_pb.PendingSignature, index?: number): model_multiSignature_pb.PendingSignature;

  clearMultisignatureinfosList(): void;
  getMultisignatureinfosList(): Array<model_multiSignature_pb.MultiSignatureInfo>;
  setMultisignatureinfosList(value: Array<model_multiSignature_pb.MultiSignatureInfo>): void;
  addMultisignatureinfos(value?: model_multiSignature_pb.MultiSignatureInfo, index?: number): model_multiSignature_pb.MultiSignatureInfo;

  clearSkippedblocksmithsList(): void;
  getSkippedblocksmithsList(): Array<model_skippedBlocksmith_pb.SkippedBlocksmith>;
  setSkippedblocksmithsList(value: Array<model_skippedBlocksmith_pb.SkippedBlocksmith>): void;
  addSkippedblocksmiths(value?: model_skippedBlocksmith_pb.SkippedBlocksmith, index?: number): model_skippedBlocksmith_pb.SkippedBlocksmith;

  clearFeescaleList(): void;
  getFeescaleList(): Array<model_feeScale_pb.FeeScale>;
  setFeescaleList(value: Array<model_feeScale_pb.FeeScale>): void;
  addFeescale(value?: model_feeScale_pb.FeeScale, index?: number): model_feeScale_pb.FeeScale;

  clearFeevotecommitmentvoteList(): void;
  getFeevotecommitmentvoteList(): Array<model_feeVote_pb.FeeVoteCommitmentVote>;
  setFeevotecommitmentvoteList(value: Array<model_feeVote_pb.FeeVoteCommitmentVote>): void;
  addFeevotecommitmentvote(value?: model_feeVote_pb.FeeVoteCommitmentVote, index?: number): model_feeVote_pb.FeeVoteCommitmentVote;

  clearFeevoterevealvoteList(): void;
  getFeevoterevealvoteList(): Array<model_feeVote_pb.FeeVoteRevealVote>;
  setFeevoterevealvoteList(value: Array<model_feeVote_pb.FeeVoteRevealVote>): void;
  addFeevoterevealvote(value?: model_feeVote_pb.FeeVoteRevealVote, index?: number): model_feeVote_pb.FeeVoteRevealVote;

  clearLiquidpaymentList(): void;
  getLiquidpaymentList(): Array<model_liquidPayment_pb.LiquidPayment>;
  setLiquidpaymentList(value: Array<model_liquidPayment_pb.LiquidPayment>): void;
  addLiquidpayment(value?: model_liquidPayment_pb.LiquidPayment, index?: number): model_liquidPayment_pb.LiquidPayment;

  clearNodeadmissiontimestampList(): void;
  getNodeadmissiontimestampList(): Array<model_nodeRegistration_pb.NodeAdmissionTimestamp>;
  setNodeadmissiontimestampList(value: Array<model_nodeRegistration_pb.NodeAdmissionTimestamp>): void;
  addNodeadmissiontimestamp(value?: model_nodeRegistration_pb.NodeAdmissionTimestamp, index?: number): model_nodeRegistration_pb.NodeAdmissionTimestamp;

  clearMultisignatureparticipantsList(): void;
  getMultisignatureparticipantsList(): Array<model_multiSignature_pb.MultiSignatureParticipant>;
  setMultisignatureparticipantsList(value: Array<model_multiSignature_pb.MultiSignatureParticipant>): void;
  addMultisignatureparticipants(value?: model_multiSignature_pb.MultiSignatureParticipant, index?: number): model_multiSignature_pb.MultiSignatureParticipant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotPayload.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotPayload): SnapshotPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotPayload;
  static deserializeBinaryFromReader(message: SnapshotPayload, reader: jspb.BinaryReader): SnapshotPayload;
}

export namespace SnapshotPayload {
  export type AsObject = {
    blocksList: Array<model_block_pb.Block.AsObject>,
    accountbalancesList: Array<model_accountBalance_pb.AccountBalance.AsObject>,
    noderegistrationsList: Array<model_nodeRegistration_pb.NodeRegistration.AsObject>,
    accountdatasetsList: Array<model_accountDataset_pb.AccountDataset.AsObject>,
    participationscoresList: Array<model_participationScore_pb.ParticipationScore.AsObject>,
    publishedreceiptsList: Array<model_publishedReceipt_pb.PublishedReceipt.AsObject>,
    escrowtransactionsList: Array<model_escrow_pb.Escrow.AsObject>,
    pendingtransactionsList: Array<model_multiSignature_pb.PendingTransaction.AsObject>,
    pendingsignaturesList: Array<model_multiSignature_pb.PendingSignature.AsObject>,
    multisignatureinfosList: Array<model_multiSignature_pb.MultiSignatureInfo.AsObject>,
    skippedblocksmithsList: Array<model_skippedBlocksmith_pb.SkippedBlocksmith.AsObject>,
    feescaleList: Array<model_feeScale_pb.FeeScale.AsObject>,
    feevotecommitmentvoteList: Array<model_feeVote_pb.FeeVoteCommitmentVote.AsObject>,
    feevoterevealvoteList: Array<model_feeVote_pb.FeeVoteRevealVote.AsObject>,
    liquidpaymentList: Array<model_liquidPayment_pb.LiquidPayment.AsObject>,
    nodeadmissiontimestampList: Array<model_nodeRegistration_pb.NodeAdmissionTimestamp.AsObject>,
    multisignatureparticipantsList: Array<model_multiSignature_pb.MultiSignatureParticipant.AsObject>,
  }
}

