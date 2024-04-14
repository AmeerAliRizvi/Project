let score =   JSON.parse(localStorage.getItem('score'));
        if(!score){
            score = {
                Win: 0,
                Loss: 0,
                Tie: 0

            }
        }
        updateScore();
        function playerMove(Move){
            const compMove = randomMove();
            document.querySelector('.img1').src = `${Move}.png`;
            document.querySelector('.img2').src = `${compMove}.png`;
            document.querySelector('.comp').innerHTML = compMove;
            document.querySelector('.move').innerHTML = Move;
            let result = '';
            if(Move === 'Rock'){
                    if(compMove === 'Rock'){
                    result = 'Tie!';
                }
                else if(compMove === 'Paper'){
                    result = 'You Loose!';
                }
                else if(compMove === 'Scissor'){
                    result = 'You Win!';
                }
                
            }
            else if(Move === 'Paper'){
                if(compMove === 'Rock'){
                    result = 'You Win!';
                }
                else if(compMove === 'Paper'){
                    result = 'Tie!';
                }
                else if(compMove === 'Scissor'){
                    result = 'You Loose!';
                }
            }
            else if(Move === 'Scissor'){
                if(compMove === 'Rock'){
                    result = 'You Loose!';
                }
                else if(compMove === 'Paper'){
                    result = 'You Win!';
                }
                else if(compMove === 'Scissor'){
                    result = 'Tie!';
                }
            }
            document.querySelector('.result').innerHTML = `${result}`;
            if(result === 'You Win!' ){
                score.Win += 1;
            }else if(result === 'You Loose!'){
                score.Loss += 1;
            }else if(result === 'Tie!'){
                score.Tie += 1;
            }
            updateScore();
    
            localStorage.setItem('score',JSON.stringify(score));
    }
    function updateScore(){
        document.querySelector('.score').innerHTML = `Wins: ${score.Win}, Loos: ${score.Loss}, Ties: ${score.Tie}`
    }
    function randomMove (){
     const randomNumber = Math.random();
    let compMove = ''
    if(randomNumber > 0 && randomNumber < 1/3){
        compMove = 'Rock';
    } else if(randomNumber > 1/3 && randomNumber < 2/3){
        compMove = 'Paper';
    } else if (randomNumber > 2/3 && randomNumber < 1){
        compMove = 'Scissor';
    }
    return compMove;
    }