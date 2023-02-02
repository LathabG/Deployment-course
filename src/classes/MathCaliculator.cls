public class MathCaliculator {
   
    private static integer add(integer a, integer b){
        return a+b;
    }
    private static integer multiply(integer a, integer b){
     
       return a*b;
    }
    private static integer subtract(integer a, integer b){
        return a-b;
    }
    private static void printOutPut(integer a, integer b){
        System.debug('The sumation of two integers is:'+(a+b));
        System.debug('The multiplication of two integers is:'+(a*b));
        System.debug('The subtraction of two numbers of a and b is :'+(a-b));
    }
    public void doMath(integer a, integer b){
     MathCaliculator.printOutput(a, b);
    }
}
    /* MathCaliculator obj = new MathaCaliculator();
      obj.doMath(3,5)*/