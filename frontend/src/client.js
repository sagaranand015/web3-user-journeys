import httpClient from 'react-http-client';

export async function GetData(address, tag, type) {
    const response = await httpClient.get(
        // url
        'https://pregod.rss3.dev/v1/notes/0x701bef15165c660ef27807b8f91c3543756c416a?limit=500&tag=donation&include_poap=false&count_only=false&query_status=false',
        // headers if any
        {
            'accept': 'application/json'
        }
    );
    console.log("======= response is: ", response);
}