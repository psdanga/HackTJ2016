<script data-main="lib/capital_one" src="lib/require-jquery.js"></script>
$(function(){
    require(['account'], function (account) {
        var apikey = '0bff2c40bb1c982db456e6f2ef4bbc58';
        accountDemo(apikey, account);
        });
});

// Methods go here





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
