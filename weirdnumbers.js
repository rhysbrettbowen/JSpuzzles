//Sums up all the elements in an array

Array.prototype.sum = function()

{

    var add=0;

    for(arrAddCount=0;arrAddCount<this.length;arrAddCount++)

            add+=this[arrAddCount];

    return add;

};

//Increments all elements in the array and returns

Array.prototype.increment = function(num)

{

    for(i=0;i<this.length;i++)

        this[i]+=num;

    return this;

};



Array.prototype.mult = function(num)

{

    for(i=0;i<this.length;i++)

        this[i]=this[i]*num;

    return this;

};



function sumIt(a,b){

c=0;

for(i=0;i<a.length;a++)

    c+=a[i]*b[i];

return c;

}



function arraySubsetTest(arr,num)

{



//Recursive solution,

    isDiv = false;

    sumtopoint = arr.slice(0);
//setup an array with the sum of the divisors left
//this can be used to cut recursive branches where a solution can't be found

    for(var y=sumtopoint.length-2;y>=0;y--)

        sumtopoint[y]+=sumtopoint[y+1];



    function subsetRec(ind,sum)

    {

        var myInd = ind;

        var mySum = sum;
//if it's already found an answer stop the branch

        if(mySum==num||isDiv){

            isDiv=true;

        }
//branch two ways, one where next divisor is added and one where it isn't
//branch with the divisor added first - quicker

        else if(mySum<num&&mySum+sumtopoint[myInd]>=num&&myInd<arr.length)

        {

            subsetRec(myInd+1,mySum+arr[myInd]);

            subsetRec(myInd+1,mySum);

        }

    }

    subsetRec(0,0);

    return !isDiv;



}



testSubsets = new function()

{

}



/*To save the computer working out square roots

**we us an array of squares and two for loops to

**keep track of which square we're on

*/

function getRoom(topRoom){

    rooms=1;

    for(sqCount=1;(numTest=sqCount*sqCount)<topRoom;sqCount++){

        if(sqCount%2!=0) numTest++;

        for(;numTest<(sqCount+1)*(sqCount+1)&&numTest<topRoom;numTest+=2){

            divs=[1];//hold the divisors (1 is a special case)

            for(divTest=2;divTest<=sqCount;divTest++){//only test up to the square root

                if(numTest%divTest==0){//if it's divisible then add it

                    divs.push(divTest)

                    if(sqCount*sqCount!=numTest)//if it's not a square add it's divising buddy

                        divs.push(numTest/divTest);

                }

            }

            //added in sort of divisors from largest to smallest returns faster (more likely to find a match sooner)

            dsum = divs.sum();

            if(dsum>numTest&&dsum<=numTest*2&&arraySubsetTest(divs.sort(function(a,b){return b-a;}),numTest))//test if the divisors sum is larger then test if there is a subset that adds up

            {

                document.write("number "+(rooms++)+" is: "+numTest+"<br>");

            }

        }

    }


}

var start = new Date().getTime();

getRoom(1000000);//enter maximum room

var elapsed = new Date().getTime() - start;

document.write("<br>----------------------------<br>time taken: "+elapsed);


