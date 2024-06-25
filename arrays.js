let data = [
     {events: ["work", "touched tree", "pizza",
               "running", "television"],
      squirrel: false},
     {events: ["work", "ice cream", "cauliflower",
               "lasagna", "touched tree", "brushed teeth"],
      squirrel: false},
     {events: ["weekend", "cycling", "break", "peanuts",
               "beer"],
      squirrel: true},
     /* and so on... */
   ];
   let journal = [];

   function addEntry(events, squirrel) {
     journal.push({events, squirrel});
   }