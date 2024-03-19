// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { QueryInflationRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryParamsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryParamsResponse } from "./types/cosmos/mint/v1beta1/query";
import { Minter } from "./types/cosmos/mint/v1beta1/mint";
import { MsgUpdateParamsResponse } from "./types/cosmos/mint/v1beta1/tx";
import { GenesisState } from "./types/cosmos/mint/v1beta1/genesis";
import { QueryAnnualProvisionsRequest } from "./types/cosmos/mint/v1beta1/query";
import { QueryAnnualProvisionsResponse } from "./types/cosmos/mint/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/mint/v1beta1/tx";
import { Params } from "./types/cosmos/mint/v1beta1/mint";
import { QueryInflationResponse } from "./types/cosmos/mint/v1beta1/query";
export { QueryInflationRequest, QueryParamsRequest, QueryParamsResponse, Minter, MsgUpdateParamsResponse, GenesisState, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, MsgUpdateParams, Params, QueryInflationResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendQueryInflationRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryInflationRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryInflationRequest({ value: QueryInflationRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryInflationRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsRequest({ value: QueryParamsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryParamsResponse({ value: QueryParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMinter({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMinter: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.minter({ value: Minter.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMinter: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParamsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParamsResponse({ value: MsgUpdateParamsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParamsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAnnualProvisionsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAnnualProvisionsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAnnualProvisionsRequest({ value: QueryAnnualProvisionsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAnnualProvisionsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAnnualProvisionsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAnnualProvisionsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAnnualProvisionsResponse({ value: QueryAnnualProvisionsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAnnualProvisionsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgUpdateParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgUpdateParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgUpdateParams({ value: MsgUpdateParams.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgUpdateParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendParams({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendParams: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.params({ value: Params.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendParams: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryInflationResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryInflationResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryInflationResponse({ value: QueryInflationResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryInflationResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        queryInflationRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryInflationRequest", value: QueryInflationRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryInflationRequest: Could not create message: ' + e.message);
            }
        },
        queryParamsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryParamsRequest", value: QueryParamsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsRequest: Could not create message: ' + e.message);
            }
        },
        queryParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryParamsResponse", value: QueryParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryParamsResponse: Could not create message: ' + e.message);
            }
        },
        minter({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.Minter", value: Minter.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Minter: Could not create message: ' + e.message);
            }
        },
        msgUpdateParamsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.MsgUpdateParamsResponse", value: MsgUpdateParamsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParamsResponse: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        queryAnnualProvisionsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsRequest", value: QueryAnnualProvisionsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAnnualProvisionsRequest: Could not create message: ' + e.message);
            }
        },
        queryAnnualProvisionsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryAnnualProvisionsResponse", value: QueryAnnualProvisionsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAnnualProvisionsResponse: Could not create message: ' + e.message);
            }
        },
        msgUpdateParams({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.MsgUpdateParams", value: MsgUpdateParams.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgUpdateParams: Could not create message: ' + e.message);
            }
        },
        params({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.Params", value: Params.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Params: Could not create message: ' + e.message);
            }
        },
        queryInflationResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.mint.v1beta1.QueryInflationResponse", value: QueryInflationResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryInflationResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosMintV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
