// Description:
//
// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
//
// Note! a and b are not ordered!

function GetSum( a,b )
{
   //Good luck!
   var r = 0;
   if (a === b)
   {
     return a;
   }
   else if( a < b)
   {
     for(i=a; i <= b; i++)
     {
       r = r + i;
     }
     return r;
   } else if (b < a)
   {
     for(i=b; i <= a; i++)
     {
       r = r + i;
     }
     return r
   }
}
