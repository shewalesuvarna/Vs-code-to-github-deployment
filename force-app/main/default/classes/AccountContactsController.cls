public class AccountContactsController {
    @AuraEnabled
    // get acc data 
    public static List<Contact> getContactsByAccountId(String accountId) {
        return [SELECT Id, Name, Phone FROM Contact WHERE AccountId = :accountId];
    }
}