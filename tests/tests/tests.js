describe ("module tests", function() {    
    describe ("getExample tests", function() {
        it ("getExample('+', 1) return '1 + 1'", function() {
            assert.equal("1 + 1", mathgen.getExample('+', 1));
        });

        it ("getExample() return String", function() {
            assert.isString(mathgen.getExample("+", 10));
        });

        it ("Error if first argument is not string", function(){
            assert.throws(function() {mathgen.getExample(1, 1)}, Error);
        });
        
        it ('Error if first argument are not in ["+", "-", "*", "/"]', function(){
            assert.throws(function(){mathgen.getExample("&", 1)}, Error);
        });

        it ("Error if second argument is not number", function() {
            assert.throws(function() {mathgen.getExample("+", "1")}, Error);
        });
    });
    
    describe("getAnswer tests", function() {
        it ("getAnswer('2 + 3') return 5", function() {
            assert.equal(5, mathgen.getAnswer('2 + 3'));
        });

        it ("getAnswer('10 * 10') return 100", function() {
            assert.equal(100, mathgen.getAnswer('10 * 10'));
        });

        it ("getAnswer('10 - 10') return 0", function() {
            assert.equal(0, mathgen.getAnswer('10 - 10'));
        });

        it ("getAnswer('12 / 4') return 3", function() {
            assert.equal(3, mathgen.getAnswer('12 / 4'));
        });

        it ("getAnswer() return Number", function() {
            assert.isNumber(mathgen.getAnswer('2 + 2'));
        });

        it ("Error if argument is not string", function() {
            assert.throws(function() {mathgen.getAnswer([2,"+", 2])}, Error);
        });

        it ("Error if arguments format is not '<number> <operator> <number>'", function() {
            assert.throws(function() {mathgen.getAnswer("2+2")}, Error);
        });

        it ("Error if arguments format is not '<number> <operator> <number>'", function() {
            assert.throws(function() {mathgen.getAnswer("a + 2")}, Error);
        })
    });

    describe ("getOperator tests", function() {
        var operators = [["+"], ["-"], ["*"], ["/"]];

        operators.forEach(function(operator){
            it ("getOperator('" + operator + "') return '"+ operator +"'", function() {
                assert.equal(operator[0], mathgen.getOperator(operator));
            });           
        });

        it ('getOperator() return string', function(){
            assert.isString(mathgen.getOperator(["+", "-"]));
        });

        it ("Error if argument is not array", function() {
            assert.throws(function(){mathgen.getOperator(1)}, Error);
        });

        it ("Error if array length > 4", function(){
            assert.throws(function(){mathgen.getOperator([1, 2, 3, 4, 5])}, Error);
        });

        it ('Error if arguments item are not in ["+", "-", "*", "/"]', function(){
            assert.throws(function(){mathgen.getOperator(["0", "1"])}, Error);
        });        
    });
});