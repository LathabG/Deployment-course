public class SumOfIntegers {
    public void init(){
    List<integer> intlist = new List<integer>();
    List<integer> evennumbers = new List<integer>();
    integer sum = 0;
    
for(integer i=1; i<=10; i++){
    intlist.add(i);
}
System.debug('Intlist:'+intlist);

for(integer i=0; i<intlist.size(); i++){
    if(math.mod(intlist[i],2)==0){
        evennumbers.add(intlist[i]);
        sum = sum + intlist[i];
    }
}
    
    System.debug('The even int list is:'+evennumbers);
    System.debug('The even integer sum:'+sum);
    }
}