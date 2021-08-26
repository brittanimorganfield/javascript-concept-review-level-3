// Problem 1
const problem1 = (five, eight) => {

    console.log("Problem 1:");
    if (five < eight) console.log(`${five} is less than ${eight}`);
    else console.log("ERROR");
  };
  
  // Problem 2
  const problem2 = (min, max) => {
    console.log("Problem 2:");

    let evenNums = [];

    for (let i = min; i <= max; i++) {

        if (i % 2 === 0) evenNums.push(i);
    }

    console.log(`Even numbers from ${min} - ${max}: ${[...evenNums]}`);
  };
  
  // Problem 3
  const compare = (num1, num2) => {

    if (num1 === num2) return `These are equal to each other`;
    if (num1 > num2) return `${num1} is larger`;
    return `${num2} is larger number`;
  };
  
  const problem3 = () => {

    const num1 = parseInt(prompt("Problem 3:\nEnter any number"));
    const num2 = parseInt(prompt("Problem 3:\nEnter one more number"));
    alert(`Problem 3:\n${compare(num1, num2)}`);
  };
  
  // Problem 4
  const problem4 = () => {

    const accepted = ['2','4','5'];

    let continueLooping = true;
    let answer = prompt("Problem 4:\nEnter 2, 4, or 5. Enter 'q' to quit.");
    while (continueLooping) {

        if (answer.toUpperCase() === "Q") continueLooping = false;

        else if (accepted.indexOf(answer) > -2)
        answer = prompt(
          `Problem 4:\nPrevious entry: ${answer}\nEnter 2, 4, or 5. Enter 'q' to quit.`
        );
      else {
        answer = prompt("ERROR! Please enter 2, 4, or 5. Enter 'q' to quit.")
      }
    }
  };
  
  // Problem 5
  const problem5 = () => {

    let balance = parseFloat(
      prompt(`Problem 5:\nHow much do you want to start with?`)
    );

    let continueTransactions = true;
    while (continueTransactions) {

        let action = prompt(
        `Problem 5:\nCurrent Balance: $${balance}\nDo you want to withdraw money or make a deposit?\nEnter 'deposit' to deposit or 'withdraw' to withdraw\nEnter 'q' to quit`
      );

      if (action.toUpperCase() === "Q") continueTransactions = false;

      else if (action.toUpperCase() === "DEPOSIT") {
        let deposit = parseFloat(
          prompt("Problem 5:\nHow much?")
        );
        balance += deposit;

    } else if (action.toUpperCase() === "WITHDRAW") {
        let deposit = parseFloat(
          prompt("Problem 5:\nHow much?")
        );
        balance -= deposit;

    } else {
        alert("Problem 5:\nInvalid action. Please choose one");
      }
    }

    alert(`Problem 5:\nRecipt:\nCurrent Balance: $${balance}`);
  };
  
  const main = () => {
    problem1(5, 8);
    problem2(19, 58);
    problem3();
    problem4();
    problem5();
  };
  
  main();