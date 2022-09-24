const questions = [
{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javascript',
    'd': 'java',
    'correct': 'a'
},
{
    'que': 'In which type of CSS  is more secure ?',
    'a': 'Inline',
    'b': 'Internal',
    'c': 'External',
    'd': 'None of these',
    'correct': 'a',
},
{
    'que': 'which of the following is a style sheet?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javascript',
    'd': 'java',
    'correct': 'b'
},
{
    'que': 'Select correct syntax for insert image in CSS ?',
    'a': 'background-img:src("pm.gif");',
    'b': 'background-image:url("pm.gif");',
    'c': '1 and 2',
    'd': 'none of these',
    'correct': 'b',
},
{
    'que': 'which of the following is a scriptig language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javascript',
    'd': 'java',
    'correct': 'c'
},
{
    'que': 'which tag are void element?',
    'a': '<tital>',
    'b': '<img>',
    'c': '<script>',
    'd': '<link>',
    'correct': 'b',
},
{
    'que': 'which of the following is a object oriented language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javascript',
    'd': 'java',
    'correct': 'd',
},
{
    'que': 'Find size in pixel of <h2> heading tag?',
    'a': '22px',
    'b': '16px',
    'c': '24',
    'd': '18.72px',
    'correct': 'c',
},
]
let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
      return endQuiz()
    }
    reset();
  const data = questions[index]
  console.log(data)
  quesBox.innerText = ` ${index+1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
  
}
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer()

    if(ans === data.correct){
      right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer
    optionInputs.forEach(
        (input) => {
           if (input.checked){
               answer = input.value;
           }
        }
    )
    return answer;
}
   const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
   }
     const endQuiz =() =>{
         document.getElementById("box").innerHTML = `
         <h3>Thank you for Quiz</h3>
         <h2> ${right} / ${total} are correct</h2>
         `
     }
loadQuestion();