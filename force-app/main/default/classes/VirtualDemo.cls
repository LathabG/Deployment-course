public  virtual class VirtualDemo {
    public virtual void printOutPut(){
        System.debug('The write method');
    }
    public virtual double discount(){
        return 0.5;
    }
 }
/*VirtualDemo obj = new VirtualDemo();
obj.printOutPut();*/