*{
    box-sizing: border-box;
}

body{
    background-color: #0095dd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin:0;
    font-family: Ariel, Helvetica, sans-serif;
}

canvas{
    background: #f0f0f0;
    display: block;
    border-radius: 5px;
}

h1{
    font-size: 45px;
    color: #ffffff;
}

.btn{
    cursor:pointer;
    border: 0;
    padding: 10px 20px;
    background: #000000;
    color: #ffffff;
    border-radius: 5px;
}

.brn:hover{
    background: #222222;
}

.btn:active{
    transform: scale(0.98);
}

.rules-btn{
    position: absolute;
    top: 30px;
    left: 30px;
}

.rules{
    position: absolute;
    top: 0;
    left: 0;
    background: #333333;
    color: #ffffff;
    min-height: 100vh;
    width: 400px;
    padding: 20px;
    line-height: 1.5;
    transform: translateX(-500px);
    transition: transform 1s ease-in-out;
}

.rule.show{
    transform: translateX(0);
}
