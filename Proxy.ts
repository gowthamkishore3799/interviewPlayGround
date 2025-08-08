interface APIRequest{
    fetchData(): Promise<any>;
}

class APIReq implements APIRequest{


    async fetchData(): Promise<any> {
        const response = await fetch("https://google.com");
        const data = await response.json();
        return data;
    }
}

class RateLimiter implements APIRequest{
    async fetchData(): Promise<any> {

        console.log("Api being called", Date.now())


        const apireq = new APIReq();
        return apireq.fetchData()
    }
}


function callAPI(){
    const req = new RateLimiter();
}

callAPI();