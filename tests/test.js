const expect = require('chai').expect;
const should = require('chai').should;
const aritGeo = require('../src/main.js').aritGeo

describe("Determine the sequence of an array of numbers:", () => {

    describe("Case for an empty array", () => {
        it("should return 0 for an empty array", () => {
            expect(aritGeo([])).to.be.equal("0");
        });
    });
    
    describe("Case for an arithmetic sequence", () => {
        it("should return `Arithmetic` for [2, 4, 6, 8, 10]", () => {
            expect(aritGeo([2, 4, 6, 8, 10])).to.be.equal('Arithmetic');
        });
        
        it("should return `Arithmetic` for [2, 4, 6, 8, 10, 20]", () => {
            expect(aritGeo([2, 4, 6, 8, 10, 20])).to.be.equal('Arithmetic');
        });

        it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", () => {
            expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).to.be.equal('Arithmetic');
        });
        
        it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", () => {
            expect(aritGeo([15, 10, 5, 0, -5, -10])).to.be.equal('Arithmetic');
        });

        it("should return `Arithmetic` for [20, 15, 10, 5, 0, -5, -10]", () => {
            expect(aritGeo([20, 15, 10, 5, 0, -5, -10])).to.be.equal('Arithmetic');
        });
        
    });
    
    describe("Case for a geometric sequence", () => {
        it("should return `Geometric` for [2, 6, 18, 54, 162]", () => {
            expect(aritGeo([2, 6, 18, 54, 162])).to.be.equal('Geometric');
        });

        it("should return `Geometric` for [2, 6, 18, 54, 162]", () => {
            expect(aritGeo([2, 6, 18, 19, 54, 162])).to.be.equal('Geometric');
        });
        
        it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", () => {
            expect(aritGeo([0.5, 3.5, 24.5, 171.5])).to.be.equal('Geometric');
        });
        
        it("should return `Geometric` for [−128, 64, −32, 16, −8]", () => {
            expect(aritGeo([-128, 64, -32, 16, -8])).to.be.equal('Geometric');
        });

    });

    describe("Case for neither arithmetic nor geometric sequence", () => {
        it("should return -1 for [1, 2, 3, 5, 8]", () => {
            expect(aritGeo([1, 2, 3, 5, 8])).to.be.equal('-1');
        });

        it("should return -1 for [1, 3, 6, 10, 15]", function() {
            expect(aritGeo([1, 3, 6, 10, 15])).to.be.equal('-1');
        });

        it("should return -1 for [1, 8, 27, 64, 125]", function() {
            expect(aritGeo([1, 8, 27, 64, 125])).to.be.equal('-1');
        });

        it("should return -1 for [1, 2, 3, 5, 8, 11]", () => {
            expect(aritGeo([1, 2, 3, 5, 8, 11])).to.be.equal('-1');
        });

        it("should return -1 for [1, 2, 3, 5, 8, 11]", () => {
            expect(aritGeo([1, 3, 5, 8, 11, 15])).to.be.equal('-1');
        });
    });
});

