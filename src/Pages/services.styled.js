import styled from "styled-components";

export const Sev = styled.main`


img{
    margin: 0px;
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
.services{
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
    height: 180px;
    padding: 10px;
}
.description p{
    font-weight: 500;
    color: #2f4f30;
}
.more-info{
    display: flex;
    justify-content: center;
}
.ext-a{
    background-color: #2f4f42;
    color: #fff;
    padding: 7px 14px;
    border-radius: 2px;
    text-decoration: none;
}
.guide{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
   
}
.guide div{
    color: #2f4f42;
    font-weight: 500;
    text-align: center;
    background-color: rgba(0, 0, 255, .2);
    padding: 10px
    
}
.att{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    
}
.att img{
   
    height: 350px;
}

@media screen and (max-width: 550px) {
   .att img{

    height: auto;
    width: 90%;
   }
}

`