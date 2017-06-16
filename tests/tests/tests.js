describe ("module tests", function() {    
    describe ("getExample tests", function() {
        it ("getExample('+', 1) return '1 + 1'", function() {
            assert.equal("1 + 1", getExample('+', 1));
        });

        it ("getExample() return String", function() {
            assert.isString(getExample("+", 10));
        });

        it ("Error if first argument is not string", function(){
            assert.throws(function() {getExample(1, 1)}, Error);
        });
        
        it ('Error if first argument are not in ["+", "-", "*", "/"]', function(){
            assert.throws(function(){getExample("&", 1)}, Error);
        });

        it ("Error if second argument is not number", function() {
            assert.throws(function() {getExample("+", "1")}, Error);
        });
    });
    
    describe("getAnswer tests", function() {
        it ("getAnswer('2 + 3') return 5", function() {
            assert.equal(5, getAnswer('2 + 3'));
        });

        it ("getAnswer('10 * 10') return 100", function() {
            assert.equal(100, getAnswer('10 * 10'));
        });

        it ("getAnswer('10 - 10') return 0", function() {
            assert.equal(0, getAnswer('10 - 10'));
        });

        it ("getAnswer('12 / 4') return 3", function() {
            assert.equal(3, getAnswer('12 / 4'));
        });

        it ("getAnswer() return Number", function() {
            assert.isNumber(getAnswer('2 + 2'));
        });

        it ("Error if argument is not string", function() {
            assert.throws(function() {getAnswer([2,"+", 2])}, Error);
        });

        it ("Error if arguments format is not '<number> <operator> <number>'", function() {
            assert.throws(function() {getAnswer("2+2")}, Error);
        });

        it ("Error if arguments format is not '<number> <operator> <number>'", function() {
            assert.throws(function() {getAnswer("a + 2")}, Error);
        })
    });

    describe ("getOperator tests", function() {
        var operators = [["+"], ["-"], ["*"], ["/"]];

        operators.forEach(function(operator){
            it ("getOperator('" + operator + "') return '"+ operator +"'", function() {
                assert.equal(operator[0], getOperator(operator));
            });           
        });

        it ('getOperator() return string', function(){
            assert.isString(getOperator(["+", "-"]));
        });

        it ("Error if argument is not array", function() {
            assert.throws(function(){getOperator(1)}, Error);
        });

        it ("Error if array length > 4", function(){
            assert.throws(function(){getOperator([1, 2, 3, 4, 5])}, Error);
        });

        it ('Error if arguments item are not in ["+", "-", "*", "/"]', function(){
            assert.throws(function(){getOperator(["0", "1"])}, Error);
        });        
    });
});