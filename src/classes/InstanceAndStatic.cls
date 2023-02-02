public class InstanceAndStatic {
    
   public String helloString;
    private static final String DEFAULT_STR = 'I am Here';
    InstanceAndStatic(){
        this(DEFAULT_STR);
    }
    InstanceAndStatic(String normalstr){
        this.helloString = normalstr;
    }
    public void printMethod(){
        System.debug('Print Method:'+helloString);
    }
    public static void printMethod2(){
        System.debug('The Static method:');
    }
}