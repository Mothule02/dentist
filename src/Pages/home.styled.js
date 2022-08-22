import styled from "styled-components";

export const Hme = styled.main`

.intro{
   
    background-color: aliceblue;
    margin-bottom: 50px;
    display: flex;
    width: 100%;
}
img{
    margin: 0px;
}
.intro div{
    margin-right: 15px;
    
}
.intro::before{
    content: 'Before';
    color: aliceblue;
    background-color: aliceblue;
    
}
.card{
    width: 250px;
    height: 300px;
    border: 1px solid #2f4f4f;
    border-radius: 5px;
    
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
}
.services-half{
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    
}

.card-head{
    border-bottom: 1px solid #2f4f42;
    height: 60px;
    width: 100% ;
    display: flex;
    justify-content: space-around;
}
.card-head h1 {
    margin: 0;
    font-weight: 500;
    font-size: 1em;
    align-self: center;
    color: #2f4f4f;
   
}

.description{
    padding: 10px;
}
.description p{
    color: #2f4f4f;
}

p{
    color: #06f;
    font-weight: 500;
}
strong{
    color: darkgoldenrod;
}
.more-s{
    display: flex;
    justify-content: center;
    margin: 30px 10px;
}
.a-s{
    padding: 7px 14px;
    background-color: #06f;
    color: #fff;
    text-decoration: none;
    border-radius: 2px;
}
.operating-hours{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    
}
.operating-hours div {
    margin-top: 20px;
    padding: 10px;
    background-color: rgba(0, 0, 255, .2);
    border-radius: 5px;
    width: fit-content;
    color: #2f4f42;
    font-weight: 500;
    
}
.operating-hours div h3{
    text-align: center;
    margin-top: 0;
    margin-bottom: 0px;
}
.doc{
    margin-right: 20px;
    max-width: 400px;
    min-width: 200px;
    border-radius: 5px;
    
}
.wrap{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 700px;
    background-color: rgba(0, 0, 255, .2);
}
.desc{
    width: 250px;
    color: #2f4f42;
    font-weight: 500;
    
}
.display{
    margin: 10px;
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 726px) {
    .wrap{
        width: fit-content;
        display: flex;
        flex-direction: row;

    }
    .doc{
        
        margin-right: 0;
        margin-bottom: 15px;
    }
    .desc{
        
        width: 90%;
    }
}
@media screen and (max-width: 500px) {
    .wrap{
        flex-direction: row;
        width: auto;
    }
    .doc{
        width: 95%;
    }
}
`