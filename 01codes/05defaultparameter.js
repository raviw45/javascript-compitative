function sendMessage(name,langauge="en"){
    let welcomeMessage='';
    if(langauge ==='en'){
        welcomeMessage='You are welcome';
    }else if(langauge ==="hn"){
        welcomeMessage="Apka swagat hai";
    }else if(langauge ==="mr"){
        welcomeMessage="Aple swagat ahe";
    };

    console.log(welcomeMessage);
}

sendMessage("ravi"
);