const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    const digits = String(num).split("").map(Number);
    const power = digits.length;
    return digits.reduce((acc, d) => acc + Math.pow(d, power), 0) === num;
};

const getDigitSum = (num) => String(num).split("").reduce((sum, d) => sum + Number(d), 0);

app.get("/api/classify-number", async (req, res) => {
    let { number } = req.query;
    
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number, error: true });
    }

    number = Number(number);
    const properties = [];
    if (isArmstrong(number)) properties.push("armstrong");
    properties.push(number % 2 === 0 ? "even" : "odd");

    try {
        const factRes = await axios.get(`http://numbersapi.com/${number}/math?json`);
        res.json({
            number,
            is_prime: isPrime(number),
            is_perfect: isPerfect(number),
            properties,
            digit_sum: getDigitSum(number),
            fun_fact: factRes.data.text,
        });
    } catch (error) {
        res.json({
            number,
            is_prime: isPrime(number),
            is_perfect: isPerfect(number),
            properties,
            digit_sum: getDigitSum(number),
            fun_fact: "No fun fact available.",
        });
    }
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
