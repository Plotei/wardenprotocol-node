// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { Grant } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranterGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { GenesisState } from "./types/cosmos/authz/v1beta1/genesis";
import { GrantQueueItem } from "./types/cosmos/authz/v1beta1/authz";
import { EventGrant } from "./types/cosmos/authz/v1beta1/event";
import { EventRevoke } from "./types/cosmos/authz/v1beta1/event";
import { GrantAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { QueryGranterGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { GenericAuthorization } from "./types/cosmos/authz/v1beta1/authz";
import { MsgGrantResponse } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevoke } from "./types/cosmos/authz/v1beta1/tx";
import { MsgRevokeResponse } from "./types/cosmos/authz/v1beta1/tx";
import { QueryGrantsRequest } from "./types/cosmos/authz/v1beta1/query";
import { QueryGranteeGrantsResponse } from "./types/cosmos/authz/v1beta1/query";
import { MsgGrant } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExec } from "./types/cosmos/authz/v1beta1/tx";
import { MsgExecResponse } from "./types/cosmos/authz/v1beta1/tx";
export { Grant, QueryGrantsResponse, QueryGranterGrantsRequest, GenesisState, GrantQueueItem, EventGrant, EventRevoke, GrantAuthorization, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, GenericAuthorization, MsgGrantResponse, MsgRevoke, MsgRevokeResponse, QueryGrantsRequest, QueryGranteeGrantsResponse, MsgGrant, MsgExec, MsgExecResponse };
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
        async sendGrant({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGrant: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.grant({ value: Grant.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGrant: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGrantsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGrantsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGrantsResponse({ value: QueryGrantsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGrantsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGranterGrantsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGranterGrantsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGranterGrantsRequest({ value: QueryGranterGrantsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGranterGrantsRequest: Could not broadcast Tx: ' + e.message);
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
        async sendGrantQueueItem({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGrantQueueItem: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.grantQueueItem({ value: GrantQueueItem.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGrantQueueItem: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEventGrant({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEventGrant: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.eventGrant({ value: EventGrant.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEventGrant: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendEventRevoke({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendEventRevoke: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.eventRevoke({ value: EventRevoke.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendEventRevoke: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGrantAuthorization({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGrantAuthorization: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.grantAuthorization({ value: GrantAuthorization.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGrantAuthorization: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGranterGrantsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGranterGrantsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGranterGrantsResponse({ value: QueryGranterGrantsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGranterGrantsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGranteeGrantsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGranteeGrantsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGranteeGrantsRequest({ value: QueryGranteeGrantsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGranteeGrantsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenericAuthorization({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenericAuthorization: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genericAuthorization({ value: GenericAuthorization.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenericAuthorization: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgGrantResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgGrantResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgGrantResponse({ value: MsgGrantResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgGrantResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevoke({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevoke: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevoke({ value: MsgRevoke.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevoke: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgRevokeResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgRevokeResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgRevokeResponse({ value: MsgRevokeResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgRevokeResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGrantsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGrantsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGrantsRequest({ value: QueryGrantsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGrantsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryGranteeGrantsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryGranteeGrantsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryGranteeGrantsResponse({ value: QueryGranteeGrantsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryGranteeGrantsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgGrant({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgGrant: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgGrant({ value: MsgGrant.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgGrant: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgExec({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgExec: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgExec({ value: MsgExec.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgExec: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgExecResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgExecResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgExecResponse({ value: MsgExecResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgExecResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        grant({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.Grant", value: Grant.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Grant: Could not create message: ' + e.message);
            }
        },
        queryGrantsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGrantsResponse", value: QueryGrantsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGrantsResponse: Could not create message: ' + e.message);
            }
        },
        queryGranterGrantsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsRequest", value: QueryGranterGrantsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGranterGrantsRequest: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        grantQueueItem({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem", value: GrantQueueItem.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GrantQueueItem: Could not create message: ' + e.message);
            }
        },
        eventGrant({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.EventGrant", value: EventGrant.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:EventGrant: Could not create message: ' + e.message);
            }
        },
        eventRevoke({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.EventRevoke", value: EventRevoke.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:EventRevoke: Could not create message: ' + e.message);
            }
        },
        grantAuthorization({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization", value: GrantAuthorization.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GrantAuthorization: Could not create message: ' + e.message);
            }
        },
        queryGranterGrantsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGranterGrantsResponse", value: QueryGranterGrantsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGranterGrantsResponse: Could not create message: ' + e.message);
            }
        },
        queryGranteeGrantsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsRequest", value: QueryGranteeGrantsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGranteeGrantsRequest: Could not create message: ' + e.message);
            }
        },
        genericAuthorization({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization", value: GenericAuthorization.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenericAuthorization: Could not create message: ' + e.message);
            }
        },
        msgGrantResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse", value: MsgGrantResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgGrantResponse: Could not create message: ' + e.message);
            }
        },
        msgRevoke({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgRevoke", value: MsgRevoke.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevoke: Could not create message: ' + e.message);
            }
        },
        msgRevokeResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse", value: MsgRevokeResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgRevokeResponse: Could not create message: ' + e.message);
            }
        },
        queryGrantsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGrantsRequest", value: QueryGrantsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGrantsRequest: Could not create message: ' + e.message);
            }
        },
        queryGranteeGrantsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.QueryGranteeGrantsResponse", value: QueryGranteeGrantsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryGranteeGrantsResponse: Could not create message: ' + e.message);
            }
        },
        msgGrant({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgGrant", value: MsgGrant.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgGrant: Could not create message: ' + e.message);
            }
        },
        msgExec({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgExec", value: MsgExec.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgExec: Could not create message: ' + e.message);
            }
        },
        msgExecResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse", value: MsgExecResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgExecResponse: Could not create message: ' + e.message);
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
            CosmosAuthzV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
