import type { Log } from 'ethers';

export interface RPCRequest {
  jsonrpc: string;
  method: string;
  params: unknown[];
  id: number | string;
}

export interface RPCResponse<T = unknown> {
  jsonrpc: string;
  id: number | string;
  result?: T;
  error?: RPCError;
}

export interface RPCError {
  code: number;
  message: string;
  data?: unknown;
}

export interface EVMCallParams {
  to: string;
  data?: string;
  from?: string;
  gas?: string;
  gasPrice?: string;
  value?: string;
}

// Type for block tag parameters used in RPC calls
export type BlockTagParameter = 'latest' | 'earliest' | 'pending' | 'safe' | 'finalized' | string;

// Re-export the ethers Log type
export type { Log };

// Keep custom types that match RPC response format (strings for numbers)
export interface Transaction {
  hash: string;
  nonce: string;
  blockHash: string | null;
  blockNumber: string | null;
  transactionIndex: string | null;
  from: string;
  to: string | null;
  value: string;
  gasPrice: string;
  gas: string;
  input: string;
}

export interface TransactionReceipt {
  transactionHash: string;
  transactionIndex: string;
  blockHash: string;
  blockNumber: string;
  from: string;
  to: string | null;
  cumulativeGasUsed: string;
  gasUsed: string;
  contractAddress: string | null;
  logs: Log[];
  status: string;
}

export interface Block {
  number: string;
  hash: string;
  parentHash: string;
  timestamp: string;
  gasLimit: string;
  gasUsed: string;
  miner: string;
  transactions: string[] | Transaction[];
}
