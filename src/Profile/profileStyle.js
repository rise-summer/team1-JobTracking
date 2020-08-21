import styled from 'styled-components';

export const PostWrapper = styled.div`
    padding:50px 50px 50px 50px;
    height: 100px
    width:200px
    border: 100px 100px 100px 100px;
`; 


export const Addition = styled.div`
    padding-top:20px;

    .enter{
        float:left;
        padding-right:200px;
    }
    .search{
        float:right;
        padding-right:100px;
        width: 200px
    }
    .archive{
        float:right;
        padding-right:100px;
    }
    
    .position{  
      /*color: white;*/   
      background: silver;
      padding: 5px;  
      border: 1px solid #ccc;  
      border-radius: 10px;  
      box-sizing: border-box; /* Make sure that padding and width stays in place */
      margin-top: 0px; /* Add a top margin */
      margin-bottom: 10px; /* Bottom margin */
      width: 60%;
    }

    .info{
        /*color: white;*/   
        background: silver;
        padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 10px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 0px; /* Add a top margin */
        margin-bottom: 10px; /* Bottom margin */
        width: 60%;
    
      }
    
    .editIcon{
        float:left;
        height:50px;
        position:absolute;
        top:10px;
        right:60px;
        height:25px;
        
    }

    .slidecontainer {
        width: 95%;
    }

    .hash{
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin-left: -15px;   
    }
    
`; 
 

 

 