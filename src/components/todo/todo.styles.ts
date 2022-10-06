import { css } from "lit";

export const todoStyles = css`
.text-center{
    text-align:center;
}

.todo-layout{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
}
form input,form button{
        font-size:1rem;
        padding:.5rem;
        border-radius:5px;
        border:1px solid #aaa;
    
}
 button{
    border:none;
    background:#ccc;
    min-width:100px;
    cursor:pointer;
}
form button:active{
    background:#bbbbbb;
}
.todo-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:1rem;
}
.todo-item{
    display:flex;
    gap:1rem;
    width:100%;
    margin-bottom:1rem;
}

`;