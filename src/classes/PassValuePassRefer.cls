public class PassValuePassRefer {
    public void callmethod(){
    String websiteUrl = 'www.apexhours.com';
    System.debug('the first call:'+websiteUrl);
    passByValueCall(websiteUrl);
    System.debug('the second call:'+websiteUrl);
    }
    private void passByValueCall(String websiteUrlValue){
        websiteUrlValue = 'www.slaesforce.com';
    }
    public void callmethod2(){
    String websiteUrl1 = 'www.google.com';
    System.debug('the first call:'+websiteUrl1);
    passByRefCall(websiteUrl1);
    System.debug('the second call:'+websiteUrl1);
    }
    private void passByRefCall(String website){
        website = 'www.salesforce.com';
    }

}
/*PassValuePassRefer obje = new PassValuePassRefer();
obje.callmethod();
obje.callmethod2();*/