// 4 - Async Await yapısı kur

class Github{


    constructor(){
        this.url="https://api.github.com/users/"
    }

    async getGithubData(username){
        const responseUser=await fetch(this.url +username); // get request
        const responseRepo=await fetch(this.url +username +"/repos");//reposa istek attık

        const userData=await responseUser.json(); //responseUser resolve etti ve userData = responseUser.json() değeri yaptık
        const repoData=await responseRepo.json();

        return {// verileri obje olarak döndük ve app.js de kullanıcaz
            user:userData,
            repo:repoData
        }
    }
}