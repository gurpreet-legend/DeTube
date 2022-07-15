import Web3 from 'web3'
const DETUBE_CONTRACT_BUILD = require('../build/DeTube.json')
const NETWORK_ID = "5777"

export const web3 = new Web3(Constants.RPC_PROVIDER)

const GetContract = () => {
    const CONTRACT_ADDRESS = DETUBE_CONTRACT_BUILD.networks[NETWORK_ID].address

    const DeTube = new web3.eth.Contract(DETUBE_CONTRACT_BUILD.abi, CONTRACT_ADDRESS)
    return { success: true, data: { DeTube } }
}

export default GetContract