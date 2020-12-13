/* Using the function take the input from the user for his marks and  total marks generate the percentage and give the grading
90 + < A
80+  < B
70+  < C
60+  < D
50+  < E
50- > F
*/
function grade(p)
{
    if(p>90)
    {
        console.log("A");
    }
    else if(p>80 && p<=90)
    {
        console.log("B");
    }
    else if((p>70) && p<=80)
    {
        console.log("C");
    }
    else if((p>60) && p<=70)
    {
        console.log("D");
    }
    else if ((p>50) && p<=60)
    {
        console.log("E");
    }
    else if (p< 50)
    {
        console.log("F");
    }
}

function input(mark,total)
{
    p=((mark*100)/total)
    return p;
}

let x =input(92,100)
grade(x)