//initialise arrays to test

a=["01001100",

"01101000",

"01010000",

"01010011",

"01001001",

"01000011",

"01101000",

"01101001",

"01110110",

"01101001",

"01110000",

"01101100",

"01100010",

"01000111",

"01101000",

"01111010",

"01100101",

"01111001",

"01101101",

"01100001"];

b=["10010001",

"01011110",

"01100101",

"10011010",

"10000010",

"11110000",

"11010000",

"00101101",

"11111000",

"11010110",

"11100000",

"00011011",

"01101110",

"11110000",

"01101100",

"01101010",

"11001010",

"11001011",

"01101110",

"01110010"];

//return a string with the binary rotated left num positions

function rotateLeft(arr,num)

{

    return arr.substring(num,arr.length)+arr.substring(0,num);

}

/*Because all set a begins with "01" we can use this as an anchor

**rotate set B to all positions which start with "01" and test

*/

for(i=0;i<a.length;i++){
    //first go

    bx=b[i]+b[i].charAt(0);//needed to test for "01" when the zero is last and 1 is first

    for(c=bx.indexOf("01");c>0;c=bx.indexOf("01",c+2))//find the next number needed to rotate to "01"

        if(a[i]==rotateLeft(b[i],c)){//Check if a matches rotated b

            document.write(String.fromCharCode(parseInt(a[i],2)));//convert a to a character and print

            break;//just in case b can be rotated in more than one way and still equal a

        }

    //the above became this one line
    if((b[i]+b[i]).indexOf(a[i])>=0)document.write(String.fromCharCode(parseInt(a[i],2)));

}
