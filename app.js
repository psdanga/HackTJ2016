<script data-main="lib/capital_one" src="lib/require-jquery.js"></script>
var apikey = '0bff2c40bb1c982db456e6f2ef4bbc58';

// Methods go here
function getAccount (accID) {
	var custAccount = account.initWithKey(apikey);
	return custAccount.getAccountById(accID);
}

function getCustomer (custID) {
	var customerAccount = customer.initWithKey(apikey);
	return customerAccount.getCustomerById(custID);
}

function depositFunds (amount) {
	console.log('Deposit');
	var depositAccount = deposit.initWithKey(apikey);
	var accID = '560072e0ce1cef140015e483'; //to be changed
	var depID = '56007773ce1cef140015e487'; //to be changed
	var deposit = "{\"medium\": \"balance\",\"amount\": 100000,\"description\": \"test\"}";
	var depositUpdate = "{\"medium\": \"balance\",\"amount\": 205000,\"description\": \"test\"}";

	console.log("[Deposit - New deposit]: " + depositAccount.createDeposit(accID, deposit));
	}

function transfer (apikey, transfer) {
	console.log('transfer');
	var transfer.account = transfer.initWithKey(apikey);
	var senderID = '0'; //replace
	var receiverID = '0'; //replace
	var transfer = "{\"medium\": \"balance\",  \"payee_id\": \"56284d5834a5e61f579dee3d\", \"amount\": 10, \"transaction_date\": \"2016-02-07\", \"status\": \"pending\", \"description\": \"string\"
	}";
	
}
function withdrawal (withdrawal) {
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
  var person = customer(customerID);
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
