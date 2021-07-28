let turn = true;
let club1 = {
    name: "arsenal",
    logo: "assets/arsenal.png",
    goals: 0
}
let club2 = {
    name: "bayen",
    logo: "assets/bayen.png",
    goals: 0
}
let club3 = {
    name: "celtic",
    logo: "assets/celtic.png",
    goals: 0
}
let club4 = {
    name: "milan",
    logo: "assets/milan.png",
    goals: 0
}
let fc1,fc2;
window.onload = () =>{
    updateClubs();
}
let updateClubs = () =>{
    document.getElementById("c1img").src = club1.logo;
    document.getElementById("c2img").src = club2.logo;
    document.getElementById("c3img").src = club3.logo;
    document.getElementById("c4img").src = club4.logo;
    document.getElementById("c1name").textContent = club1.name;
    document.getElementById("c2name").textContent = club2.name;
    document.getElementById("c3name").textContent = club3.name;
    document.getElementById("c4name").textContent = club4.name;
    document.getElementById("m1btn").textContent = `${club1.name} shoot!`;
}
let c1i = c2i = 0;
let shoot1 = () =>{
    let rand = Math.round(Math.random())+1;
    if(turn){
        if(rand==1){
            club1.goals+=0;
            document.getElementById('goals1').children[c1i].style.background = 'orangered';
        }else{
            club1.goals+=1;
            document.getElementById('goals1').children[c1i].style.background = 'lawngreen';
        }
        c1i++;
        turn=false;
        document.getElementById("m1btn").textContent = `${club2.name} shoot!`;
    }else{
        if(rand==1){
            club2.goals+=0;
            document.getElementById('goals2').children[c2i].style.background = 'orangered';
        }else{
            club2.goals+=1;
            document.getElementById('goals2').children[c2i].style.background = 'lawngreen';
        }
        c2i++;
        turn=true;
        document.getElementById("m1btn").textContent = `${club1.name} shoot!`;
    }
    if(c1i==5&&c2i==5){
        document.getElementById("m1btn").classList.add("hide");
        document.getElementById('m1res').classList.remove("hide");
        document.getElementById('m1res').classList.add("show");
        if(club1.goals>club2.goals){
            document.getElementById('m1res').textContent = `${club1.name} Wins!!`;
            fc1 = club1;
        }else{
            document.getElementById('m1res').textContent = `${club2.name} Wins!!`;
            fc1 = club2;
        }
        document.getElementById('m2btn').classList.remove('hide');
        document.getElementById('m2btn').classList.remove('show');
    }
    document.getElementById('m2btn').textContent = `${club3.name} shoot!!`;
}
let c3i = c4i = 0;
let shoot2 = () =>{
    let rand = Math.round(Math.random())+1;
    if(turn){
        if(rand==1){
            club3.goals+=0;
            document.getElementById('goals3').children[c3i].style.background = 'orangered';
        }else{
            club3.goals+=1;
            document.getElementById('goals3').children[c3i].style.background = 'lawngreen';
        }
        c3i++;
        turn=false;
        document.getElementById("m2btn").textContent = `${club4.name} shoot!`;
    }else{
        if(rand==1){
            club4.goals+=0;
            document.getElementById('goals4').children[c4i].style.background = 'orangered';
        }else{
            club4.goals+=1;
            document.getElementById('goals4').children[c4i].style.background = 'lawngreen';
        }
        c4i++;
        turn=true;
        document.getElementById("m2btn").textContent = `${club3.name} shoot!`;
    }
    if(c3i==5&&c4i==5){
        document.getElementById("m2btn").classList.add("hide");
        document.getElementById('m2res').classList.remove("hide");
        document.getElementById('m2res').classList.add("show");
        if(club3.goals>club4.goals){
            document.getElementById('m2res').textContent = `${club3.name} Wins!!`;
            fc2 = club3;
        }else{
            document.getElementById('m2res').textContent = `${club4.name} Wins!!`;
            fc2 = club4;
        }
        document.getElementById('final').classList.remove('hide');
        document.getElementById('final').classList.add('show');
        updateFinals();
    }
}
let updateFinals = () =>{
    document.getElementById('fc1img').src = fc1.logo;
    document.getElementById('fc1name').textContent = fc1.name;
    document.getElementById('fc2img').src = fc2.logo;
    document.getElementById('fc2name').textContent = fc2.name;
    document.getElementById('fbtn').textContent = `${fc1.name} shoot!!`;
    fc1.goals = fc2.goals = 0;
}
let f1i = f2i = 0;
let shoot3 = () =>{
    let rand = Math.round(Math.random())+1;
    if(turn){
        if(rand==1){
            fc1.goals+=0;
            document.getElementById('fgoals1').children[f1i].style.background = 'orangered';
        }else{
            fc1.goals+=1;
            document.getElementById('fgoals1').children[f1i].style.background = 'lawngreen';
        }
        f1i++;
        turn=false;
        document.getElementById("fbtn").textContent = `${fc2.name} shoot!`;
    }else{
        if(rand==1){
            fc2.goals+=0;
            document.getElementById('fgoals2').children[f2i].style.background = 'orangered';
        }else{
            fc2.goals+=1;
            document.getElementById('fgoals2').children[f2i].style.background = 'lawngreen';
        }
        f2i++;
        turn=true;
        document.getElementById("fbtn").textContent = `${fc1.name} shoot!`;
    }
    if(f1i==5&&f2i==5){
        document.getElementById("fbtn").classList.add("hide");
        document.getElementById('fres').classList.remove("hide");
        document.getElementById('fres').classList.add("show");
        if(fc1.goals>fc2.goals){
            document.getElementById('fres').textContent = `${fc1.name} Wins!!`;
        }else{
            document.getElementById('fres').textContent = `${fc2.name} Wins!!`;
        }
        win();
    }
}
let win = () =>{
    var confettiSettings = { target: 'confetii' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}