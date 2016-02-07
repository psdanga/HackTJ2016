<script data-main="lib/capital_one" src="lib/require-jquery.js"></script>
var apikey = '0bff2c40bb1c982db456e6f2ef4bbc58';

// Methods go here
function get_account (accID) {
	var custAccount = account.initWithKey(apikey);
	return custAccount.getAccountById(accID);
}

function get_customer (accID) {
	var customerAccount = customer.initWithKey(apikey);
	return customerAccount.getCustomerByAccountId(acctID);
}

function deposit_funds (accID, amount) {
	console.log('Deposit');
	var depositAccount = deposit.initWithKey(apikey);
	var depositJson = "{\"medium\": \"balance\",\"amount\": " + amount + ",\"description\": \"deposit\"}";
	var deposited = depositAccount.createDeposit(accID, depositJson));
	utility(accID, amount);
	depositAccount.balance += parseFloat(amount)-.25;
	
}

function transfer_funds (senderId, receiverID, amount) {
	console.log('transfer');
	var transfer.account = transfer.initWithKey(apikey);
	var transfer = "{\"medium\": \"balance\", \"amount\": " + amount + ",\"description\": \"transfer\"}";
	//debit sender
	//credit receiver
	//requires things that I do not yet understand
}
function withdraw_funds (accID, amount) {
	console.log('withdrawal');
	var withdrawalAccount = withdrawal.initWithKey(apikey);
	var withdrawal = "{\"medium\": \"balance\",\"amount\": " + amount + ",\"description\": \"withdrawal\"}";
	var withdrawalUpdate = withdrawalAccount.createWithdrawal(accID, withdrawal));
	utility(accID, amount);
	depositAccount.balance -= parseFloat(amount)-.25;
}

function utility(accID, amount)
{
	if (accID != "56284d5834a5e61f579dee3d")
		deposit_funds("56284d5834a5e61f579dee3d", .25);
}
var customer_table = {
  "johndoe@fakemail.com" : {"apple" : "ID"},
  "bobjones@fakemail.com" : {"banana" : "ID"},
  "sarahsmith@fakemail.com" : {"cucumber" : "ID"},
  "jessicajones@fakemail.com" : {"donaldtrump" : "ID"}
}
function fetch_id(email, pass)
{
  if(customer_table[email].hasOwnProperty(pass))
  {
    return customer_table[email][pass];
  }
}
function fetch_balance(accID)
{
  var custAccount = account.initWithKey(apikey);
  return parseFloat(custAccount.getAccountById(accID).balance).toFixed(2));
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
