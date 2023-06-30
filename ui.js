class UI{

    constructor(){

        this.profileDiv=document.getElementById("profile");
        this.repoDiv=document.getElementById("repos");
        this.list=document.getElementById("last-users");
        this.uiInput=document.getElementById("nameInput");
        this.cardBody=document.querySelector(".card-body")
    }

    clearInput(){
        this.uiInput.value="";
    }
    showUiProfile(user){//Tamplate Literaldakiler api dan yani html_url, name, bio "https://api.github.com/users/isabudak" bu linkin içinde value şeklinde 
        this.profileDiv.innerHTML=`<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${user.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${user.name}</strong></div>
             <hr>
             <div id="bio">${user.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/pngwing.com.png" width="30px"> <span id="company">${user.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/pngwing.com (1).png" width="30px"> <span id = "location">${user.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/pngwing.com (2).png" width="30px"> <span id="mail">${user.mail}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div>`;

    }
    showError(message){

        const div=document.createElement("div");
        div.className="alert alert-danger";
        div.textContent=message;

        this.cardBody.appendChild(div);

        setTimeout(()=>{
            div.remove();

        },5000)

    }
    showRepoInfo(repos){
        this.repoDiv.innerHTML="";
        repos.forEach(repo => {
            this.repoDiv.innerHTML +=`
            <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>
            `
            
        });
    }
}