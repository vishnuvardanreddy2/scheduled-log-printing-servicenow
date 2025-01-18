var LogPrinter = Class.create();
LogPrinter.prototype = {
    initialize: function() {
    },
    
    // Method to fetch and filter logs based on criteria
    getFilteredLogs: function() {
        var logs = [];
        var gr = new GlideRecord('sys_log'); // Access sys_log table
        gr.addQuery('type', 'error'); // Filter by error type logs
        gr.addQuery('sys_created_on', '>=', '2025-01-01'); // Example: filter logs from 2025 onwards
        gr.orderByDesc('sys_created_on'); // Order by most recent
        gr.query(); // Execute the query

        while (gr.next()) {
            logs.push(gr.message); // Add the log message to the logs array
        }
        return logs; // Return the filtered logs
    },

    // Method to format logs (plain text in this case)
    formatLogs: function(logs) {
        return logs.join("\n"); // Convert logs array into plain text, each log on a new line
    },
    
    // Method to handle the printing of logs (simulated here with gs.info, in real case could be to a file)
    printLogs: function(formattedLogs) {
        gs.info("Printing logs:\n" + formattedLogs); // You could also log this or email the output
        // To print logs to a file or send via email, additional implementation will be needed
    }
};
