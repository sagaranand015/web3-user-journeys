import httpClient from 'react-http-client';

export async function GetData(address, tag, type) {
    const url = `https://pregod.rss3.dev/v1/notes/${address}?limit=500&tag=${tag}&type=${type}&include_poap=false&count_only=false&query_status=false`
    const response = await httpClient.get(
        // url
        url,
        // headers if any
        {
            'accept': 'application/json'
        }
    );
    // console.log("======= response is: ", response);
    return response;
}

export async function GetTransactionMint(address) {
    return await GetData(address, "transaction", "mint");
}

export async function GetTransactionTransfer(address) {
    return await GetData(address, "transaction", "transfer");
}

export async function GetExchangeSwap(address) {
    return await GetData(address, "exchange", "swap");
}

export async function GetExchangeLiquidity(address) {
    return await GetData(address, "exchange", "liquidity");
}

export async function GetDonationDonate(address) {
    return await GetData(address, "donation", "donate");
}

export async function GetCollectibleMint(address) {
    return await GetData(address, "collectible", "mint");
}