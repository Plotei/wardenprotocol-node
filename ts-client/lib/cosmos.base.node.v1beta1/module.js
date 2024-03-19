// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { ConfigRequest } from "./types/cosmos/base/node/v1beta1/query";
import { ConfigResponse } from "./types/cosmos/base/node/v1beta1/query";
import { StatusRequest } from "./types/cosmos/base/node/v1beta1/query";
import { StatusResponse } from "./types/cosmos/base/node/v1beta1/query";
export { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse };
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
        async sendConfigRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendConfigRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.configRequest({ value: ConfigRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendConfigRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendConfigResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendConfigResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.configResponse({ value: ConfigResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendConfigResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendStatusRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendStatusRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.statusRequest({ value: StatusRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendStatusRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendStatusResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendStatusResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.statusResponse({ value: StatusResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendStatusResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        configRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest", value: ConfigRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ConfigRequest: Could not create message: ' + e.message);
            }
        },
        configResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse", value: ConfigResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ConfigResponse: Could not create message: ' + e.message);
            }
        },
        statusRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.base.node.v1beta1.StatusRequest", value: StatusRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:StatusRequest: Could not create message: ' + e.message);
            }
        },
        statusResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.base.node.v1beta1.StatusResponse", value: StatusResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:StatusResponse: Could not create message: ' + e.message);
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
            CosmosBaseNodeV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
