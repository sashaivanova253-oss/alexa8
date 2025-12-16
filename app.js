
function checkFirstLetters() {
    let word1 = document.getElementById("word1").value;
    let word2 = document.getElementById("word2").value;
    
    if (word1.length > 0 && word2.length > 0) {
        if (word1[0] === word2[0]) {
            document.getElementById("result").textContent = "Да, первые буквы совпадают";
        } else {
            document.getElementById("result").textContent = "Нет, первые буквы разные";
        }
    } else {
        document.getElementById("result").textContent = "Введите оба слова!";
    }
}