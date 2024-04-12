public class AccountContactsController {
    // get acc data uu
    public static List<Contact> getContactsByAccountId(String accountId) {
        return [SELECT Id, Name, Phone FROM Contact WHERE AccountId = :accountId];
    }
}
