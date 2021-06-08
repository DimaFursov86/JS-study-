function findLongestWord(string) {
    // Change code below this line
    
    
    let wordSplit = string.split(" ");
    let zeroIndex = wordSplit[0];
    
    for (const words of wordSplit) {
        
        if (zeroIndex.length < words.length) {
            zeroIndex = words;
        }
    }
    // Change code above this line
    return zeroIndex;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


//   Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение