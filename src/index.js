function toReadable(number) {
    let dozens;
    let words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    if(number >= 20) {
        dozens = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        };

        const numArr = String(number).split('');
        console.log(numArr);

        if (numArr.length === 2) {
            if(number % 10 === 0) {
                return dozens[number];
            } else {
                if(numArr[0] == 2) {
                    return `twenty ${words[numArr[1]]}`;
                }
                if(numArr[0] == 3) {
                    return `thirty ${words[numArr[1]]}`;
                }
                if(numArr[0] == 4) {
                    return `forty ${words[numArr[1]]}`;
                }
                if(numArr[0] ==  5) {
                    return `fifty ${words[numArr[1]]}`;
                }
                if(numArr[0] == 6) {
                    return `sixty ${words[numArr[1]]}`;
                }
                if(numArr[0] == 7) {
                    return `seventy ${words[numArr[1]]}`;
                }
                if(numArr[0] == 8) {
                    return `eighty ${words[numArr[1]]}`;
                }
                if(numArr[0] == 9) {
                    return `ninety ${words[numArr[1]]}`;
                }
            }
        } 

        if (numArr.length === 3) {
            if(number % 100 != 0) {
                if(number % 10 === 0) {
                    if (numArr[1] == 2) {
                        return `${words[numArr[0]]} hundred ${dozens[20]}`;
                    } if (numArr[1] == 3) {
                        return `${words[numArr[0]]} hundred ${dozens[30]}`;
                    } if (numArr[1] == 4) {
                                return `${words[numArr[0]]} hundred ${dozens[40]}`;
                    } if (numArr[1] == 5) {
                                return `${words[numArr[0]]} hundred ${dozens[50]}`;
                    } if (numArr[1] == 6) {
                                return `${words[numArr[0]]} hundred ${dozens[60]}`;
                    } if (numArr[1] == 7) {
                                return `${words[numArr[0]]} hundred ${dozens[70]}`;
                    } if (numArr[1] == 8) {
                                return `${words[numArr[0]]} hundred ${dozens[80]}`;
                    } if(numArr[1] == 9) {
                                return `${words[numArr[0]]} hundred ${dozens[90]}`;
                    } 
                }

                if (numArr[1] == 0) {
                        return `${words[numArr[0]]} hundred ${words[numArr[2]]}`;
                }
                if (numArr[1] == 1) {
                    if(numArr[2] == 0) {
                        return `${words[numArr[0]]}  hundred ${words[10]}`;
                    }
                    if(numArr[2] == 1) {
                        return `${words[numArr[0]]} hundred ${words[11]}`;
                    }
                    if(numArr[2] == 2) {
                        return `${words[numArr[0]]} hundred ${words[12]}`;
                    }
                    if(numArr[2] == 3) {
                        return `${words[numArr[0]]} hundred ${words[13]}`;
                    }
                    if(numArr[2] == 4) {
                        return `${words[numArr[0]]} hundred ${words[14]}`;
                    }
                    if(numArr[2] == 5) {
                        return `${words[numArr[0]]} hundred ${words[15]}`;
                    }
                    if(numArr[2] == 6) {
                        return `${words[numArr[0]]} hundred ${words[16]}`;
                    }
                    if(numArr[2] == 7) {
                        return `${words[numArr[0]]} hundred ${words[17]}`;
                    }
                    if(numArr[2] == 8) {
                        return `${words[numArr[0]]} hundred ${words[18]}`;
                    }
                    if(numArr[2] == 9) {
                        return `${words[numArr[0]]} hundred ${words[19]}`;
                    }
                }

                if(numArr[1] == 2) {
                    return `${words[numArr[0]]} hundred ${dozens[20]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 3) {
                    return `${words[numArr[0]]} hundred ${dozens[30]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 4) {
                    return `${words[numArr[0]]} hundred ${dozens[40]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 5) {
                    return `${words[numArr[0]]} hundred ${dozens[50]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 6) {
                    return `${words[numArr[0]]} hundred ${dozens[60]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 7) {
                    return `${words[numArr[0]]} hundred ${dozens[70]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 8) {
                    return `${words[numArr[0]]} hundred ${dozens[80]} ${words[numArr[2]]}`;
                }
                if(numArr[1] == 9) {
                    return `${words[numArr[0]]} hundred ${dozens[90]} ${words[numArr[2]]}`;
                }
            } else {
                return `${words[numArr[0]]} hundred`;
            }
    }
        } else {
            return `${words[number]}`;
        }
}
    


console.log(toReadable(804));
toReadable(153);
