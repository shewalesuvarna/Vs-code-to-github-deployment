public class GetContact {
    public static List<contact> allCon(){
        List<Contact> ConList =[select id, Name from contact];
    	return conList;
}
}