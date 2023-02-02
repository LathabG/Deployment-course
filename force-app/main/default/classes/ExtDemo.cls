public class ExtDemo extends VirtualDemo {
    public override void printOutPut(){
        System.debug('I am an Extension method');
    }
    public override double discount(){
        return 0.2;
    }

}
/*ExtDemo obj1 = new ExtDemo();
obj1.printOutPut();*/