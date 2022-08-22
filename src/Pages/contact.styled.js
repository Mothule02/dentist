import styled from "styled-components";

export const Con = styled.div`

h3{
    margin-top: 15px;
    color: #2f4f4f;
    text-align: center;
    font-weight: 500;
}
.form{
    display: flex;
    justify-content: center;
   
}
.inputs{
    border: 2px solid rgba(0, 0, 0, .3);
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    display: flex;
}
.inputs div{
    margin: 5px;
}
input{
    
    width: 200px;
    border: 2px solid rgba(0, 0, 0, .3);
    padding: 7px 8px;
    font-weight: 500;
    color: #2f4f4f;
    border-radius: 2px;
}
textarea{
    resize: none;
    width: 200px;
    border: 2px solid rgba(0, 0, 0, .3);
    padding: 7px 8px;
    font-weight: 500;
    color: #2f4f4f;
    border-radius: 2px;
}
label{
    font-weight: 500;
    color: #2f4f30;
}
.submit{
    display: flex;
    justify-content: center;
}
.submit button{
    width: 200px;
    padding: 7px 14px;
    border: none;
    color: #ff4301;
    background-color: rgb(23, 26, 35);
    
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
}
.con-end{
    display: flex;
    justify-content: center;
}
.address{
    display: flex;
    flex-wrap: wrap;
}
.physical-add, .busines-hr{
    margin: 10px;
    font-weight: 500;
    color: #2f4f30;
}
.physical-add h3, .busines-hr h3{
    text-align: start;
}
.reachable{
    display: flex;
    justify-content: center;
    margin: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
}

.reachable div {
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
}
.reachable div a {
   align-self: center;
   font-weight: 500;
}
@media screen and (max-width: 510px) {
    .inputs{
        flex-direction: column;
    }
}
@media screen and (max-width: 450px) {
    .inputs{
        width: 95%;
    }
    .inputs input{
        width: 90%;
    }
    textarea{
        width: 90%;
    }
}

`