/*
Öncelikle app ve github dosyalarını yaz sonrasında ui
*/

// 1- Elementleri Seçme

const form=document.getElementById("github-form");
const input=document.getElementById("nameInput");
const clearButton= document.getElementById("clear-button");
const list=document.getElementById("last-users");
const github= new Github();// 5 - github Objesi oluştur
const ui= new UI();

// 2- Fonksiyonları Tanımla
addEventListener();

function addEventListener(){

    form.addEventListener("submit",getData);
    clearButton.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched)
}

function getData (e){
     
    // 4 -Kullanıcı Adını kodla
    let username=input.value.trim();
    
    if(username===""){
        alert(Error("Lütfen Geçerli bir isim giriniz"))
        ui.showError("Not Found User");

    }
    else{

        //5-github objesindeki fonksiyonu kullan
        github.getGithubData(username)//bu fonksiyon async olarak yazıldığı için, obje döneceği için yakalamak gerekiyor
        .then(response=>{
            if(response.user.message==="Not Found"){
                //hata mesajı
        ui.showError("Not Found User");

            }
            else{
                ui.showUiProfile(response.user);
                ui.showRepoInfo(response.repo)
            }
        })
        .catch(err=> ui.showError(err))


    }
    ui.clearInput();



    e.preventDefault
}

function clearAllSearched(){

}

function getAllSearched(){}