import React,{useState} from 'react';
import './index.css'; 


const ExercicioUm= props=> {

  

    const[textoInicial,textoFinal] = useState("");
    const[lista,listaFinal] = useState([]);

 
    function palavras (event){
      const palavraInserida = event.target.value
               textoFinal(palavraInserida);
       }
    
       function listaDePalavras(event){
        event.preventDefault();
         if(!textoInicial){
          return
         }
         
      listaFinal([...lista,textoInicial]);
      

     }
 
    function deletaLista(index) {
      const deleta = Array.from(lista);
      deleta.splice(index, 1);
      textoFinal();
      listaFinal(deleta);
     
  
    }
    function editaLista(target,index) {
      const edita = Array.from(lista);
      edita.splice(index,1,target.value);  
      listaFinal(edita);
    }
 /*
*Função Css
*/
const styleTexto ={
    blackgroundcolor:'blue',
    color:'blue',
    cursor:'pointer',
    font:'inherit',
    padding:'8px',
    border:'1'
}


/*
*Função que exibe a cor usar na outro exercicio
*
*/
    let corLista;
   if(textoInicial==="estudar" || textoInicial==="ler") {
    corLista= styleTexto;
    }
   
  
    return (
      <>
          <div>
          <div>
          <form onSubmit={listaDePalavras}>
            <input type="text"  placeholder="Insira a palavra a ser contada" onChange={palavras} value={textoInicial}/>
            <button  type="submit">Adicionar</button>
          </form>
          </div>
          <div >
          <ul className="tirarLista">
         {lista.map((item,index)=>(
          <>
            <li key={index} style={corLista}><div ><form><textarea value={item}   contentEditable="true"></textarea></form></div>
            <button type="submit"  onClick={()=>deletaLista(index)} autoFocus>Excluir</button><button type="submit" onClick={(event)=>editaLista(event,index)}  autoFocus>Editar</button> 
          </li>
           </>
          ))}
         </ul>
          </div>
          </div>
       
      </>
         
        );
      
      
    } 
  

  
  export default ExercicioUm;