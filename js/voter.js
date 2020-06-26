class Voter{
    constructor(){

    }
    getCount(){
        var voterno = database.ref('voterCount');
        voterno.on('value',function(number){
            voterCount = number.val();
        })
    }
    updateCount(updateNumber){
        database.ref('/').update({
            'voterCount':updateNumber
        })
    }
    update(email){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            email:email
        

        })
    }
    update(yes){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            yes:yes
        

        })
    }
    update(no){
        var voterIndex = "voter"+voterCount;
        database.ref(voterIndex).set({
            no:no
        

        })
    }
}
