import styled from "styled-components";

export const Abo = styled.div`
h1{
    text-align: center;
    color: #05a;
}
.intro{
    display: flex;
    justify-content: center;
}
.intro img{
    width: 500px;
}
.about{
    padding: 10px;
    display: flex;
    justify-content: center;

}
p{
    max-width:  600px;
    font-weight: 500;
    color: #2f4f4f;
}
strong{
    color: #2f4f30;
}
@media screen and (max-width: 570px){
    .intro img{
       width: 90%;
    }
}
`