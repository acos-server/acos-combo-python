var Parsons = {};

Parsons.exercises = {};

Parsons.exercises['combo_avg'] = {
  "showAnimation" : true,
  "showTestcase" : true,
  "init" : [ [ "createFrame" ], [ "setLine", "1" ], [ "createOperator", "*", "lr" ], [ "createOperator", "-", "lr" ],
      [ "createOperator", "+", "lr" ], [ "createOperator", "/", "lr" ] ],
  "initial" : [
      { "steps" : [ [ "addValue", "3", "0", "int" ], [ "assign", "first" ] ], "code" : "first = 3" },
      { "steps" : [ [ "addValue", "5", "0", "int" ], [ "assign", "second" ] ], "code" : "second = 5" },
      {
        "steps" : [ [ "addValueFromVariable", "first", "0" ], [ "addOperator", "*", "1" ],
            [ "addValue", "2", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "first" ] ],
        "code" : "first = first * 2" },
      {
        "steps" : [ [ "addValueFromVariable", "first", "0" ], [ "addOperator", "-", "1" ],
            [ "addValueFromVariable", "second", "2" ], [ "evaluateOperator", "1" ], [ "assign", "second" ] ],
        "code" : "second = first - second" },
      {
        "steps" : [ [ "addValueFromVariable", "first", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValueFromVariable", "second", "2" ], [ "evaluateOperator", "1" ], [ "assign", "sum" ] ],
        "code" : "sum = first $$toggle::*::/::+::-$$ second" },
      {
        "steps" : [ [ "addValueFromVariable", "$$toggle$$0", "0" ], [ "addOperator", "$$toggle$$1", "1" ],
            [ "addValue", "2", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "avg" ] ],
        "code" : "avg = $$toggle::first::second::sum$$ $$toggle::*::/::+::-$$ 2" } ],
  vartests : [ { initcode : "", code : "", message : "Result", variables : { avg : 4 } } ],
  "description" : "<p>Construct a program that calculates the average of the variables <code>first</code> and <code>second</code> and assigns the result to the variable <code>avg</code>. First, assign values 3 and 5 to the variables. Please note that in this and the following exercises, there might be code fragments which are not necessary.</p>" };

Parsons.exercises['combo_swap'] = {
  description : '<p>Construct a program that swaps the values in the variables <code>first</code> and <code>second</code>. To do this, you need a third variable <code>temp</code>. The value in that variable at the end is not important. You can assume that there are already some values in the variables <code>first</code> and <code>second</code> and you have to create only that part that swaps the values.</p>',
  "showAnimation" : true,
  initial : [
      { code : '$$toggle::first::second::temp$$ = $$toggle::first::second::temp$$',
        steps : [ [ 'addValueFromVariable', '$$toggle$$1' ], [ 'assign', '$$toggle$$0' ] ] },
      { code : '$$toggle::first::second::temp$$ = $$toggle::first::second::temp$$',
        steps : [ [ 'addValueFromVariable', '$$toggle$$1' ], [ 'assign', '$$toggle$$0' ] ] },
      { code : '$$toggle::first::second::temp$$ = $$toggle::first::second::temp$$',
        steps : [ [ 'addValueFromVariable', '$$toggle$$1' ], [ 'assign', '$$toggle$$0' ] ] } ],
  init : [ [ 'createFrame' ], [ 'setLine', 1 ], [ 'createOperator', '+', 'lr' ],
      [ 'createFunction', 'print', 'print(value)', '-1', '-1' ], [ 'addValue', '4', '0', 'int' ], [ 'assign', 'first' ],
      [ 'addValue', '6', '0', 'int' ], [ 'assign', 'second' ] ],
  vartests : [ { initcode : "first=4\nsecond=6", code : "", message : "Result", variables : { first : 6, second : 4 } } ] };

Parsons.exercises['combo_python_if'] = {
  "description" : "<p>Construct a program that prints <em>Too near</em>, <em>Just perfect</em> or <em>Too far</em> based on the value in the variable <code>distance</code>. It is too near if the distance is 100 miles or less. The distance is perfect if it is more than 100 miles and exactly 200 miles or less. Over 200 miles is considered to be too far away.</p><p>You can assume that there is already a value in the variable <code>distance</code> and you need to create only the part that prints the correct text. Be careful with the indentation. Are you able to construct multiple correct solutions?</p>",
  "init" : [ [ "createFrame" ], [ "setLine", "1" ], [ "createOperator", ">", "lr" ], [ "createOperator", ">=", "lr" ],
      [ "createOperator", "<", "lr" ], [ "createOperator", "<=", "lr" ],
      [ "createFunction", "print", "print(value)", "-1", "-1" ], [ "addValue", "18", "0", "int" ],
      [ "assign", 'distance' ] ],
  "initial" : [
      {
        "steps" : [ [ "addValueFromVariable", "distance", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValue", "$$toggle$$1", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '$$endIf' ] ],
        "code" : "if distance $$toggle::<=::>=::<::>$$ $$toggle::100::200$$:" },
      {
        "steps" : [ [ "addValueFromVariable", "distance", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValue", "$$toggle$$1", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '$$endIf' ] ],
        "code" : "if distance $$toggle::<=::>=::<::>$$ $$toggle::100::200$$:" },
      {
        "steps" : [ [ "addValueFromVariable", "distance", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValue", "$$toggle$$1", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '$$endIf' ] ],
        "code" : "if distance $$toggle::<=::>=::<::>$$ $$toggle::100::200$$:" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValue", "Too far", "0/0/0", "str" ],
            [ "evaluateFunction", "0" ] ], "code" : "  print(\"Too far\")" },
      {
        "steps" : [ [ "addValueFromVariable", "distance", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValue", "$$toggle$$1", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '$$endIf' ] ],
        "code" : "elif distance $$toggle::<=::>=::<::>$$ $$toggle::100::200$$:" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValue", "Just perfect", "0/0/0", "str" ],
            [ "evaluateFunction", "0" ] ], "code" : "  print(\"Just perfect\")" },
      { "steps" : [], "code" : "else:" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValue", "Too near", "0/0/0", "str" ],
            [ "evaluateFunction", "0" ] ], "code" : "print(\"Too near\")" } ],
  "vartests" : [
      { initcode : "distance=55", code : "", message : "Distance is less than 100 miles",
        variables : { __output : 'Too near\n' },
        initSteps : [ [ "addValue", "55", "0", "int" ], [ "assign", 'distance' ] ] },
      { initcode : "distance=100", code : "", message : "Distance is 100 miles", variables : { __output : 'Too near\n' },
        initSteps : [ [ "addValue", "100", "0", "int" ], [ "assign", 'distance' ] ] },
      { initcode : "distance=150", code : "", message : "Distance is between 100 and 200 miles",
        variables : { __output : 'Just perfect\n' },
        initSteps : [ [ "addValue", "150", "0", "int" ], [ "assign", 'distance' ] ] },
      { initcode : "distance=200", code : "", message : "Distance is 200 miles", variables : { __output : 'Just perfect\n' },
        initSteps : [ [ "addValue", "200", "0", "int" ], [ "assign", 'distance' ] ] },
      { initcode : "distance=250", code : "", message : "Distance is more than 200 miles",
        variables : { __output : 'Too far\n' },
        initSteps : [ [ "addValue", "250", "0", "int" ], [ "assign", 'distance' ] ] } ], showTestcase : true,
  showAnimation : true };

Parsons.exercises['combo_python_while'] = {
  "description" : "<p>A freshman started a part-time job in a factory that builds machines. When he starts, it takes 80 minutes to build one machine. However, during the first week he becomes five minutes faster every time he has finished one machine. <p>Construct a program that calculates by using the <code>while</code> loop what is the number (starting from one) of the machine that he is building after 500 minutes have passed. Let's assume that he works without any pauses. Finally, print out the number.</p>",
  "initial" : [
      { "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "machines" ] ], "code" : "machines = 0" },
      { "steps" : [ [ "addValue", "80", "0", "int" ], [ "assign", "speed" ] ], "code" : "speed = 80" },
      { "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "time_passed" ] ], "code" : "time_passed = 0" },
      {
        "steps" : [ [ '_label', 'w1' ], [ "addValueFromVariable", "time_passed", "0" ], [ "addOperator", "<=", "1" ],
            [ "addValue", "500", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '@w1' ],
            [ '$$lastNextIndent', 'setLine', '$$line' ] ], "code" : "while time_passed <= 500:" },
      {
        "steps" : [ [ "addValueFromVariable", "time_passed", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "speed", "2" ], [ "evaluateOperator", "1" ], [ "assign", "time_passed" ] ],
        "code" : "  time_passed += speed" },
      {
        "steps" : [ [ "addValueFromVariable", "speed", "0" ], [ "addOperator", "-", "1" ],
            [ "addValue", "5", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "speed" ] ],
        "code" : "  speed -= 5" },
      {
        "steps" : [ [ "addValueFromVariable", "speed", "0" ], [ "addOperator", "+", "1" ],
            [ "addValue", "5", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "speed" ] ],
        "code" : "  speed += 5" },
      {
        "steps" : [ [ "addValueFromVariable", "machines", "0" ], [ "addOperator", "+", "1" ],
            [ "addValue", "1", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "machines" ] ],
        "code" : "  machines += 1" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValueFromVariable", "machines", "0/0/0" ],
            [ "evaluateFunction", "0" ] ], "code" : "print(machines)" } ],
  "init" : [ [ "createFrame" ], [ "setLine", "1" ], [ "createOperator", "<=", "lr" ], [ "createOperator", "+", "lr" ],
      [ "createOperator", "-", "lr" ], [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ { initcode : "", code : "", message : "Output", variables : { __output : '9\n' } } ],
  showTestcase : true, showAnimation : true };

Parsons.exercises['combo_python_while2'] = {
  "description" : "<p>Construct a program that can be used to calculate the balance of a savings account. The initial balance is $1000 and the interest rate per year is 2%. Print out the current year and balance after the interest has been added. Print this data for five years starting after adding the first interest (this will be year one).</p>",
  "initial" : [
      { "steps" : [ [ "addValue", "1000.0", "0", "float" ], [ "assign", "balance" ] ], "code" : "balance = 1000.0" },
      { "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "i" ] ], "code" : "i = 0" },
      { "steps" : [ [ "addValue", "0.02", "0", "float" ], [ "assign", "INTEREST" ] ], "code" : "INTEREST = 0.02" },
      {
        "steps" : [ [ '$$lastNextIndent', '_goto', '@w1' ], [ '$$lastNextIndent', 'setLine', '$$line' ],
            [ '_label', 'w1' ], [ "addValueFromVariable", "i", "0" ], [ "addOperator", "<", "1" ],
            [ "addValue", "$$toggle$$0", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ], "code" : "while i < $$toggle::4::5::6$$:" },
      {
        "steps" : [ [ '$$lastNextIndent', '_goto', '@f1' ], [ '$$lastNextIndent', 'setLine', '$$line' ],
            [ "_createIterator", "i1", "", "0", "$$toggle-$$0", "Int" ], [ "_label", "f1" ],
            [ "_iterate", "i1", "@f2", "$$nextSame" ], [ "_label", "f2" ], [ "takeNext", "i1", "0" ], [ "assign", "i" ] ],
        "code" : "for i in range($$toggle::4::5::6$$):" },
      {
        "steps" : [ [ "addValueFromVariable", "balance", "0" ], [ "addOperator", "*", "1" ],
            [ "addValue", "1", "2", "int" ], [ "addOperator", "+", "3" ], [ "addValueFromVariable", "INTEREST", "4" ],
            [ "evaluateOperator", "3" ], [ "evaluateOperator", "1" ], [ "assign", "balance" ] ],
        "code" : "balance = balance * (1 + INTEREST)" },
      {
        "steps" : [ [ "addValueFromVariable", "balance", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "balance", "2" ], [ "addOperator", "*", "3" ], [ "addValue", "1", "4", "int" ],
            [ "addOperator", "+", "5" ], [ "addValueFromVariable", "INTEREST", "6" ], [ "evaluateOperator", "5" ],
            [ "evaluateOperator", "3" ], [ "evaluateOperator", "1" ], [ "assign", "balance" ] ],
        "code" : "    balance += balance * (1 + INTEREST)" },
      {
        "steps" : [ [ "addValueFromVariable", "balance", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "balance", "2" ], [ "addOperator", "*", "3" ],
            [ "addValueFromVariable", "INTEREST", "4" ], [ "evaluateOperator", "3" ], [ "evaluateOperator", "1" ],
            [ "assign", "balance" ] ], "code" : "    balance += balance * INTEREST" },
      {
        "steps" : [ [ "addValueFromVariable", "balance", "0" ], [ "addOperator", "*", "1" ],
            [ "addValueFromVariable", "INTEREST", "2" ], [ "evaluateOperator", "1" ], [ "assign", "balance" ] ],
        "code" : "    balance = balance * INTEREST" },
      {
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValueFromVariable", "i", "0/0/0" ],
            [ "addOperator", "+", "0/0/1" ], [ "addValue", "1", "0/0/2", "int" ], [ "evaluateOperator", "0/0/1" ],
            [ "addValueFromVariable", "balance", "0/1/0" ], [ "evaluateFunction", "0" ] ],
        "code" : "    print(i + 1, balance)" },
      {
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValueFromVariable", "i", "0/0/0" ],
            [ "addValueFromVariable", "balance", "0/1/0" ], [ "evaluateFunction", "0" ] ], "code" : "    print(i, balance)" } ],
  "init" : [ [ "createFrame" ], [ "setLine", "1" ], [ "createOperator", "*", "lr" ], [ "createOperator", "+", "lr" ],
      [ "createOperator", "<", "lr" ], [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ { initcode : "", code : "", message : "Output",
    variables : { __output : '1 1020.0\n2 1040.4\n3 1061.208\n4 1082.43216\n5 1104.0808032\n' } } ],
  showTestcase : true, showAnimation : true };

Parsons.exercises['combo_python_function'] = {
  "description" : "<p>Construct a program that can be used to calculate the total sum of a phone bill. The phone bill will always be at least $20 and that includes 100 SMSs and 120 minutes for calls. Every additional SMS over that limit will cost $0.12 and calls $0.08 per minute.<p>Construct your program so that the function <code>calculate</code> calculates the additional costs using the prices that are over the limits. The function <code>calculate_total</code> calculates the total sum by also using the <code>calculate</code> function. Write a main program that calculates the total sum and prints it out when 110 SMSs have been sent and 135 minutes have been talked. Don't forget to call the main program.",
  "init" : [ [ "createFrame" ], [ "createOperator", "*", "lr" ], [ "createOperator", "+", "lr" ],
      [ "createOperator", ">", "lr" ], [ "createOperator", "<", "lr" ], [ "createOperator", "-", "lr" ],
      [ "setLine", "1" ], [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "initial" : [
      {
        "code" : "def calculate(sms_count, minutes):",
        "steps" : [ [ '_ifFunctionDefined', 'calculate', '2', '@f1', '@ff1' ], [ '_label', 'ff1' ],
            [ "createFunction", "calculate", "calculate(sms_count, minutes)", "2", "@f1" ],
            [ '_goto', '$$nextSame' ], [ '_label', 'f1' ], [ "setLine_", "$$line" ],
            [ "createParameterVariables", [ "sms_count", "minutes" ] ],
            [ "assignParameters", [ "sms_count", "minutes" ] ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      {
        "code" : "  return 0.12 $$toggle::+::-::*::/$$ sms_count $$toggle::+::-::*::/$$ 0.08 $$toggle::+::-::*::/$$ minutes",
        "steps" : [ [ "addValue", "0.12", "0", "float" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValueFromVariable", "sms_count", "2" ], [ "evaluateOperator", "1" ],
            [ "addOperator", "$$toggle$$1", "1" ], [ "addValue", "0.08", "2", "float" ],
            [ "addOperator", "$$toggle$$2", "3" ], [ "addValueFromVariable", "minutes", "4" ],
            [ "evaluateOperator", "3" ], [ "evaluateOperator", "1" ], [ "returnValue" ] ] },
      {
        "code" : "def calculate_total(total_sms, total_mins):",
        "steps" : [ [ '_ifFunctionDefined', 'calculate_total', '2', '@f2', '@ff2' ], [ '_label', 'ff2' ],
            [ "createFunction", "calculate_total", "calculate_total(total_sms, total_mins)", "2", "@f2" ],
            [ 'goto', '$$nextSame' ], [ '_label', 'f2' ], [ "setLine_", "$$line" ],
            [ "createParameterVariables", [ "total_sms", "total_mins" ] ], [ "assignParameters", [ "total_sms", "total_mins" ] ],
            [ '$$lastNextIndent', 'returnValue' ], [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      { "code" : "  sum = 20", "steps" : [ [ "addValue", "20", "0", "int" ], [ "assign", "sum" ] ] },
      { "code" : "  total_sms_over = 0", "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "total_sms_over" ] ] },
      { "code" : "  total_mins_over = 0", "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "total_mins_over" ] ] },
      {
        "code" : "  if total_sms $$toggle::<::>$$ 100:",
        "steps" : [ [ '$$lastNextIndent', '_goto', '$$endIf' ], [ "addValueFromVariable", "total_sms", "0" ],
            [ "addOperator", "$$toggle$$0", "1" ], [ "addValue", "100", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ] },
      {
        "code" : "    total_sms_over = total_sms - 100",
        "steps" : [ [ "addValueFromVariable", "total_sms", "0" ], [ "addOperator", "-", "1" ],
            [ "addValue", "100", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "total_sms_over" ] ] },
      {
        "code" : "  if total_mins $$toggle::<::>$$ 120:",
        "steps" : [ [ '$$lastNextIndent', '_goto', '$$endIf' ], [ "addValueFromVariable", "total_mins", "0" ],
            [ "addOperator", "$$toggle$$0", "1" ], [ "addValue", "120", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ] },
      {
        "code" : "    total_mins_over = total_mins - 120",
        "steps" : [ [ "addValueFromVariable", "total_mins", "0" ], [ "addOperator", "-", "1" ],
            [ "addValue", "120", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "total_mins_over" ] ] },
      {
        "code" : "  sum = sum + calculate(total_sms_over, total_mins_over)",
        "steps" : [ [ "addValueFromVariable", "sum", "0" ], [ "addOperator", "+", "1" ],
            [ "addFunction", "calculate", "2", "2" ], [ "addValueFromVariable", "total_sms_over", "2/0/0" ],
            [ "addValueFromVariable", "total_mins_over", "2/1/0" ], [ "evaluateFunction", "2" ],
            [ "evaluateOperator", "1" ], [ "assign", "sum" ] ] },
      { "code" : "  return sum", "steps" : [ [ "addValueFromVariable", "sum", "0" ], [ "returnValue" ] ] },
      {
        "code" : "def main():",
        "steps" : [ [ '_ifFunctionDefined', 'main', '0', '@f3', '@ff3' ], [ '_label', 'ff3' ],
            [ "createFunction", "main", "main()", "0", "@f3" ], [ '_goto', '$$nextSame' ], [ '_label', 'f3' ],
            [ "setLine_", "$$line" ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      { "code" : "  sms_count = 110", "steps" : [ [ "addValue", "110", "0", "int" ], [ "assign", "sms_count" ] ] },
      { "code" : "  minutes = 135", "steps" : [ [ "addValue", "135", "0", "int" ], [ "assign", "minutes" ] ] },
      {
        "code" : "bill = calculate_total(sms_count, minutes)",
        "steps" : [ [ "addFunction", "calculate_total", "0", "2" ],
            [ "addValueFromVariable", "sms_count", "0/0/0" ], [ "addValueFromVariable", "minutes", "0/1/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "bill" ] ] },
      {
        "code" : "print(\"Bill:\", bill)",
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValue", "Bill:", "0/0/0", "str" ],
            [ "addValueFromVariable", "bill", "0/1/0" ], [ "evaluateFunction", "0" ] ] },
      { "code" : "main()", "steps" : [ [ "addFunction", "main", "0", "0" ], [ "evaluateFunction", "0" ] ] } ],
  "vartests" : [ { initcode : "", code : "", message : "Output",
    variables : { __output : 'Bill: 22.4\n' } } ], showTestcase : true, showAnimation : true,
  animationWidth : 1000, animationStackHeight : 500 };

Parsons.exercises['combo_python_list'] = {
  "description" : "<p>Construct a program that transforms a list into a form that each item in the list at least zero. If the item is smaller that that, then the original value will be replaced with zero. If the value is already at least zero, the original value is not changed.<p>Construct your solution so that the function <code>transform</code> makes the transformation as described and returns the number of changed items. The main program uses that function to transform a list <code>[-5, -2, 7]</code> and the main program prints out the number of the changed items. Don't forget to call your main program.</p>",
  "initial" : [
      {
        "code" : "def transform(values):",
        "steps" : [ [ '_ifFunctionDefined', 'transform', '1', '@f1', '@ff1' ], [ '_label', 'ff1' ],
            [ "createFunction", "transform", "transform(values)", "1", "@f1" ], [ '_goto', '$$nextSame' ], [ '_label', 'f1' ],
            [ "setLine_", "$$line" ], [ "createParameterVariables", [ "values" ] ], [ "assignParameters", [ "values" ] ],
            [ '$$lastNextIndent', 'returnValue' ], [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      { "code" : "  changed = 0", "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "changed" ] ] },
      {
        "code" : "  count = len(values)",
        "steps" : [ [ "addFunction", "len", "0", "1" ], [ "addValueFromVariable", "values", "0/0/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "count" ] ] },
      { "code" : "  i = $$toggle::0::1$$", "steps" : [ [ "addValue", "$$toggle$$0", "0", "int" ], [ "assign", "i" ] ] },
      {
        "code" : "  while i $$toggle::<=::<$$ count:",
        "steps" : [ [ '_label', 'w1' ], [ "addValueFromVariable", "i", "0" ], [ "addOperator", "$$toggle$$0", "1" ],
            [ "addValueFromVariable", "count", "2" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ], [ '$$lastNextIndent', '_goto', '@w1' ],
            [ '$$lastNextIndent', 'setLine', '$$line' ] ] },
      {
        "code" : "    if values[i] $$toggle::>::<$$ 0:",
        "steps" : [ [ '$$lastNextIndent', '_goto', '$$endIf' ], [ "addValueFromVariable", "values", "0" ],
            [ "addOperator", "[ ]", "1" ], [ "addValueFromVariable", "i", "0/1/0" ], [ "getValueAtIndex", "0" ],
            [ "addOperator", "$$toggle$$0", "1" ], [ "addValue", "0", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ] },
      {
        "code" : "      values[i] = 0",
        "steps" : [ [ "addValueFromVariable", "values", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValueFromVariable", "i", "0/1/0" ], [ "addValue", "0", "0/2/0", "int" ], [ "setValueAtIndex", "0" ] ] },
      {
        "code" : "      changed += 1",
        "steps" : [ [ "addValueFromVariable", "changed", "0" ], [ "addOperator", "+", "1" ],
            [ "addValue", "1", "2", "int" ], [ "evaluateOperator", "1" ], [ "assign", "changed" ] ] },
      {
        "code" : "    i += 1",
        "steps" : [ [ "addValueFromVariable", "i", "0" ], [ "addOperator", "+", "1" ], [ "addValue", "1", "2", "int" ],
            [ "evaluateOperator", "1" ], [ "assign", "i" ] ] },
      { "code" : "  return changed", "steps" : [ [ "addValueFromVariable", "changed", "0" ], [ "returnValue" ] ] },
      {
        "code" : "def main():",
        "steps" : [ [ '_ifFunctionDefined', 'main', '0', '@f2', '@ff2' ], [ '_label', 'ff2' ],
            [ "createFunction", "main", "main()", "0", "@f2" ], [ '_goto', '$$nextSame' ], [ '_label', 'f2' ],
            [ "setLine_", "$$line" ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      {
        "code" : "  numbers = [-5, -2, 7]",
        "steps" : [ [ "createInstance", "list" ], [ "addCollectionInitializer", "-1", "0", "3" ],
            [ "addValue", "-5", "0/1/0", "int" ], [ "addValue", "-2", "0/2/0", "int" ],
            [ "addValue", "7", "0/3/0", "int" ], [ "initializeCollection", "0" ], [ "assign", "numbers" ] ] },
      {
        "code" : "  changes = transform(numbers)",
        "steps" : [ [ "addFunction", "transform", "0", "1" ], [ "addValueFromVariable", "numbers", "0/0/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "changes" ] ] },
      {
        "code" : "print(\"Changes:\", changes)",
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValue", "Changes:", "0/0/0", "str" ],
            [ "addValueFromVariable", "changes", "0/1/0" ], [ "evaluateFunction", "0" ] ] },
            {
        "code" : "main()",
        "steps" : [ [ "addFunction", "main", "0", "0" ], [ "evaluateFunction", "0" ] ] } ],
  "init" : [ [ "createFrame" ], [ "createOperator", "<", "lr" ], [ "createOperator", ">", "lr" ],
      [ "createOperator", "<=", "lr" ], [ "createOperator", "[ ]", "pr", "", " [ # ]" ],
      [ "createOperator", "[ ] =", "pr", "", "[ # ] = #" ], [ "createOperator", "+=", "lr" ],
      [ "createOperator", "+", "lr" ], [ "setLine", "1" ], [ 'createFunction', 'len', 'len(collection)', '1', '-1' ],
      [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ { initcode : "", code : "", message : "Output",
    variables : { __output : 'Changes: 2\n' } } ], showTestcase : true, showAnimation : true,
  animationStackHeight : 365 };

Parsons.exercises['combo_python_split'] = {
  "description" : "<p>Construct a program that can be used to calculate the number of points in a dice game. In this game, the initial value is the value of the first roll. After that, the following rolls are summed to the total points if the roll is bigger than the previous roll. However, if the roll is six, it will be always added to the sum.</p><p>Use the function<code>calculate_points</code> to calculate and return the total sum from the rolling sequence that is given as a parameter. The game does not define the number of rolls but the players can decide it. Construct also a main program that calculates the total points if the rolling sequence is <code>3 2 3 6 6</code> and prints it out. If the rules are applied, the result should be 18 (=3 + 3 + 6 + 6).</p>",
  "init" : [ [ "createFrame" ], [ "createOperator", "==", "lr" ], [ "createOperator", "<", "lr" ],
      [ "createOperator", "<=", "lr" ], [ "createOperator", ">=", "lr" ], [ "createOperator", ">", "lr" ],
      [ "createOperator", "or", "n" ], [ "createOperator", ">", "lr" ], [ "createOperator", "+", "lr" ],
      [ "setLine", "1" ], [ "createClass", "str" ],
      [ "createFunction", "split", "split(separator)", "1", "-1", "str" ],
      [ "createFunction", "int", "int(value)", "1", "-1" ], [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "initial" : [
      {
        "code" : "def calculate_points(sequence):",
        "steps" : [ [ '_ifFunctionDefined', 'calculate_points', '1', '@f1', '@ff1' ], [ '_label', 'ff1' ],
            [ "createFunction", "calculate_points", "calculate_points(sequence)", "1", "@f1" ], [ '_goto', '$$nextSame' ],
            [ '_label', 'f1' ], [ "setLine_", "$$line" ], [ "createParameterVariables", [ "sequence" ] ],
            [ "assignParameters", [ "sequence" ] ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      { "code" : "  previous = 0", "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "previous" ] ] },
      { "code" : "  sum = 0", "steps" : [ [ "addValue", "0", "0", "int" ], [ "assign", "sum" ] ] },
      {
        "code" : "  for result in sequence:",
        "steps" : [ [ "_createIterator", "i1", "@sequence" ], [ "_label", "for1" ],
            [ "_iterate", "i1", "@for2", "$$nextSame" ], [ "_label", "for2" ], [ "takeNext", "i1", "0" ],
            [ "assign", "result" ], [ '$$lastNextIndent', '_goto', '@for1' ],
            [ '$$lastNextIndent', 'setLine', '$$line' ] ] },
      {
        "code" : "    result = int(result)",
        "steps" : [ [ "addFunction", "int", "0", "1" ], [ "addValueFromVariable", "result", "0/0/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "result" ] ] },
      {
        "code" : "    if result == 6 or result $$toggle::<::>$$ previous:",
        "steps" : [ [ "addValueFromVariable", "result", "0" ], [ "addOperator", "==", "1" ],
            [ "addValue", "6", "2", "int" ], [ "evaluateOperator", "1" ], [ "addOperator", "or", "1" ],
            [ "evaluateOperator", "1" ], [ "conditionalJump_", "@l10", "@l9" ], [ "_label", "l9" ],
            [ "removeElement_", "1", "true" ], [ "addValueFromVariable", "result", "0" ],
            [ "addOperator", "$$toggle$$0", "1" ], [ "addValueFromVariable", "previous", "2" ],
            [ "evaluateOperator", "1" ], [ "_label", "l10" ], [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ] },
      {
        "code" : "      sum += result",
        "steps" : [ [ "addValueFromVariable", "sum", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "result", "2" ], [ "evaluateOperator", "1" ], [ "assign", "sum" ] ] },
      { "code" : "    previous = result",
        "steps" : [ [ "addValueFromVariable", "result", "0" ], [ "assign", "previous" ] ] },
      { "code" : "  return sum", "steps" : [ [ "addValueFromVariable", "sum", "0" ], [ "returnValue" ] ] },
      {
        "code" : "def main():",
        "steps" : [ [ '_ifFunctionDefined', 'main', '0', '@f2', '@ff2' ], [ '_label', 'ff2' ],
            [ "createFunction", "main", "main()", "0", "@f2" ], [ '_goto', '$$nextSame' ], [ '_label', 'f2' ],
            [ "setLine_", "$$line" ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ] },
      { "code" : "  rolls = \"3 2 3 6 6\"",
        "steps" : [ [ "addValue", "3 2 3 6 6", "0", "str" ], [ "assign", "rolls" ] ] },
      {
        "code" : "  values = rolls.split(\" \")",
        "steps" : [ [ "addValueFromVariable", "rolls", "0" ], [ "addFunction", "split", "1", "1", "?" ],
            [ "addValue", " ", "0/1/0", "str" ], [ "evaluateFunction", "0" ], [ "assign", "values" ] ] },
      {
        "code" : "  points = calculate_points(values)",
        "steps" : [ [ "addFunction", "calculate_points", "0", "1" ], [ "addValueFromVariable", "values", "0/0/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "points" ] ] },
      {
        "code" : "  print(\"Total points:\", points)",
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValue", "Total points:", "0/0/0", "str" ],
            [ "addValueFromVariable", "points", "0/1/0" ], [ "evaluateFunction", "0" ] ] },
      { "code" : "main()", "steps" : [ [ "addFunction", "main", "0", "0" ], [ "evaluateFunction", "0" ] ] } ],
  "vartests" : [ { initcode : "", code : "", message : "Result",
    variables : { __output : 'Total points: 18\n' } } ], animationStackHeight : 365, showAnimation : true,
  showTestcase : true };

Parsons.exercises['combo_python_dict'] = {
  "description" : "<p>Construct a program that can be used to calculate grades for a course. The initial grade will be the exam grade (0 is failed, 5 is the best). It possible to get +1 based on the other tasks in case that the exam grade is at least one.</p><p>Use the function <code>add_bonus</code> to add +1 to the final grade if the grade is at least one. Construct the main program so that it will place all the given exam results to a dictionary (the order is not important as there is not any particular order inside a dictionary). Then use a loop to find and print all failed students. After that, add the bonus for the student 45678D and print her grade. Don't forget to call your main program.</p>",
  "initial" : [
      {
        "steps" : [ [ '_ifFunctionDefined', 'add_bonus', '2', '@f1', '@ff1' ], [ '_label', 'ff1' ],
            [ "createFunction", "add_bonus", "add_bonus(grades, student)", "2", "@f1" ],
            [ '_goto', '$$nextSame' ], [ '_label', 'f1' ], [ "setLine_", "$$line" ],
            [ "createParameterVariables", [ "grades", "student" ] ],
            [ "assignParameters", [ "grades", "student" ] ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ],
        "code" : "def add_bonus(grades, student):" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ]", "1" ],
            [ "addValueFromVariable", "student", "0/1/0" ], [ "getValueByKey", "0" ], [ "addOperator", ">", "1" ],
            [ "addValue", "0", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ], "code" : "    if grades[student] > 0:" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValueFromVariable", "student", "0/1/0" ], [ "addValueFromVariable", "grades", "0/2/0" ],
            [ "addOperator", "[ ]", "0/2/1" ], [ "addValueFromVariable", "student", "0/2/0/1/0" ],
            [ "getValueByKey", "0/2/0" ], [ "addOperator", "+", "0/2/1" ], [ "addValue", "1", "0/2/2", "int" ],
            [ "evaluateOperator", "0/2/1" ], [ "setValueByKey", "0" ] ], "code" : "      grades[student] += 1" },
      {
        "steps" : [ [ '_ifFunctionDefined', 'main', '0', '@f2', '@ff2' ], [ '_label', 'ff2' ],
            [ "createFunction", "main", "main()", "0", "@f2" ], [ '_goto', '$$nextSame' ], [ '_label', 'f2' ],
            [ "setLine_", "$$line" ], [ '$$lastNextIndent', 'returnValue' ],
            [ '$$lastNextIndent', 'addValue', "None", "0", "None" ] ], "code" : "def main():" },
      { "steps" : [ [ "createInstance", "dict" ], [ "addReference", "-1", "0" ], [ "assign", "grades" ] ],
        "code" : "  grades = {}" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValue", "12345A", "0/1/0", "str" ], [ "addValue", "4", "0/2/0", "int" ], [ "setValueByKey", "0" ] ],
        "code" : "  grades[\"12345A\"] = 4" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValue", "23456B", "0/1/0", "str" ], [ "addValue", "5", "0/2/0", "int" ], [ "setValueByKey", "0" ] ],
        "code" : "  grades[\"23456B\"] = 5" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValue", "34567C", "0/1/0", "str" ], [ "addValue", "0", "0/2/0", "int" ], [ "setValueByKey", "0" ] ],
        "code" : "  grades[\"34567C\"] = 0" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ] =", "1" ],
            [ "addValue", "45678D", "0/1/0", "str" ], [ "addValue", "3", "0/2/0", "int" ], [ "setValueByKey", "0" ] ],
        "code" : "  grades[\"45678D\"] = 3" },
      {
        "steps" : [ [ "addFunction", "add_bonus", "0", "2" ], [ "addValueFromVariable", "grades", "0/0/0" ],
            [ "addValue", "45678D", "0/1/0", "str" ], [ "evaluateFunction", "0" ] ],
        "code" : "  add_bonus(grades, \"45678D\")" },
      {
        "steps" : [ [ "_createIterator", "i1", "@grades" ], [ "_label", "for1" ],
            [ "_iterate", "i1", "@for2", "$$nextSame" ], [ "_label", "for2" ], [ "takeNext", "i1", "0" ],
            [ "assign", "student" ], [ '$$lastNextIndent', '_goto', '@for1' ],
            [ '$$lastNextIndent', 'setLine', '$$line' ] ], "code" : "  for student in grades:" },
      {
        "steps" : [ [ "addValueFromVariable", "grades", "0" ], [ "addOperator", "[ ]", "1" ],
            [ "addValueFromVariable", "student", "0/1/0" ], [ "getValueByKey", "0" ], [ "addOperator", "==", "1" ],
            [ "addValue", "0", "2", "int" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "$$nextIndent", "$$nextSame" ] ], "code" : "    if grades[student] == 0:" },
      {
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValue", "Failed:", "0/0/0", "str" ],
            [ "addValueFromVariable", "student", "0/1/0" ], [ "evaluateFunction", "0" ] ],
        "code" : "      print(\"Failed:\", student)" },
      {
        "steps" : [ [ "addFunction", "print", "0", "2" ], [ "addValue", "The grade for 45678D:", "0/0/0", "str" ],
            [ "addValueFromVariable", "grades", "0/1/0" ], [ "addOperator", "[ ]", "0/1/1" ],
            [ "addValue", "45678D", "0/1/0/1/0", "str" ], [ "getValueByKey", "0/1/0" ], [ "evaluateFunction", "0" ] ],
        "code" : "  print(\"The grade for 45678D:\", grades[\"45678D\"])" },
      { "steps" : [ [ "addFunction", "main", "0", "0" ], [ "evaluateFunction", "0" ] ], "code" : "main()" } ],
  "init" : [ [ "createFrame" ], [ "createOperator", "[ ]", "pr", "", " [ # ]" ], [ "createOperator", ">", "lr" ],
      [ "createOperator", "[ ] =", "pr", "", "[ # ] = #" ], [ "createOperator", "+", "lr" ],
      [ "createOperator", "==", "lr" ], [ "setLine", "1" ], [ "createFunction", "int", "int(value)", "1", "-1" ],
      [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ { initcode : "", code : "", message : "Output",
    variables : { __output : 'Failed: 34567C\nThe grade for 45678D: 4\n' } } ], showTestcase : true,
  showAnimation : true, animationStackHeight : 365, animationWidth : 1000 };
Parsons.exercises['combo_python_class1'] = {
  "description" : "<p>Construct a program that uses a ready-made class <code>Factory</code>. The factory requires raw materials to produce products. However, it can store only a limited amount of raw materials in its storage area. The factory knows how much raw materials are available, what is the maximum amount of raw materials that can be stored and how many products have been made. When the production process starts, the factory will always produce that many products that is possible to make with the current amount of the raw materials and the factory reports the number of products that have just been finished.</p><p>Construct the main program so that the capacity for raw materials is 300 units. Add 400 units of raw materials and store the part that does not fit in elsewhere. Then ask the factory to produce products and print the number of products. It takes 7 units to produce one product. After finishing the first batch of products, add the rest of the previous raw materials into the factory and print out how many products can now be produced. Finally, print out the total number of produced products.</p>",
  "initial" : [
      { "steps" : [ [ "addValue", "300", "0", "int" ], [ "assign", "CAPACITY" ] ], "code" : "CAPACITY = 300" },
      { "steps" : [ [ "addValue", "7", "0", "int" ], [ "assign", "MATERIALS_PER_PROD" ] ],
        "code" : "MATERIALS_PER_PROD = 7" },
      {
        "steps" : [ [ "addFunction", "Factory", "0", "1" ], [ "addValueFromVariable", "CAPACITY", "0/0/0" ],
            [ "evaluateFunction", "0" ], [ "assign", "factory" ] ], "code" : "factory = Factory(CAPACITY)" },
      { "steps" : [ [ "addValue", "400", "0", "int" ], [ "assign", "available" ] ], "code" : "available = 400" },
      {
        "steps" : [ [ "addValueFromVariable", "factory", "0" ], [ "addFunction", "add_raw_materials", "1", "1", "?" ],
            [ "addValueFromVariable", "available", "0/1/0" ], [ "evaluateFunction", "0" ], [ "assign", "added" ] ],
        "code" : "added = factory.add_raw_materials(available)" },
      {
        "steps" : [ [ "addValueFromVariable", "available", "0" ], [ "addOperator", "-", "1" ],
            [ "addValueFromVariable", "added", "2" ], [ "evaluateOperator", "1" ], [ "assign", "over" ] ],
        "code" : "over = available - added" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValueFromVariable", "factory", "0/0/0" ],
            [ "addFunction", "produce", "0/0/1", "1", "?" ],
            [ "addValueFromVariable", "MATERIALS_PER_PROD", "0/0/0/1/0" ], [ "evaluateFunction", "0/0/0" ],
            [ "evaluateFunction", "0" ] ], "code" : "print(factory.produce(MATERIALS_PER_PROD))" },
      {
        "steps" : [ [ "addValueFromVariable", "factory", "0" ], [ "addFunction", "add_raw_materials", "1", "1", "?" ],
            [ "addValueFromVariable", "over", "0/1/0" ], [ "evaluateFunction", "0" ] ],
        "code" : "factory.add_raw_materials(over)" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValueFromVariable", "factory", "0/0/0" ],
            [ "addFunction", "produce", "0/0/1", "1", "?" ],
            [ "addValueFromVariable", "MATERIALS_PER_PROD", "0/0/0/1/0" ], [ "evaluateFunction", "0/0/0" ],
            [ "evaluateFunction", "0" ] ], "code" : "print(factory.produce(MATERIALS_PER_PROD))" },
      {
        "steps" : [ [ "addFunction", "print", "0", "1" ], [ "addValueFromVariable", "factory", "0/0/0" ],
            [ "addFunction", "get_production_count", "0/0/1", "0", "?" ], [ "evaluateFunction", "0/0/0" ],
            [ "evaluateFunction", "0" ] ], "code" : "print(factory.get_production_count())" } ],
  "init" : [ [ "createFrame" ], [ "setLine", "1" ], [ "createOperator", "-", "lr" ], [ "createClass", "Factory" ],
      [ "createFunction", "add_raw_materials", "add_raw_materials(amount)", "1", "-1", "Factory" ],
      [ "createFunction", "produce", "produce(raw_materials)", "1", "-1", "Factory" ],
      [ "createFunction", "get_production_count", "get_production_count()", "1", "-1", "Factory" ],
      [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ {
    initcode : "class Factory:\n def __init__(self, storage_size):\n  self.storage_size = storage_size\n  self.in_stock = 0\n  self.produced = 0\n def add_raw_materials(self, amount):\n  originally = self.in_stock\n  self.in_stock += amount\n  if self.in_stock > self.storage_size:\n   self.in_stock = self.storage_size\n  return self.in_stock - originally\n def produce(self, raw_materials):\n  to_be_produced = self.in_stock // raw_materials\n  self.produced += to_be_produced\n  self.in_stock -= to_be_produced * raw_materials\n  return to_be_produced\n def get_production_count(self):\n  return self.produced",
    code : "", message : "Output", variables : { __output : '42\n15\n57\n' } } ], showTestcase : true };

Parsons.exercises['combo_python_class2'] = {
  "description" : "<p>We will continue with the <code>Factory</code> class. The factory requires raw materials to produce products. However, it can store only a limited amount of raw materials in its storage area. The factory knows how much raw materials are available, what is the maximum amount of raw materials that can be stored and how many products have been made. When the production process starts, the factory will always produce that many products that is possible to make with the current amount of the raw materials and the factory reports the number of products that have just been finished. Construct now the class and the required methods.</p><p>Construct the initialization method <code>__init__</code> that initializes the new factory so that the storage is originally empty and no products have been produced. The size of the storage will be passed as a parameter. The method <code>add_raw_materials</code> adds raw materials in the storage as much as possible and returns the amount of added raw materials. You cannot add more raw materials than there is space left. The method <code>produce</code> produces as many products that is possible with the current amount of raw materials in the storage. The amount of required raw materials per product will be passed as a parameter. The method will update factory's state by decreasing the amount of raw materials and increasing the number of produced products. The method <code>get_production_count</code> just returns the total number of produced products.</p>",
  "initial" : [
      {
        "code" : "class Factory:",
        "steps" : [ [ "setLine_", "2" ], [ "createParameterVariables", [ "self", "self", "storage_size" ] ],
            [ "assignParameters", [ "self", "self", "storage_size" ] ] ] },
      { "code" : "  def __init__(self, storage_size):",
        "steps" : [ [ "addValueFromVariable", "storage_size", "0" ], [ "assignField", "storage_size", "@self" ] ] },
      { "code" : "    self.storage_size = storage_size",
        "steps" : [ [ "addValue", "0", "0", "int" ], [ "assignField", "in_stock", "@self" ] ] },
      { "code" : "    self.in_stock = 0",
        "steps" : [ [ "addValue", "0", "0", "int" ], [ "assignField", "produced", "@self" ] ] },
      {
        "code" : "    self.produced = 0",
        "steps" : [ [ "addValueFromVariable", "self", "0" ], [ "returnValue" ], [ "_label", "l2" ],
            [ "setLine_", "6" ], [ "createParameterVariables", [ "self", "self", "amount" ] ],
            [ "assignParameters", [ "self", "self", "amount" ] ] ] },
      { "code" : "  def add_raw_materials(self, amount):",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "assign", "originally" ] ] },
      {
        "code" : "    originally = self.in_stock",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "amount", "2" ], [ "evaluateOperator", "1" ],
            [ "assignField", "in_stock", "@self" ] ] },
      {
        "code" : "    self.in_stock += amount",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "addOperator", ">", "1" ],
            [ "addValueFromField", "storage_size", "@self", "2" ], [ "evaluateOperator", "1" ],
            [ "_conditionalJump", "@l3", "@l4" ], [ "_label", "l3" ] ] },
      {
        "code" : "    if self.in_stock > self.storage_size:",
        "steps" : [ [ "addValueFromField", "storage_size", "@self", "0" ],
            [ "assignField", "in_stock", "@self" ], [ "_label", "l4" ] ] },
      {
        "code" : "      self.in_stock = self.storage_size",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "addOperator", "-", "1" ],
            [ "addValueFromVariable", "originally", "2" ], [ "evaluateOperator", "1" ], [ "returnValue" ],
            [ "_label", "l6" ], [ "setLine_", "12" ],
            [ "createParameterVariables", [ "self", "self", "raw_materials" ] ],
            [ "assignParameters", [ "self", "self", "raw_materials" ] ] ] },
      {
        "code" : "    return self.in_stock - originally",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "addOperator", "/", "1" ],
            [ "addValueFromVariable", "raw_materials", "2" ], [ "evaluateOperator", "1" ], [ "assign", "to_be_produced" ] ] },
      {
        "code" : "  def produce(self, raw_materials):",
        "steps" : [ [ "addValueFromField", "produced", "@self", "0" ], [ "addOperator", "+", "1" ],
            [ "addValueFromVariable", "to_be_produced", "2" ], [ "evaluateOperator", "1" ],
            [ "assignField", "produced", "@self" ] ] },
      {
        "code" : "    to_be_produced = self.in_stock \/\/ raw_materials",
        "steps" : [ [ "addValueFromField", "in_stock", "@self", "0" ], [ "addOperator", "-", "1" ],
            [ "addValueFromVariable", "to_be_produced", "2" ], [ "addOperator", "*", "3" ],
            [ "addValueFromVariable", "raw_materials", "4" ], [ "evaluateOperator", "3" ], [ "evaluateOperator", "1" ],
            [ "assignField", "in_stock", "@self" ] ] },
      {
        "code" : "    self.produced += to_be_produced",
        "steps" : [ [ "addValueFromVariable", "to_be_produced", "0" ], [ "returnValue" ], [ "_label", "l7" ],
            [ "setLine_", "17" ], [ "createParameterVariables", [ "self", "self" ] ],
            [ "assignParameters", [ "self", "self" ] ] ] },
      { "code" : "    self.in_stock -= to_be_produced * raw_materials",
        "steps" : [ [ "addValueFromField", "produced", "@self", "0" ], [ "returnValue" ] ] },
      { "code" : "  def get_production_count(self):", "steps" : [] },
      { "code" : "  return to_be_produced", "steps" : [] }, { "code" : "    return self.produced", "steps" : [] } ],
  "init" : [ [ "createFrame" ], [ "createClass", "Factory" ],
      [ "createFunction", "__init__", "__init__(self, storage_size)", "2", "@l1", "Factory" ],
      [ "createFunction", "add_raw_materials", "add_raw_materials(self, amount)", "2", "@l2", "Factory" ],
      [ "createOperator", "+", "lr" ], [ "createOperator", ">", "lr" ], [ "createOperator", "-", "lr" ],
      [ "createFunction", "produce", "produce(self, raw_materials)", "2", "@l6", "Factory" ],
      [ "createOperator", "/", "lr" ], [ "createOperator", "*", "lr" ],
      [ "createFunction", "get_production_count", "get_production_count(self)", "1", "@l7", "Factory" ],
      [ "createClass", "str" ], [ "createFunction", "split", "split(separator)", "1", "-1", "str" ],
      [ "createFunction", "intt", "intt(value)", "1", "-1" ], [ "createFunction", "print", "print(value)", "-1", "-1" ] ],
  "vartests" : [ {
    initcode : "",
    code : "factory = Factory(300)\navailable = 400\nadded = factory.add_raw_materials(available)\nover = available - added\nprint factory.produce(7)\nfactory.add_raw_materials(over)\nprint factory.produce(7)\nprint factory.get_production_count()",
    message : "Testing", variables : { __output : '42\n15\n57\n' } } ] };

Parsons.initializeExercise = function (id) {
  var exercise = Parsons.exercises[id];
  var descr = $('<div></div>').html(exercise.description);
  $('#exercise-content').prepend(descr);
  descr.after($('<hr>'));

  $(
    '<div id="sortableTrash" class="sortable-code"></div><div id="sortable" class="sortable-code"></div><div style="clear:both;"></div><div><a href="#" id="feedbackLink" class="btn">Ask feedback</a><div style="display: inline-block; margin-left: 10px; font-family: sans-serif; font-size: 15px;" id="textual-feedback"></div></div><div id="testcase-feedback"></div><div id="jsvee-container" style="padding: 20px;"></div>')
      .appendTo('#exercise-content');

  var opts = { 'sortableId' : 'sortable', 'trashId' : 'sortableTrash', 'max_wrong_lines' : 1, 'python3' : true,
    'lang' : 'en' };

  if (exercise.vartests) {
    opts.vartests = exercise.vartests;
  }

  var parson = new ParsonsWidget(opts);

  var initialLines = [];
  var stepsByLine = [];
  for ( var i = 0; i < exercise.initial.length; i++) {
    initialLines.push(exercise.initial[i].code);
    stepsByLine.push(exercise.initial[i].steps);
  }

  parson.init(initialLines.join('\n'));
  parson.shuffleLines();

  $("#feedbackLink")
      .click(
        function (event) {
          event.preventDefault();
          $('#jsvee-container').css('min-height', $('#jsvee-container').outerHeight(true) + 'px');
          $('#jsvee-container').children().remove();
          $('#textual-feedback').text('');
          var errorsFound = false;

          if ($('#sortable li').length == 0) {
            $('#textual-feedback').text('You have not dragged any code fragments into the construction area.').css('color',
              '#770000');
            alert("You have not dragged any code fragments into the construction area.");
            errorsFound = true;
          }

          $('#sortable li .jsparson-toggle').each(
            function (index) {
              if ($(this).text() === '' && !errorsFound) {
                $('#textual-feedback').text(
                  'There is at least one code fragment where you have not selected the correct element inside the fragment.').css('color',
                  '#770000');
                alert("There is at least one code fragment where you have not selected the correct element inside the fragment.");
                errorsFound = true;
              }
            });

          var success = false;
          var fb = null;
          if (!errorsFound) {
            fb = parson.getFeedback();
            success = fb.success;
          }

          var lines = parson.getModifiedCode("#ul-" + parson.options.sortableId);
          var formattedLines = [];
          for ( var i = 0; i < lines.length; i++) {
            var tmp = [];
            tmp[lines[i].indent] = '';
            formattedLines.push(tmp.join('  ') + $('#' + lines[i].id).text());
          }

          var logItem = { type : 'submit', timestamp : Date.now(), code : formattedLines.join('\n'), success : success,
            animationLog : [] };
          if (window.exerciseLog && window.exerciseLog.log) {
            window.exerciseLog.log.push(logItem);
            window.exerciseLog.current++;
          }

          if (errorsFound) {
            return;
          }

          // console.log(parson.getModifiedCode("#ul-" +
          // parson.options.sortableId));

          // XXX
          console.log(fb);

          $('#testcase-feedback').children().remove();
          var passedTests = [];
          var firstFailed = true;
          var testInitSteps = [];
          $('<div>' + fb.feedback + '</div>').find('.testcase').each(function (i) {
            if ($(this).hasClass('pass')) {
              passedTests.push(true);
            } else {
              passedTests.push(false);
              if (firstFailed && exercise.showTestcase) {
                $(this).appendTo('#testcase-feedback');
                firstFailed = false;
                testInitSteps = (exercise.vartests[i].initSteps || []).slice(0);
              }
            }
          });

          // XXX
          // console.log(passedTests);

          if (fb.feedback.indexOf('ParseError') > -1) {
            $('#textual-feedback')
                .text(
                  'Your solution is incorrectly indented or it is not valid Python code.')
                .css('color', '#770000');
            alert("Your solution is incorrectly indented or it is not valid Python code.\n\nPlease check that the first code fragment is on the left side of the construction area and that the code is valid.");
            return;
          }

          var animationText = '';
          if (exercise.showAnimation) {
            animationText = ' You can use the animation below to see how your solution works.';
          }

          var testcaseText = '';
          if (exercise.showTestcase && !fb.success) {
            testcaseText = ' You can use the feedback below to get hints how to modify your solution.';
          }

          if (exercise.showTestcase && exercise.showAnimation && !fb.success) {
            testcaseText = '';
            animationText = ' You can use the feedback below to get hints how to modify your solution. You can also use the animation below the feedback to see how your solution works.';
          }

          if (fb.success) {
            $('#textual-feedback').text('Great, you solved the exercise!' + animationText).css('color', '#007700');
            
            if (window.ACOS && window.ACOS.sendEvent) {
                ACOS.sendEvent('grade', {'points': 1, 'max_points': 1, 'status': 'graded', 'feedback': 'Problem solved successfully.'});
            }
            
            if (window.submitExerciseLog) {
              window.submitExerciseLog();
            }
          } else {
            $('#textual-feedback').text('Your solution is not correct.' + testcaseText + animationText).css('color',
              '#770000');
            if (window.submitExerciseLog) {
              window.submitExerciseLog();
            }
          }

          $('<div></div>').attr('id', 'jsvee-animation').addClass('jsvee-animation').appendTo('#jsvee-container');

          // $('#sortablecodeline0').data('jsvee', [['createVariable', 'a'],
          // ['addValue', '$$toggle$$0', '0', 'int'], ['assign', 'a']]);

          for ( var i = 0; i < exercise.initial.length; i++) {
            var steps = [];
            for ( var j = 0; j < stepsByLine[i].length; j++) {
              steps.push(stepsByLine[i][j].slice());
            }
            $('#sortablecodeline' + i).data('jsvee', steps);
          }

          var steps = [];
          var initSteps = [];

          for ( var i = 0; i < exercise.init.length; i++) {
            initSteps.push(exercise.init[i].slice());
          }

          for ( var i = 0; i < testInitSteps.length; i++) {
            initSteps.push(testInitSteps[i].slice());
          }

          var originalSteps = [];
          var labelCounter = 0;

          var findSameIndent = function (start) {
            var lines = parson.getModifiedCode("#ul-" + parson.options.sortableId);
            for ( var i = start + 1; i < lines.length; i++) {
              if (lines[i].indent <= lines[start].indent) {
                return i;
              }
            }
            return lines.length;
          };

          var findLastNextIndent = function (start) {
            var lines = parson.getModifiedCode("#ul-" + parson.options.sortableId);
            for ( var i = start + 1; i < lines.length; i++) {
              if (lines[i].indent <= lines[start].indent) {
                return i;
              }
            }
            return lines.length;
          };

          var findNextIndent = function (start) {
            var lines = parson.getModifiedCode("#ul-" + parson.options.sortableId);
            for ( var i = start + 1; i < lines.length; i++) {
              if (lines[i].indent >= lines[start].indent + 1) {
                return i;
              }
            }
            return -1;
          };

          var findEndIf = function (start) {
            var lines = parson.getModifiedCode("#ul-" + parson.options.sortableId);
            for ( var i = start + 1; i < lines.length; i++) {
              if (lines[i].indent <= lines[start].indent) {
                var elifR = /^elif(.*):/;
                var elseR = /^else:/;
                if (!elifR.test(lines[i].code) && !elseR.test(lines[i].code)) {
                  return i;
                }

              }
            }
            return lines.length;
          };

          $('#sortable li').each(function (index) {
            var actions = ($(this).data('jsvee') || []).slice();
            if (index !== 0) {
              actions.unshift([ 'setLine', index + 1 ]);
            }
            originalSteps.push(actions);
          });
          originalSteps.push([]);

          $('#sortable li')
              .each(
                function (index) {

                  var elem = this;
                  var handleLine = function (name, array) {
                    var currentLine = (name === 'jsvee') ? originalSteps[index] : ($(elem).data(name) || []).slice();
                    for ( var i = 0; i < currentLine.length; i++) {

                      for ( var j = 0; j < currentLine[i].length; j++) {
                        if ((currentLine[i][j] + '').slice(0, 10) === '$$toggle$$') {
                          currentLine[i][j] = $(elem).find('.jsparson-toggle').eq(+currentLine[i][j].split("$$")[2])
                              .text();
                        } else if ((currentLine[i][j] + '').slice(0, 11) === '$$toggle-$$') {
                          currentLine[i][j] = $(elem).find('.jsparson-toggle').eq(+currentLine[i][j].split("$$")[2])
                              .text() - 1;
                        } else if (currentLine[i][j] === '$$nextIndent') {
                          var next = findNextIndent(index);
                          currentLine[i][j] = '@l' + (++labelCounter);
                          originalSteps[next].unshift([ '_label', 'l' + labelCounter ]);
                        } else if (currentLine[i][j] === '$$nextSame') {
                          var same = findSameIndent(index);
                          currentLine[i][j] = '@l' + (++labelCounter);
                          originalSteps[same].unshift([ '_label', 'l' + labelCounter ]);
                        } else if (currentLine[i][j] === '$$line') {
                          currentLine[i][j] = (index + 1) + '';
                        } else if (currentLine[i][j] === '$$endIf') {
                          var same = findEndIf(index);
                          currentLine[i][j] = '@l' + (++labelCounter);
                          originalSteps[same].unshift([ '_label', 'l' + labelCounter ]);
                        }

                        if (j === currentLine[i].length - 1 && currentLine[i][0] === '$$lastNextIndent') {
                          var next = findLastNextIndent(index);
                          currentLine[i][0] = '_nop';
                          originalSteps[next].unshift(currentLine[i].slice(1));
                        }

                      }
                    }
                    Array.prototype.push.apply(array, currentLine);
                  };

                  handleLine('jsvee', steps);
                  handleLine('jsvee-init', initSteps);

                });

          Array.prototype.push.apply(steps, originalSteps[originalSteps.length - 1]);

          // XXX
          console.log(steps);

          if (exercise.showAnimation) {
            JSVEE.animations.parsons = {
              steps : steps,
              lines : formattedLines,
              init : initSteps,
              'settings' : { 'code' : 'left', 'stackHeight' : exercise.animationStackHeight || 150,
                'width' : exercise.animationWidth || 800 } };
            new JSVEE.ui("parsons", $('#jsvee-animation').first());
            $('#jsvee-container').css('min-height', '0');
          }
        });

};

window.Parsons = Parsons;