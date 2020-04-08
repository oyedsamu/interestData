let data = [
    {
        principal: 2500,
        time: 1.8,
        },
    {
        principal: 1000,
        time: 5,
        },
    {
        principal: 3000,
        time: 1,
        },
    {
        principal: 2000,
        time: 3,
    }
]

function interestCalculator(arr){
    let rate=1
    let interest=0
    let interestData = []

    for(let i=0; i<arr.length; i++){
        let principal = arr[i].principal;
        let time = arr[i].time;
    
    if(principal>= 2500 && (time>1 && time<3)){
        rate= 3; 
    } else
        if (principal >= 2500 && time >= 3) {
            rate = 4;
    } else
        if (principal < 2500 || time <= 1) {
            rate = 2;
    } else
        {
            rate;
        }

    interest = (principal * time * rate) / 100;
    interestData.push({
        principal: principal,
        time: time,
        rate: rate,
        interest: interest
    });
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);
