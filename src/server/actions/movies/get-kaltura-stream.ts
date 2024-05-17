'use server'

import { getStreams } from "@/utils/get-streams";

const config = {
    headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-US,en;q=0.6',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Cookie': '__Host-next-auth.csrf-token=422e5095bb9f387946e05298f3a456c69cdeff655b808c8cffa3024c218a4cfb%7Cade8e5fd9dddbd35eb544750a14ff24972d8eb51218660f955c1f65f7f126a44; __Secure-next-auth.callback-url=https%3A%2F%2Fplay.watch.tv.br; wtk=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXV0aDIud2F0Y2gudHYuYnIvYXBpL3Y0L2F1dGgiLCJpYXQiOjE3MTI5NDMxODIsImV4cCI6MTcyODQ5NTE4MiwibmJmIjoxNzEyOTQzMTgyLCJqdGkiOiJ3dGhLblRGaWRsQjloZWloIiwic3ViIjoiMTg3MDE5NSIsInBydiI6IjdhZTRlY2QyNWI3NjZhM2Y0ZWI0YzZmZjU5MDI0NzEzZWU0MThiZDEiLCJicmFuZCI6IndhdGNoIn0.moUxfziQUiFd-Gc24O28ZexhPNZhGNmReL7i30OECN8; deviceUuid=49fd-571e-a8fe-0018-38cd-7e61; pid=6767556; hasShownModal-6767556=true; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..dTuXtp7YgddD44hl.tV5qMKp77CErFP-w-GBbtHNOVNZSKn7OkpXYx5T-opP-IuNcB9yvEExVsaMIWntsiOo-huViCw7VIc2cZETazLaNA9BEQW-JGgjchwEVEgFinNe6imvFVUzRHLknALdXMCNRl55eZ33zGK4sJptabIrds7F1t-1jB5ZruFdPbCixNyPlXycCKKEW3skirDbuuh2iBsRGRTnXbTXktHdS2eUbukvYfewcdbf_JMHLGa50knnSYrYFg8RwLUmz3wWiEF6sEoq20ffJ03DSFG0VLrl7fENF_-jADwBJ1j7K4mvr141s4ElkgwA8XCtihcExgMzFHO0uoQoDfWmFfoW0vBlgIRhnOeNnOnycPZ8VbJ1Ewoy342m52LY3pu-mh9Xxw_c0Yu0xfp45RSmilxiPJ22bv7co61m7hJ4sHwMv9qnhacvuyEczGnOldJwl2xdolNY4V9DoOHYj4UtRCBpPDWrha_0I0_JxYjx25OIOEAj34nhL7a--jw3J7uKH8bTR1bKB9L3F02FGaUAL1phnAQJyjyGidPthFyzuXK8vkGWzfRDtleZoxAAZLqJkxoLWNPfrDD_GPiBNpRddGmscI6SPHCDlzk7j8zDjFchnZjsDERQSvwGLkoBveW4KVW_Jg3gBqfG3n8wQmSSVQIHsarK1v0ac1r-r2iU7V3xyK0qw8WRfgbQB9H-dOsoM3gZjjk7CncYq.D3zF09PfoCr_oIap5t87yQ',
        'Pragma': 'no-cache',
        'Sec-Ch-Ua': '"Brave";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Linux"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Gpc': '1',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    }
};

export async function getKalturaStream(kalturaId: string) {
    const response = await fetch(
        `https://cdnapisec.kaltura.com/p/2267831/sp/226783100/playManifest/entryId/${kalturaId}/protocol/https/format/applehttp/flavorIds/1_9bbre7wz,1_rqqlkymt,1_v5omkuu1,1_d0djoedj,1_68tcdevq,1_ep8wn0e3/a.m3u8?uiConfId=44208331&playSessionId=0036da5d-2ddc-03ad-9815-0ac1eecf3a04:f951663d-0c35-e941-21e4-b309a99e74d8&referrer=aHR0cHM6Ly9wbGF5LndhdGNoLnR2LmJyL2Fzc2lzdGlyL2ZpbG1lLzEzNDk3L2FzLWF2ZW50dXJhcy1kZS1rOS1sZW5kYS1kby1vdXJvLXBlcmRpZG8=&clientTag=html5:v3.17.9-canary.0-dbe3d1d`,
        {
            method: 'post',
            ...config
        }
    )

    console.log("url: ", `https://cdnapisec.kaltura.com/p/2267831/sp/226783100/playManifest/entryId/${kalturaId}/protocol/https/format/applehttp/flavorIds/1_9bbre7wz,1_rqqlkymt,1_v5omkuu1,1_d0djoedj,1_68tcdevq,1_ep8wn0e3/a.m3u8?uiConfId=44208331&playSessionId=0036da5d-2ddc-03ad-9815-0ac1eecf3a04:f951663d-0c35-e941-21e4-b309a99e74d8&referrer=aHR0cHM6Ly9wbGF5LndhdGNoLnR2LmJyL2Fzc2lzdGlyL2ZpbG1lLzEzNDk3L2FzLWF2ZW50dXJhcy1kZS1rOS1sZW5kYS1kby1vdXJvLXBlcmRpZG8=&clientTag=html5:v3.17.9-canary.0-dbe3d1d`)
    console.log("getKalturaStream: ", response)

    const m3u8 = await response.text()

    return getStreams(m3u8)
}
