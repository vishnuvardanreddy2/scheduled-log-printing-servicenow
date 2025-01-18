var logPrinter = new LogPrinter(); // Create an instance of the LogPrinter class
var logs = logPrinter.getFilteredLogs(); // Fetch the filtered logs
var formattedLogs = logPrinter.formatLogs(logs); // Format the logs
logPrinter.printLogs(formattedLogs); // Print the formatted logs
