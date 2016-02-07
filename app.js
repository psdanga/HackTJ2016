<script data-main="lib/capital_one" src="lib/require-jquery.js"></script>
var apikey = '0bff2c40bb1c982db456e6f2ef4bbc58';

// Methods go here
function account (apikey, account) {
	console.log('Account');
	var custAccount = account.initWithKey(apikey);
	var custID = '55e94a6af8d8770528e60e64'; //to be changed
	var accID = '560072e0ce1cef140015e483'; //to be changed
	var newAccount = "{\"nickname\":\"Mr. Stanislaus's Account\"}";
	var account = "{\"balance\":50,\"nickname\":\"Lola Account\",\"rewards\":2,\"type\":\"Checking\"}";
	console.log("[Account - Get All Accounts] : Sample Account Nickname: (" + custAccount.getAllAccounts()[0].nickname + ")");
	console.log("[Account - Get All By Type] : " + custAccount.getAllByType('Checking')[0].type);
	console.log("[Account - Get Customer (Prior Update)] : " + custAccount.getAllByCustomerId(custID)[0].nickname);
	console.log("[Account - Updating Stanislaus's Account] - response code: " + custAccount.updateAccount(accID, newAccount));
	console.log("[Account - Get Customer (Post Update)] : " + custAccount.getAllByCustomerId(custID)[0].nickname);
	console.log("[Account - Create Sample for Miss. Stanislaus's Account]:  response" + custAccount.createAccount(custID, account));
	console.log("[Account - Get One] : Account Balance $" + parseFloat(custAccount.getAccountById(accID).balance).toFixed(2));
	//console.log("[Account - Deleting an Account] : Response code: " + custAccount.deleteAccount(accID)); // Uncomment with cautious.
		}

function customer (apikey, customer) {
	var customerAccount = customer.initWithKey(apikey);
	var custID = '55e94a6af8d8770528e60e64'; //to be changed
	var accID = '560072e0ce1cef140015e483'; //to be changed
	console.log("[Customer - Get All Customers] : Sample Customer: " + customerAccount.getCustomers()[0].first_name);
	console.log("[Customer - Get Customer By Customer ID] : Sample Customer: " + customerAccount.getCustomerById(custID).first_name);
	console.log("[Customer - Get Customer By Account ID] : Sample Customer: " + customerAccount.getCustomerByAcountId(accID));
	var customerInfo = "{\"address\": {\"street_number\": \"8020\",\"street_name\": \"Greenroad Dr\",\"city\": \"McLean\",\"state\": \"VA\",\"zip\": \"22102\"}}";
	console.log("[Customer - Update Customer] :" + customerAccount.updateCustomer(custID, customerInfo));
		}

function deposit (apikey, deposit) {
	console.log('Deposit');
	var depositAccount = deposit.initWithKey(apikey);
	var accID = '560072e0ce1cef140015e483'; //to be changed
	var depID = '56007773ce1cef140015e487'; //to be changed
	var deposit = "{\"medium\": \"balance\",\"amount\": 100000,\"description\": \"test\"}";
	var depositUpdate = "{\"medium\": \"balance\",\"amount\": 205000,\"description\": \"test\"}";

	console.log("[Deposit - Get All By AccountId]: " + depositAccount.getAllByAccountId(accID));
	console.log("[Deposit - Deposit by DepositID]: " + depositAccount.getDepositById(depID));
	console.log("[Deposit - New deposit]: " + depositAccount.createDeposit(accID, deposit));
	var lastDesposit = depositAccount.getAllByAccountId(accID).pop();
	// console.log("[Deposit - Update Deposit]: " + depositAccount.updateDeposit(lastDesposit._id, sampleDepositUpdate)); //API failed - "NetworkError: 404 Not Found
	// console.log("[Deposit - Delete Deposit]: " + depositAccount.deleteDeposit('56007939ce1cef140015e48a'));
	}

function transfer (apikey, transfer) {
	console.log('transfer');
	var transfer.account = transfer.initWithKey(apikey);
	var senderID = '0'; //replace
	var receiverID = '0'; //replace
	var transfer = "{\"medium\": \"balance\", \"amount\": 1000,\"description\": \"test\"}";
	//debit sender
	//credit receiver
	//requires things that I do not yet understand
}
function withdrawal (apikey, withdrawal) {
	console.log('withdrawal');
	var withdrawalAccount = withdrawal.initWithKey(apikey);
	var accID = '560072e0ce1cef140015e483'; //replace
	var withdrawalID = '5601901fce1cef140015e4a3'; //replace
	var withdrawal = "{\"medium\": \"balance\",\"amount\": 1000,\"description\": \"test\"}";
	var withdrawUpdate = '{ "medium": "balance", "amount": 52000, "description": "update" }';

	console.log("[withdrawal - withdraw an account] Response: "+ withdrawalAccount.createWithdrawal(accID, sampleWithdrawal));
	console.log("[withdrawal - get withdrawals by account] Response: "+ withdrawalAccount.getAllByAccountId(accID));
	console.log("[withdrawal - get withdrawals by id] Response: " + withdrawalAccount.getWithdrawalById(withdrawalID));
	console.log("[withdrawal - create withdrawal] Response: " + withdrawalAccount.createWithdrawal(accID, withdrawal));

	var lastAcct = withdrawalAccount.getAllByAccountId(accID).pop();
	console.log("[withdrawal - update withdrawal] Response: " + withdrawalAccount.updateWithdrawalById(lastAcct._id, withdrawUpdate));
	//console.log("[withdrawal - delete withdrawal] Response: " + withdrawalAccount.deleteWithdrawals('56019011ce1cef140015e4a1'));
	}

var customer_table = {
  "johndoe@fakemail.com" : {"apple" : "ID"},
  "bobjones@fakemail.com" : {"banana" : "ID"},
  "sarahsmith@fakemail.com" : {"cucumber" : "ID"},
  "jessicajones@fakemail.com" : {"donaldtrump" : "ID"}
}
function fetchID(email, pass)
{
  if(customer_table[email].hasOwnProperty(pass))
  {
    return customer_table[email][pass];
  }
}
function fetchBalance(customerID)
{
  var person = customer()
}


//

// Main code goes here

var skim_amt = 0.25;

while(true)
{
	console.log("Welcome to CapitalOne!\n Email Address: ");
	var customerEmail = readline();
	console.log("\nPassword: ");
	var customerPassword = readline();
	var customerID = fetchID(customerEmail, customerPassword); // WRITE ME
	var customerBalance = fetchBalance(customerID); // WRITE ME
	while (true)
	{
		customerBalance -= skim_amt;
		console.log("Your balance is")
		console.log("What would you like to do?\n[W]ithdraw/[D]eposit/[T]ransfer\n")
		var command = readline();
		if(command.toUpperCase() == "W" || command.toUpperCase() == "WITHDRAW")
		{
			console.log("\nHow much will you be withdrawing?")
			var amount = readline();
			withdraw_funds(customerID, amount); // WRITE ME, withdraws and transfers
			customerBalance -= amount + skim_amt;
			console.log("\n$" + amount + " was withdrawn from your account." +
									" Your new balance is $" + customerBalance);
			break;
		}
		else if(command.toUpperCase() == "D" || command.toUpperCase() == "DEPOSIT")
		{
			break;
		}
		else if(command.toUpperCase() == "T" || command.toUpperCase() == "TRANSFER")
		{
			break;
		}
		else
		{
			console.log("\nInvalid selection.")
		}
	}
	console.log("\nThank you for using CapitalOne! Would you like to do something else? [Y/N]")
	var cont = readline();
	if(!(cont.toUpperCase() == "Y" || cont.toUpperCase() == "YES"))
	{
		break;
	}
}
