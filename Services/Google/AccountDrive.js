
module.exports = {
  // Acct Audit Functions
  Audit: {
    Calculate: () => {},
    CreateFile: () => {},
  },

  // A/R Tool Functions (filter out those 30 days)
  AgingReport: {
    ReadFile: () => {
      // 
    },
    Compare: () => {
      // Read from drive, Read from given file

      // use username for comparison

      // Get list of the individuals that have not been audited

          // If from Insurance... do stuff with the Ins Tracking Sheet

          // If from Patient... display for auditing.
    },
    WriteToNewSheet: () => {
      // copy original sheet 

      // add new rows...
    }
  },

  // Billing Tool Functions
  Billing: {
    AddToBillingSheet: () => {
      // name, amount, date to send statement/follow up
    },
    ListBills: () => {
      // Based on the date, display those that should get bills
    },
    Update: () => {
      //write to the file, updating if bill has gone out
    }
  }
}

